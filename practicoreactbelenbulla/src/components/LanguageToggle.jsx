import React from 'react';
import { useLanguageContext } from '../context/LanguageContext';

const LanguageToggle = () => {
    const { toggleLanguage } = useLanguageContext();

    return (
        <button onClick={toggleLanguage}>
            Cambiar Idioma
        </button>
    );
};

export default LanguageToggle;
