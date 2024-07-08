import React from 'react';
import { Box, Flex, Heading, Text, Image } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';

const articles = [
  {
    id: 1,
    heading: "Exploring the Future of AI Chatbots through P2P Clouds",
    title: "Tech / Ahmad Raza",
    content: "Artificial Intelligence (AI) chatbots have become an integral part of our digital interactions, streamlining communication between businesses and users. However, as technology advances, new paradigms emerge to enhance the capabilities of these chatbots. One such promising frontier is the integration of AI chatbots with Peer-to-Peer (P2P) clouds. In this article, we delve into the innovative potential of combining AI chatbots with P2P clouds and the impact it could have on the future of digital communication.",
    imageUrl: "https://p2pclouds.org/wp-content/uploads/2024/05/download-6.jpeg.webp",
  },
  {
    id: 2,
    heading: "REVOLUTIONIZING E-COMMERCE: PEER-TO-PEER CLOUDS",
    title: "/ Tech / By ahmadraza",
    content: "In the fast-paced world of technology, innovations are constantly reshaping industries, and e-commerce is no exception. One such groundbreaking advancement that is transforming the landscape of online business is the integration of peer-to-peer (P2P) clouds. This cutting-edge technology is revolutionizing the way e-commerce operates, offering businesses and consumers a more efficient, secure, and decentralized approach to online transactions.",
    imageUrl: "https://p2pclouds.org/wp-content/uploads/2024/05/download-5.jpeg.webp",
  },
  // Add more articles as needed
];

const ArticleDetail = () => {
  const { id } = useParams();
  const article = articles.find((article) => article.id === parseInt(id));

  if (!article) {
    return <Text>Article not found</Text>;
  }

  return (
    <Flex direction="column" alignItems="center" py={10} width="100%" px={{ base: 4, md: 10 }}>
      <Box width="100%" maxW="1200px">
        <Heading as="h1" size="xl" mb={8} textAlign={{ base: 'center', md: 'left' }}>{article.heading}</Heading>
        <Text fontWeight="bold" size="xl" textAlign={{ base: 'center', md: 'left' }} color="teal.500" mb={2}>
          {article.title}
        </Text>
      </Box>
      <Flex direction={{ base: 'column', md: 'row' }} alignItems="start" width="100%" maxW="1200px" p={8}>
        <Box flex="1" pr={{ md: 8 }}>
          <Heading as="h3" fontSize="3xl" mb={4}>Introduction:</Heading>
          <Text fontSize="lg">{article.content}</Text>
        </Box>
        {article.imageUrl && (
          <Box flex="1" mt={{ base: 8, md: 0 }} pl={{ md: 8 }} textAlign="center">
            <Image 
              src={article.imageUrl} 
              alt={article.heading} 
              width={{ base: '100%', md: '100%' }} 
              height="auto"
              maxH={{ base: '300px', md: '400px' }}
              objectFit="cover"
            />
          </Box>
        )}
      </Flex>
    </Flex>
  );
};

export default ArticleDetail;
