import { Box, Text, Link, Flex } from '@chakra-ui/react';

function Footer() {
    return (
        <Box as="footer" textAlign="center" py="8" fontSize="1rem" color="black" mt="8">
            <Text>© 2025 Genial GmbH</Text>
            <Flex as="nav" justify="center" mt="4" gap="4">
                <Link href="#" fontSize="1rem" _hover={{ textDecoration: 'underline' }}>
                    Privacy Policy
                </Link>
                <Link href="#" fontSize="1rem" _hover={{ textDecoration: 'underline' }}>
                    Terms & Conditions
                </Link>
            </Flex>
        </Box>
    );
}

export default Footer;
