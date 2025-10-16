import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false); // mobile menu
  const [dropdownOpen, setDropdownOpen] = useState(false); // education dropdown
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown if clicked outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Brand */}
          <div className="flex-shrink-0 flex items-center">
            <Link
              to="/"
              className="text-2xl font-bold text-orange-500 hover:text-orange-600 transition-colors duration-300"
            >
              HAYATUL
            </Link>
          </div>

          {/* Hamburger */}
          <div className="flex lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
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
              {[ 
                { name: "Home", link: "/" },
                { name: "Services", link: "/services" },
                { name: "Blog", link: "/blog" },
                { name: "Health", link: "/health/progress" },
                { name: "About", link: "/about" },
                { name: "Contact", link: "/contact" },
              ].map((item) => (
                <Link
                  key={item.name}
                  to={item.link}
                  className="py-2 px-3 rounded hover:bg-orange-50 hover:text-orange-500 transition-colors duration-300"
                >
                  {item.name}
                </Link>
              ))}

              {/* Dropdown */}
              <div className="relative" ref={dropdownRef}>
                <button
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className="py-2 px-3 rounded flex items-center justify-between hover:bg-orange-50 hover:text-orange-500 transition-colors duration-300"
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
                    dropdownOpen ? "block" : "hidden"
                  }`}
                >
                  <Link
                    to="/education/nursery"
                    className="block px-4 py-2 hover:bg-orange-50 hover:text-orange-500 transition-colors duration-200"
                  >
                    Nursery
                  </Link>
                  <Link
                    to="/education/primary"
                    className="block px-4 py-2 hover:bg-orange-50 hover:text-orange-500 transition-colors duration-200"
                  >
                    Primary
                  </Link>
                  <Link
                    to="/education/secondary"
                    className="block px-4 py-2 hover:bg-orange-50 hover:text-orange-500 transition-colors duration-200"
                  >
                    Secondary
                  </Link>
                  <hr className="border-gray-200 my-1" />
                  <Link
                    to="/education/other"
                    className="block px-4 py-2 hover:bg-orange-50 hover:text-orange-500 transition-colors duration-200"
                  >
                    Other
                  </Link>
                </div>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex space-x-3 ml-6">
              {[
                { icon: <FaFacebookF />, link: "https://facebook.com/hayatulislamiya" },
                { icon: <FaTwitter />, link: "https://twitter.com/hayatulislamiya" },
                { icon: <FaInstagram />, link: "https://instagram.com/hayatulislamiya" },
                { icon: <FaYoutube />, link: "https://www.youtube.com/channel/UCgpGjY3Rd97l53n8r_sSwBQ" },
              ].map((item, idx) => (
                <a
                  key={idx}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full hover:bg-orange-50 hover:text-orange-500 transition-colors duration-300"
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`${isOpen ? "block" : "hidden"} lg:hidden bg-white shadow-md`}>
        <div className="flex flex-col px-4 pt-2 pb-4 space-y-1">
          {[ 
            { name: "Home", link: "/" },
            { name: "Services", link: "/services" },
            { name: "Blog", link: "/blog" },
            { name: "Health", link: "/health/progress" },
            { name: "About", link: "/about" },
            { name: "Contact", link: "/contact" },
          ].map((item) => (
            <Link
              key={item.name}
              to={item.link}
              className="py-2 px-3 rounded hover:bg-orange-50 hover:text-orange-500 transition-colors duration-300"
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </Link>
          ))}

          {/* Mobile Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="w-full text-left py-2 px-3 rounded flex items-center justify-between hover:bg-orange-50 hover:text-orange-500 transition-colors duration-300"
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
            <div className={`${dropdownOpen ? "block" : "hidden"} flex flex-col pl-4`}>
              <Link
                to="/education/nursery"
                className="py-2 px-3 rounded hover:bg-orange-50 hover:text-orange-500 transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                Nursery
              </Link>
              <Link
                to="/education/primary"
                className="py-2 px-3 rounded hover:bg-orange-50 hover:text-orange-500 transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                Primary
              </Link>
              <Link
                to="/education/secondary"
                className="py-2 px-3 rounded hover:bg-orange-50 hover:text-orange-500 transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                Secondary
              </Link>
              <Link
                to="/education/other"
                className="py-2 px-3 rounded hover:bg-orange-50 hover:text-orange-500 transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                Other
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
