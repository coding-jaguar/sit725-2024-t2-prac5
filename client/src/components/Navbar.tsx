import React from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  const logo =
    "data:image/png;base64,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";
  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/">
              <img className="h-16 w-16" src={logo} alt="Logo" />
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link
                to="/"
                className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
              >
                All Cats
              </Link>
              <Link
                to="/add-cat"
                className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
              >
                Add Cat
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="-mr-2 flex md:hidden">
            <button
              type="button"
              className="bg-gray-100 inline-flex items-center justify-center p-2 rounded-md text-gray-500 hover:text-gray-900 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              <span className="sr-only">Open main menu</span>
              {/* Icon for menu */}
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className="md:hidden">
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link
            to="/"
            className="text-gray-700 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium"
          >
            All Cats
          </Link>
          <Link
            to="/add-cat"
            className="text-gray-700 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium"
          >
            Add Cat
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
