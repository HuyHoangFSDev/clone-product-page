import React, { useState } from "react";
import { FaStar } from "react-icons/fa6";

function Review({ onClose }) {
  const [rate, setRate] = useState(0);
  const [hoverRate, setHoverRate] = useState(0);

  return (
    <div
      className="fixed inset-0 bg-slate-400 bg-opacity-75 z-40 flex justify-center items-center"
      onDoubleClick={onClose}
    >
      <div className="Review-container bg-white w-5/12 h-3/4 overflow-y-scroll flex flex-col shadow-lg rounded-lg z-50">
        <div className="header flex justify-between items-center p-4 border-b">
          <p className="text-md font-bold">
            Laptop Acer Gaming Aspire 7 A715-76G-59MW (NH.QMYSV.001) (i5
            12450H/8GB RAM/512GB SSD/RTX2050 4G/15.6 inch FHD//Win11/...
          </p>
          <button onClick={onClose} className="text-red-500 font-bold">
            X
          </button>
        </div>
        <div className="rate-box flex flex-col px-4">
          <p className="font-bold">Đánh giá sản phẩm</p>
          <div className="flex flex-row">
            {Array.from({ length: 5 }).map((_, index) => (
              <span
                key={index}
                onMouseEnter={() => setHoverRate(index + 1)}
                onMouseLeave={() => setHoverRate(0)}
                onClick={() => setRate(index + 1)}
              >
                {hoverRate > index || rate > index ? (
                  <FaStar className="text-yellow-400" />
                ) : (
                  <FaStar className="text-unRate" />
                )}
              </span>
            ))}
          </div>
        </div>
        <div className="comment-box flex flex-col p-4 gap-2 text-sm justify-start">
            <p className="font-bold">Viết nhận xét</p>
            <p>Họ tên <span className="text-red-600">*</span></p>
            <input type="text" placeholder="Nhập họ tên của bạn" className="p-1 border"/>
            <p>Số điện thoại</p>
            <input type="text" placeholder="Nhập số điện thoại" className="p-1 border"/>
            <p>Email</p>
            <input type="email" placeholder="Nhập địa chỉ email" className="p-1 border"/>
            <p>Nội dung đánh giá <span className="text-red-600">*</span></p>
            <input type="text" placeholder="Nhập đánh giá về sản phẩm" className="p-1 pb-6 border"/>
            <button onClick={onClose} className="submit bg-customeBlue text-white w-36 h-10 rounded-lg font-bold">Gửi đánh giá</button>
        </div>
      </div>
    </div>
  );
}

export default Review;
