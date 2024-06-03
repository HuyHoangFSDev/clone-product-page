import React from "react";
import BottomLink from "./BottomLink";
import PolicySection from "./PolicySection";
import EmailSubscription from "./EmailSubcription";
import ProductList from "./ProductList";
import NewsList from "./NewsList";
import ProductReview from "./ProductReview";
import ProductDetail from "./ProductDetail";

function MainContent() {
  return (
    <main className="relative container py-8">
      <p className="pb-4 px-4 text-sm text-customeBlue">
        Trang chủ <span className="font-bold text-bgButton">&gt;</span> Laptop
        Acer Aspire 7 <span className="font-bold text-bgButton">&gt;</span>{" "}
        <span className="font-bold">
          Laptop Acer Gaming Aspire 7 A715-76G-59MW (NH.QMYSV.001) (i5
          12450H/8GB RAM/512GB SSD/RTX2050 4G/15.6 inch FHD//Win11/Đen/Vỏ nhôm)
          (2023)
        </span>
      </p>
      <ProductDetail />
      <ProductReview />
      <NewsList />
      <ProductList />
      <EmailSubscription />
      <PolicySection />
      <BottomLink />
    </main>
  );
}

export default MainContent;
