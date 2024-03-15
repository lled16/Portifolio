"use client";
import React from "react";
import { useTranslation } from "react-i18next";
import brasilLogo from '../../assets/icons/eua.svg';
import euaLogo from '../../assets/icons/brasil.svg';
import '../SeletorLinguagem/SeletorLinguagem.Module.css';

const LanguageSelector: React.FC = () => {
    const { i18n } = useTranslation();

    const handleChangeLanguage = (value: string) => {
        i18n.changeLanguage(value);
    };

    return (
        <div className="selector">
            <img src={euaLogo} className="bandeira" width={50} onClick={() => handleChangeLanguage('pt')} />
            <img src={brasilLogo} className="bandeira" width={50} onClick={() => handleChangeLanguage('en')} />
        </div>
    );
};

export default LanguageSelector;
