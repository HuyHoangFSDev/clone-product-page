import React, { useState } from "react";
import { FaBagShopping } from "react-icons/fa6";
import { products } from "../../assets/data/data";

const ProductCard = ({ product }) => {
  return (
    <div className="border rounded-lg overflow-hidden shadow-lg m-4 w-full md:w-1/3 lg:w-1/6">
      <div className="relative">
        <img src={product.image} alt={product.name} className="w-full" />
        {product.discount && (
          <span className="absolute top-2 right-2 bg-red-500 text-white text-xs p-1 rounded">
            -{product.discount}%
          </span>
        )}
      </div>
      <div className="p-4">
        <div className="flex items-center mb-2">
          <div className="bg-blue-500 text-white text-xs px-2 py-1 rounded mr-2">
            Trả góp
          </div>
          <div className="text-gray-500 text-xs">({product.rating})</div>
        </div>
        <h3 className="text-sm font-bold mb-2">{product.name}</h3>
        <div className="text-gray-500 text-xs line-through mb-1">
          {product.originalPrice}
        </div>
        <div className="text-blue-500 text-lg font-bold mb-2">
          {product.discountedPrice}
        </div>
        <div className="flex justify-between items-center">
          <span className="text-green-500 text-xs">✔️ Sẵn hàng</span>
          <button className="bg-red-500 text-white text-xs p-2 rounded-full">
            <FaBagShopping className="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>
  );
};

const ProductList = () => {
  const [listProduct, setListProduct] = useState({
    type: "SAN_PHAM_TUONG_TU",
    isSelected: true,
  });

  console.log(listProduct.isSelected);

  const renderProducts = () => {
    switch (listProduct.type) {
      case "SAN_PHAM_TUONG_TU":
        return products
          .filter((product) => !product.haveSeen)
          .map((product, index) => (
            <ProductCard key={index} product={product} />
          ));
      case "SAN_PHAM_DA_XEM":
        return products
          .filter((product) => product.haveSeen)
          .map((product, index) => (
            <ProductCard key={index} product={product} />
          ));
      default:
        return <p>Loading...</p>;
    }
  };

  return (
    <div className="container mx-auto">
      <div className="flex mt-8 mb-4 px-4 gap-4">
        <h2
          onClick={() =>
            setListProduct({ type: "SAN_PHAM_TUONG_TU", isSelected: true })
          }
          className={`${
            listProduct.isSelected
            ? "text-white bg-blue-500"
            : "text-blue-500 bg-white"
          } text-xl font-bold p-4 rounded-t-lg`}
        >
          SẢN PHẨM TƯƠNG TỰ
        </h2>
        <h2
          onClick={() =>
            setListProduct({ type: "SAN_PHAM_DA_XEM", isSelected: false })
          }
          className={`${
            !listProduct.isSelected
              ? "text-white bg-blue-500"
              : "text-blue-500 bg-white"
          } text-xl font-bold p-4 rounded-t-lg`}
        >
          SẢN PHẨM ĐÃ XEM
        </h2>
      </div>
      <div className="flex flex-wrap justify-start">{renderProducts()}</div>
    </div>
  );
};

export default ProductList;
