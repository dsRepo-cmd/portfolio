import { useTranslation } from "react-i18next";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  return (
    <div className="flex gap-2 md:gap-6">
      <button
        className={` hover:text-secondary ${
          i18n.language === "en" && "text-secondary"
        }`}
        onClick={() => i18n.changeLanguage("en")}
      >
        EN
      </button>
      <button
        className={` hover:text-secondary ${
          i18n.language === "uk" && "text-secondary"
        }`}
        onClick={() => i18n.changeLanguage("uk")}
      >
        UA
      </button>
    </div>
  );
};

export default LanguageSwitcher;
