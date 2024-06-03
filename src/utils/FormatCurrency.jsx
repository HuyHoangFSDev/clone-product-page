import React from "react";

function FormatCurrency(amount) {
  return amount.toLocaleString("vi-VN") + " đ";
}

function PurchaseAmount({ purchase }) {
  return <p className="font-bold">{FormatCurrency(purchase)}</p>;
}

export default PurchaseAmount;
