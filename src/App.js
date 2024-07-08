import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ChakraProvider, Flex, Box, IconButton , Tooltip  } from '@chakra-ui/react';
import { MdNotifications, MdFacebook} from 'react-icons/md';
import Navbar from './components/Navbar';
import SubscribeModal from './components/SubscribeModal';
import Home from './components/Home';
import Footer from './components/footer';
import ProductPage from './components/ProductPage'; 
import ServicesPage from './components/ServicesPage';
import PortfolioPage from './components/PortfolioPage'; 
import './App.css';
import { products } from './productsData'; // Import products data
import AboutUsPage from './components/AboutUsPage';
import NewsroomPage from './components/NewsroomPage'; 
import ContactPage from './components/ContactPage';
import LanguageSwitcher from './LanguageSwitcher';
import { LanguageProvider } from './LanguageContext';
import ArticleDetail from './components/ArticleDetail';
function App() {
  const handleNotificationClick = () => {
    if (!("Notification" in window)) {
      alert("This browser does not support desktop notification");
    } else if (Notification.permission === "granted") {
      alert("You have already granted permission for notifications");
    } else if (Notification.permission !== 'denied') {
      Notification.requestPermission().then(function(permission) {
        if (permission === "granted") {
          new Notification("P2P Clouds - Notifications Enabled", {
            body: "You will now receive notifications from P2P Clouds."
          });
        }
      });
    }
  };


  const openFacebook = () => {
    window.open('https://www.facebook.com/', '_blank');
  };

  const openLinkedIn = () => {
    window.open('https://www.linkedin.com/', '_blank');
  };

  return (
    <ChakraProvider>
    <LanguageProvider> {/* Wrap your entire application with LanguageProvider */}
      <Router>
        <Flex direction="column" minHeight="100vh">
          <Box>
            <Navbar />
            <SubscribeModal />
          </Box>
          <Flex flex="1" className="main-content" direction="column">
            <Routes>
              <Route exact path="/" element={<Home />} />
              {Object.entries(products).map(([productName, productDetails]) => (
                <Route
                  key={productName}
                  path={`/products/${productName.replaceAll(' ', '-')}`}
                  element={<ProductPage {...productDetails} />}
                />
              ))}
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/about" element={<AboutUsPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/portfolio" element={<PortfolioPage />} />
              <Route path="/newsroom" element={<NewsroomPage />} />
              <Route path="/article/:id" element={<ArticleDetail/>} />
            </Routes>
          </Flex>
          <Box mt="auto">
            <Footer />
          </Box>
          <LanguageSwitcher /> {/* Include LanguageSwitcher component */}
          <IconButton
            icon={<MdNotifications />}
            size="lg"
            variant="ghost"
            aria-label="Enable Notifications"
            onClick={handleNotificationClick}
            position="fixed"
            bottom={12}
            right={4}
            zIndex="tooltip"
            color="teal.900"
            fontSize="60px"
          />
          <Tooltip label="Visit Facebook">
            <IconButton
              icon={<MdFacebook />}
              aria-label="Facebook"
              position="fixed"
              top={4}
              right={2}
              colorScheme="facebook"
              onClick={openFacebook}
              fontSize="50px"
              height="80px"
            />
          </Tooltip>
        </Flex>
      </Router>
    </LanguageProvider>
  </ChakraProvider>
  );
}

export default App;