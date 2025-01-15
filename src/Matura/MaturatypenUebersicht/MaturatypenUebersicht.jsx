import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Heading, Text, Flex, Button, Image } from '@chakra-ui/react';

//File: src/Matura/MaturatypenUebersicht/MaturatypenUebersicht.jsx

function MaturatypenUebersicht() {
  return (
      <Box p="20px" maxW="1200px" mx="auto">
        {/* Main Heading */}
        <Heading as="h1" size="2xl" mb="1rem" mt="4rem">
          Mein Lehrplan
        </Heading>
        <Text fontSize="lg" mb="2rem">Schritt-für-Schritt-Wege zur Meisterschaft</Text>

        {/* Header Section */}
        <Flex
            justify="space-between"
            align="center"
            mb="10px"
            p="20px"
            border="1px solid black"
            borderRadius="10px"
        >
          <Flex align="center" gap="20px">
            <Box>
              <Heading as="h1" size="lg" mb="0">
                HTL2
              </Heading>
              <Text color="gray.600">Wähle diesen Pfad, wenn du die HTL2 besuchst</Text>
            </Box>
          </Flex>
          <Button
              size="md"
              border="1px solid black"
              borderRadius="20px"
              bg="transparent"
              _hover={{ bg: 'blackAlpha.100' }}
          >
            Starten
          </Button>
        </Flex>

        {/* Levels Section */}
        <Box overflowX="auto" pb="10px" css={{ scrollbarWidth: 'none' }}>
          <Flex gap="20px" py="10px" minW="fit-content">
            {levelsData.map((level) => (
                <Link to={level.link} className="level-link" key={level.level}>
                  <Box textAlign="center">
                    <Text fontSize="sm" fontWeight="bold" mb="10px">
                      {`LEVEL ${level.level}`}
                    </Text>
                    <Box
                        minW="200px"
                        minH="200px"
                        p="20px"
                        border="1px solid black"
                        borderRadius="25px"
                        display="flex"
                        flexDirection="column"
                        alignItems="center"
                        justifyContent="space-between"
                        transition="transform 0.2s ease, box-shadow 0.2s ease"
                        _hover={{ transform: 'translateY(-5px)', boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)' }}
                    >
                      <Image
                          src={level.imageSrc}
                          alt={level.alt}
                          maxW="150px"
                          maxH="150px"
                          objectFit="contain"
                          mb="10px"
                      />
                    </Box>
                    <Text fontSize="md" mt="10px" color="gray.700">
                      {level.title}
                    </Text>
                  </Box>
                </Link>
            ))}
          </Flex>
        </Box>
      </Box>
  );
}

const levelsData = [
  {
    level: 1,
    link: '/grundlagen', // Corrected to use a valid path
    imageSrc: '/assets/CardImages/HTL2/Grundlagen.svg',
    alt: 'Grundlagen',
    title: 'Grundlagen',
  },
  {
    level: 2,
    link: '/gleichungen-loesen',
    imageSrc: '/assets/CardImages/HTL2/Gleichung.png',
    alt: 'Gleichungen lösen',
    title: 'Gleichungen lösen',
  },
  {
    level: 3,
    link: '/level-3',
    imageSrc: '/assets/CardImages/HTL2/Funktion.svg',
    alt: 'Funktionen',
    title: 'Funktionen',
  },
  {
    level: 4,
    link: '/level-4',
    imageSrc: '/assets/CardImages/HTL2/Trigonometrie.png',
    alt: 'Trigonometrie',
    title: 'Trigonometrie',
  },
  {
    level: 5,
    link: '/level-5',
    imageSrc: '/assets/CardImages/HTL2/Vektoren.png',
    alt: 'Vektoren',
    title: 'Vektoren',
  },
  {
    level: 6,
    link: '/level-6',
    imageSrc: '/assets/CardImages/HTL2/Differentialrechnung.svg',
    alt: 'Differentialrechnung',
    title: 'Differentialrechnung',
  },
  {
    level: 7,
    link: '/level-7',
    imageSrc: '/assets/CardImages/HTL2/Umkehraufgaben.png',
    alt: 'Umkehraufgaben',
    title: 'Umkehraufgaben',
  },
  {
    level: 8,
    link: '/level-8',
    imageSrc: '/assets/CardImages/HTL2/Integral.png',
    alt: 'Integral',
    title: 'Integral',
  },
  {
    level: 9,
    link: '/level-9',
    imageSrc: '/assets/CardImages/HTL2/Statistik.svg',
    alt: 'Wahrscheinlichkeit & Statistik',
    title: 'Wahrscheinlichkeit & Statistik',
  },
];

export default MaturatypenUebersicht;
