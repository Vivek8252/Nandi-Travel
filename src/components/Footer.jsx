import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6 mt-10">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <p className="hover:text-blue-400 transition-colors cursor-default">
          © {new Date().getFullYear()} Nandi Travels. All Rights Reserved.
        </p>
        <p className="mt-2 md:mt-0 hover:text-green-400 transition-colors cursor-default">
          Made with ❤️ in Varanasi
        </p>
      </div>
    </footer>
  );
}

export default Footer;
