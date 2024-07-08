import React from 'react';
import { Box, Flex, Heading, Image, Button } from '@chakra-ui/react';

const PortfolioPage = () => {
  return (
    <Box>
      {/* Hero Section */}
      <Box
        bg="gray.200"
        py={20}
        px={8}
        textAlign="center"
        borderBottom="1px solid"
        borderColor="gray.400"
      >
        <Heading as="h1" size="2xl" mb={6}>
          Where Vision Meets Innovative Solutions for Tomorrow's Challenges
        </Heading>
        <Heading as="h2" size="lg" fontWeight="normal">
          Showcasing Expertise, Building Success, Quality, and Client Satisfaction is our First Priority.
        </Heading>
      </Box>

      {/* Main Content Section */}
      <Flex py={20} px={8}>
        {/* Left Side Image */}
        <Box flex="1" pr={8}>
          <Image src="https://p2pclouds.org/wp-content/plugins/elementor/assets/images/placeholder.png" alt="Portfolio Image" />
        </Box>

        {/* Right Side Content */}
        <Box flex="1">
          <Heading as="h3" size="lg" mb={4}>
            Add Your Heading Text Here
          </Heading>
          <Button colorScheme="blue" size="lg">
            Click Here
          </Button>
        </Box>
      </Flex>
    </Box>
  );
};

export default PortfolioPage;
