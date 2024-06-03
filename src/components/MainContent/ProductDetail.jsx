import React, { useState, useRef } from "react";
import { TiArrowSortedUp, TiArrowSortedDown } from "react-icons/ti";
import { MdOutlineArrowForwardIos, MdOutlineArrowBackIos } from "react-icons/md";

import { imgDetail, stores, promotions } from "../../assets/data/data";

const ProductDetail = () => {
  const [selectedImage, setSelectedImage] = useState(imgDetail[0]);
  const [showFullSpecs, setShowFullSpecs] = useState(false);
  const [showAllStore, setShowAllStore] = useState(false);
  const [showAllPromotions, setShowAllPromotions] = useState(false);
  const [quantity, setQuantity] = useState(1);

  const imgListRef = useRef(null);

  const handleScrollPrevious = () => {
    if (imgListRef.current) {
      imgListRef.current.scrollBy({ top: -80, behavior: "smooth" });
    }
  };

  const handleScrollNext = () => {
    if (imgListRef.current) {
      imgListRef.current.scrollBy({ top: 80, behavior: "smooth" });
    }
  };

  const handlePreviousImage = () => {
    const currentIndex = imgDetail.indexOf(selectedImage);
    const previousIndex =
      (currentIndex - 1 + imgDetail.length) % imgDetail.length;
    setSelectedImage(imgDetail[previousIndex]);
  };

  const handleNextImage = () => {
    const currentIndex = imgDetail.indexOf(selectedImage);
    const nextIndex = (currentIndex + 1) % imgDetail.length;
    setSelectedImage(imgDetail[nextIndex]);
  };

  const toggleSpecs = () => {
    setShowFullSpecs(!showFullSpecs);
  };

  const incrementQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  const decrementQuantity = () => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
  };

  const toggleShowAllStore = () => {
    setShowAllStore(!showAllStore);
  };

  const toggleShowAllPromotions = () => {
    setShowAllPromotions(!showAllPromotions);
  };

  return (
    <div className="flex flex-col lg:flex-row p-8 space-y-8 lg:space-y-0 lg:space-x-8">
      <div className="w-full lg:w-1/2 flex">
        <div className="flex flex-col items-center space-y-4">
          <button
            className="bg-btNextPrev w-16 rounded-lg flex items-center justify-center"
            onClick={handleScrollPrevious}
          >
            <TiArrowSortedUp className="w-6 h-6 text-white" />
          </button>
          <div
            className="flex flex-col space-y-4 overflow-y-hidden max-h-96"
            ref={imgListRef}
          >
            {imgDetail.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Product ${index + 1}`}
                className={`w-20 h-20 object-cover cursor-pointer ${
                  img === selectedImage ? "border-2 border-blue-500" : ""
                }`}
                onClick={() => setSelectedImage(img)}
              />
            ))}
          </div>
          <button
            className="bg-btNextPrev w-16 rounded-lg flex items-center justify-center"
            onClick={handleScrollNext}
          >
            <TiArrowSortedDown className="w-6 h-6 text-white" />
          </button>
        </div>
        <div className="relative ml-4 flex-1">
          <img
            src={selectedImage}
            alt="Main Product"
            className="w-full object-cover"
          />
          <div className="absolute inset-y-0 left-0 flex items-center">
            <button
              className="bg-white p-2 rounded-full shadow-md flex items-center justify-center"
              onClick={handlePreviousImage}
            >
              <MdOutlineArrowBackIos className="h-10 text-customeBlue" />
            </button>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center">
            <button
              className="bg-white p-2 rounded-full shadow-md flex items-center justify-center"
              onClick={handleNextImage}
            >
              <MdOutlineArrowForwardIos className="h-10 text-customeBlue" />
            </button>
          </div>
        </div>
      </div>

      <div className="w-full lg:w-1/2">
        <h1 className="text-2xl font-bold mb-2">
          Laptop Acer Gaming Aspire 7 A715-76G-59MW
        </h1>
        <p className="text-sm text-gray-500 mb-2">
          (NH.QMYSV.001) (i5 12450H/8GB RAM/512GB SSD/RTX2050 4GB/15.6 FHD/Win
          11/Đen)
        </p>
        <p className="text-xs text-gray-400 mb-4">Mã sản phẩm: 001.0001.46</p>

        <div className="border p-4 rounded-md mb-4">
          <h2 className="font-bold mb-2">Thông số sản phẩm</h2>
          <ul className="text-sm">
            <li>CPU: Intel Core i5 12450H</li>
            <li>RAM: 8GB (1x 8GB) DDR4-3200MHz (2 khe) (Tối đa 32GB)</li>
            <li>Ổ cứng: 512GB SSD M.2 2280 PCIe NVMe</li>
            <li>VGA: NVIDIA GeForce RTX 2050 4GB</li>
            {showFullSpecs && (
              <>
                <li>
                  Màn hình: 15.6 inch FHD IPS (1920 x 1080) Slim Benzel 144Hz;
                  ComfyView IPS LED
                </li>
                <li>Màu: Đen</li>
                <li>Chất liệu: Nhôm</li>
                <li>OS: Windows 11 Home</li>
              </>
            )}
          </ul>
          <button
            className="bg-gray-200 text-black py-1 px-2 rounded-md mt-2"
            onClick={toggleSpecs}
          >
            {showFullSpecs ? "Ẩn bớt ▲" : "Xem thêm ▼"}
          </button>
        </div>

        <div className="text-customeBlue text-2xl font-bold mb-4">
          17.999.000₫{" "}
          <span className="text-gray-500 text-xl line-through">
            20.999.000₫
          </span>{" "}
          <span className="text-sm text-gray-500">(Tiết kiệm 3.000.000₫)</span>
        </div>

        <div className="p-4 border rounded bg-white">
          <div className="bg-gradient-to-r from-orange-400 to-red-500 text-white p-2 rounded-t">
            <h2>9 CỬA HÀNG CÓ SẴN SẢN PHẨM</h2>
          </div>
          <ul className="divide-y divide-gray-300">
            {stores
              .slice(0, showAllStore ? stores.length : 2)
              .map((store, index) => (
                <li key={index} className="flex justify-between p-2">
                  <span>{store.name} - Số lượng sản phẩm còn lại:</span>
                  <span className="text-red-500">{store.quantity}</span>
                </li>
              ))}
          </ul>
          <button
            className="mt-2 text-blue-500 hover:underline"
            onClick={toggleShowAllStore}
          >
            {showAllStore ? "Ẩn bớt" : "Xem thêm"}
          </button>
        </div>

        <div className="p-4 border rounded bg-white">
          <div className="bg-red-500 text-white p-2 rounded-t">
            <h2>🎁 QUÀ TẶNG VÀ ƯU ĐÃI DÀNH CHO BẠN</h2>
          </div>
          <ul className="divide-y divide-gray-300">
            {promotions
              .slice(0, showAllPromotions ? promotions.length : 2)
              .map((promo, index) => (
                <li key={index} className="flex items-center p-2">
                  <span className="flex-shrink-0 w-6 h-6 flex items-center justify-center bg-red-500 text-white rounded-full mr-2">
                    {index + 1}
                  </span>
                  <span>{promo}</span>
                </li>
              ))}
          </ul>
          <button
            className="mt-2 text-blue-500 hover:underline"
            onClick={toggleShowAllPromotions}
          >
            {showAllPromotions ? "Ẩn bớt" : "Xem thêm"}
          </button>
        </div>

        <div className="p-4">
          <div className="flex items-center mb-4">
            <label className="mr-2">Số lượng:</label>
            <div className="flex items-center border rounded">
              <button
                className="px-2 py-1 border-l hover:bg-gray-200"
                onClick={incrementQuantity}
              >
                +
              </button>
              <span className="px-3">{quantity}</span>
              <button
                className="px-2 py-1 border-r hover:bg-gray-200"
                onClick={decrementQuantity}
              >
                -
              </button>
            </div>
            <button className="ml-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600">
              THÊM VÀO GIỎ
            </button>
            <button className="ml-2 px-4 py-2 border rounded hover:bg-gray-200">
              <span role="img" aria-label="heart">
                ❤️
              </span>{" "}
              Lưu
            </button>
          </div>
          <button className="w-full py-3 mb-2 bg-red-500 text-white rounded hover:bg-red-600">
            MUA NGAY
          </button>
          <div className="flex justify-between">
            <button className="w-1/2 py-3 mr-1 bg-blue-500 text-white rounded hover:bg-blue-600">
              TRẢ GÓP QUA THẺ
              <br />
              VISA, Master Card, AMEX
            </button>
            <button className="w-1/2 py-3 ml-1 bg-blue-500 text-white rounded hover:bg-blue-600">
              TRẢ GÓP HỒ SƠ
              <br />
              Duyệt nhanh trong 15 phút
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
