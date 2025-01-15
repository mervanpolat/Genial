import { Box, Flex, Heading, Text, Image } from '@chakra-ui/react';

function AboutUs() {
  return (
      <Box p="5" maxW="1200px" mx="auto" my="12">
        <Flex
            direction={{ base: 'column', md: 'row-reverse' }}
            gap="5"
            alignItems="center"
        >
          {/* Image on the right (desktop) */}
          <Box flex="1" borderRadius="lg" overflow="hidden">
            <Image
                src="./assets/images/AboutUs/Euclid.png"
                alt="Euclid's Elements"
                borderRadius="lg"
                w="100%"
                maxW={{ base: '100%', md: '400px' }}
                mb={{ base: '5', md: '0' }}
            />
          </Box>

          {/* Text Section */}
          <Box flex="2">
            <Heading as="h1" size="2xl" mb="5">
              Über uns
            </Heading>
            <Text fontSize="lg" lineHeight="1.6">
              Wir helfen Schülern und Lernenden, ihre mathematischen Fähigkeiten zu verbessern,
              mit besonderem Fokus auf die Vorbereitung zur Zentralmatura.
              <br /><br />
              Auf unserer Plattform setzen wir auf aktives Lernen – keine Videos, nur interaktive Übungen.
              <br /><br />
              Wir führen dich Schritt für Schritt durch die Konzepte und bauen dabei ein solides Fundament auf,
              um dich optimal auf die Matura vorzubereiten.
            </Text>
          </Box>
        </Flex>

        {/* Team Section */}
        <Box as="section" mt="20">
          <Heading as="h1" size="xl" mb="8" fontWeight="bold" textAlign="left">
            Team
          </Heading>
          <Flex direction="column" alignItems="flex-start" gap="2">
            <Image
                src="./assets/images/TeamMembers/MervanPolat.png"
                alt="Mervan Polat"
                borderRadius="full"
                boxSize="150px"
                objectFit="cover"
                mb="4"
            />
            <Heading as="h3" size="md" fontWeight="normal">
              Mervan Polat
            </Heading>
            <Text fontSize="md" color="gray.600">
              Software Engineer, Founder
            </Text>
          </Flex>
        </Box>
      </Box>
  );
}

export default AboutUs;
