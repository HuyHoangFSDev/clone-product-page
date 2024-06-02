import React, { useState } from 'react';
import { imgDetail } from '../../assets/data/data';

const ProductDetail = () => {
  const [selectedImage, setSelectedImage] = useState(imgDetail[0]);

  const handlePreviousImage = () => {
    const currentIndex = imgDetail.indexOf(selectedImage);
    const previousIndex = (currentIndex - 1 + imgDetail.length) % imgDetail.length;
    setSelectedImage(imgDetail[previousIndex]);
  };

  const handleNextImage = () => {
    const currentIndex = imgDetail.indexOf(selectedImage);
    const nextIndex = (currentIndex + 1) % imgDetail.length;
    setSelectedImage(imgDetail[nextIndex]);
  };

  return (
    <div className="flex flex-col lg:flex-row p-8 space-y-8 lg:space-y-0 lg:space-x-8">
      {/* Image Gallery Section */}
      <div className="w-full lg:w-1/2 flex">
        <div className="flex flex-col items-center space-y-4">
          <button className="bg-gray-300 p-2 rounded-full" onClick={handlePreviousImage}>↑</button>
          <div className="flex flex-col space-y-4 overflow-y-auto max-h-96">
            {imgDetail.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Product ${index + 1}`}
                className={`w-20 h-20 object-cover cursor-pointer ${img === selectedImage ? 'border-2 border-blue-500' : ''}`}
                onClick={() => setSelectedImage(img)}
              />
            ))}
          </div>
          <button className="bg-gray-300 p-2 rounded-full" onClick={handleNextImage}>↓</button>
        </div>
        <div className="relative ml-4 flex-1">
          <img src={selectedImage} alt="Main Product" className="w-full object-cover" />
          <div className="absolute inset-y-0 left-0 flex items-center">
            <button className="bg-white p-2 rounded-full shadow-md" onClick={handlePreviousImage}>←</button>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center">
            <button className="bg-white p-2 rounded-full shadow-md" onClick={handleNextImage}>→</button>
          </div>
        </div>
      </div>

      {/* Product Details Section */}
      <div className="w-full lg:w-1/2">
        <h1 className="text-2xl font-bold mb-2">Laptop Acer Gaming Aspire 7 A715-76G-59MW</h1>
        <p className="text-sm text-gray-500 mb-2">(NH.QMYSV.001) (i5 12450H/8GB RAM/512GB SSD/RTX2050 4GB/15.6 FHD/Win 11/Đen)</p>
        <p className="text-xs text-gray-400 mb-4">Mã sản phẩm: 001.0001.46</p>

        <div className="border p-4 rounded-md mb-4">
          <h2 className="font-bold mb-2">Thông số sản phẩm</h2>
          <ul className="text-sm">
            <li>CPU: Intel Core i5 12450H</li>
            <li>RAM: 8GB (1x 8GB) DDR4 3200MHz (2 khe) (Tối đa 32GB)</li>
            <li>Ổ cứng: 512GB SSD M.2 2280 PCIe NVMe</li>
            <li>VGA: NVIDIA GeForce RTX 2050 4GB</li>
          </ul>
          <button className="bg-gray-200 text-blue-500 py-1 px-2 rounded-md mt-2">Xem thêm</button>
        </div>

        <div className="text-red-500 text-2xl font-bold mb-4">
          17.999.000₫ <span className="text-gray-500 text-xl line-through">20.999.000₫</span> <span className="text-sm text-gray-500">(Tiết kiệm 3.000.000₫)</span>
        </div>

        <div className="border p-4 rounded-md mb-4">
          <h2 className="font-bold mb-2">9 Cửa hàng có sẵn sản phẩm</h2>
          <p className="text-sm text-red-500 mb-2">Kho tổng Bắc Giang - Số lượng sản phẩm còn lại: 1</p>
          <p className="text-sm text-red-500 mb-2">Kho tổng Hai Bà Trưng - Số lượng sản phẩm còn lại: 1</p>
          <button className="text-blue-500 py-1 px-2 rounded-md">Xem thêm 7 cửa hàng</button>
        </div>

        <div className="border p-4 rounded-md mb-4">
          <h2 className="font-bold mb-2">Quà tặng và ưu đãi dành cho bạn</h2>
          <ul className="text-sm space-y-2">
            <li>1. Giảm ngay 50.000đ khi mua Balo, Cặp, Túi chống sốc các loại</li>
            <li>2. Giảm ngay 100.000đ khi mua Ram Laptop thương hiệu KINGSTON</li>
            <li>3. Giảm ngay 100.000đ khi mua Ram Laptop thương hiệu LEXAR</li>
            <li>4. Giảm ngay 200.000đ khi mua Ghế công thái học thương hiệu LEGION</li>
          </ul>
          <button className="text-blue-500 py-1 px-2 rounded-md mt-2">Xem thêm ưu đãi</button>
        </div>

        <div className="flex items-center mb-4">
          <span className="mr-2">Số lượng:</span>
          <input type="number" className="border rounded w-16 text-center" defaultValue="1" min="1" />
          <button className="bg-blue-500 text-white py-2 px-4 rounded-md ml-4">THÊM VÀO GIỎ</button>
          <button className="bg-red-500 text-white py-2 px-4 rounded-md ml-4">MUA NGAY</button>
        </div>

        <div className="flex space-x-4">
          <button className="bg-blue-500 text-white py-2 px-4 rounded-md">TRẢ GÓP QUA THẺ</button>
          <button className="bg-blue-500 text-white py-2 px-4 rounded-md">TRẢ GÓP HĐ</button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
