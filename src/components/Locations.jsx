import React from "react";

const locations = [
  {
    name: "Blissful Blends",
    address: "123 Citrus Ave, Smoothie City, CA 90210",
    hours: "Mon-Sat: 8 AM - 8 PM, Sun: 10 AM - 6 PM",
  },
  {
    name: "Blissful Blends",
    address: "456 Ocean Dr, Coastal Town, FL 33139",
    hours: "Mon-Sun: 7 AM - 9 PM",
  },
  {
    name: "Blissful Blends",
    address: "789 Mango St, Metroville, NY 10001",
    hours: "Mon-Fri: 7 AM - 7 PM, Sat-Sun: 9 AM - 5 PM",
  },
];

function Locations() {
  return (
    <section
      id="locations"
      className="pt-36 py-16 px-4 max-w-7xl mx-auto bg-white relative z-0"
    >
      <h2 className="text-3xl font-bold text-deep-blue text-center mb-12">
        Our Locations
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {locations.map((location, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-deep-blue mb-2">
              {location.name}
            </h3>
            <p className="text-dark-teal text-base mb-2">{location.address}</p>
            <p className="text-dark-teal text-base">{location.hours}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Locations;
