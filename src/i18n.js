import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(LanguageDetector) // Automatically detects the user's language
  .use(initReactI18next) // Passes i18n instance to react-i18next
  .init({
    resources: {
      en: {
        translation: {
          welcome: "Welcome to Swift Logistics",
          contactUs: "Contact Us",
          emailUs: "Email Us",
          visitUs: "Visit Us",
        },
      },
      fr: {
        translation: {
          welcome: "Bienvenue chez Swift Logistics",
          contactUs: "Contactez-nous",
          emailUs: "Envoyez-nous un e-mail",
          visitUs: "Visitez-nous",
        },
      },
      es: {
        translation: {
          welcome: "Bienvenido a Swift Logistics",
          contactUs: "Contáctenos",
          emailUs: "Envíanos un correo",
          visitUs: "Visítanos",
        },
      },
    },
    fallbackLng: "en", // Default language
    interpolation: {
      escapeValue: false, // React already escapes by default
    },
  });

export default i18n;
