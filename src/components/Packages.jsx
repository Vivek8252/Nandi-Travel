import React from "react";

function Packages() {
  const packages = [
    {
      name: "Varanasi Darshan",
      price: "₹2500",
      img: "https://saishishirtours.in/wp-content/uploads/2024/05/varanasi-.webp"
    },
    {
      name: "Varanasi - Ayodhya",
      price: "₹6500",
      img: "https://s7ap1.scene7.com/is/image/incredibleindia/ram-janmaboomi-ayodhya-uttar%20pradesh-1?qlt=82&ts=1726649833165"
    },
    {
      name: "Varanasi - Prayagraj",
      price: "₹4000",
      img: "https://res.cloudinary.com/kmadmin/image/upload/v1730108430/kiomoi/kumbh_mela_2024_9309.jpg"
    },
    {
      name: "Varanasi - Gaya",
      price: "₹7000",
      img: "https://i.ytimg.com/vi/jvl1q7yglzs/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCiizqXrNZqXiCHw5nLygeOlyPNsA"
    },
  ];

  const handleBook = (packageName) => {
    const phone = "+917268838241"; // अपना number डालो
    const message = `Hi, I want to book the package: ${packageName}.`;
    const whatsappUrl = `https://wa.me/${phone.replace(/\+/g, "")}?text=${encodeURIComponent(message)}`;
    const callUrl = `tel:${phone}`;

    const choice = window.confirm(
      `Do you want to book "${packageName}" via WhatsApp? Press Cancel for Call.`
    );

    if (choice) {
      window.open(whatsappUrl, "_blank");
    } else {
      window.location.href = callUrl;
    }
  };

  return (
    <section id="packages" className="py-16 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-10">Tour Packages</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className="bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition flex flex-col justify-between"
            >
              <img
                src={pkg.img}
                alt={pkg.name}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">{pkg.name}</h3>
              <p className="text-gray-700 mb-4">{pkg.price}</p>
              <button
                onClick={() => handleBook(pkg.name)}
                className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition"
              >
                Book Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Packages;
