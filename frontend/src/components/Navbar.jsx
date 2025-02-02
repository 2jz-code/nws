import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "../assets/400x250.png";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const location = useLocation();

  // Scroll to specific section
  useEffect(() => {
    const hash = location.hash; // Extracts the hash (e.g., #about)
    if (hash) {
      const section = document.querySelector(hash);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleDropdown = () => {
    setDropdownOpen((prev) => !prev);
  };

  return (
    <nav
      className={`fixed w-full z-20 top-0 start-0 border-gray-200 ${
        scrolled ? "bg-white shadow-md" : "bg-transparent"
      } transition-colors duration-300`}
    >
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link to="/">
          <img src={Logo} className="h-10 w-20" alt="Company Logo" />
        </Link>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <Link to="/prices">
            <button
              type="button"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Get Started
            </button>
          </Link>
        </div>
        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-sticky"
        >
          <ul
            className={`flex flex-col p-4 md:p-0 mt-4 font-medium border rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 transition-colors duration-300 ${
              scrolled
                ? "bg-white text-gray-900"
                : "bg-transparent text-gray-900"
            }`}
          >
            <li>
              <Link
                to="/#home"
                className={`block py-2 px-3 rounded md:p-0 md:hover:text-blue-400 ${
                  scrolled ? "hover:bg-white" : "hover:text-blue-700"
                } transition ease-in-out duration-200`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/#about"
                className={`block py-2 px-3 rounded md:p-0 md:hover:text-blue-400 ${
                  scrolled ? "hover:bg-white" : "hover:text-blue-700"
                } transition ease-in-out duration-200`}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/#services"
                className={`block py-2 px-3 rounded md:p-0 md:hover:text-blue-400 ${
                  scrolled ? "hover:bg-white" : "hover:text-blue-700"
                } transition ease-in-out duration-200`}
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                to="/#contact"
                className={`block py-2 px-3 rounded md:p-0 md:hover:text-blue-400 ${
                  scrolled ? "hover:bg-white" : "hover:text-blue-700"
                } transition ease-in-out duration-200`}
              >
                Contact
              </Link>
            </li>
            <li className="relative">
              <button
                onClick={toggleDropdown}
                className="flex items-center justify-between w-full py-2 px-3 text-gray-900 rounded-sm transition ease-in-out duration-200 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-400 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
              >
                More
                <svg
                  className="w-2.5 h-2.5 ms-2.5"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </button>
              {dropdownOpen && (
                <div className="absolute mt-2 z-10 font-normal bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-44 dark:bg-gray-700 dark:divide-gray-600">
                  <ul className="py-2 text-sm rounded border border-black text-gray-700 dark:text-gray-400">
                    <li>
                      <Link
                        to="/prices"
                        className="block px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Pricing
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/form"
                        className="block px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Quote
                      </Link>
                    </li>
                  </ul>
                </div>
              )}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
