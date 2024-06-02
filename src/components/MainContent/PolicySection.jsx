import React from "react";
import {
  FaTruck,
  FaExchangeAlt,
  FaCreditCard,
  FaHeadset,
} from "react-icons/fa";

const policies = [
  {
    icon: <FaTruck className="text-red-500 w-12 h-12" />,
    title: "CHÍNH SÁCH GIAO HÀNG",
    description: "Nhận hàng và thanh toán tại nhà",
  },
  {
    icon: <FaExchangeAlt className="text-red-500 w-12 h-12" />,
    title: "ĐỔI TRẢ DỄ DÀNG",
    description: "1 đổi 1 trong 15 ngày",
  },
  {
    icon: <FaCreditCard className="text-red-500 w-12 h-12" />,
    title: "THANH TOÁN TIỆN LỢI",
    description: "Trả tiền mặt, CK, trả góp 0%",
  },
  {
    icon: <FaHeadset className="text-red-500 w-12 h-12" />,
    title: "HỖ TRỢ NHIỆT TÌNH",
    description: "Tư vấn, giải đáp mọi thắc mắc",
  },
];

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
