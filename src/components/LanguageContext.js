import React, { createContext, useState, useContext } from 'react';

// Create a context for the language
const LanguageContext = createContext();

// Create a provider component
const LanguageProvider = ({ children }) => {
  const [isFrench, setIsFrench] = useState(false);

  return (
    <LanguageContext.Provider value={{ isFrench, setIsFrench }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Create a custom hook to use the LanguageContext
const useLanguage = () => useContext(LanguageContext);

export { LanguageProvider, useLanguage, LanguageContext };
