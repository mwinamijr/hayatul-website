import React from "react";
import { Link } from "react-router-dom";

const FooterPage: React.FC = () => {
  return (
    <footer className="bg-gray-200 text-gray-800 font-sans pt-8 mt-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          {/* About */}
          <div>
            <h5 className="text-xl font-bold mb-3">Hayatul Islam</h5>
            <p>
              Pata fursa ya kutembelea sehemu mbalimbali na kujionea mambo yote
              yanayopatikana katika taasisi yetu.
            </p>
          </div>

          {/* School Links */}
          <div>
            <h5 className="text-xl font-bold mb-3">School Links</h5>
            <ul className="space-y-2">
              <li>
                <Link to="/school-management" className="hover:underline">
                  School Management
                </Link>
              </li>
              <li>
                <Link to="/primary-school" className="hover:underline">
                  Shule ya Msingi
                </Link>
              </li>
              <li>
                <Link to="/secondary-school" className="hover:underline">
                  Shule ya Sekondari
                </Link>
              </li>
              <li>
                <Link to="/other-link" className="hover:underline">
                  Link 4
                </Link>
              </li>
            </ul>
          </div>

          {/* External Links */}
          <div>
            <h5 className="text-xl font-bold mb-3">Links</h5>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://www.necta.go.tz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  NECTA
                </a>
              </li>
              <li>
                <a
                  href="https://www.nacte.go.tz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  NACTE
                </a>
              </li>
              <li>
                <a
                  href="https://www.moe.go.tz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  Wizara ya Elimu
                </a>
              </li>
              <li>
                <a
                  href="https://www.moh.go.tz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  Wizara ya Afya
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-300 mt-8 pt-4 text-center text-gray-600">
          &copy; {new Date().getFullYear()} Copyright:{" "}
          <a
            href="https://www.mdbootstrap.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            MDBootstrap.com
          </a>
        </div>
      </div>
    </footer>
  );
};

export default FooterPage;
