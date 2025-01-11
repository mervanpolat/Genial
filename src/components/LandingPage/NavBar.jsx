// src/components/LandingPage/NavBar.jsx

import React, { useState, useEffect } from "react";
import { Link as RouterLink } from "react-router-dom";
import {
  Box,
  Flex,
  IconButton,
  Button,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerBody,
  Stack,
  useDisclosure,
  HStack,
  Link as ChakraLink,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
} from "@chakra-ui/icons";
import { motion, AnimatePresence } from "framer-motion";

// Firebase Auth
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../../firebase/firebaseConfig.js";

// Your login popper/modal
import LoginPopper from "./LoginPopper/LoginPopper.jsx";

function NavBar() {
  const [user, setUser] = useState(null);

  // Listen to authentication state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  // For login modal (LoginPopper)
  const {
    isOpen: isLoginOpen,
    onOpen: onLoginOpen,
    onClose: onLoginClose,
  } = useDisclosure();

  // For mobile drawer
  const {
    isOpen: isDrawerOpen,
    onOpen: openDrawer,
    onClose: closeDrawer,
  } = useDisclosure();

  // Handle user logout
  const handleLogout = async () => {
    try {
      await signOut(auth);
      // Optionally show a toast or redirect
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  // Box shadow for navbar and drawer
  const customBoxShadow = "0 4px 20px rgba(0, 0, 0, 0.05)";

  // Animated underline style for ChakraLink or Button
  const animatedUnderline = {
    position: "relative",
    _after: {
      content: '""',
      position: "absolute",
      width: "0%",
      height: "2px",
      bottom: "0",
      left: "0",
      bg: "#000000",
      transition: "width 0.3s ease-in-out",
    },
    _hover: {
      textDecoration: "none",
      color: "#000000",
      _after: {
        width: "100%",
      },
    },
  };

  return (
      <>
        {/* Main Nav Container */}
        <Flex justify="center" w="100%" py={4} bg="#faf3dc">
          <Box
              maxW="container.lg"
              w="100%"
              px={{ base: 4, md: 6 }}
              py={3}
              bg="#faf3dc"
              boxShadow={customBoxShadow}
              color="#000000"
              borderTop="8px solid #c03b2d"
              borderLeft="8px solid #30628b"
              borderRight="8px solid #f0c34e"
              borderBottom="8px solid #000000"
              position="relative"
              mx={{ base: 4, sm: 6, md: "auto" }}
          >
            <Flex align="center" justify="space-between">
              {/* Logo / Brand */}
              <Box fontWeight="bold" fontSize="lg">
                <ChakraLink as={RouterLink} to="/" {...animatedUnderline}>
                  GENIAL
                </ChakraLink>
              </Box>

              {/* Mobile Hamburger Icon */}
              <IconButton
                  aria-label="Toggle Navigation Menu"
                  display={{ base: "block", md: "none" }}
                  onClick={isDrawerOpen ? closeDrawer : openDrawer}
                  color="#000000"
                  variant="ghost"
                  _hover={{ bg: "transparent" }}
                  icon={
                    <AnimatePresence initial={false} mode="wait">
                      {isDrawerOpen ? (
                          <motion.div
                              key="close"
                              initial={{ rotate: -90, opacity: 0 }}
                              animate={{ rotate: 0, opacity: 1 }}
                              exit={{ rotate: 90, opacity: 0 }}
                          >
                            <CloseIcon />
                          </motion.div>
                      ) : (
                          <motion.div
                              key="menu"
                              initial={{ rotate: 90, opacity: 0 }}
                              animate={{ rotate: 0, opacity: 1 }}
                              exit={{ rotate: -90, opacity: 0 }}
                          >
                            <HamburgerIcon />
                          </motion.div>
                      )}
                    </AnimatePresence>
                  }
              />

              {/* Desktop Links */}
              <HStack
                  spacing={6}
                  display={{ base: "none", md: "flex" }}
                  align="center"
              >
                <ChakraLink as={RouterLink} to="/" {...animatedUnderline}>
                  Home
                </ChakraLink>
                <ChakraLink as={RouterLink} to="/preis" {...animatedUnderline}>
                  Preis
                </ChakraLink>
                <ChakraLink as={RouterLink} to="/kurse" {...animatedUnderline}>
                  Kurse
                </ChakraLink>
                <ChakraLink
                    as={RouterLink}
                    to="/ueber-uns"
                    {...animatedUnderline}
                >
                  Über uns
                </ChakraLink>

                {/* Conditionally render "Anmelden" or User Menu */}
                {!user ? (
                    <Button
                        variant="link"
                        onClick={onLoginOpen}
                        color="#000000"
                        sx={animatedUnderline}
                    >
                      Anmelden
                    </Button>
                ) : (
                    <Menu>
                      <MenuButton
                          as={Button}
                          variant="link"
                          rightIcon={<ChevronDownIcon />}
                          sx={animatedUnderline}
                      >
                        {user.displayName || "Konto"}
                      </MenuButton>
                      <MenuList>
                        {/* Additional items (Profile, Settings, etc.) can go here */}
                        <MenuItem onClick={handleLogout}>Abmelden</MenuItem>
                      </MenuList>
                    </Menu>
                )}
              </HStack>
            </Flex>
          </Box>
        </Flex>

        {/* Mobile Drawer Menu */}
        <Drawer isOpen={isDrawerOpen} placement="top" onClose={closeDrawer}>
          <DrawerOverlay />
          <DrawerContent
              bg="#faf3dc"
              color="#000000"
              boxShadow={customBoxShadow}
              borderTop="8px solid #c03b2d"
              borderLeft="8px solid #30628b"
              borderRight="8px solid #f0c34e"
              borderBottom="8px solid #000000"
              borderRadius="md"
              height="100vh"
          >
            <DrawerCloseButton />
            <DrawerBody>
              <Stack spacing={6} mt={8} align="center">
                <ChakraLink
                    as={RouterLink}
                    to="/"
                    onClick={closeDrawer}
                    {...animatedUnderline}
                >
                  Home
                </ChakraLink>
                <ChakraLink
                    as={RouterLink}
                    to="/preis"
                    onClick={closeDrawer}
                    {...animatedUnderline}
                >
                  Preis
                </ChakraLink>
                <ChakraLink
                    as={RouterLink}
                    to="/kurse"
                    onClick={closeDrawer}
                    {...animatedUnderline}
                >
                  Kurse
                </ChakraLink>
                <ChakraLink
                    as={RouterLink}
                    to="/ueber-uns"
                    onClick={closeDrawer}
                    {...animatedUnderline}
                >
                  Über uns
                </ChakraLink>

                {/* Conditionally render "Anmelden" or User Menu in the drawer */}
                {!user ? (
                    <Button
                        variant="link"
                        onClick={() => {
                          closeDrawer();
                          onLoginOpen();
                        }}
                        color="#000000"
                        sx={animatedUnderline}
                    >
                      Anmelden
                    </Button>
                ) : (
                    <Menu>
                      <MenuButton
                          as={Button}
                          variant="link"
                          rightIcon={<ChevronDownIcon />}
                          sx={animatedUnderline}
                      >
                        {user.displayName || "Konto"}
                      </MenuButton>
                      <MenuList>
                        <MenuItem
                            onClick={() => {
                              closeDrawer();
                              handleLogout();
                            }}
                        >
                          Abmelden
                        </MenuItem>
                      </MenuList>
                    </Menu>
                )}
              </Stack>
            </DrawerBody>
          </DrawerContent>
        </Drawer>

        {/* Login Modal */}
        <LoginPopper isOpen={isLoginOpen} onClose={onLoginClose} />
      </>
  );
}

export default NavBar;
