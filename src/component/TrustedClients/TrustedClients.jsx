import React from "react";
import company1 from "../../assets/company1.jpg";
import company2 from "../../assets/company2.jpg";
import company3 from "../../assets/company3.jpg";
import company4 from "../../assets/company4.jpg";
import company5 from "../../assets/company5.jpg";
import company6 from "../../assets/company6.jpg";

const clients = [
  { name: "Amazon", logo: company1 },
  { name: "FedEx", logo: company2 },
  { name: "UPS", logo: company3 },
  { name: "DHL", logo: company4 },
  { name: "Walmart", logo: company5 },
  { name: "Walmart", logo: company6 },
];

const TrustedClients = () => {
  return (
    <div className="bg-gray-100 py-32 px-8 ">
      <h2 className="text-center text-3xl font-bold text-gray-800 mb-8">
        Our Trusted Clients
      </h2>
      <div className="max-w-6xl mx-auto flex flex-wrap justify-center gap-6">
        {clients.map((client, index) => (
          <div key={index} className="w-32 md:w-40  hover:grayscale transition">
            <img
              src={client.logo}
              alt={client.name}
              className="w-full object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrustedClients;
