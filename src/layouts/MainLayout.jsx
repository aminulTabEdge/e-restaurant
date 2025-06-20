import { Outlet } from "react-router";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-[calc(100vh-284px)]">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default MainLayout;
