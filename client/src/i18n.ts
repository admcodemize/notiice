import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

import en from "./locale/en.json"

export default i18n
    .use(Backend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
    resources: { // Where we're going to put translations' files
        en: { ...en }
    },
    lng: "en",     // Set the initial language of the App
    fallbackLng: "en"
});