import React from 'react';
import { Box, Flex, Text, Input, Textarea, Button, Grid, GridItem, Heading } from '@chakra-ui/react';

const ContactPage = () => {
  return (
    <Box>
      {/* Background Image Section */}
      <Box
        position="relative"
        bgImage="url('https://p2pclouds.org/wp-content/uploads/2024/05/join-2.png.webp')"
        bgSize="cover"
        bgPosition="center"
        height="70vh"
        display="flex"
        alignItems="center"
        justifyContent="flex-start"
        color="white"
        px={6}
      >
        <Box color="black" padding={10} maxW="500px">
          <Text fontSize={{ base: '3xl', md: '5xl' }} fontWeight="bold" lineHeight="1.2">
            Our team awaits your
          </Text>
          <Text fontSize={{ base: '3xl', md: '5xl' }} fontWeight="bold" lineHeight="1.2">
            message ready to
          </Text>
          <Text fontSize={{ base: '3xl', md: '5xl' }} fontWeight="bold" lineHeight="1.2">
            transform your
          </Text>
          <Text fontSize={{ base: '3xl', md: '5xl' }} fontWeight="bold" lineHeight="1.2">
            vision into reality.
          </Text>
        </Box>
      </Box>

      {/* Contact Details and Map Section */}
      <Grid templateColumns={{ base: '1fr', md: '1fr 1fr' }} gap={6} p={6}>
        <GridItem>
          <Box bg="white" p={6} borderRadius="md" shadow="md">
            <Heading as="h2" fontSize={{ base :"2x1" , md:"5xl"}} mb={4}>
              Head Office
            </Heading>
            <Text fontSize="3xl" fontWeight="bold" mb={2}>Address:</Text>
            <Text fontWeight="bold" fontSize="2xl" color="red" mb={4}>
              Arfa Software Technology Park, Lahore, Punjab, Pakistan
            </Text>
            <Text fontSize="3xl"  fontWeight="bold" mb={2}>Phone:</Text>
            <Text fontWeight="bold" fontSize="2xl" color="red" mb={4}>+92 307 2770751</Text>
            <Text fontSize="3xl" fontWeight="bold" mb={2}>Email:</Text>
            <Text fontWeight="bold"fontSize="2xl" color="red" mb={4}>support@p2pclouds.org</Text>
            <Text fontWeight="bold" fontSize="2xl" color="red">info@p2pclouds.org</Text>
          </Box>
        </GridItem>
        <GridItem>
          <Box bg="white" p={6} borderRadius="md" shadow="md" height="100%">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13604.040792589264!2d73.07474592318297!3d31.41824740851808!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39226906ac8b8f75%3A0x9474a8f59b68825c!2sFaisalabad%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2sus!4v1629353437658!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              title="Faisalabad Map"
            ></iframe>
          </Box>
        </GridItem>
      </Grid>

      {/* Contact Form Section */}
      <Box p={6} bg="gray.50">
        <Box
          bg="white"
          p={6}
          borderRadius="md"
          shadow="md"
          maxWidth="600px"
          margin="auto"
        >
          <Heading as="h2" size="lg" mb={4} textAlign="center">
            Contact Us
          </Heading>
          <Flex direction="column" gap={12}>
            <Input placeholder="Your Name" />
            <Input placeholder="Your Email" type="email" />
            <Textarea placeholder="Your Message" />
            <Button colorScheme="teal" size="lg">
              Send Message
            </Button>
          </Flex>
        </Box>
      </Box>
    </Box>
  );
};

export default ContactPage;
