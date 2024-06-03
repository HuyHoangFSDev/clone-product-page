import React from "react";
import logoHacom from "../../assets/logos/logo-hacom.svg";
import { FaSearch } from "react-icons/fa";
import { PiDesktopTowerDuotone } from "react-icons/pi";
import { CgProfile } from "react-icons/cg";
import { MdOutlineShoppingCart } from "react-icons/md";

function HeaderBar() {
  return (
    <div className="container flex relative bg-white pt-4 pb-8">
      <img src={logoHacom} alt="logo" className="h-auto" />
      <div className="absolute left-1/4">
        <div className="relative">
          <input
            type="text"
            placeholder="Nhập tên sản phẩm cần tìm"
            className="py-2 px-4 w-searchBar border-0 border-gray-300 bg-searchBar rounded-3xl focus:outline-none focus:ring-0"
          />
          <button className="absolute top-1 right-1 bg-customeBlue text-white py-1 px-2 rounded-3xl w-12 justify-center">
            <FaSearch className="w-6 h-6" />
          </button>
        </div>
      </div>
      <div className="flex absolute right-0 items-center gap-10">
        <div className="flex items-center gap-1">
          <PiDesktopTowerDuotone className="w-10 h-10 text-customeBlue" />
          <p className="text-sm text-customeBlue font-bold">Xây dựng cấu hình</p>
        </div>
        <div className="flex items-center gap-1">
          <CgProfile className="w-10 h-10 text-customeBlue" />
          <p className="text-sm text-customeBlue font-bold">Đăng nhập/Đăng ký</p>
        </div>
        <div className="flex items-center text-customeBlue">
          <MdOutlineShoppingCart className="w-10 h-10 text-customeBlue    " />
          <div>
            <p className="text-sm">Giỏ hàng</p>
            <p className="font-bold">0đ</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeaderBar;
