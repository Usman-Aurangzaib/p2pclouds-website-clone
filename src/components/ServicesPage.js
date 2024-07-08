import React from 'react';
import { Box, Flex, Heading, Text, SimpleGrid, Image } from '@chakra-ui/react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const services = [
  {
    logo: 'https://p2pclouds.org/wp-content/uploads/2024/04/robot_1767103-100x100.png.webp',
    name: 'AI ChatBot',
    description: 'Discover our fully functional AI chatbot. Instantly connect and chat effortlessly for quick answers and support. Your virtual assistant is here to make your life easier.'
  },
  // Add 11 more services with similar structure
  {
    logo: 'https://p2pclouds.org/wp-content/uploads/2024/04/mobile_14038899-100x100.png',
    name: 'PWA',
    description: 'Try out our progressive web app for a seamless online experience. Access anytime, anywhere, with no need for downloads. Enjoy convenience at your fingertips.'
  },
  {
    logo: 'https://p2pclouds.org/wp-content/uploads/2024/04/mobile-app_7438181-100x100.png',
    name: 'Mobile APP',
    description: 'Download our intuitive mobile app today. Access quick answers and support on the go and making your life easier. Your pocket-sized assistant is here.'
  },
  {
    logo: 'https://p2pclouds.org/wp-content/uploads/2024/04/nft_8632083-100x100.png',
    name: 'Web 3.0 App',
    description: 'Enjoy seamless functionality and innovative features for a smarter online experience. Embrace the future of the internet and tailored just for you.'
  },
  {
    logo: 'https://p2pclouds.org/wp-content/uploads/2024/04/share_2733747-100x100.png.webp',
    name: 'AI Integration',
    description: 'Simplify Your Operations with Integrated AI Solutions. Harness the Power of Automation for Enhanced Efficiency. Experience Seamless AI Integration Today.'
  },
  {
    logo: 'https://p2pclouds.org/wp-content/uploads/2024/04/chatbot_8090834-100x100.png.webp',
    name: 'Customer Support ChatBot',
    description: 'Boost Your Support with Our Chatbot Expert. Quick Solutions, Anytime, Anywhere. Take Your Customer Service to the Next Level'
  },
  {
    logo: 'https://p2pclouds.org/wp-content/uploads/2024/04/pie_1832297-100x100.png.webp',
    name: 'Chrome Extension',
    description: 'Supercharge Your Browsing with Our Chrome Extension. Instantly Accessible. Personalized Tools, Ready When You Need Them. Elevate Your Surfing Now.'
  },
  {
    logo: 'https://p2pclouds.org/wp-content/uploads/2024/04/time_9758662-100x100.png',
    name: 'Web RTC',
    description: 'Unlock Instant Connections with Our Real-Time Web Communication Solution. Seamlessly Interact Anytime, Anywhere. Experience the Future of Online Connectivity.'
  },
  {
    logo: 'https://p2pclouds.org/wp-content/uploads/2024/04/health-medical_14702705-100x100.png.webp',
    name: 'MedCare ChatBot',
    description: 'Your Health Journey with Med Care Chatbot Ally. Instant Answers, Anytime, Anywhere. Your Virtual Healthcare Guide, Always by Your Side.'
  },
  {
    logo: 'https://p2pclouds.org/wp-content/uploads/2024/04/agenda_6313761-100x100.png',
    name: 'Chat Application',
    description: 'Optimize Your Communication with Our Chat Application. Effortless Connectivity anywhere. Elevate Your Conversational Experience with us.'
  },
  {
    logo: 'https://p2pclouds.org/wp-content/uploads/2024/04/blockchain_3605206-100x100.png.webp',
    name: 'Block Chain',
    description: 'Discover the Transformative Power of Blockchain for Your Business. Trustworthy, and Cutting-Edge Solutions. Lead Your Industry into the Future Today.'
  },
  {
    logo: 'https://p2pclouds.org/wp-content/uploads/2024/04/code_2210199-100x100.png.webp',
    name: 'Website Development',
    description: 'Maximize Your Online Impact: Expert Solutions for Your Website. Customized Development for Your Digital Journey. Build digital footprint.'
  },
];



const industries = [
    'https://p2pclouds.org/wp-content/uploads/2024/04/engineering_10700142-150x150.png.webp',
    'https://p2pclouds.org/wp-content/uploads/2024/04/mortarboard_2682264-150x150.png.webp',
    'https://p2pclouds.org/wp-content/uploads/2024/04/analytics_921540-150x150.png.webp',
    'https://p2pclouds.org/wp-content/uploads/2024/04/pharmaceutical_7159220-150x150.png.webp',
    'https://p2pclouds.org/wp-content/uploads/2024/04/salad_701974-150x150.png.webp',
    'https://p2pclouds.org/wp-content/uploads/2024/04/structural_11498114-150x150.png.webp',
    'https://p2pclouds.org/wp-content/uploads/2024/04/artificial-intelligence_7926957-150x150.png.webp',
  ];
  
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    lazyLoad: 'ondemand',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
  };
  
const ServicesPage = () => {
  return (
    <Box>
      {/* Hero Section */}
      <Box
        bgImage="url('https://p2pclouds.org/wp-content/uploads/2024/04/main-services.png.webp')"
        bgSize="cover"
        width={{ base: '100%', md: '100%' }}
        bgPosition="center"
        height={{ base: '300px', md: '500px' }} 
        color="white"
        display="flex"
        alignItems="center"
        justifyContent="flex-start"
        p={8}
      >
        <Heading as="h1" padding={{base:'1',md: '8'}} size={{ base: 'xl', md: '3xl' }}>
          We Serve<br />
          Software<br />
          Development<br />
          Cycle
        </Heading>
      </Box>

      {/* Services Section */}
      <Box p={8}>
        <Heading as="h2" size="3xl" textAlign="center" color='#2EA997' mb={8}>
          Our Services
        </Heading>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={4}>
          {services.map((service, index) => (
            <Box key={index} boxShadow="xl" p={4} borderRadius="10px" textAlign="center">
              <Image src={service.logo} alt={service.name} boxSize="100px" mx="auto" mb={4} />
              <Heading as="h3" size="md" mb={2}>
                {service.name}
              </Heading>
              <Text>
                {service.description}
              </Text>
            </Box>
          ))}
        </SimpleGrid>
      </Box>
    </Box>
  );
};

export default ServicesPage;
