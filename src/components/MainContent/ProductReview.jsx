import React from "react";
import { useState } from "react";
import { createPortal } from "react-dom";
import { specifications } from "../../assets/data/data";
import Specification from "./Specification";
import Review from "./Review";
import { FaStar } from "react-icons/fa6";

const ProductReview = () => {
  const [showSpecification, setShowSpecification] = useState(false);
  const [showReview, setShowReview] = useState(false);
  const [comment, setComment] = useState("");
  const [isSubmit, setIsSubmit] = useState(false)
  const handleChange = (e) => {
    setComment(e);
  };

  const handleSubmitComment = () => {
    setIsSubmit(true)
  }

  return (
    <>
      <div className="flex flex-col lg:flex-row p-8">
        <div className="w-full lg:w-1/2 p-4 border rounded-md shadow-md">
          <h2 className="text-2xl font-bold mb-2">
            Xếp hạng đánh giá của khách hàng
          </h2>
          <div className="text-4xl font-bold mb-2">0/5</div>
          <div className="flex items-center mb-2">
            {[...Array(5)].map((_, index) => (
              <FaStar key={index} className="text-unRate" />
            ))}
          </div>
          <button
            onClick={() => setShowReview(true)}
            className="bg-blue-500 text-white py-2 px-4 rounded-md mb-4"
          >
            Viết nhận xét của bạn
          </button>
          <div className="bg-gray-100 p-4 rounded-md">
            <textarea
              className="w-full p-2 border rounded-md"
              rows="4"
              placeholder="Nhập bình luận của bạn..."
              onChange={(e) => handleChange(e.target.value)}
            ></textarea>
            {isSubmit && !comment && (
              <p className="text-red-500">x Vui lòng nhập bình luận.</p>
            )}
            <button
              onClick={handleSubmitComment}
              className="bg-blue-500 text-white py-2 px-4 rounded-md mt-2"
            >
              Gửi bình luận
            </button>
          </div>
        </div>

        <div className="w-full lg:w-1/2 p-4 border rounded-md shadow-md mt-4 lg:mt-0 lg:ml-4">
          <h2 className="text-2xl font-bold mb-4">Thông số kỹ thuật</h2>
          <div className="space-y-2">
            <table className="min-w-full table-auto border-collapse">
              <tbody>
                {specifications.map(([label, value], index) => (
                  <tr key={index} className="odd:bg-bgTable">
                    <td className="border px-4 py-2 font-bold">{label}</td>
                    <td className="border px-4 py-2">{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <button
            onClick={() => setShowSpecification(true)}
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md mt-4"
          >
            Xem thông số đầy đủ
          </button>
        </div>
      </div>
      {showSpecification &&
        createPortal(
          <Specification onClose={() => setShowSpecification(false)} />,
          document.body
        )}
      {showReview &&
        createPortal(
          <Review onClose={() => setShowReview(false)} />,
          document.body
        )}
    </>
  );
};

export default ProductReview;
