import React from "react";
import { Box, Flex, Text, Link, VStack, Icon } from "@chakra-ui/react";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <Box bg="#18A296" color="white" py={8} px={{ base: 4, md: 2 }}>
      <Flex
        direction={{ base: 'column', md: 'row' }}
        justifyContent="space-between"
        alignItems={{ base: 'flex-start', md: 'center' }}
        textAlign={{ base: 'center', md: 'left' }}
        maxW="1200px"
        mx="auto"
      >
        {/* Logo Section */}
        <Box mb={{ base: 8, md: 0 }} mr={{ base: 0, md: 8 }} textAlign={{ base: 'center', md: 'left' }} >
          <img
            src="https://p2pclouds.org/wp-content/uploads/2024/05/clouds_p2p-removebg-preview-4-300x176.png.webp"
            alt="P2P Clouds Logo"
            style={{ maxWidth: '150px', height: 'auto' }}
          />
        </Box>

        {/* Products Section */}
        <VStack
          align={{ base: "flex-start", md: "flex-start" }}
          mb={{ base: 8, md: 0 }}
        >
          <Text fontSize="xl" fontWeight="bold">
            Products
          </Text>
          <Link href="#" color="white">
            Customer Relation Management
          </Link>
          <Link href="#" color="white">
            AI Chat Bot
          </Link>
          <Link href="#" color="white">
            Learning Management System
          </Link>
          <Link href="#" color="white">
            MEDXGPT Chatbot
          </Link>
          <Link href="#" color="white">
            Enterprise Resource Planning
          </Link>
          <Link href="#" color="white">
            Point Of Sale
          </Link>
          <Link href="#" color="white">
            Installment Tracking System
          </Link>
          <Link href="#" color="white">
            Real Estate Management System
          </Link>
        </VStack>

        {/* Get in Touch Section */}
        <VStack
          align={{ base: "flex-start", md: "flex-start" }}
          mb={{ base: 8, md: 0 }}
        >
          <Text fontSize="xl" fontWeight="bold">
            Get in Touch
          </Text>
          <Text>+92 307 2770751</Text>
          <Text>info@p2pclouds.org</Text>
          <Flex mt={4}>
            <Link href="#" isExternal>
              <Icon as={FaFacebook} boxSize={6} mr={4} />
            </Link>
            <Link href="#" isExternal>
              <Icon as={FaInstagram} boxSize={6} mr={4} />
            </Link>
            <Link href="#" isExternal>
              <Icon as={FaTwitter} boxSize={6} mr={4} />
            </Link>
            <Link href="#" isExternal>
              <Icon as={FaLinkedin} boxSize={6} />
            </Link>
          </Flex>
        </VStack>
      </Flex>
    </Box>
  );
};

export default Footer;
