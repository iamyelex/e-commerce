import Header from "../pages/Header";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    // <div className="grid grid-rows-[auto_1fr_auto] ">
    <div className="flex flex-col min-h-[100vh] ">
      <Header />

      <main className="flex-1">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default AppLayout;
