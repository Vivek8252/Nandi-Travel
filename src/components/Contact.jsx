import React from "react";
import { FaStar } from "react-icons/fa";

function Contact() {
  const phone = "+917268838241"; // आपका नंबर
  const whatsappUrl = `https://wa.me/${phone.replace(/\+/g, "")}`;
  const googleReviewUrl = "https://g.page/r/CVPZ12yPzD5HEBM/review";

  return (
    <section id="contact" className="py-16 bg-gray-100">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-10">Contact & Review</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Call */}
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition flex flex-col items-center">
            <h3 className="text-xl font-semibold mb-4">Call Us</h3>
            <p className="text-gray-700 mb-4">{phone}</p>
            <a
              href={`tel:${phone}`}
              className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition"
            >
              Call Now
            </a>
          </div>

          {/* WhatsApp */}
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition flex flex-col items-center">
            <h3 className="text-xl font-semibold mb-4">WhatsApp</h3>
            <p className="text-gray-700 mb-4">{phone}</p>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 text-white px-6 py-2 rounded-md hover:bg-green-600 transition"
            >
              Chat Now
            </a>
          </div>

          {/* Google Review */}
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition flex flex-col items-center">
            <h3 className="text-xl font-semibold mb-4">Leave a Review</h3>
            <p className="text-gray-700 mb-2 flex justify-center gap-1">
              {/* 5 Yellow Stars */}
              {[1,2,3,4,5].map((star) => (
                <FaStar key={star} color="#ffc107" size={24} />
              ))}
            </p>
            <a
              href={googleReviewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-yellow-400 text-white px-6 py-2 rounded-md hover:bg-yellow-500 transition"
            >
              Review / Rating
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
