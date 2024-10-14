import { useTranslation } from "react-i18next";

const LangSwitcher = () => {
  const { t, i18n } = useTranslation();
  const toggleLang = () => {
    i18n.changeLanguage(i18n.language === "ua" ? "en" : "ua");
  };

  return (
    <button className=" w-8" onClick={toggleLang}>
      {t("Language")}
    </button>
  );
};

export default LangSwitcher;
