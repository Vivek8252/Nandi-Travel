// import React from "react";

// function Navbar() {
//   return (
//     <nav className="fixed top-0 w-full bg-white shadow-md z-50">
//       <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
//         <div className="flex items-center gap-2">
//           <img src="/logo.png" alt="Logo" className="h-10" />
//           <h1 className="text-xl font-bold text-gray-800">Nandi Travels</h1>
//         </div>
//         <ul className="hidden md:flex gap-6 text-gray-700 font-medium">
//           <li><a href="#services" className="hover:text-blue-600">Services</a></li>
//           <li><a href="#cars" className="hover:text-blue-600">Cars</a></li>
//           <li><a href="#packages" className="hover:text-blue-600">Packages</a></li>
//           <li><a href="#about" className="hover:text-blue-600">About</a></li>
//           <li><a href="#contact" className="hover:text-blue-600">Contact</a></li>
//         </ul>
//         <a
//           href="https://wa.me/+917268838241"
//           className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
//         >
//           WhatsApp
//         </a>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: "Services", href: "#services" },
    { name: "Cars", href: "#cars" },
    { name: "Packages", href: "#packages" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src="/logo.png" alt="Logo" className="h-10" />
          <h1 className="text-xl font-bold text-gray-800">Nandi Travels</h1>
        </div>

        {/* Desktop Links */}
        <ul className="hidden md:flex gap-6 text-gray-700 font-medium">
          {navLinks.map((link, index) => (
            <li key={index}>
              <a href={link.href} className="hover:text-blue-600 transition">
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* WhatsApp Button */}
        <a
          href="https://wa.me/917268838241"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-block bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition"
        >
          WhatsApp
        </a>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-gray-700 text-2xl">
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md">
          <ul className="flex flex-col gap-4 px-4 py-4 text-gray-700 font-medium">
            {navLinks.map((link, index) => (
              <li key={index}>
                <a
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block hover:text-blue-600 transition"
                >
                  {link.name}
                </a>
              </li>
            ))}
            <li>
              <a
                href="https://wa.me/917268838241"
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition text-center"
              >
                WhatsApp
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
