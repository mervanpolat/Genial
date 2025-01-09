// NavBar.jsx

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
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import LoginPopper from "./LoginPopper/LoginPopper.jsx";

function NavBar() {
  const { isOpen: isLoginOpen, onOpen, onClose } = useDisclosure(); // Login modal state
  const { isOpen: isDrawerOpen, onOpen: openDrawer, onClose: closeDrawer } = useDisclosure(); // Mobile menu drawer state

  // Define custom boxShadow value
  const customBoxShadow = "0 4px 20px rgba(0, 0, 0, 0.05)"; // Soft, centered, light shadow

  // Define styles for animated underline
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
        {/* Navbar container */}
        <Flex justify="center" w="100%" py={4} bg="#faf3dc">
          <Box
              maxW="container.lg"
              w="100%"
              px={6}
              py={3}
              bg="#faf3dc"
              boxShadow={customBoxShadow} // Apply custom shadow
              color="#000000" // Set text color to black
              borderTop="8px solid #c03b2d" // Top border
              borderLeft="8px solid #30628b" // Left border
              borderRight="8px solid #f0c34e" // Right border
              borderBottom="8px solid #000000" // Bottom border
              position="relative" // Ensure positioning for shadows if needed
          >
            <Flex align="center" justify="space-between">
              {/* Logo */}
              <Box fontWeight="bold" fontSize="lg">
                <ChakraLink
                    as={RouterLink}
                    to="/"
                    {...animatedUnderline} // Apply animated underline styles
                >
                  GENIAL
                </ChakraLink>
              </Box>

              {/* Hamburger Icon for mobile */}
              <IconButton
                  aria-label="Toggle Navigation Menu"
                  icon={<HamburgerIcon />}
                  display={{ base: "block", md: "none" }}
                  onClick={openDrawer}
                  color="#000000" // Set icon color to black
                  variant="ghost"
                  _hover={{ bg: "transparent" }} // Maintain ghost variant on hover
              />

              {/* Links (Desktop view only) */}
              <HStack
                  spacing={6}
                  display={{ base: "none", md: "flex" }}
                  align="center"
              >
                <ChakraLink
                    as={RouterLink}
                    to="/"
                    {...animatedUnderline} // Apply animated underline styles
                >
                  Home
                </ChakraLink>
                <ChakraLink
                    as={RouterLink}
                    to="/preis"
                    {...animatedUnderline} // Apply animated underline styles
                >
                  Preis
                </ChakraLink>
                <ChakraLink
                    as={RouterLink}
                    to="/kurse"
                    {...animatedUnderline} // Apply animated underline styles
                >
                  Kurse
                </ChakraLink>
                <ChakraLink
                    as={RouterLink}
                    to="/ueber-uns"
                    {...animatedUnderline} // Apply animated underline styles
                >
                  Über uns
                </ChakraLink>
                <Button
                    variant="link"
                    onClick={onOpen}
                    color="#000000"
                    sx={animatedUnderline} // Apply animated underline styles
                >
                  Anmelden
                </Button>
              </HStack>
            </Flex>
          </Box>
        </Flex>

        {/* Drawer for Mobile Menu */}
        <Drawer isOpen={isDrawerOpen} placement="right" onClose={closeDrawer}>
          <DrawerOverlay />
          <DrawerContent
              bg="#ffffff" // Changed to white for better contrast with black text
              color="#000000" // Set text color to black
              boxShadow={customBoxShadow} // Apply the same custom shadow
              borderTop="8px solid #c03b2d" // Top border
              borderLeft="8px solid #30628b" // Left border
              borderRight="8px solid #f0c34e" // Right border
              borderBottom="8px solid #000000" // Bottom border
              borderRadius="md" // Optional: Add slight border radius for smoothness
          >
            <DrawerCloseButton />
            <DrawerBody>
              <Stack spacing={6} mt={8} align="center">
                <ChakraLink
                    as={RouterLink}
                    to="/"
                    onClick={closeDrawer}
                    {...animatedUnderline} // Apply animated underline styles
                >
                  Home
                </ChakraLink>
                <ChakraLink
                    as={RouterLink}
                    to="/preis"
                    onClick={closeDrawer}
                    {...animatedUnderline} // Apply animated underline styles
                >
                  Preis
                </ChakraLink>
                <ChakraLink
                    as={RouterLink}
                    to="/kurse"
                    onClick={closeDrawer}
                    {...animatedUnderline} // Apply animated underline styles
                >
                  Kurse
                </ChakraLink>
                <ChakraLink
                    as={RouterLink}
                    to="/ueber-uns"
                    onClick={closeDrawer}
                    {...animatedUnderline} // Apply animated underline styles
                >
                  Über uns
                </ChakraLink>
                <Button
                    variant="link"
                    onClick={onOpen}
                    color="#000000"
                    sx={animatedUnderline} // Apply animated underline styles
                >
                  Anmelden
                </Button>
              </Stack>
            </DrawerBody>
          </DrawerContent>
        </Drawer>

        {/* Login Modal */}
        <LoginPopper isOpen={isLoginOpen} onClose={onClose} />
      </>
  );
}

export default NavBar;
