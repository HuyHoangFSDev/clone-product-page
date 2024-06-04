import React, { useState, useRef, useEffect } from "react";
import { FaBagShopping } from "react-icons/fa6";
import { products } from "../../assets/data/data";

const ProductCard = ({ product }) => {
  const productCardRef = useRef();
  const [showProductDetail, setShowProductDetail] = useState(false);
  const [productDetailPosition, setProductDetailPosition] = useState({
    top: 0,
    left: 0,
  });

  useEffect(() => {
    const calculatePosition = () => {
      const productCardRect = productCardRef.current.getBoundingClientRect();
      console.log(productCardRect);
      const productDetailLeft =
        productCardRect.left + productCardRect.width + 5;

      setProductDetailPosition({ top: 15, left: productDetailLeft });
    };

    if (showProductDetail) {
      calculatePosition();
    }
  }, [showProductDetail]);

  const handleMouseEnter = () => {
    setShowProductDetail(true);
  };

  const handleMouseOut = () => {
    setShowProductDetail(false);
  };

  return (
    <>
      <div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseOut}
        className="border rounded-lg overflow-hidden shadow-lg m-4 w-full md:w-1/3 lg:w-1/6 relative"
        ref={productCardRef}
      >
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
      {showProductDetail && (
        <div
          className="absolute z-50 md:w-1/3 lg:w-1/6 h-5/6 rounded-lg bg-gradient-to-r from-customeBlue to-customRed p-1"
          style={{
            top: `${productDetailPosition.top}px`,
            left: `${productDetailPosition.left}px`,
          }}
          id="product-detail"
        >
          <p className="py-2 text-sm font-bold text-white">{product.name}</p>
          <div className="w-full h-5/6 rounded-b-lg bg-white">
            <div className="m-2 pt-1 flex flex-col gap-2 text-xs">
              <p>
                <span className="font-bold text-xs">- Giá bán: </span>
                {product.originalPrice}
              </p>
              <p>
                <span className="font-bold text-xs">- Giá hacom: </span>
                <span className="font-bold text-red-500">
                  {product.discountedPrice}{" "}
                </span>
                [Đã bao gồm VAT]
              </p>
              <p>
                <span className="font-bold text-xs">- Bảo hành: </span>12 tháng
                - BH 3S1
              </p>
              <button className="m-2 p-2 w-2/3 rounded-lg font-bold text-xs text-white bg-customeDarkBlue">
                Thông số sản phẩm
              </button>
              <div className="text-xs">
                <p>- CPU: AMD R5 5625U</p>
                <p>- RAM: 8GB</p>
                <p>- Ổ cứng: 512GB SSD</p>
                <p>- VGA: NVIDIA RTX3050 4GB</p>
                <p>- Màn hình: 15.6 inch FHD 144Hz</p>
                <p>- HĐH: Window 11</p>
                <p>- CPU: AMD R5 5625U</p>
                <p>- Màu: Đen</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

const ProductList = () => {
  const [listProduct, setListProduct] = useState({
    type: "SAN_PHAM_TUONG_TU",
    isSelected: true,
  });

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
            listProduct.type === "SAN_PHAM_TUONG_TU"
              ? "text-white bg-blue-500"
              : "text-blue-500 bg-white"
          } text-xl font-bold p-4 rounded-t-lg cursor-pointer`}
        >
          SẢN PHẨM TƯƠNG TỰ
        </h2>
        <h2
          onClick={() =>
            setListProduct({ type: "SAN_PHAM_DA_XEM", isSelected: false })
          }
          className={`${
            listProduct.type === "SAN_PHAM_DA_XEM"
              ? "text-white bg-blue-500"
              : "text-blue-500 bg-white"
          } text-xl font-bold p-4 rounded-t-lg cursor-pointer`}
        >
          SẢN PHẨM ĐÃ XEM
        </h2>
      </div>
      <div className="relative flex flex-wrap justify-start">
        {renderProducts()}
      </div>
    </div>
  );
};

export default ProductList;
