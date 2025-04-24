import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";
export default function Navbar() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const navLink = [
    { name: "Live Score", path: "/live-score" },
    { name: "Schedule", path: "/schedule" },
    { name: "Teams", path: "/team" },
    { name: "stats", path: "/stats" },
    { name: "news", path: "/news" },
  ];
  return (
    <div className="sticky top-0 z-50 bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-orange-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold">IPL</span>
            </div>
            <span className="font-bold text-lg">Score Tracker</span>
          </Link>

          {/* desktop view */}
          <nav className="hidden md:flex space-x-6">
            {navLink.map((link, index) => (
              <Link
                key={index}
                to={link.path}
                className="text-sm font-medium transition-color hover:text-orange-600"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-md text-gray-500 hover:text-gray-600"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
        {/* Mobile Naviagtion */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t">
            <div className="flex flex-col space-y-4">
              {navLink.map((items, index) => (
                <Link
                  className="text-sm font-medium transition-color hover:text-orange-400"
                  to={items.path}
                >
                  {items.name}
                </Link>
              ))}
            </div>
          </nav>
        )}
      </div>
    </div>
  );
}
