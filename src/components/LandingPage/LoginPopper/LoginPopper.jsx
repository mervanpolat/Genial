// src/components/LoginPopper/LoginPopper.jsx

import React, { useState } from "react";
import PropTypes from "prop-types";
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalCloseButton,
    ModalBody,
    ModalFooter,
    Button,
    Input,
    FormControl,
    FormLabel,
    FormErrorMessage,
    useToast,
    Spinner,
    VStack,
} from "@chakra-ui/react";
import { auth } from "../../../firebase/firebaseConfig.js";
import { signInWithEmailAndPassword } from "firebase/auth";
import styles from "./LoginPopper.module.css"; // Import CSS module

const LoginPopper = ({ isOpen, onClose }) => {
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
            await signInWithEmailAndPassword(auth, email, password);
            toast({
                title: "Login erfolgreich",
                description: "Du bist jetzt angemeldet.",
                status: "success",
                duration: 3000,
                isClosable: true,
            });
            onClose(); // Close modal on success
        } catch (err) {
            setError("Login fehlgeschlagen. Bitte überprüfe deine Anmeldedaten.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <Modal isOpen={isOpen} onClose={onClose} isCentered>
            <ModalOverlay />
            <ModalContent className={styles.modalContent}>
                <ModalHeader className={styles.modalHeader}>Anmelden</ModalHeader>
                <ModalCloseButton className={styles.modalCloseButton} />
                <ModalBody>
                    <form onSubmit={handleLogin}>
                        <VStack spacing={4}>
                            <FormControl isInvalid={!!error}>
                                <FormLabel className={styles.formLabel}></FormLabel>
                                <Input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                    className={styles.input}
                                    placeholder="Email"
                                    autoFocus
                                />
                            </FormControl>

                            <FormControl isInvalid={!!error}>
                                <FormLabel className={styles.formLabel}></FormLabel>
                                <Input
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                    className={styles.input}
                                    placeholder="Dein Passwort"
                                />
                                {error && <FormErrorMessage>{error}</FormErrorMessage>}
                            </FormControl>

                            <Button
                                type="submit"
                                width="100%"
                                isLoading={loading}
                                spinner={<Spinner />}
                                className={styles.submitButton}
                            >
                                Anmelden
                            </Button>
                        </VStack>
                    </form>
                </ModalBody>

                <ModalFooter>
                    <Button variant="ghost" onClick={onClose} className={styles.cancelButton}>
                        Abbrechen
                    </Button>
                </ModalFooter>
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
