import { useState } from "react";
import { Link, NavLink, Outlet } from "react-router-dom";

import { FaBars } from "react-icons/fa6";
import { FaX } from "react-icons/fa6";
import { PiShoppingCart } from "react-icons/pi";
import Footer from "../components/Footer";
import { useSelector } from "react-redux";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const { totalQuantity } = useSelector((store) => store.cart);

  const closeHamburger = () => {
    setIsOpen(false);
  };

  return (
    <>
      <header className="sticky top-0 w-full flex flex-row items-center justify-between text-black px-4 lg:px-10 bg-white py-4">
        <div className="flex flex-col">
          <Link to='/' className="text-lg font-bold uppercase">
            shop<span className="text-sm capitalize">It</span>
            <p className="absolute top-9 left-8 lg:left-14 text-sm text-black font-thin">
              home of your shopping....
            </p>
          </Link>
        </div>

        <ul className="hidden lg:flex lg:flex-row lg:space-x-8">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/electronics">Electronics</NavLink>
          </li>
          <li>
            <NavLink to="/clothing">Clothing</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact Us</NavLink>
          </li>
        </ul>

        <div className="flex items-center space-x-6">
          <Link to="/cart">
            <div className="relative flex">
              <PiShoppingCart className="text-3xl" />
              {totalQuantity > 0 && (
                <span className="absolute left-2 text-center font-medium bg-orange-400 w-5 h-5 rounded-full ">
                  {totalQuantity}
                </span>
              )}
            </div>
          </Link>
          <div className="lg:hidden">
            {!isOpen && (
              <FaBars className="text-lg" onClick={() => setIsOpen(!isOpen)} />
            )}
            {isOpen && (
              <FaX className="text-lg" onClick={() => setIsOpen(!isOpen)} />
            )}
          </div>
        </div>
      </header>

      <main className="">
        {isOpen && (
          <nav>
            <ul className="lg:hidden fixed flex flex-col items-center space-y-3 z-50 text-lg text-orange-400 font-medium bg-black h-screen w-full opacity-70 py-3">
              <li onClick={closeHamburger}>
                <NavLink to="/">Home</NavLink>
              </li>
              <li onClick={closeHamburger}>
                <NavLink to="/electronics">Electronics</NavLink>
              </li>
              <li onClick={closeHamburger}>
                <NavLink to="/clothing">Clothing</NavLink>
              </li>
              <li onClick={closeHamburger}>
                <NavLink to="/contact">Contact Us</NavLink>
              </li>
            </ul>
          </nav>
        )}
        <Outlet />
      </main>

      <Footer />
    </>
  );
};

export default Header;
