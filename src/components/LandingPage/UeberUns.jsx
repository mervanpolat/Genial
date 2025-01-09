import React from 'react';
import { Box, Flex, Heading, Text, Image } from '@chakra-ui/react';
import './UeberUns.css'; // Keeping the CSS file as requested for grid styling

function UeberUns() {
  return (
      <Box className="ueber-uns-container" p="20px">
        {/* Grid Section */}
        <Flex
            direction={{ base: 'column', md: 'row-reverse' }}
            gap="20px"
            className="ueber-uns-grid"
            alignItems="center"
        >
          {/* Image at the right on desktop, top on mobile */}
          <Box className="grid-item image" flex="1">
            <Image
                src="/images/UeberUns/Euclid.png"
                alt="Euclid's Elements"
                borderRadius="10px"
                w="100%"
                maxW={{ base: '100%', md: '500px', lg: '600px' }}  /* Increased size for desktop */
                mb={{ base: '20px', md: '0' }}
            />
          </Box>

          {/* Text Section */}
          <Box className="grid-item text" flex="2">
            <Heading as="h1" size="2xl" mb="20px">Über uns</Heading>
            <Text fontSize="lg" lineHeight="1.8">
              Wir helfen Schülern und Lernenden, ihre mathematischen Fähigkeiten zu verbessern,
              mit besonderem Fokus auf die Vorbereitung zur Zentralmatura.
              <br /><br />
              Auf unserer Plattform setzt du auf aktives Lernen – keine Videos, nur interaktive Übungen.
              <br /><br />
              Wir führen dich Schritt für Schritt durch die Konzepte und bauen dabei ein solides Fundament auf,
              um dich optimal auf die Matura vorzubereiten.
            </Text>
          </Box>
        </Flex>

        {/* Team Section */}
        <Box as="section" className="team-section" mt="40px">
          <Heading as="h1" size="xl" mb="20px">Team</Heading>
          <Box className="team-member" textAlign="center">
            <Image
                src="/images/TeamMembers/MervanPolat.png"
                alt="Mervan Polat"
                className="team-member-image"
                borderRadius="full"
                boxSize="150px"
                mb="10px"
            />
            <Heading as="h3" size="md">Mervan Polat</Heading>
            <Text fontSize="md" color="gray.600">Software Engineer, Founder</Text>
          </Box>
        </Box>
      </Box>
  );
}

export default UeberUns;
