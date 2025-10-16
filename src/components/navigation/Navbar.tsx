import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

const NavbarPage: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-blue-500 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Brand */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="text-2xl font-bold">
              HAYATUL
            </Link>
          </div>

          {/* Hamburger */}
          <div className="flex items-center lg:hidden">
            <button
              onClick={toggleCollapse}
              className="p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-white"
            >
              <svg
                className="h-6 w-6"
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

          {/* Menu */}
          <div
            className={`${
              isOpen ? "block" : "hidden"
            } lg:flex lg:items-center lg:space-x-6 w-full lg:w-auto`}
          >
            <div className="flex flex-col lg:flex-row lg:space-x-6">
              <Link to="/" className="py-2 px-3 hover:bg-blue-600 rounded">
                Home
              </Link>
              <Link
                to="/services"
                className="py-2 px-3 hover:bg-blue-600 rounded"
              >
                Services
              </Link>
              <Link to="/blog" className="py-2 px-3 hover:bg-blue-600 rounded">
                Blog
              </Link>

              {/* Dropdown */}
              <div className="relative group">
                <button className="py-2 px-3 hover:bg-blue-600 rounded flex items-center justify-between w-full lg:w-auto">
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
                <div className="absolute left-0 hidden group-hover:block bg-white text-black mt-1 rounded shadow-lg min-w-[160px] z-50">
                  <Link
                    to="/education/nursery"
                    className="block px-4 py-2 hover:bg-gray-200"
                  >
                    Nursery
                  </Link>
                  <Link
                    to="/education/primary"
                    className="block px-4 py-2 hover:bg-gray-200"
                  >
                    Primary
                  </Link>
                  <Link
                    to="/education/secondary"
                    className="block px-4 py-2 hover:bg-gray-200"
                  >
                    Secondary
                  </Link>
                  <hr />
                  <Link
                    to="/education/other"
                    className="block px-4 py-2 hover:bg-gray-200"
                  >
                    Separated link
                  </Link>
                </div>
              </div>

              <Link
                to="/health/progress"
                className="py-2 px-3 hover:bg-blue-600 rounded"
              >
                Health
              </Link>
              <Link to="/about" className="py-2 px-3 hover:bg-blue-600 rounded">
                About
              </Link>
              <Link
                to="/contact"
                className="py-2 px-3 hover:bg-blue-600 rounded"
              >
                Contact
              </Link>
            </div>

            {/* Social Icons */}
            <div className="flex space-x-3 mt-3 lg:mt-0 lg:ml-4">
              <a
                href="https://facebook.com/hayatulislamiya"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-300"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://twitter.com/hayatulislamiya"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-300"
              >
                <FaTwitter />
              </a>
              <a
                href="#!"
                className="hover:text-gray-300"
              >
                <FaLinkedinIn />
              </a>
              <a
                href="https://instagram.com/hayatulislamiya"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-300"
              >
                <FaInstagram />
              </a>
              <a
                href="https://www.youtube.com/channel/UCgpGjY3Rd97l53n8r_sSwBQ"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-300"
              >
                <FaYoutube />
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavbarPage;
