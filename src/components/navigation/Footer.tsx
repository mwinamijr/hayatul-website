import React from "react";
import { Link } from "react-router-dom";

const FooterPage: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-200 font-sans pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-left">
          {/* About */}
          <div>
            <h5 className="text-2xl font-bold mb-4 text-orange-500">Hayatul Islamiya</h5>
            <p className="text-gray-400 leading-relaxed">
              Pata fursa ya kutembelea sehemu mbalimbali na kujionea mambo yote
              yanayopatikana katika taasisi yetu.
            </p>
          </div>

          {/* School Links */}
          <div>
            <h5 className="text-xl font-semibold mb-4 text-white">School Links</h5>
            <ul className="space-y-2">
              <li>
  <a
    href="https://secondary.hayatulislamiya.com"
    target="_blank"
    rel="noopener noreferrer"
    className="hover:text-orange-500 transition-colors duration-300"
  >
    Secondary SIMS
  </a>
</li>

              <li>
                <Link
                  to="/primary-school"
                  className="hover:text-orange-500 transition-colors duration-300"
                >
                  Shule ya Msingi
                </Link>
              </li>
              <li>
                <Link
                  to="/secondary-school"
                  className="hover:text-orange-500 transition-colors duration-300"
                >
                  Shule ya Sekondari
                </Link>
              </li>
              <li>
                <Link
                  to="/other-link"
                  className="hover:text-orange-500 transition-colors duration-300"
                >
                  Link 4
                </Link>
              </li>
            </ul>
          </div>

          {/* External Links */}
          <div>
            <h5 className="text-xl font-semibold mb-4 text-white">Links</h5>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://www.necta.go.tz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-orange-500 transition-colors duration-300"
                >
                  NECTA
                </a>
              </li>
              <li>
                <a
                  href="https://www.nacte.go.tz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-orange-500 transition-colors duration-300"
                >
                  NACTE
                </a>
              </li>
              <li>
                <a
                  href="https://www.moe.go.tz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-orange-500 transition-colors duration-300"
                >
                  Wizara ya Elimu
                </a>
              </li>
              <li>
                <a
                  href="https://www.moh.go.tz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-orange-500 transition-colors duration-300"
                >
                  Wizara ya Afya
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 mt-10 pt-6 text-center text-gray-400 text-sm">
          &copy; {new Date().getFullYear()} Copyright:{" "}
          <a
            href="https://techdometz.github.io"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-orange-500 transition-colors duration-300"
          >
            Techdometz
          </a>
        </div>
      </div>
    </footer>
  );
};

export default FooterPage;
