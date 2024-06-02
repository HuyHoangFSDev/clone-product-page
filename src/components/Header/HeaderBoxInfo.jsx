import React from "react";
import { MdOutlinePhoneInTalk } from "react-icons/md";
import { MdKeyboardArrowDown } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import { HiOutlineSupport } from "react-icons/hi";
import { BiSupport } from "react-icons/bi";
import { CiGift } from "react-icons/ci";

function HeaderBoxInfo() {
  return (
    <div className="bg-headerBox py-2 flex items-center text-white relative text-sm">
      <MdOutlinePhoneInTalk className="text-white w-5 h-5" />
      <p className="ml-2 font-bold">Hotline mua hàng: 1900 1903</p>
      <div className="flex absolute gap-2 left-1/4">
        <div className="bg-gradient-to-r from-customeBlue to-customRed animate-gradient flex items-center rounded-2xl gap-1 py-0.5">
          <MdOutlinePhoneInTalk className="w-5 h-5" />
          <p>Mua hàng online</p>
          <MdKeyboardArrowDown className="w-5 h-5" />   
        </div>  
        <div className="bg-gradient-to-r from-customeBlue to-customRed animate-gradient flex items-center rounded-2xl gap-1 py-0.5">
          <MdOutlinePhoneInTalk className="w-5 h-5" />
          <p>Miền Bắc</p>
          <MdKeyboardArrowDown className="w-5 h-5" />
        </div>
        <div className="bg-gradient-to-r from-customeBlue to-customRed animate-gradient flex items-center rounded-2xl gap-1 py-0.5">
          <MdOutlinePhoneInTalk className="w-5 h-5" />      
          <p>Miền Trung</p>
          <MdKeyboardArrowDown className="w-5 h-5" />
        </div>
        <div className="bg-gradient-to-r from-customeBlue to-customRed animate-gradient flex items-center rounded-2xl gap-1 py-0.5">
          <MdOutlinePhoneInTalk className="w-5 h-5" />
          <p>Miền Nam</p>
          <MdKeyboardArrowDown className="w-5 h-5" />
        </div>
      </div>
      <div className="flex items-center gap-1 absolute right-4  ">
        <CiLocationOn className="w-5 h-5"/>
        <p>Hệ thống Showroom</p>
        <div class="border border-solid border-white h-4"></div>
        <HiOutlineSupport className="w-5 h-5"/>
        <p>Hỗ trợ</p>
        <div class="border border-solid border-white h-4"></div>
        <BiSupport className="w-5 h-5"/>
        <p>Trung tâm dịch vụ</p>
        <div class="border border-solid border-white h-4"></div>
        <CiGift className="w-5 h-5"/>
        <p>Khuyến mãi</p>
      </div>
    </div>
  );
}

export default HeaderBoxInfo;
