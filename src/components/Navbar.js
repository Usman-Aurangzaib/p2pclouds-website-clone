import React from 'react';
import {
  Box,
  Flex,
  Image,
  HStack,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  IconButton,
  Stack,
  useDisclosure,
} from '@chakra-ui/react';
import { ChevronDownIcon, HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { Link as RouterLink } from 'react-router-dom';
import { products } from '../productsData'; // Import products data
import LanguageSwitcher from '../LanguageSwitcher'; // Import LanguageSwitcher component
import { useLanguage } from '../LanguageContext'; // Import useLanguage hook

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { language, getText } = useLanguage(); // Access language and getText function from useLanguage hook

  return (
    <Box bg="gray.100" px={8}>
      <Flex h={24} alignItems="center" justifyContent="space-between">
        <Box>
          <Image
            src="https://p2pclouds.org/wp-content/uploads/2024/03/cropped-clouds_p2p-logo-120x92.png"
            alt="Logo"
            boxSize="50px"
          />
        </Box>
        <HStack spacing={12} alignItems="center">
          <HStack
            as="nav"
            spacing={8}
            display={{ base: 'none', md: 'flex' }}
            fontSize={24}
            color="#00C3FF"
          >
            <RouterLink to="/">{getText('home')}</RouterLink> {/* Use getText to translate */}
            <Menu>
              <MenuButton
                as={Button}
                rightIcon={<ChevronDownIcon />}
                fontSize={24}
                color="#00C3FF"
              >
                {getText('products')}
              </MenuButton>
              <MenuList>
                {Object.keys(products).map((productName) => (
                  <RouterLink
                    key={productName}
                    to={`/products/${productName.replaceAll(' ', '-')}`}
                  >
                    <MenuItem>{productName}</MenuItem>
                  </RouterLink>
                ))}
              </MenuList>
            </Menu>
            <RouterLink to="/services">{getText('services')}</RouterLink>
            <RouterLink to="/about">{getText('about')}</RouterLink>
            <RouterLink to="/contact">{getText('contact')}</RouterLink>
            <RouterLink to="/portfolio">{getText('portfolio')}</RouterLink>
            <RouterLink to="/newsroom">{getText('newsroom')}</RouterLink>
          </HStack>
          <IconButton
            size="md"
            right={8}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label="Open Menu"
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
        </HStack>
      </Flex>

      {isOpen ? (
        <Box pb={4} display={{ md: 'none' }}>
          <Stack as="nav" spacing={4}>
            <RouterLink to="/" onClick={onClose}>
              {getText('home')}
            </RouterLink>
            <Menu>
              <MenuButton
                as={Button}
                rightIcon={<ChevronDownIcon />}
                fontSize={24}
                right={26}
                color="#00C3FF"
              >
                {getText('products')}
              </MenuButton>
              <MenuList>
                {Object.keys(products).map((productName) => (
                  <RouterLink
                    key={productName}
                    to={`/products/${productName.replaceAll(' ', '-')}`}
                    onClick={onClose}
                  >
                    <MenuItem>{productName}</MenuItem>
                  </RouterLink>
                ))}
              </MenuList>
            </Menu>
            <RouterLink to="/services" onClick={onClose}>
              {getText('services')}
            </RouterLink>
            <RouterLink to="/about" onClick={onClose}>
              {getText('about')}
            </RouterLink>
            <RouterLink to="/contact" onClick={onClose}>
              {getText('contact')}
            </RouterLink>
            <RouterLink to="/portfolio" onClick={onClose}>
              {getText('portfolio')}
            </RouterLink>
            <RouterLink to="/newsroom" onClick={onClose}>
              {getText('newsroom')}
            </RouterLink>
          </Stack>
        </Box>
      ) : null}

      <LanguageSwitcher /> 
    </Box>
  );
};

export default Navbar;
