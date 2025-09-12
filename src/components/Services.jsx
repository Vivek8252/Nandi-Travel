import React from "react";
import { FaCar, FaMapMarkedAlt } from "react-icons/fa";

function Services() {
  const services = [
    { icon: <FaCar size={40} />, title: "Car Rental" },
    { icon: <FaMapMarkedAlt size={40} />, title: "Tour Packages" },
  ];

  const handleBook = (serviceName) => {
    const phone = "+917268838241"; // अपना नंबर डालो
    const message = `Hi, I want to book ${serviceName}.`;
    const whatsappUrl = `https://wa.me/${phone.replace(/\+/g, "")}?text=${encodeURIComponent(message)}`;
    const callUrl = `tel:${phone}`;

    const choice = window.confirm(
      `Do you want to book "${serviceName}" via WhatsApp? Press Cancel for Call.`
    );

    if (choice) {
      window.open(whatsappUrl, "_blank");
    } else {
      window.location.href = callUrl;
    }
  };

  return (
    <section id="services" className="py-16 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-10 animate-fadeInUp">Our Services</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition transform hover:-translate-y-2 hover:scale-105 flex flex-col items-center animate-fadeInUp"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex justify-center mb-4 text-blue-600">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
              <button
                onClick={() => handleBook(service.title)}
                className="bg-green-500 text-white px-6 py-2 rounded-md hover:bg-green-600 transition"
              >
                Book Now
              </button>
            </div>
          ))}
        </div>
      </div>

      <style>
        {`
          @keyframes fadeInUp {
            0% { opacity: 0; transform: translateY(20px); }
            100% { opacity: 1; transform: translateY(0); }
          }
          .animate-fadeInUp {
            animation: fadeInUp 0.8s ease forwards;
          }
        `}
      </style>
    </section>
  );
}

export default Services;
