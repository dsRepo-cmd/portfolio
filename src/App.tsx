import { lazy, Suspense } from "react";
import { useTranslation } from "react-i18next";
import { BarLoader } from "react-spinners";
export const Home = lazy(() => import("./pages/Home"));

const App = () => {
  const { i18n } = useTranslation();
  const currentLanguage = i18n.language;
  console.log(currentLanguage);

  const fontClass = currentLanguage === "ua" ? "font_ua" : "font_en";

  return (
    <div className={`bg-white dark:bg-[#282c34] dark:text-white ${fontClass}`}>
      <Suspense
        fallback={
          <div className="h-screen w-full flex items-center justify-center bg-[#282c34]">
            <BarLoader color="#f6c400" height={4} />
          </div>
        }
      >
        <Home />
      </Suspense>
    </div>
  );
};

export default App;
