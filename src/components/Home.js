import React, { useState } from "react";
import {
  Box,
  Flex,
  Text,
  Button,
  Image,
  Icon,
  IconButton,
  SimpleGrid,
  GridItem,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { PhoneIcon } from "@chakra-ui/icons";
import {
  FaClock,
  FaLaptopCode,
  FaPaintBrush,
  FaCodeBranch,
  FaBug,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import "./css/Home.css";
import CountUp from "react-countup";
import ScrollAnimation from "react-animate-on-scroll";
import { Swiper, SwiperSlide, Pagination } from 'swiper/react';
import 'swiper/swiper-bundle.min.css'
import 'swiper/components/navigation/navigation.min.css';







const products = {
  CRM: {
    image:
      "https://p2pclouds.org/wp-content/uploads/2024/03/CRM-white-transparent-300x215.png.webp",
    text: "P2P Clouds CRM: Revolutionize customer relationship management with our innovative platform, harnessing the decentralized power of peer-to-peer clouds for enhanced security and scalability. Elevate your online presence with SEO optimization, ensuring maximum visibility and driving organic traffic to your business. Seamlessly integrate cutting-edge technology for a comprehensive solution that empowers your business growth.",
  },
  LMS: {
    image:
      "https://p2pclouds.org/wp-content/uploads/2024/03/LMS-Logo-white-1-300x161.png.webp",
    text: "P2P Cloud-Powered LMS with SEO Optimization: Transform education and training with our Learning Management System, leveraging the decentralized capabilities of peer-to-peer clouds for robust and scalable infrastructure. Elevate your online courses with SEO enhancements, boosting discoverability and engagement. Deliver a seamless and personalized learning experience, combining advanced technology and strategic visibility to optimize educational impact.",
  },
  ERP: {
    image:
      "https://p2pclouds.org/wp-content/uploads/2024/03/ERP-logo-300x161.png",
    text: "Embark on a decentralized revolution with P2P Clouds' Blockchain Development Service : Our dedicated team leverages the power of blockchain technology to revolutionize your business processes. From creating secure and transparent smart contracts to developing custom blockchain solutions, we enable businesses to embrace the future of trust and transparency. P2P Clouds seamlessly integrates blockchain into your operations, ensuring data integrity, enhanced security, and streamlined transactions. Unleash the potential of decentralized innovation with our Blockchain Development Service, where we pave the way for a more efficient and secure digital future.",
  },
  REMS: {
    image:
      "https://p2pclouds.org/wp-content/uploads/2024/03/REMS-transparent-262x300.png.webp",
    text: "P2P Cloud-Enabled REMS with SEO Advancements: Revolutionize Real Estate Management with our innovative platform, harnessing the power of peer-to-peer clouds for enhanced reliability and scalability. Elevate property visibility and attract potential buyers or tenants with SEO optimization. Our Real Estate Management System seamlessly integrates technology and strategic visibility for a comprehensive solution that empowers efficient property management and boosts market presence.",
  },
  AI_Chatbot: {
    image:
      "https://p2pclouds.org/wp-content/uploads/2024/03/Ai-chat-bot-white-300x188.png.webp",
    text: "P2P Cloud-Driven Chatbot with SEO Synergy: Transform customer interactions with our advanced chatbot, harnessing the decentralized power of peer-to-peer clouds for enhanced responsiveness and scalability. Elevate your online engagement with SEO-optimized conversational interfaces, ensuring seamless integration into search engine results. Our Chatbot solution combines cutting-edge technology with strategic visibility, delivering an intelligent and user-friendly conversational experience for enhanced customer satisfaction.",
  },
  POS: {
    image:
      "https://p2pclouds.org/wp-content/uploads/2024/03/POS-WHITE-TEXT-300x218.png.webp", //
    text: "Our POS solution combines advanced technology with strategic design, delivering an intelligent and intuitive transaction experience for heightened customer satisfaction. Say goodbye to cumbersome processes and hello to streamlined interactions that drive sales and foster long-term loyalty. Unlock the power of cutting-edge POS technology today with our unparalleled solution",
  },
  SMS: {
    image:
      "https://p2pclouds.org/wp-content/uploads/2024/03/Stock-management-white-logo-300x184.png.webp",
    text: "Our cutting-edge technology and strategic design deliver an intelligent and user-friendly stock management experience, empowering you to optimize inventory levels and streamline workflows. Say goodbye to outdated processes and hello to a modern, data-driven approach that drives productivity and profitability.Elevate your stock management with our innovative solution, revolutionizing the way you track, monitor, and manage your inventory. Experience the future of stock management today.",
  },
};

const services = {
  "Progressive Web Applications": {
    heading: "Progressive Web Apps: Unveiling the Power of P2P Clouds",
    text: [
      "Progressive Web Apps (PWAs) are revolutionizing the mobile experience, offering app-like functionality within a web browser. Now, imagine combining the power of PWAs with p2p (peer-to-peer) cloud technology. This opens doors to a future of enhanced performance, security, and user experience for PWAs, blurring the lines between traditional apps and web-based experiences.",
      { subheading: "Why p2p Clouds for Progressive Web Apps?" },
      "While traditional cloud storage has its place, P2P  Clouds offer unique advantages for PWA development:",
      { subheading: "Unmatched Scalability:" },
      "PWAs can experience rapid user growth. p2p cloud infrastructure effortlessly scales to accommodate this growth, ensuring smooth operation and a seamless user experience. Unlike traditional cloud providers with limited server capacity, p2p clouds leverage the combined power of individual devices, eliminating bottlenecks and lag.",
      { subheading: "Enhanced Security and Privacy:" },
      "p2p clouds eliminate the risk of centralized data breaches. User data and PWA resources are encrypted and distributed across the network, making them significantly harder for hackers to access. This fosters trust and transparency for PWA users.",
      { subheading: "Reduced Development Costs:" },
      "PWAs typically require less development effort compared to native apps. p2p cloud storage eliminates the need for expensive centralized servers, further reducing development costs. This allows developers to focus on building innovative features and functionalities for their PWAs.",
      {
        subheading:
          "Beyond Security and Cost: Additional Advantages of p2p Clouds for PWAs",
      },
      "Offline Functionality: p2p clouds can enable PWAs to offer a degree of offline functionality. By caching essential data locally on user devices, core PWA features remain usable even in areas with limited or no internet connectivity.",
      { subheading: "Faster Content Delivery:" },
      "p2p clouds can geographically distribute content associated with your PWA. This ensures faster loading times and a smoother user experience for all users, especially those in remote locations.",
      { subheading: "Unlocking New Possibilities for Progressive Web Apps" },
      "Here's how p2p cloud integration can transform your PWAs:",
      { subheading: "Decentralized App Stores:" },
      "Imagine a world where PWA distribution is no longer reliant on app stores. p2p cloud marketplaces can allow developers to publish their PWAs directly to users, eliminating gatekeepers and fostering innovation. This empowers developers to experiment with new features and monetization models, ultimately benefiting users with a wider variety of cutting-edge PWAs.",
      { subheading: "Collaborative PWA Development:" },
      "p2p clouds can foster a collaborative development environment for PWAs. Developers can share code modules and resources within the network, accelerating the development process and fostering a more open and community-driven approach to PWA creation.",
      { subheading: "PWAs and p2p Clouds: A Match Made in Tech Heaven" },
      "The synergy between PWAs and p2p clouds is immense. Here's how they work together:",
      { subheading: "Seamless User Experience:" },
      "p2p cloud storage ensures PWAs load quickly and function smoothly, even on low-end devices. This creates a user experience that rivals native apps, blurring the lines between web and mobile interactions.",
      { subheading: "Push Notifications and Background Updates:" },
      "p2p cloud infrastructure can facilitate push notifications and background updates for PWAs, keeping users engaged and informed even when the PWA is not actively in use.",
      { subheading: "Enhanced Offline Capabilities:" },
      "By leveraging p2p cloud caching, PWAs can offer a significant step up in offline functionality compared to traditional web apps. Users can access essential features and data even without an internet connection, improving overall usability.",
    ],
  },
  "Android/IOS Mobile Apps": {
    heading:
      "Revolutionizing Mobile Apps: Android and iOS Integration with P2P Clouds",
    text: [
      "The landscape of mobile application development is on the cusp of a transformation. By integrating Android and iOS apps with p2p (peer-to-peer) cloud technology, we can unlock a new era of functionality, security, and user experience for both Android and iOS users.",
      { subheading: "P2P Clouds The Powerhouse for Mobile Apps" },
      "While traditional cloud storage offers benefits, p2p clouds provide unique advantages for mobile app development on both Android and iOS platforms:",
      { subheading: "Enhanced Security and Privacy: " },
      "P2P clouds eliminate the risk of centralized data breaches. User data is encrypted and distributed across the network, making it significantly harder for hackers to access sensitive information regardless of the user's device (Android or iOS). This fosters trust and transparency within the ecosystem.",
      { subheading: "Unparalleled Scalability" },
      "As your mobile app gains users on both Android and iOS, a p2p cloud infrastructure can effortlessly scale to accommodate the growing demand. Unlike traditional cloud providers with finite resources, p2p clouds leverage the combined power of individual devices, ensuring a smooth and lag-free experience for all users, regardless of their operating system.",
      { subheading: "Cost-Effectiveness: " },
      " Mobile app developers can leverage the collective storage capacity of the p2p network, eliminating the need for expensive centralized servers. This translates to significant cost savings, allowing developers to focus on building innovative features and functionalities for their apps, benefiting both Android and iOS users.",
      {
        subheading:
          "Beyond Security and Cost: Additional Advantages for Mobile Apps",
      },

      { subheading: "Offline Functionality: " },
      "P2P clouds can enable a degree of offline functionality within your mobile app, regardless of the user's device (Android or iOS). By caching essential data locally on user devices, you can ensure core app features remain usable even in areas with limited or no internet connectivity.",
      {
        subheading:
          "Unlocking New Possibilities for Mobile Apps on Both Android and iOS",
      },
      "Here's how p2p cloud integration can transform your mobile apps for both Android and iOS users:",
      { subheading: "Decentralized App Stores:" },
      "Imagine a world where PWA distribution is no longer reliant on app stores. p2p cloud marketplaces can allow developers to publish their PWAs directly to users, eliminating gatekeepers and fostering innovation. This empowers developers to experiment with new features and monetization models, ultimately benefiting users with a wider variety of cutting-edge PWAs.",
      { subheading: "Collaborative PWA Development:" },
      "p2p clouds can foster a collaborative development environment for PWAs. Developers can share code modules and resources within the network, accelerating the development process and fostering a more open and community-driven approach to PWA creation.",
      { subheading: "PWAs and p2p Clouds: A Match Made in Tech Heaven" },
      "The synergy between PWAs and p2p clouds is immense. Here's how they work together:",
      { subheading: "Seamless User Experience:" },
      "p2p cloud storage ensures PWAs load quickly and function smoothly, even on low-end devices. This creates a user experience that rivals native apps, blurring the lines between web and mobile interactions.",
    ],
  },
  "Custom AI Chatbots": {
    heading:
      "Building Your Dream Assistant: Custom AI Chatbots with p2p Clouds",
    text: [
      "The rise of P2P cloud technology offers a revolutionary platform for crafting powerful and personalized AI chatbots. Imagine an AI assistant that seamlessly integrates with your workflow, anticipates your needs, and provides efficient, secure communication – all built on a decentralized infrastructure. But why choose p2p clouds for your chatbot development? Here's what sets it apart:",
      { subheading: "The Advantages of P2P Clouds for Chatbots" },
      "While traditional cloud storage has its place, P2P  Clouds offer unique advantages for PWA development:",
      { subheading: "Decentralized Power: " },
      "Unlike traditional cloud providers with centralized servers, p2p clouds distribute processing power across a network of individual computers. This translates to several benefits for your chatbot:",
      { subheading: "Scalability on Demand:" },
      " As your chatbot user base grows, the p2p cloud automatically scales its resources to meet the demand. No more worrying about infrastructure limitations or downtime during peak usage.",
      { subheading: "Enhanced Security:" },
      " Data breaches are a major concern with centralized storage. P2P clouds encrypt and distribute user data across the network, making it significantly harder for hackers to access. This fosters trust and transparency between users and your chatbot.",
      {
        subheading:
          "Beyond Security and Cost: Additional Advantages of p2p Clouds for PWAs",
      },
      "Offline Functionality: p2p clouds can enable PWAs to offer a degree of offline functionality. By caching essential data locally on user devices, core PWA features remain usable even in areas with limited or no internet connectivity.",
      { subheading: "Faster Content Delivery:" },
      "p2p clouds can geographically distribute content associated with your PWA. This ensures faster loading times and a smoother user experience for all users, especially those in remote locations.",
      { subheading: "Unlocking New Possibilities for Progressive Web Apps" },
      "Here's how p2p cloud integration can transform your PWAs:",
      { subheading: "Decentralized App Stores:" },
      "Imagine a world where PWA distribution is no longer reliant on app stores. p2p cloud marketplaces can allow developers to publish their PWAs directly to users, eliminating gatekeepers and fostering innovation. This empowers developers to experiment with new features and monetization models, ultimately benefiting users with a wider variety of cutting-edge PWAs.",
      { subheading: "Collaborative PWA Development:" },
      "p2p clouds can foster a collaborative development environment for PWAs. Developers can share code modules and resources within the network, accelerating the development process and fostering a more open and community-driven approach to PWA creation.",
      { subheading: "PWAs and p2p Clouds: A Match Made in Tech Heaven" },
      "The synergy between PWAs and p2p clouds is immense. Here's how they work together:",
      { subheading: "Seamless User Experience:" },
      "p2p cloud storage ensures PWAs load quickly and function smoothly, even on low-end devices. This creates a user experience that rivals native apps, blurring the lines between web and mobile interactions.",
      { subheading: "Push Notifications and Background Updates:" },
      "p2p cloud infrastructure can facilitate push notifications and background updates for PWAs, keeping users engaged and informed even when the PWA is not actively in use.",
      { subheading: "Enhanced Offline Capabilities:" },
      "By leveraging p2p cloud caching, PWAs can offer a significant step up in offline functionality compared to traditional web apps. Users can access essential features and data even without an internet connection, improving overall usability.",
    ],
  },
  "NFT and Token Integration": {
    heading:
      "NFT and Token Integration with p2p Clouds: A Gateway to a New Digital Era",
    text: [
      "The realm of digital ownership and interaction is on the cusp of a revolution. By integrating NFTs (Non-Fungible Tokens) and tokens with P2P  cloud technology, we unlock a future brimming with possibilities for creators, collectors, and innovators. This powerful combination fosters a more secure, transparent, and user-centric ecosystem for NFTs and tokens, transforming the way we interact with digital assets.",
      { subheading: "P2P Clouds the Secure Foundation for NFTs and Tokens" },
      "Traditional cloud providers, while offering storage solutions, often come with limitations for NFTs and tokens. Here's why p2p clouds stand out:",
      { subheading: "Unmatched Security: " },
      "P2P clouds eliminate the risk of centralized data breaches. Data fragmentation and encryption across the network make it significantly harder for hackers to access sensitive information like NFT ownership records or token balances. This fosters trust and transparency within the NFT and token ecosystem.",
      { subheading: "Effortless Scalability:" },
      "The decentralized nature of p2p clouds allows for on-demand scaling as the NFT marketplace grows and user adoption of tokens increases. Unlike traditional cloud providers with finite resources, p2p clouds leverage the combined storage capacity and processing power of individual devices, ensuring smooth operation for NFT trading and token functionality.",
      { subheading: "Cost-Effectiveness: " },
      "By leveraging the collective storage capacity of the p2p network, transaction and storage costs associated with NFTs and tokens are significantly reduced. Creators can avoid high marketplace fees, and collectors benefit from lower transaction costs when purchasing NFTs or using platform tokens.",
      {
        subheading:
          "Beyond Security and Cost: Additional Advantages for Mobile Apps",
      },

      { subheading: "Offline Functionality: " },
      "P2P clouds can enable a degree of offline functionality within your mobile app, regardless of the user's device (Android or iOS). By caching essential data locally on user devices, you can ensure core app features remain usable even in areas with limited or no internet connectivity.",
      {
        subheading:
          "Unlocking New Possibilities for Mobile Apps on Both Android and iOS",
      },
      "Here's how p2p cloud integration can transform your mobile apps for both Android and iOS users:",
      { subheading: "Decentralized App Stores:" },
      "Imagine a world where PWA distribution is no longer reliant on app stores. p2p cloud marketplaces can allow developers to publish their PWAs directly to users, eliminating gatekeepers and fostering innovation. This empowers developers to experiment with new features and monetization models, ultimately benefiting users with a wider variety of cutting-edge PWAs.",
      { subheading: "Collaborative PWA Development:" },
      "p2p clouds can foster a collaborative development environment for PWAs. Developers can share code modules and resources within the network, accelerating the development process and fostering a more open and community-driven approach to PWA creation.",
      { subheading: "PWAs and p2p Clouds: A Match Made in Tech Heaven" },
      "The synergy between PWAs and p2p clouds is immense. Here's how they work together:",
      { subheading: "Seamless User Experience:" },
      "p2p cloud storage ensures PWAs load quickly and function smoothly, even on low-end devices. This creates a user experience that rivals native apps, blurring the lines between web and mobile interactions.",
    ],
  },
  "AI Integration": {
    heading: "Unlock the Power of AI Integration with P2P Clouds",
    text: [
      "In today's digital landscape, harnessing the power of artificial intelligence (AI) is essential for businesses looking to stay competitive and drive innovation. P2P Clouds offers comprehensive AI integration services designed to empower organizations to leverage AI technologies effectively and efficiently across their operations.",
      { subheading: "Key Benefits of AI Integration with P2P Clouds:" },
      "Traditional cloud providers, while offering storage solutions, often come with limitations for NFTs and tokens. Here's why p2p clouds stand out:",
      { subheading: "Unmatched Security: " },
      "P2P clouds eliminate the risk of centralized data breaches. Data fragmentation and encryption across the network make it significantly harder for hackers to access sensitive information like NFT ownership records or token balances. This fosters trust and transparency within the NFT and token ecosystem.",
      { subheading: "Effortless Scalability:" },
      "The decentralized nature of p2p clouds allows for on-demand scaling as the NFT marketplace grows and user adoption of tokens increases. Unlike traditional cloud providers with finite resources, p2p clouds leverage the combined storage capacity and processing power of individual devices, ensuring smooth operation for NFT trading and token functionality.",
      { subheading: "Cost-Effectiveness: " },
      "By leveraging the collective storage capacity of the p2p network, transaction and storage costs associated with NFTs and tokens are significantly reduced. Creators can avoid high marketplace fees, and collectors benefit from lower transaction costs when purchasing NFTs or using platform tokens.",
      {
        subheading:
          "Beyond Security and Cost: Additional Advantages for Mobile Apps",
      },

      { subheading: "Offline Functionality: " },
      "P2P clouds can enable a degree of offline functionality within your mobile app, regardless of the user's device (Android or iOS). By caching essential data locally on user devices, you can ensure core app features remain usable even in areas with limited or no internet connectivity.",
      {
        subheading:
          "Unlocking New Possibilities for Mobile Apps on Both Android and iOS",
      },
      "Here's how p2p cloud integration can transform your mobile apps for both Android and iOS users:",
      { subheading: "Decentralized App Stores:" },
      "Imagine a world where PWA distribution is no longer reliant on app stores. p2p cloud marketplaces can allow developers to publish their PWAs directly to users, eliminating gatekeepers and fostering innovation. This empowers developers to experiment with new features and monetization models, ultimately benefiting users with a wider variety of cutting-edge PWAs.",
      { subheading: "Collaborative PWA Development:" },
      "p2p clouds can foster a collaborative development environment for PWAs. Developers can share code modules and resources within the network, accelerating the development process and fostering a more open and community-driven approach to PWA creation.",
      { subheading: "PWAs and p2p Clouds: A Match Made in Tech Heaven" },
      "The synergy between PWAs and p2p clouds is immense. Here's how they work together:",
      { subheading: "Seamless User Experience:" },
      "p2p cloud storage ensures PWAs load quickly and function smoothly, even on low-end devices. This creates a user experience that rivals native apps, blurring the lines between web and mobile interactions.",
    ],
  },
};

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

const Home = () => {
  const [selectedProduct, setSelectedProduct] = useState("CRM");
  const [selectedService, setSelectedService] = useState(
    "Progressive Web Applications"
  );

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted!");
  };
  const placeholderStyle = {
    "::placeholder": {
      color: "rgba(255, 255, 255, 0.7)",
    },
  };
  return (
    <>
      <Box className="background-section moving-lines">
        <Flex
          direction="column"
          align="center"
          justify="center"
          minHeight="90vh"
          width={{ base: "100%", md: "100%" }}
          textAlign="center"
          px={4}
          py={4}
        >
          <Box p={8} borderRadius="md">
            <Text
              fontSize={{ base: "2xl", md: "8xl" }}
              fontWeight="bold"
              mb={4}
              color="#00C3FF"
            >
              Enable Brand Revolution
            </Text>
            <Text
              fontSize={{ base: "xl", md: "3xl" }}
              fontWeight="bold"
              color="white"
            >
              Experience the Future of Business management with{" "}
              <Text as="span" color="#00C3FF">
                P2P Clouds Collaboration
              </Text>{" "}
              and{" "}
              <Text as="span" color="#00C3FF">
                Revolutionizing Product solutions
              </Text>{" "}
              for a seamless{" "}
              <Text as="span" color="#00C3FF">
                Digital Journey and Solutions
              </Text>
              .
            </Text>
            <Link to="/contact">
              <Button
                leftIcon={<PhoneIcon />}
                colorScheme="teal"
                variant="solid"
                size="lg"
                marginTop={8}
                borderRadius={12}
              >
                Schedule a Free Strategy Call
              </Button>
            </Link>

            <Flex
              justifyContent="center"
              alignItems="center"
              gap={{ base: 20, md: 20 }}
              marginTop={12}
              wrap="wrap"
            >
              <Image
                src="https://p2pclouds.org/wp-content/uploads/2024/03/00-featured-image-3-1024x511-removebg-preview-300x150.png.webp"
                alt="Featured Image"
                boxSize={{ base: "80px", md: "100px" }}
              />
              <Image
                src="https://p2pclouds.org/wp-content/uploads/2024/03/clutch.webp"
                alt="Clutch"
                boxSize={{ base: "80px", md: "100px" }}
              />
              <Image
                src="https://p2pclouds.org/wp-content/uploads/2024/03/5_star-removebg-preview-300x152.png.webp"
                alt="5 Star"
                boxSize={{ base: "80px", md: "100px" }}
              />
            </Flex>
          </Box>
        </Flex>
      </Box>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={2} p={2} bg="gray.50">
        <GridItem colSpan={{ base: 1, md: 1 }} pr={{ base: 0, md: 2 }}>
          <Box
            bg="#30C7B5"
            p={{ base: 6, md: 20 }}
            borderRadius="20px"
            color="black"
            width="100%"
            maxWidth="600px"
            margin="0"
          >
            <Text fontSize={{ base: "2xl", md: "3xl" }} fontWeight="bold">
              Build Your Dream
            </Text>
            <Text fontSize={{ base: "3xl", md: "4xl" }} fontWeight="bold">
              5 Years Of Undefeated Success
            </Text>
            <Text margin={2} mt={4}>
              With a rich legacy spanning 5 years, P2P Clouds has been at the
              forefront of driving industry innovation. Our seasoned expertise
              is grounded in half a decade of shaping businesses through
              cutting-edge solutions. Trust us to propel your brand forward as
              we continue to redefine the benchmarks of excellence in the
              industry.
            </Text>
            <Link to="/about">
              <Button
                colorScheme="teal"
                variant="solid"
                size="lg"
                marginTop={8}
                borderRadius={12}
              >
                Work With Us
              </Button>
            </Link>
          </Box>
        </GridItem>
        <GridItem
          colSpan={{ base: 1, md: 1.5 }}
          marginTop={{ base: 12, md: 10 }}
        >
          <SimpleGrid
            columns={2}
            spacing={2}
            right={20}
            backgroundColor="white"
          >
            <Box
              p={10}
              color="blue"
              margin="auto"
              maxWidth="400px"
              textAlign="center"
            >
              <ScrollAnimation animateIn="fadeIn" duration={3.5}>
                <Text fontSize="5xl" fontWeight="bold" color={"#00C3FF"}>
                  <CountUp end={50} duration={3.5} />+
                </Text>
              </ScrollAnimation>
              <Text>Successfully Project Finished.</Text>
            </Box>
            <Box
              p={10}
              borderRadius="md"
              color="blue"
              margin="auto"
              maxWidth="400px"
              textAlign="center"
            >
              <ScrollAnimation animateIn="fadeIn" duration={3.5}>
                <Text fontSize="5xl" fontWeight="bold" color={"#00C3FF"}>
                  <CountUp end={5} duration={3.5} />+
                </Text>
              </ScrollAnimation>

              <Text>Years of Excellence and Trust</Text>
            </Box>
            <Box
              p={10}
              borderRadius="md"
              color="blue"
              margin="auto"
              maxWidth="400px"
              textAlign="center"
            >
              <Text fontSize="5xl" fontWeight="bold" color={"#00C3FF"}>
                <CountUp end={500} duration={3.5} />+
              </Text>
              <Text>Happy clients</Text>
            </Box>
            <Box
              p={10}
              borderRadius="md"
              color="blue"
              margin="auto"
              maxWidth="400px"
              textAlign="center"
            >
              <Text fontSize="5xl" fontWeight="bold" color={"#00C3FF"}>
                <CountUp end={100} duration={3.5} />+
              </Text>
              <Text>Successful Products and Services</Text>
            </Box>
          </SimpleGrid>
        </GridItem>
      </SimpleGrid>
      {/* New Section */}
      <Box mt={2} width="100%">
        <Text fontSize="3xl" fontWeight="bold" mb={4}>
          Products
        </Text>
        <Flex mb={8} wrap="wrap" gap={4}>
          {Object.keys(products).map((productKey) => (
            <Button
              key={productKey}
              onClick={() => setSelectedProduct(productKey)}
              colorScheme={selectedProduct === productKey ? "teal" : "gray"}
            >
              {productKey.replace("_", " ")}
            </Button>
          ))}
        </Flex>
        <Box
          bg="#00665A"
          p={2}
          borderRadius="md"
          maxWidth="200px"
          margin="auto"
        >
          <Image
            src={products[selectedProduct].image}
            alt={selectedProduct}
            boxSize="150px"
            objectFit="contain"
            margin="auto"
            paddingTop={8}
            bg="#00665A"
            borderRadius="20px"
          />
        </Box>
        <Text mt={8} maxWidth="100%" padding={4} fontSize="lg" color="black">
          {products[selectedProduct].text}
        </Text>
      </Box>

      {/* Our Services Section */}
      <Box mt={12} width="100%" textAlign="center">
        <Text fontSize="3xl" fontWeight="bold" mb={4} color="teal">
          Our Services
        </Text>
        <Flex direction={{ base: "column", md: "row" }}>
          <Box
            width={{ base: "100%", md: "30%" }}
            height="40%"
            backgroundColor={"#FFFFFF"}
          >
            <Flex direction="column" align="flex-start" wrap="wrap" gap={6}>
              {Object.keys(services).map((serviceKey) => (
                <Button
                  key={serviceKey}
                  onClick={() => setSelectedService(serviceKey)}
                  colorScheme={selectedService === serviceKey ? "teal" : "gray"}
                  width="100%"
                  padding={8}
                  marginTop={8}
                  textAlign="left"
                >
                  {serviceKey.replace("_", " ")}
                </Button>
              ))}
            </Flex>
          </Box>
          <Box width={{ base: "100%", md: "70%" }} p={4} textAlign="left">
            <Text fontSize="2xl" fontWeight="bold" mb={2}>
              {services[selectedService].heading}
            </Text>
            {services[selectedService].text.map((item, index) =>
              typeof item === "string" ? (
                <Text key={index} mb={2}>
                  {item}
                </Text>
              ) : (
                <Text key={index} fontSize="xl" fontWeight="bold" mt={4} mb={2}>
                  {item.subheading}
                </Text>
              )
            )}
          </Box>
        </Flex>
      </Box>

      {/* New Section */}
      <Flex direction={["column", null, "row"]} mt={12} width="100%">
        <Box
          position="relative"
          flex="1"
          bgImage="url('https://i.pinimg.com/564x/2c/66/a7/2c66a7c617b834535487fbc24a7c3d82.jpg')"
          bgSize="cover"
          bgPosition="center"
          height={{ base: "auto", md: "80vh" }}
          minHeight="400px"
        >
          <Box
            position="absolute"
            textAlign="left"
            alignItems="center"
            top="50%"
            left="50%"
            transform="translate(-50%, -50%)"
            // bg="rgba(255, 255, 255, 0.7)"
            bg="teal.100"
            opacity="0.8"
            p={{ base: 2, md: 2 }}
            borderRadius="20px"
            width={{ base: "90%", sm: "80%", md: "100%" }}
            maxW="400px"
          >
            <Text  fontSize={{ base: "lg", md: "xl" }} fontWeight="bold">
              Our Journey
            </Text>
            <Text fontSize={{base:"2xl" ,md:"3xl"}} fontWeight="bold" mt={{base:"0",md:"3"}}>
              Committed To Deliver The Best
            </Text>
            <Text mt={{base:"1",md:"3"}} fontSize={{ base: "md", md: "lg" }}>
              With a robust 5-year track record, P2P Clouds stands as a beacon
              of sustainability in the tech industry. Our journey is defined by
              a steadfast commitment to eco-conscious practices, ensuring that
              every solution we provide aligns with a greener tomorrow. Join us
              on the path to sustainable success, where innovation and
              environmental responsibility go hand in hand, shaping a future
              that’s both cutting-edge and conscientious.
            </Text>
            <Button mt={3} textAlign="center" colorScheme="teal">
              GET IN TOUCH
            </Button>
          </Box>
        </Box>

        <Box
          flex="1"
          bg="#27C6C3"
          p={6}
          display="flex"
          alignItems="center"
          justifyContent="center"
          height={["auto", null, "80vh"]}
          minHeight="400px"
        >
          <Box
            bg="#27C6C3"
            p={6}
            borderRadius="10px"
            boxShadow="0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)"
            width={["90%", null, "auto"]}
            maxW="600px"
          >
            <Text fontSize="3xl" fontWeight="bold" mb={4}>
              We Follow Best Practices
            </Text>
            <Box>
              <Flex alignItems="center" mb={2}>
                <FaClock size={24} color="white" />
                <Text fontSize={20} fontWeight="bold" ml={2}>
                  Project On Time
                </Text>
              </Flex>
              <Flex alignItems="center" mb={2}>
                <FaLaptopCode size={24} color="white" />
                <Text fontSize={20} fontWeight="bold" ml={2}>
                  Modern Technology
                </Text>
              </Flex>
              <Flex alignItems="center" mb={2}>
                <FaPaintBrush size={24} color="white" />
                <Text fontSize={20} fontWeight="bold" ml={2}>
                  Latest Designs
                </Text>
              </Flex>
              <Flex alignItems="center" mb={2}>
                <FaCodeBranch size={24} color="white" />
                <Text fontSize={20} fontWeight="bold" ml={2}>
                  Code Maintainability
                </Text>
              </Flex>
              <Flex alignItems="center">
                <FaBug size={24} color="white" />
                <Text fontSize={20} fontWeight="bold" ml={2}>
                  Bug Fixing
                </Text>
              </Flex>
            </Box>
          </Box>
        </Box>
      </Flex>

      <Box mt={8}>
        <Text fontSize="3xl" textAlign="center" fontWeight="bold" mb={4}>
          Our Latest Projects
        </Text>

        <Flex flexWrap="wrap" justifyContent="space-between">
          {/* Project 1 */}
          <Box
            flex={["0 0 80%", "0 0 48%", "0 0 30%"]}
            p={4}
            mb={8}
            bg="white"
            boxShadow="md"
            borderRadius="md"
          >
            <Flex justifyContent="center" alignItems="center" mb={2}>
              <img
                src="https://p2pclouds.org/wp-content/uploads/2024/04/nexskill-100x100.png"
                alt="NexSkill Logo"
                style={{ width: 80, height: 80, marginBottom: 12 }}
              />
            </Flex>
            <Text fontSize={20} textAlign="center" fontWeight="bold" mb={3}>
              LMS
            </Text>
            <Text fontSize="md">
              P2P Clouds making product, like NexSkill LMS. It is perfect for
              businesses because it makes learning super simple. With NexSkill
              LMS, everything just clicks together smoothly, and it stays fresh
              with updates. Choose P2P Clouds for fun learning.
            </Text>
          </Box>

          {/* Project 2 */}
          <Box
            flex={["0 0 80%", "0 0 48%", "0 0 30%"]}
            p={4}
            mb={8}
            bg="white"
            boxShadow="md"
            borderRadius="md"
          >
            <Flex justifyContent="center" alignItems="center" mb={2}>
              <img
                src="https://p2pclouds.org/wp-content/uploads/2024/04/Navy-blue-Crm-100x100.png.webp"
                alt="CRM Logo"
                style={{ width: 80, height: 80, marginBottom: 12 }}
              />
            </Flex>
            <Text fontSize={20} fontWeight="bold" mb={2}>
              CRM
            </Text>
            <Text fontSize="md">
              CRM simplifies customer management for you. Easily organize client
              data and stay connected with hassle-free communication tools. With
              P2P Clouds ensuring the highest level of security. Try CRM today
              and take your relationships to the next level with P2P Clouds.
            </Text>
          </Box>

          {/* Project 3 */}
          <Box
            flex={["0 0 80%", "0 0 48%", "0 0 30%"]}
            p={4}
            mb={8}
            bg="white"
            boxShadow="md"
            borderRadius="md"
          >
            <Flex justifyContent="center" alignItems="center" mb={2}>
              <img
                src="https://p2pclouds.org/wp-content/uploads/2024/04/ms_1-removebg-preview.png.webp"
                alt="MS Future Logo"
                style={{ width: 80, height: 80, marginBottom: 12 }}
              />
            </Flex>
            <Text fontSize={20} textAlign="center" fontWeight="bold" mb={2}>
              MS Future
            </Text>
            <Text fontSize="md">
              MS Future, the newest offering from P2P Clouds. This innovative
              app allows users to invest in listed flats and receive profitable
              returns. With a guaranteed 100% return on investment. Invest
              wisely and embark on your journey to financial prosperity with MS
              Future.
            </Text>
          </Box>

          {/* Project 4 */}
          <Box
            flex={["0 0 80%", "0 0 48%", "0 0 30%"]}
            p={4}
            mb={8}
            bg="white"
            boxShadow="md"
            borderRadius="md"
          >
            <Flex justifyContent="center" alignItems="center" mb={2}>
              <img
                src="https://p2pclouds.org/wp-content/uploads/2024/04/bit_mine-removebg-preview-100x100.png"
                alt="MS Future Logo"
                style={{ width: 80, height: 80, marginBottom: 12 }}
              />
            </Flex>
            <Text fontSize={20} textAlign="center" fontWeight="bold" mb={2}>
              Bit Mine Pro
            </Text>
            <Text fontSize="md">
              Introducing Bit Mine Pro – the simple way to dive into the world
              of crypto. Get info on top coins and mining rewards, all in one
              place. Plus, with easy withdrawal options, turning your earnings
              into cash is a breeze. Powered by P2P Clouds for extra security.
            </Text>
          </Box>

          {/* Project 5 */}
          <Box
            flex={["0 0 80%", "0 0 48%", "0 0 30%"]}
            p={4}
            mb={8}
            bg="white"
            boxShadow="md"
            borderRadius="md"
          >
            <Flex justifyContent="center" alignItems="center" mb={2}>
              <img
                src="https://p2pclouds.org/wp-content/uploads/2024/04/organic-cure-100x100.png.webp"
                alt="Organic Cure"
                style={{ width: 80, height: 80, marginBottom: 12 }}
              />
            </Flex>
            <Text fontSize={20} textAlign="center" fontWeight="bold" mb={2}>
              Organic Cure
            </Text>
            <Text fontSize="md">
              Organic Cure, where nature meets wellness the strength of P2P
              Clouds technology. Explore our collection of products and skincare
              essentials, meticulously selected to enhance your vitality.
              Experience the power of nature with confidence and trust on P2P
              Clouds.
            </Text>
          </Box>

          {/* Project 6 */}
          <Box
            flex={["0 0 80%", "0 0 48%", "0 0 30%"]}
            p={4}
            mb={8}
            bg="white"
            boxShadow="md"
            borderRadius="md"
          >
            <Flex justifyContent="center" alignItems="center" mb={2}>
              <img
                src="https://p2pclouds.org/wp-content/uploads/2024/04/REMS-100x100.png.webp"
                alt="Rems"
                style={{ width: 80, height: 80, marginBottom: 12 }}
              />
            </Flex>
            <Text fontSize={20} textAlign="center" fontWeight="bold" mb={2}>
              Rems
            </Text>
            <Text fontSize="md">
              Streamline property operations effortlessly and access crucial
              data with ease. With REMS, you property information is kept safe
              and accessible whenever you need it. Revolutionize your real
              estate management with P2P Clouds as per your needs.
            </Text>
          </Box>

          {/* Project 7 */}
          <Box
            flex={["0 0 80%", "0 0 48%", "0 0 30%"]}
            p={4}
            mb={8}
            bg="white"
            boxShadow="md"
            borderRadius="md"
          >
            <Flex justifyContent="center" alignItems="center" mb={2}>
              <img
                src="https://p2pclouds.org/wp-content/uploads/2024/04/E-Mail-Portal-3.png"
                alt="E-Mail Portal Logo"
                style={{ width: 80, height: 80, marginBottom: 12 }}
              />
            </Flex>
            <Text fontSize={20} textAlign="center" fontWeight="bold" mb={2}>
              E-Mail Portal
            </Text>
            <Text fontSize="md">
              Introducing P2P Cloud E-Mail Portal, the ultimate solution for
              seamless and secure communication. Our platform boasts a
              user-friendly interface that simplifies the process of sending and
              receiving emails, ensuring a hassle-free experience for all users.
            </Text>
          </Box>

          {/* Project 8 */}
          <Box
            flex={["0 0 80%", "0 0 48%", "0 0 30%"]}
            p={4}
            mb={8}
            bg="white"
            boxShadow="md"
            borderRadius="md"
          >
            <Flex justifyContent="center" alignItems="center" mb={2}>
              <img
                src="https://p2pclouds.org/wp-content/uploads/2024/04/iot_6729539-100x100.png.webp"
                alt="IOT Logo"
                style={{ width: 80, height: 80, marginBottom: 12 }}
              />
            </Flex>
            <Text fontSize={20} textAlign="center" fontWeight="bold" mb={2}>
              IOT
            </Text>
            <Text fontSize="md">
              Explore the possibilities of IoT gadgets, enhancing your daily
              life with effortless connectivity. With the added layer of
              security provided by P2P Clouds, rest easy knowing your devices
              are protected against potential threats. Step into the future of
              smart living with IoT devices.
            </Text>
          </Box>

          {/* Project 8 */}
          <Box
            flex={["0 0 80%", "0 0 48%", "0 0 30%"]}
            p={4}
            mb={8}
            bg="white"
            boxShadow="md"
            borderRadius="md"
          >
            <Flex justifyContent="center" alignItems="center" mb={2}>
              <img
                src="https://p2pclouds.org/wp-content/uploads/2024/04/ahmad_manzoor_app-removebg-preview-100x100.png.webp"
                alt="Ahmad Manzoor Logo"
                style={{ width: 80, height: 80, marginBottom: 12 }}
              />
            </Flex>
            <Text fontSize={20} textAlign="center" fontWeight="bold" mb={2}>
              Ahmad Manzoor
            </Text>
            <Text fontSize="md">
              Ahmad Manzoor's personal portfolio app offers a comprehensive view
              of his professional journey. With booking feature, scheduling time
              with him.Security of P2P Clouds, your interactions and data remain
              secure. Ahmad Manzoor is your gateway to exploring his work.
            </Text>
          </Box>
        </Flex>
      </Box>
      <Box mt={8} mb={16} px={[4, 8, 0]}>
      <Text
        fontSize={["2xl", "3xl"]}
        textAlign="center"
        color="blue.400"
        fontWeight="bold"
        mb={4}
      >
        OUR TEAM
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
      <Flex
        direction={["column", "row"]}
        justifyContent="space-between"
        mt={2}
        mb={8}
      >
        {/* Left Side - Request a Quote */}
        <Box
          flex="0 0 48%"
          bg="teal.500"
          color="white"
          p={20}
          borderRadius="md"
        >
          <Text fontSize="2xl" fontWeight="bold" mb={4}>
            Request a Quote
          </Text>
          <Text mb={8}>Ready to Work Together? Build a project with us!</Text>
          <form onSubmit={handleSubmit}>
            <FormControl mb={12}>
              {/* <FormLabel>Name *</FormLabel> */}
              <Input
                padding={6}
                type="text"
                placeholder="Enter your name"
                borderRadius="13px"
                sx={placeholderStyle}
              />
            </FormControl>
            <FormControl mb={12}>
              {/* <FormLabel>Email *</FormLabel> */}
              <Input
                type="email"
                placeholder="Enter your email address"
                padding={6}
                borderRadius="13px"
                sx={placeholderStyle}
              />
            </FormControl>
            <FormControl mb={12}>
              {/* <FormLabel>Subject</FormLabel> */}
              <Input
                type="text"
                placeholder="Subject"
                padding={6}
                borderRadius="13px"
                sx={placeholderStyle}
              />
            </FormControl>
            <FormControl mb={12}>
              {/* <FormLabel>Comment or Message *</FormLabel> */}
              <Textarea
                placeholder="Message"
                padding={6}
                borderRadius="13px"
                sx={placeholderStyle}
              />
            </FormControl>
            <Button type="submit" colorScheme="blue">
              SEND MESSAGE
            </Button>
          </form>
        </Box>

        {/* Right Side - Learn More From FAQs */}
        <Box flex="0 0 48%" bg="gray.100" p={20} borderRadius="md">
          <Text fontSize="2xl" fontWeight="bold" mb={4}>
            Learn More From FAQs
          </Text>
          <Accordion allowToggle>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left" fontWeight="bold">
                    1. What type of P2P Clouds offer?
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={8} paddingLeft={4} textAlign="left">
                P2P Clouds offers a dynamic array of services tailored to
                revolutionize and optimize various facets of your business. Our
                offerings encompass:
                <ul>
                  <li>CRM (Customer Relationship Management)</li>
                  <li>ERP (Enterprise Resource Planning)</li>
                  <li>AI Chatbot</li>
                  <li>REMS (Real Estate Management System)</li>
                  <li>Blockchain</li>
                  <li>Metaverse</li>
                </ul>
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box
                    flex="1"
                    marginTop={4}
                    textAlign="left"
                    fontWeight="bold"
                  >
                    2. What factors should I consider when selecting an AI
                    Chatbot development company for my business?
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={8} textAlign="left">
                Selecting the ideal AI Chatbot development company requires
                careful consideration of several key factors:
                <ul padding={8}>
                  <li>Expertise and Track Record</li>
                  <li>Customization Options</li>
                  <li>Integration Capabilities</li>
                  <li>Natural Language Processing (NLP) Skills</li>
                  <li>Scalability</li>
                  <li>Security and Compliance Measures</li>
                  <li>User Interface Design</li>
                  <li>Support and Maintenance Services</li>
                </ul>
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box
                    flex="1"
                    textAlign="left"
                    marginTop={4}
                    fontWeight="bold"
                  >
                    3. Can AI technology help us make better decisions?
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4} textAlign="left">
                Yes, AI technology can significantly enhance decision-making
                processes by analyzing vast amounts of data, identifying
                patterns, and providing valuable insights. Its ability to
                process information quickly and objectively can lead to more
                informed and effective decision-making in various fields.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box
                    flex="1"
                    textAlign="left"
                    marginTop={4}
                    fontWeight="bold"
                  >
                    4. How do I choose the right AI Chatbot development company
                    for my business?
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4} textAlign="left">
                Choosing the right AI Chatbot development company requires
                careful consideration of several factors. Look for expertise,
                customization capabilities, integration proficiency, Natural
                Language Processing (NLP) skills, scalability, security
                measures, user-friendly interface design, and ongoing support
                and maintenance services. A company that excels in these aspects
                is likely to provide a tailored and successful AI Chatbot
                solution for your business needs.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box
                    flex="1"
                    textAlign="left"
                    marginTop={4}
                    fontWeight="bold"
                  >
                    5. What sets P2P Clouds apart and why should I choose them?
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4} textAlign="left">
                P2P Clouds stands out for its commitment to delivering
                cutting-edge solutions tailored to your business needs. With a
                proven track record in CRM, ERP, AI Chatbot, REMS, Blockchain,
                and Metaverse services, P2P Clouds ensures innovation,
                customization, and seamless integration. Choose P2P Clouds for a
                strategic partnership that prioritizes growth, efficiency, and
                staying ahead in the dynamic digital landscape.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box
                    flex="1"
                    textAlign="left"
                    marginTop={4}
                    fontWeight="bold"
                  >
                    6. How are P2P Clouds Solutions developers different?
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4} textAlign="left">
                Explore the difference with P2P Clouds developers. Our team
                stands out with a unique blend of expertise, innovation, and
                client success commitment. Specialized in CRM, ERP, AI Chatbot,
                REMS, Blockchain, and Metaverse technologies, our developers
                prioritize continuous learning to deliver exceptional and
                tailored results for your business.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box
                    flex="1"
                    textAlign="left"
                    marginTop={4}
                    fontWeight="bold"
                  >
                    7. Can my business benefit from digital marketing services?
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4} textAlign="left">
                Wondering if your business could benefit from digital marketing
                services? Absolutely! From enhancing online visibility to
                engaging target audiences and generating valuable leads, digital
                marketing is a key driver of success for businesses of all
                sizes. Explore the possibilities and elevate your online
                presence today.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box
                    flex="1"
                    textAlign="left"
                    marginTop={4}
                    fontWeight="bold"
                  >
                    8. Will P2P Clouds Offer Custom Website and Web app?
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4} textAlign="left">
                AUnlock bespoke web development solutions with P2P Clouds. Our
                team excels in custom web development, crafting tailored
                solutions that align with your business objectives. Trust P2P
                Clouds for top-tier services that enhance your online presence,
                providing a personalized and effective digital
                experience.ccordion Content
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </Box>
      </Flex>
    </>
  );
};

export default Home;
