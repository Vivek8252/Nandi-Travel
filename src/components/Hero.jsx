import React from "react";

function Hero() {
  return (
    <section
      className="h-screen flex items-center justify-center bg-cover bg-center relative"
      style={{ backgroundImage: "url('https://t4.ftcdn.net/jpg/07/14/88/69/360_F_714886951_4R960QGb4ezDBzkSiZhKWW4ujJFEilz9.jpg')" }}
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60"></div>

      {/* Content */}
      <div className="relative z-10 text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white animate-fadeInUp">
          Nandi Travels Varanasi
        </h1>

        <p className="text-lg md:text-2xl text-gray-200 mb-8 animate-fadeInUp delay-200">
          Your trusted travel partner for cars and tour packages
        </p>

        <div className="flex gap-4 justify-center flex-wrap">
          <a
            href="tel:+917268838241"
            className="bg-blue-600 px-6 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition transform hover:scale-105 animate-fadeInUp delay-400"
          >
            Call Now
          </a>
          <a
            href="https://wa.me/+917268838241"
            className="bg-green-500 px-6 py-3 rounded-lg text-lg font-semibold hover:bg-green-600 transition transform hover:scale-105 animate-fadeInUp delay-600"
          >
            WhatsApp
          </a>
        </div>
      </div>

      {/* Tailwind Animation */}
      <style>
        {`
          @keyframes fadeInUp {
            0% { opacity: 0; transform: translateY(20px); }
            100% { opacity: 1; transform: translateY(0); }
          }
          .animate-fadeInUp {
            animation: fadeInUp 1s ease forwards;
          }
          .animate-fadeInUp.delay-200 { animation-delay: 0.2s; }
          .animate-fadeInUp.delay-400 { animation-delay: 0.4s; }
          .animate-fadeInUp.delay-600 { animation-delay: 0.6s; }
        `}
      </style>
    </section>
  );
}

export default Hero;
