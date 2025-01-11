import { useState } from "react";
import PropTypes from "prop-types";
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalCloseButton,
    ModalBody,
    Button,
    Input,
    FormControl,
    FormLabel,
    FormErrorMessage,
    useToast,
    Spinner,
    VStack,
    Divider,
    HStack,
    Box,
    Text,
} from "@chakra-ui/react";
import { AiOutlineGoogle } from "react-icons/ai";
import { auth } from "../../../firebase/firebaseConfig.js";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const LoginPopper = ({ isOpen, onClose }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [loadingGoogle, setLoadingGoogle] = useState(false);
    const [error, setError] = useState("");
    const [isLoginMode, setIsLoginMode] = useState(true);
    const toast = useToast();

    const toggleMode = () => {
        setIsLoginMode(!isLoginMode);
        setError("");
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError("");
        try {
            await signInWithEmailAndPassword(auth, email, password);
            toast({
                title: "Login erfolgreich",
                description: "Du bist jetzt angemeldet.",
                status: "success",
                duration: 3000,
                isClosable: true,
            });
            onClose();
        } catch (err) {
            setError("Login fehlgeschlagen. Bitte überprüfe deine Anmeldedaten.");
        } finally {
            setLoading(false);
        }
    };

    const handleSignup = async (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            setError("Passwörter stimmen nicht überein.");
            return;
        }
        setLoading(true);
        setError("");
        try {
            await createUserWithEmailAndPassword(auth, email, password);
            toast({
                title: "Registrierung erfolgreich",
                description: "Dein Konto wurde erstellt.",
                status: "success",
                duration: 3000,
                isClosable: true,
            });
            onClose();
        } catch (err) {
            setError("Registrierung fehlgeschlagen. Bitte versuche es erneut.");
        } finally {
            setLoading(false);
        }
    };

    const handleGoogleSignIn = async () => {
        const provider = new GoogleAuthProvider();
        setLoadingGoogle(true);
        setError("");
        try {
            await signInWithPopup(auth, provider);
            toast({
                title: "Login erfolgreich",
                description: "Du bist jetzt angemeldet mit Google.",
                status: "success",
                duration: 3000,
                isClosable: true,
            });
            onClose();
        } catch (err) {
            setError("Login mit Google fehlgeschlagen.");
        } finally {
            setLoadingGoogle(false);
        }
    };

    return (
        <Modal isOpen={isOpen} onClose={onClose} isCentered>
            <ModalOverlay />
            <ModalContent
                bg="#faf3dc"
                p={5}
                boxShadow="0 4px 6px rgba(0, 0, 0, 0.25)"
                borderRadius="20px"
                width={["90%", "500px"]}
            >
                <ModalHeader
                    fontSize="1.75rem"
                    fontWeight="bold"
                    color="gray.800"
                    textAlign="center"
                >
                    {isLoginMode ? "Anmelden" : "Registrieren"}
                </ModalHeader>
                <ModalCloseButton color="gray.600" />

                <ModalBody>
                    <form onSubmit={isLoginMode ? handleLogin : handleSignup}>
                        <VStack spacing={4}>
                            <FormControl isInvalid={!!error}>
                                <FormLabel fontWeight="600" color="black">
                                    Email
                                </FormLabel>
                                <Input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                    borderColor="rgba(0, 0, 0, 0.3)"
                                    _hover={{ borderColor: "black" }}
                                    _focus={{
                                        borderColor: "black",
                                        boxShadow: "0 0 0 1px black",
                                    }}
                                    _placeholder={{ color: "rgba(0, 0, 0, 0.3)" }}
                                    placeholder="Email"
                                    autoFocus
                                />
                            </FormControl>

                            <FormControl isInvalid={!!error}>
                                <FormLabel fontWeight="600" color="black">
                                    Passwort
                                </FormLabel>
                                <Input
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                    borderColor="rgba(0, 0, 0, 0.3)"
                                    _hover={{ borderColor: "black" }}
                                    _focus={{
                                        borderColor: "black",
                                        boxShadow: "0 0 0 1px black",
                                    }}
                                    _placeholder={{ color: "rgba(0, 0, 0, 0.3)" }}
                                    placeholder="Dein Passwort"
                                />
                            </FormControl>

                            {!isLoginMode && (
                                <FormControl isInvalid={!!error}>
                                    <FormLabel fontWeight="600" color="black">
                                        Passwort bestätigen
                                    </FormLabel>
                                    <Input
                                        type="password"
                                        value={confirmPassword}
                                        onChange={(e) => setConfirmPassword(e.target.value)}
                                        required
                                        borderColor="rgba(0, 0, 0, 0.3)"
                                        _hover={{ borderColor: "black" }}
                                        _focus={{
                                            borderColor: "black",
                                            boxShadow: "0 0 0 1px black",
                                        }}
                                        _placeholder={{ color: "rgba(0, 0, 0, 0.3)" }}
                                        placeholder="Passwort bestätigen"
                                    />
                                </FormControl>
                            )}

                            {error && <FormErrorMessage>{error}</FormErrorMessage>}

                            <Button
                                type="submit"
                                width="100%"
                                isLoading={loading}
                                spinner={<Spinner />}
                                bg="#333333"
                                color="white"
                                _hover={{ bg: "#3E3E3E" }}
                                transition="background-color 0.2s ease-in-out"
                            >
                                {isLoginMode ? "Anmelden" : "Registrieren"}
                            </Button>
                        </VStack>
                    </form>

                    <Divider my={4} borderColor="rgba(0, 0, 0, 0.3)" />


                    <HStack justifyContent="center" spacing={4}>
                        <Button
                            width="100%"
                            onClick={handleGoogleSignIn}
                            bg="#4285F4"
                            color="white"
                            _hover={{ bg: "#357AE8" }}
                            isLoading={loadingGoogle}
                            spinner={<Spinner />}
                        >
                            <HStack justify="center" spacing={2}>
                                <AiOutlineGoogle size={20} />
                                <Box>Mit Google anmelden</Box>
                            </HStack>
                        </Button>
                    </HStack>

                    <Text mt={4} textAlign="center" fontSize="sm" color="gray.600">
                        {isLoginMode ? "Noch kein Konto?" : "Bereits registriert?"}{" "}
                        <Button
                            variant="link"
                            color="blue.500"
                            onClick={toggleMode}
                        >
                            {isLoginMode ? "Registrieren" : "Anmelden"}
                        </Button>
                    </Text>
                </ModalBody>
            </ModalContent>
        </Modal>
    );
};

// PropTypes validation
LoginPopper.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
};

export default LoginPopper;
