import React from 'react';
import { useLanguageContext } from '../context/LanguageContext';

const CurrentLanguage = () => {
    const { language } = useLanguageContext();

    return <h2>Idioma actual: {language === 'es' ? 'Español' : 'Inglés'}</h2>;
};

export default CurrentLanguage;
