import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import logo from "@/assets/hayatul-logo.svg";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false); // mobile menu
  const [desktopDropdownOpen, setDesktopDropdownOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);

  const desktopDropdownRef = useRef<HTMLDivElement>(null);

  // Close desktop dropdown if clicked outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        desktopDropdownRef.current &&
        !desktopDropdownRef.current.contains(event.target as Node)
      ) {
        setDesktopDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const menuItems = [
    { name: "Home", link: "/" },
    { name: "Services", link: "/services" },
    { name: "Blog", link: "/blog" },
    { name: "Health", link: "/health/progress" },
    { name: "About", link: "/about" },
    { name: "Contact", link: "/contact" },
  ];

  const educationItems = [
    { name: "Nursery", link: "/education/nursery" },
    { name: "Primary", link: "/education/primary" },
    { name: "Secondary", link: "/education/secondary" },
    { name: "Other", link: "/education/other" },
  ];

  const socialIcons = [
    { icon: <FaFacebookF />, link: "https://facebook.com/hayatulislamiya" },
    { icon: <FaTwitter />, link: "https://twitter.com/hayatulislamiya" },
    { icon: <FaInstagram />, link: "https://instagram.com/hayatulislamiya" },
    {
      icon: <FaYoutube />,
      link: "https://www.youtube.com/channel/UCgpGjY3Rd97l53n8r_sSwBQ",
    },
  ];

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Brand */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/">
              <img
                src={logo}
                alt="Hayatul Islamiya Logo"
                className="h-10 w-auto"
              />
            </Link>
          </div>

          {/* Hamburger */}
          <div className="flex lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
            >
              <svg
                className="h-6 w-6 text-gray-700"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex lg:items-center lg:space-x-6">
            <div className="flex flex-row lg:space-x-6 items-center">
              {menuItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.link}
                  className="py-2 px-3 rounded hover:bg-cyan-50 hover:text-cyan-500 transition-colors duration-300"
                >
                  {item.name}
                </Link>
              ))}

              {/* Desktop Dropdown */}
              <div className="relative" ref={desktopDropdownRef}>
                <button
                  onClick={() => setDesktopDropdownOpen(!desktopDropdownOpen)}
                  className="py-2 px-3 rounded flex items-center justify-between hover:bg-cyan-50 hover:text-cyan-500 transition-colors duration-300"
                >
                  Education
                  <svg
                    className="ml-1 h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                <div
                  className={`absolute left-0 bg-white text-gray-700 mt-2 rounded-lg shadow-lg min-w-[160px] z-50 ${
                    desktopDropdownOpen ? "block" : "hidden"
                  }`}
                >
                  {educationItems.map((item) => (
                    <Link
                      key={item.name}
                      to={item.link}
                      className="block px-4 py-2 hover:bg-cyan-50 hover:text-cyan-500 transition-colors duration-200"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex space-x-3 ml-6">
              {socialIcons.map((item, idx) => (
                <a
                  key={idx}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full hover:bg-cyan-50 hover:text-cyan-500 transition-colors duration-300"
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } lg:hidden bg-white shadow-md`}
      >
        <div className="flex flex-col px-4 pt-2 pb-4 space-y-1">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              to={item.link}
              className="py-2 px-3 rounded hover:bg-cyan-50 hover:text-cyan-500 transition-colors duration-300"
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </Link>
          ))}

          {/* Mobile Dropdown */}
          <div className="relative">
            <button
              onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)}
              className="w-full text-left py-2 px-3 rounded flex items-center justify-between hover:bg-cyan-50 hover:text-cyan-500 transition-colors duration-300"
            >
              Education
              <svg
                className="ml-1 h-4 w-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            <div
              className={`${
                mobileDropdownOpen ? "block" : "hidden"
              } flex flex-col pl-4`}
            >
              {educationItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.link}
                  className="py-2 px-3 rounded hover:bg-cyan-50 hover:text-cyan-500 transition-colors duration-200"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
