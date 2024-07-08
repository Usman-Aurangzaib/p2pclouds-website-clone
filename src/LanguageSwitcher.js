import React, { useState } from 'react';
import { Box, IconButton, Tooltip } from '@chakra-ui/react';
import { MdLanguage } from 'react-icons/md';
import UkIcon from './icons/uk.svg'; 
import JapanIcon from './icons/jp.svg'; 
import ArabIcon from './icons/uae.svg';
import { useLanguage } from './LanguageContext';


const LanguageSwitcher = () => {
  const { changeLanguage, language } = useLanguage();
  const [showLanguages, setShowLanguages] = useState(false);

  const handleLanguageChange = (lang) => {
    changeLanguage(lang);
    setShowLanguages(false); // Hide language options after selection
  };

  const toggleLanguageOptions = () => {
    setShowLanguages(!showLanguages);
  };

  const languages = [
    { code: 'en',  icon: UkIcon },
    { code: 'ja',  icon: JapanIcon },
    { code: 'ar',  icon: ArabIcon },
   
  ];

  return (
    <Box className="gt_switcher_wrapper" style={{ position: 'fixed', bottom: '30px', left: '15px', zIndex: '999999' }}>
        <IconButton
          icon={<MdLanguage />}
           variant="unstyled"
          aria-label="Language"
          color="teal.500"
          fontSize="72px"
          onClick={toggleLanguageOptions}
          mr={4}
        />
      {showLanguages && (
        <Box style={{display: 'flex', position: 'absolute' , bottom: '50px', left: '5px', zIndex: '' }}>
          {languages.map((lang) => (
    
              <IconButton
                icon={<img src={lang.icon} alt={lang.label} style={{ height: '42px', width: '42px' }} />}
                aria-label={lang.label}
                onClick={() => handleLanguageChange(lang.code)}
                mr={4}
                variant="unstyled"
              />
          
          ))}
        </Box>
      )}
    </Box>
  );
};

export default LanguageSwitcher;
