// LanguageContext.js
import React, { createContext, useState, useContext } from 'react';

// Define your supported languages and their translations here
const languageOptions = {
  en: {
    home: 'Home',
    about: 'About',
    services: 'Services',
    contact: 'Contact',
    portfolio: 'Portfolio',
    newsroom: 'Newsroom',
    // Add more translations as needed
  },
  ja: {
    home: 'ホーム',
    about: '約',
    services: 'サービス',
    contact: '連絡先',
    portfolio: 'ポートフォリオ',
    newsroom: 'ニュースルーム',
    // Add more translations as needed
  },
  ar: {
    home: 'الصفحة الرئيسية',
    about: 'حول',
    services: 'الخدمات',
    contact: 'اتصل',
    portfolio: 'ملف',
    newsroom: 'غرفة الأخبار',
    // Add more translations as needed
  },
};

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en'); // Default language is English

  const changeLanguage = (lang) => {
    setLanguage(lang);
  };

  const getText = (key) => {
    return languageOptions[language][key] || key; // Return translation if available, else return key
  };

  return (
    <LanguageContext.Provider value={{ language, changeLanguage, getText }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
