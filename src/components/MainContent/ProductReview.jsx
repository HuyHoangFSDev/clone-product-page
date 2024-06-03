import React from 'react';
import { specifications } from '../../assets/data/data';

const ProductReview = () => {
    return (
        <div className="flex flex-col lg:flex-row p-8">
          <div className="w-full lg:w-1/2 p-4 border rounded-md shadow-md">
            <h2 className="text-2xl font-bold mb-2">Xếp hạng đánh giá của khách hàng</h2>
            <div className="text-4xl font-bold mb-2">0/5</div>
            <div className="flex items-center mb-2">
              {[...Array(5)].map((_, index) => (
                <svg
                  key={index}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-6 h-6 text-gray-400"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l2.347 7.277a1 1 0 00.95.69h7.684c.969 0 1.371 1.24.588 1.81l-6.226 4.526a1 1 0 00-.364 1.118l2.347 7.277c.3.921-.755 1.688-1.54 1.118l-6.226-4.526a1 1 0 00-1.175 0l-6.226 4.526c-.785.57-1.84-.197-1.54-1.118l2.347-7.277a1 1 0 00-.364-1.118L2.487 12.704c-.783-.57-.38-1.81.588-1.81h7.684a1 1 0 00.95-.69l2.347-7.277z"
                  />
                </svg>
              ))}
            </div>
            <button className="bg-blue-500 text-white py-2 px-4 rounded-md mb-4">
              Viết nhận xét của bạn
            </button>
            <div className="bg-gray-100 p-4 rounded-md">
              <textarea
                className="w-full p-2 border rounded-md"
                rows="4"
                placeholder="Nhập bình luận của bạn..."
              ></textarea>
              <button className="bg-blue-500 text-white py-2 px-4 rounded-md mt-2">
                Gửi bình luận
              </button>
            </div>
          </div>
    
          <div className="w-full lg:w-1/2 p-4 border rounded-md shadow-md mt-4 lg:mt-0 lg:ml-4">
            <h2 className="text-2xl font-bold mb-4">Thông số kỹ thuật</h2>
            <div className="space-y-2">
              {specifications.map(([label, value], index) => (
                <div key={index} className="flex justify-between">
                  <span className="font-semibold">{label}</span>
                  <span>{value}</span>
                </div>
              ))}
            </div>
            <button className="w-full bg-blue-500 text-white py-2 px-4 rounded-md mt-4">
              Xem thông số đầy đủ
            </button>
          </div>
        </div>
      );
    };
    

export default ProductReview;
