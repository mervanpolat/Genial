import  { useState } from "react";
import PropTypes from "prop-types"; // Import PropTypes
import {
    PopoverContent,
    PopoverArrow,
    PopoverCloseButton,
    PopoverHeader,
    PopoverBody,
    Button,
    Input,
    FormControl,
    FormLabel,
    FormErrorMessage,
    useToast,
    Spinner,
} from "@chakra-ui/react";
import { auth } from "../../firebase/firebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";

const LoginPopper = ({ closePopper }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const toast = useToast();

    const handleLogin = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError("");
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            console.log("User signed in:", userCredential.user); // Log the signed-in user

            // Show success toast
            toast({
                title: "Login erfolgreich",
                description: "Du bist jetzt angemeldet.",
                status: "success",
                duration: 5000,   // Increased duration to 5 seconds
                isClosable: true,
            });

            // Delay closing the popper by 2 seconds to ensure the toast is visible
            setTimeout(() => {
                closePopper();
            }, 2000);
        } catch (err) {
            setError("Login fehlgeschlagen. Bitte überprüfe deine Anmeldedaten.");
            console.error("Login error:", err);  // Log the exact error
            toast({
                title: "Fehler beim Login",
                description: err.message,
                status: "error",
                duration: 5000,
                isClosable: true,
            });
        } finally {
            setLoading(false);
        }
    };




    return (
        <PopoverContent>
            <PopoverArrow />
            <PopoverCloseButton onClick={closePopper} />
            <PopoverHeader>Anmelden</PopoverHeader>
            <PopoverBody>
                <form onSubmit={handleLogin}>
                    <FormControl isInvalid={error}>
                        <FormLabel>Email</FormLabel>
                        <Input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </FormControl>

                    <FormControl mt={4}>
                        <FormLabel>Passwort</FormLabel>
                        <Input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                        {error && <FormErrorMessage>{error}</FormErrorMessage>}
                    </FormControl>

                    <Button
                        mt={4}
                        colorScheme="blue"
                        type="submit"
                        width="100%"  // or use w="full"
                        isLoading={loading}
                        spinner={<Spinner />}
                    >
                        Anmelden
                    </Button>

                </form>
            </PopoverBody>
        </PopoverContent>
    );
};

// PropTypes validation
LoginPopper.propTypes = {
    closePopper: PropTypes.func.isRequired, // closePopper is expected to be a required function
};

export default LoginPopper;
