import React from "react";
import { Box, Flex, Heading, Text } from "@chakra-ui/react";

const ProductPage = ({
  productName,
  imageUrl,
  imgUrl,
  description,
  components,
}) => {
  return (
    <Box>
      {/* Background Image */}
      <Box
        bgImage={`url(${imageUrl})`}
        bgSize="cover"
        bgPosition="center"
        height={{ base: "300px", md: "500px" }}
        mb={8}
      />

      {/* Content Section */}
      <Flex
        direction={{ base: "column", md: "row" }} 
        justifyContent="space-between"
        alignItems="flex-start"
        px={{ base: 4, md: 8 }} 
        py={{ base: 8, md: 12 }}
      >
        {/* Left Side - Image */}
        <Box
          flex={{ base: "1 0 100%", md: "0 0 48%" }}
          boxShadow="xl"
          mb={{ base: 8, md: 0 }}
        >
          <Box
            bgImage={`url(${imgUrl})`}
            bgSize="cover"
            bgPosition="center"
            height={{ base: "200px", md: "400px" }}
            borderRadius="md"
          />
        </Box>

        {/* Right Side - Content */}
        <Box
          flex={{ base: "1 0 100%", md: "0 0 48%" }} 
          boxShadow="xl"
          p={{ base: 4, md: 6 }} 
          borderRadius="md"
        >
          <Heading as="h2" fontSize={{ base: "xl", md: "2xl" }} mb={4}>
            {productName}
          </Heading>
          <Text mb={4}>{description}</Text>

          {/* Key Components Section */}
          <Box mt={6}>
            {components &&
              components.map((component, index) => (
                <Box key={index} mb={4}>
                  <Heading as="h3" fontSize={{ base: "lg", md: "xl" }} mb={2}>
                    {component.title}
                  </Heading>
                  <Text mb={4}>{component.description}</Text>
                </Box>
              ))}
          </Box>
        </Box>
      </Flex>
    </Box>
  );
};

export default ProductPage;
