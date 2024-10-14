import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  en: {
    translation: {
      Language: "EN",
      home: "home",
      skills: "skills",
      works: "works",
      contact: "contact",
      resume: "resume",
      "Web Developer": "Web Developer",
      "Hi, I'm Serhii Dovgopol": "Hi, I'm Serhii Dovgopol",
      "Devoted to producing exceptional online environments.":
        "Devoted to producing exceptional online environments.",
      "skills-description": "Here are my skills.",
      "work-description": "Here are some of my works.",
    },
  },
  ua: {
    translation: {
      Language: "UA",
      home: "головна",
      skills: "навички",
      works: "роботи",
      contact: "контакти",
      resume: "резюме",
      "Web Developer": "Веб-розробник",
      "Hi, I'm Serhii Dovgopol": "Привіт, мене звати Сергій Довгопол",
      "Devoted to producing exceptional online environments.":
        "Присвячений створенню виняткового онлайн-середовища.",

      "skills-description": "Mої навички.",
      "work-description": "Деякі з моїх робіт.",
    },
  },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "en", // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option

    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
