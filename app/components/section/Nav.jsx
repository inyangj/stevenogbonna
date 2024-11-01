"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { HiMenuAlt3, HiX } from "react-icons/hi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isTop, setIsTop] = useState(true);

  // Toggle the mobile menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Check if the user is scrolling to the top of the page
  useEffect(() => {
    const handleScroll = () => {
      setIsTop(window.scrollY === 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed w-full z-30 transition-all ${
        isTop ? "bg-transparent" : "bg-white bg-opacity-70 shadow-md"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center px-4 py-4">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <Link href="/">Swits Visuals</Link>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-6">
          <Link href="/" className="hover:text-gray-600">
            Home
          </Link>
          <Link href="/about" className="hover:text-gray-600">
            About
          </Link>
          <Link href="/faq" className="hover:text-gray-600">
            FAQ
          </Link>
          <Link href="/contact" className="hover:text-gray-600">
            Contact
          </Link>
          <Link href="https://instagram.com" className="hover:text-gray-600">
            Instagram
          </Link>
        </div>

        {/* Hamburger Icon for Mobile Menu */}
        <div className="md:hidden">
          {isOpen ? (
            <HiX className="text-3xl cursor-pointer" onClick={toggleMenu} />
          ) : (
            <HiMenuAlt3
              className="text-3xl cursor-pointer"
              onClick={toggleMenu}
            />
          )}
        </div>

        {/* Mobile Menu Links */}
        {isOpen && (
          <div className="md:hidden  absolute top-16 left-0 w-full bg-black bg-opacity-95 p-6">
            <Link
              href="/"
              className="block text-white py-2 text-center hover:bg-gray-700 rounded"
              onClick={toggleMenu}
            >
              HOME
            </Link>
            <Link
              href="/about"
              className="block text-white py-2 text-center hover:bg-gray-700 rounded"
              onClick={toggleMenu}
            >
              ABOUT
            </Link>
            <Link
              href="/faq"
              className="block text-white py-2 text-center hover:bg-gray-700 rounded"
              onClick={toggleMenu}
            >
              FAQ
            </Link>
            <Link
              href="/contact"
              className="block text-white py-2 text-center hover:bg-gray-700 rounded"
              onClick={toggleMenu}
            >
              CONTACT
            </Link>
            <Link
              href="https://instagram.com"
              className="block border border-white text-white py-2 px-4 text-center rounded hover:bg-white hover:text-black mt-4"
              onClick={toggleMenu}
            >
              INSTAGRAM
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
