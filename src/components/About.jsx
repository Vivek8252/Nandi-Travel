import React from "react";

function About() {
  return (
    <section id="about" className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">About Us</h2>
        
        <div className="md:flex md:items-center md:gap-8 bg-white rounded-xl shadow-md p-6 md:p-12">
          
          {/* Image */}
          <div className="md:w-1/2 mb-6 md:mb-0">
            <img
              src="https://lh3.googleusercontent.com/a-/ALV-UjX8ffZBo_vVN-3xPCYTDBdQbh7a8x0D_qaqTX2KXLtiyB2vYuA=w144-h144-p-rp-mo-br100"
              alt="Nandi Travels"
              className="rounded-xl object-cover w-full h-full shadow-lg"
            />
          </div>
          
          {/* Text */}
          <div className="md:w-1/2">
            <p className="text-gray-700 mb-4 leading-relaxed text-lg">
              Welcome to <span className="font-semibold text-blue-600">Nandi Travels</span>, your trusted travel partner in Varanasi. We provide comfortable cars, professional drivers, and thoughtfully designed tour packages to make your journey seamless and memorable.
            </p>
            <p className="text-gray-700 mb-4 leading-relaxed text-lg">
              Explore the spiritual city of Varanasi, take trips to Ayodhya, Prayagraj, Gaya, and beyond. Our priority is your comfort, safety, and an unforgettable experience.
            </p>
            <p className="text-gray-700 leading-relaxed text-lg">
              Join hundreds of satisfied travelers who have trusted Nandi Travels for hassle-free travel. Let us make your journey special!
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}

export default About;
