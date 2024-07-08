import React from 'react';
import { Box, Flex, Heading, Text, Image, SimpleGrid, Icon } from '@chakra-ui/react';
import { MdBusiness, MdSchool, MdHome } from 'react-icons/md';
import { Swiper, SwiperSlide, Pagination } from 'swiper/react';
import { MdEmail } from "react-icons/md";
import 'swiper/swiper-bundle.min.css'
import 'swiper/components/navigation/navigation.min.css';


const teamMembers = [
  {
    image:
      "https://p2pclouds.org/wp-content/uploads/2024/05/ahmad-manzoor-removebg-preview.png.webp",
    name: "Ahmad Manzoor",
    role: "Sr Executive Director",
    about:
      "With 23 years in ICT Solutions Architecture and Pre-Sales. I specialize in global training and public speaking. As CEO of multiple ventures, including the Pakistan Blockchain Institute. As CTO at Blockchain Center of Pakistan, I shape tech advancements. Also a principal blockchain auditor and founding member of the Metarverse Council, I influence the tech landscape. Additionally, I advise prestigious universities across several countries.",
  },
  // Add more team members as needed
  {
    image:
      "https://p2pclouds.org/wp-content/uploads/2024/04/Sir_Zeeshan-removebg-preview-1.png.webp",
    name: "Zeeshan Ali",
    role: "Development Manger",
    about:
      "Passionate and adaptable full-stack web and mobile app developer with a focus on Dapps and cloud technologies. Renowned for innovation and problem-solving abilities, I thrive on expanding expertise to deliver tailored software solutions. Committed to staying ahead of technology trends to anticipate future demands. Dedicated to driving success for businesses and delighting users through exceptional development.",
  },

  {
    image:
      "https://p2pclouds.org/wp-content/uploads/2024/05/imad_durrani-removebg-preview.png.webp",
    name: "Ahamad Durrani",
    role: "Development Manger",
    about:
      "As an AI Engineer at NLPL. I innovate ASR systems using transformer architectures and Python/Torch. I design, optimize, and collaborate on ASR models for peak performance. At SDGs Academy, I developed cloud-based apps and managed teams. With a degree in Computer Software Engineering. I'm certified in C#, Java, and passionate about problem-solving. Graduated from FU, I also completed a Machine Learning nanodegree from Udacity",
  },

  {
    image: "https://p2pclouds.org/wp-content/uploads/2024/04/bismah.png.webp",
    name: "Bisma Javed",
    role: " Business  Development",
    about:
      "Comprehensive approach to software development. With a deep understanding of market dynamics. I leverage MongoDB, Express.js, React, and Node.js to create innovative web applications. By aligning technology with strategic business goals, I drive growth and exceed user expectations. My focus on business development ensures that solutions not only meet technical requirements but also foster long-term success.",
  },
  {
    image: "https://p2pclouds.org/wp-content/uploads/2024/05/aisha_tabassum-removebg-preview.png.webp",
    name: "Aisha Tabssum",
    role: "Head of Marketing Department",
    about:
      "MBA Marketing graduate from the University of the Punjab with expertise in social media marketing and SEO. Proficient in SEO, digital media marketing, web and graphic design, and video editing. Previously served as Digital Media Marketing Manager at PAK Safety Solutions. Currently working as an SEO specialist at Digital Transformers and SEO Executive at GROW Trainings. Passionate about leveraging marketing strategies to drive impactful result.",
  },
];

const AboutUsPage = () => {
  return (
    <Box>
      {/* Hero Section */}
      <Box
        bgImage="url('https://p2pclouds.org/wp-content/uploads/2024/03/About-Us-1-2048x1151.png.webp')"
        bgSize="cover"
        bgPosition="center"
        height={{ base: '300px', md: '500px' }} 
        color="white"
        display="flex"
        alignItems="center"
        justifyContent="flex-start"
        p={8}
      >
        <Heading as="h1" color="#470086" padding={12} size={{ base: '2xl', md: '4xl' }}>
          Discover More<br />
          About P2P<br />
          Clouds
        </Heading>
      </Box>

      {/* Main Content */}
      <Box p={8}>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
          {/* Left Side */}
          <Box>
            <Heading as="h1" size={{ base: '2xl', md: '4xl' }} color="#470086" mb={4}>
              ABOUT US
            </Heading>
            <Heading as="h2" color="#30C7B5" marginTop={12} size={{ base: 'md', md: 'lg' }} mb={4}>
              P2P Clouds - Architects of Digital Brilliance
            </Heading>
            <Text mb={4}>
              P2P Clouds leads the charge in digital transformation, offering a dynamic suite of solutions that redefine industry standards. From AI-driven chatbots to revolutionary blockchain tech, we’re crafting the future, one innovation at a time. Embrace excellence with P2P Clouds – where digital brilliance meets unparalleled success.
            </Text>
            <Heading as="h2" color="#30C7B5" size={{ base: 'md', md: 'lg' }} mb={2}>
              P2P Clouds – Your Gateway to Digital Prowess
            </Heading>
            <Text>
              P2P Clouds stands as a beacon of innovation, ushering businesses into a new era of success. With cutting-edge solutions in CRM, ERP, AI, and beyond, we seamlessly blend technology and vision. Join us at the forefront of digital excellence – P2P Clouds, where your journey to success begins.
            </Text>
          </Box>

          {/* Right Side */}
          <Box>
            <Box mb={8}>
              <Heading as="h2" size={{ base: 'md', md: 'lg' }} color="#30C7B5" mb={4}>
                CRM & ERP Solutions
              </Heading>
              <Text mb={4}>
                Unleash the power of P2P Clouds' advanced CRM and ERP tools, designed to optimize processes, enhance customer relationships, and drive unprecedented growth for your business.
              </Text>
            </Box>
            <Box mb={8}>
              <Heading as="h2" size={{ base: 'md', md: 'lg' }} color="#30C7B5" mb={4}>
                Learning Management Revolution
              </Heading>
              <Text mb={4}>
                Step into the future of learning with P2P Clouds' cutting-edge Learning Management System (LMS) and Learning Management System Framework (LMSF), fostering continuous improvement and knowledge acquisition.
              </Text>
            </Box>
            <Box>
              <Heading as="h2" size={{ base: 'md', md: 'lg' }} color="#30C7B5" mb={4}>
                REMS Redefining Real Estate Management
              </Heading>
              <Text mb={4}>
                Experience a paradigm shift in real estate management with P2P Clouds' innovative Real Estate Management System (REMS), offering a comprehensive suite of tools for property professionals.
              </Text>
            </Box>
          </Box>
        </SimpleGrid>
      </Box>

      {/* Icons Section */}
      <Flex justify="center" align="center" py={8} bg="gray.100" direction={{ base: 'column', md: 'row' }}>
        <Box flex="1" textAlign="center" maxW="300px" mx={4} mb={{ base: 4, md: 0 }}>
          <Icon as={MdBusiness} boxSize={16} color="gray.500" mb={4} />
          <Heading as="h3" size="md" mb={2}>CRM & ERP</Heading>
          <Text color="gray.600">Advanced tools to optimize processes</Text>
        </Box>
        <Box flex="1" textAlign="center" maxW="300px" mx={4} mb={{ base: 4, md: 0 }}>
          <Icon as={MdSchool} boxSize={16} color="gray.500" mb={4} />
          <Heading as="h3" size="md" mb={2}>Learning Management</Heading>
          <Text color="gray.600">Cutting-edge LMS and LMSF</Text>
        </Box>
        <Box flex="1" textAlign="center" maxW="300px" mx={4}>
          <Icon as={MdHome} boxSize={16} color="gray.500" mb={4} />
          <Heading as="h3" size="md" mb={2}>REMS</Heading>
          <Text color="gray.600">Innovative Real Estate Management</Text>
        </Box>
      </Flex>
      <Box mt={8} mb={16} px={[4, 8, 0]}>
      <Text
        fontSize={["2xl", "5xl"]}
        textAlign="center"
        color="blue.400"
        fontWeight="bold"
        mb={4}
      >
        Our Experts
      </Text>

      <Swiper
        spaceBetween={30}
        pagination={{ clickable: true }}
        loop={true} 
        effect="slide" 
        breakpoints={{
          640: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
      >
        {teamMembers.map((member, index) => (
          <SwiperSlide key={index}>
            <Box
              bg="white"
              boxShadow="md"
              borderRadius="md"
              p={8}
            >
              <Flex
                direction={["column", "row"]}
                alignItems={["center", "flex-start"]}
                justifyContent="space-between"
                mb={4}
              >
                <Image
                  src={member.image}
                  alt={member.name}
                  borderRadius="full"
                  boxSize="80px"
                  mb={[4, 0]}
                />
                <Box ml={[0, 4]} mt={[2, 0]}>
                  <Text fontWeight="bold" mb={2}>
                    {member.name}
                  </Text>
                  <Text fontSize="sm" mb={2}>
                    {member.role}
                  </Text>
                </Box>
                <Icon
                  as={MdEmail}
                  fontSize={["2xl", "3xl"]}
                  color="teal.500"
                  ml={[0, 2]}
                  mt={[2, 0]}
                />
              </Flex>
              <Text fontSize="sm">{member.about}</Text>
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
    </Box>
  );
};

export default AboutUsPage;
