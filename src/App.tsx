import { lazy, Suspense } from "react";
import { BarLoader } from "react-spinners";
export const Home = lazy(() => import("./pages/Home"));

const App = () => {
  return (
    <div className="bg-white dark:bg-black dark:text-white">
      <Suspense
        fallback={
          <div className="h-screen w-full flex items-center justify-center ">
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
