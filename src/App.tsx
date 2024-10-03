import { lazy, Suspense } from "react";
import { BarLoader } from "react-spinners";
export const Home = lazy(() => import("./pages/Home"));

const App = () => {
  return (
    <div className="bg-white dark:bg-[#282c34] dark:text-white">
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
