import React, { useState } from 'react';
import { useLanguage } from '../LanguageContext';
import { Box, Flex, IconButton, Tooltip } from '@chakra-ui/react';
import { MdLanguage } from 'react-icons/md'; // Icon for Earth

const LanguageSelector = () => {
  const { language, changeLanguage } = useLanguage();
  const [showCountryIcons, setShowCountryIcons] = useState(false);

  const handleLanguageChange = (lang) => {
    changeLanguage(lang);
    setShowCountryIcons(false); 
  };

  const toggleCountryIcons = () => {
    setShowCountryIcons(!showCountryIcons);
  };

  return (
    <Flex position="fixed" bottom={4} left={4} align="center">
      <Tooltip label="Select Language">
        <IconButton
          icon={<MdLanguage />}
          aria-label="Language"
          variant="ghost"
          fontSize="80px"
          color='teal.900'
          onClick={toggleCountryIcons}
        />
      </Tooltip>
      {showCountryIcons && (
        <>
          <Tooltip label="English (UK)">
            <Box
              as="button"
              ml={2}
              onClick={() => handleLanguageChange('en')}
              fontSize="24px"
            >
              UK
            </Box>
          </Tooltip>
          <Tooltip label="Japanese">
            <Box
              as="button"
              ml={2}
              onClick={() => handleLanguageChange('ja')}
              fontSize="24px"
            >
              🇯🇵
            </Box>
          </Tooltip>
          <Tooltip label="Arabic">
            <Box
              as="button"
              ml={2}
              onClick={() => handleLanguageChange('ar')}
              fontSize="24px"
            >
              🇦🇪
            </Box>
          </Tooltip>
        </>
      )}
    </Flex>
  );
};

export default LanguageSelector;
