import React from "react";
import { policies } from "../../assets/data/data";

function PolicySection() {
  return (
    <div className="bg-gray-100 py-8 border">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
        {policies.map((policy, index) => (
          <div key={index} className="flex flex-row items-center gap-4">
            {policy.icon}
            <div className="flex flex-col items-start">
              <h3 className="text-lg font-bold">{policy.title}</h3>
              <p className="text-gray-600">{policy.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PolicySection;
