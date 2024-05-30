import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { useDispatch, useSelector } from "react-redux";
import { removeOpenNav } from "./app/features/basicSlice";
import { useEffect } from "react";

const App = () => {
  const { dark, openNav } = useSelector((state) => state.basic);
  const dispatch = useDispatch();
  const handleMain = () => {
    if (openNav) dispatch(removeOpenNav());
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (openNav) dispatch(removeOpenNav());
    });
  }, [dispatch, openNav]);

  return (
    <div className={`${dark ? "bg-slate-800 text-white" : "bg-white"} text-gray-700`}>
      <Header />
      <main onClick={handleMain} className="px-3 lg:px-12 min-h-screen">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default App;
