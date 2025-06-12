import { lazy, Suspense, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { BarLoader } from "react-spinners";
export const Home = lazy(() => import("./pages/Home"));

const App = () => {
  const { i18n } = useTranslation();
  useEffect(() => {
    document.body.classList.remove("font-english", "font-ukrainian");

    if (i18n.language === "uk") {
      document.body.classList.add("font-ukrainian");
    } else {
      document.body.classList.add("font-english");
    }
  }, [i18n.language]);

  return (
    <>
      <Suspense
        fallback={
          <div className="h-screen w-full flex items-center justify-center bg-foreground">
            <BarLoader color="#f6c400" height={4} />
          </div>
        }
      >
        <Home />
      </Suspense>
    </>
  );
};

export default App;
