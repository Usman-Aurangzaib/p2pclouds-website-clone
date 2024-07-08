import React from 'react';
import { Box, Flex, Heading, Text, Link } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

const articles = [
  {
    id: 1,
    heading: "Exploring the Future of AI Chatbots through P2P Clouds",
    title: "Tech / Ahmad Raza",
    content: "Introduction: Artificial Intelligence (AI) chatbots have become an integral part of our digital interactions, streamlining communication between businesses and users. However, as technology advances, new paradigms emerge to enhance the capabilities of these chatbots. One such promising frontier is the integration of AI chatbots with Peer-to-Peer (P2P) clouds. In this article, we delve into the innovative potential of combining AI chatbots with P2P clouds and the impact it could have on the future of digital communication.",
    maxWords: 50,
  },
  {
    id: 2,
    heading: "REVOLUTIONIZING E-COMMERCE: PEER-TO-PEER CLOUDS",
    title: "/ Tech / By ahmadraza",
    content: "Introduction: In the fast-paced world of technology, innovations are constantly reshaping industries, and e-commerce is no exception. One such groundbreaking advancement that is transforming the landscape of online business is the integration of peer-to-peer (P2P) clouds. This cutting-edge technology is revolutionizing the way e-commerce operates, offering businesses and consumers a more efficient, secure, and decentralized",
    maxWords: 50,
  },
  // Add more articles as needed
];

const NewsroomPage = () => {
  return (
    <Flex direction="column" alignItems="center" py={10} width="100%">
      <Heading as="h1" size="xl" mb={8}>
        Newsroom
      </Heading>
      <Flex direction="column" padding={8} justify="center" width="100%" maxW="1200px">
        {articles.map((article) => (
          <Box key={article.id} bg="white" marginLeft={4} shadow="md" p={6} mb={8} width={{ base: "100%", md: "45%", lg: "80%" }}>
            <Heading as="h2" size="md" mb={4}>{article.heading}</Heading>
            <Text fontWeight="bold" color="gray.500" mb={2}>{article.title}</Text>
            <Text>{`${article.content.split(' ').slice(0, article.maxWords).join(' ')}...`}</Text>
            <Link as={RouterLink} to={`/article/${article.id}`} color="blue.500" mt={2} display="block">Read More</Link>
          </Box>
        ))}
      </Flex>
    </Flex>
  );
};

export default NewsroomPage;
