import { Suspense } from "react";
import { BarLoader } from "react-spinners";
import Home from "./pages/Home";

const App = () => {
  return (
    <Suspense
      fallback={
        <div className="h-screen w-full flex items-center justify-center">
          <BarLoader color="#f6c400" height={4} />
        </div>
      }
    >
      <Home />
    </Suspense>
  );
};

export default App;
