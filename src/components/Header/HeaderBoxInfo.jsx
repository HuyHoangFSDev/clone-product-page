import React from "react";
import { useState } from "react";
import { MdOutlinePhoneInTalk, MdKeyboardArrowDown } from "react-icons/md";
import { CiLocationOn, CiGift } from "react-icons/ci";
import { HiOutlineSupport } from "react-icons/hi";
import { BiSupport } from "react-icons/bi";
import { createPortal } from "react-dom";

function ModalContent() {
  return (
    <div className="modal absolute flex z-50 top-20 right-1/4 w-1/2 h-96 bg-white justify-center items-center ">
      <div>Thông tin gì đó</div>
    </div>
  );
}

function HeaderBoxInfo() {
  const [showModal, setShowModal] = useState(false);
  console.log(showModal);

  return (
    <>
      <div className="bg-headerBox py-2 flex items-center text-white relative text-sm">
        <MdOutlinePhoneInTalk className="text-white w-5 h-5" />
        <p className="ml-2 font-bold">Hotline mua hàng: 1900 1903</p>
        <div className="flex absolute gap-2 left-1/4">
          <div
            onMouseEnter={() => {
              setShowModal(true);
            }}
            onMouseLeave={() => {
              setShowModal(false);
            }}
            className="button-drop-down flex items-center rounded-2xl gap-1 py-0.5"
          >
            <MdOutlinePhoneInTalk className="w-5 h-5" />
            <p>Mua hàng online</p>
            <MdKeyboardArrowDown className="w-5 h-5" />
          </div>
          <div
            className="button-drop-down flex items-center rounded-2xl gap-1 py-0.5"
            onMouseEnter={() => {
              setShowModal(true);
            }}
            onMouseLeave={() => {
              setShowModal(false);
            }}
          >
            <MdOutlinePhoneInTalk className="w-5 h-5" />
            <p>Miền Bắc</p>
            <MdKeyboardArrowDown className="w-5 h-5" />
          </div>
          <div
            className="button-drop-down flex items-center rounded-2xl gap-1 py-0.5"
            onMouseEnter={() => {
              setShowModal(true);
            }}
            onMouseLeave={() => {
              setShowModal(false);
            }}
          >
            <MdOutlinePhoneInTalk className="w-5 h-5" />
            <p>Miền Trung</p>
            <MdKeyboardArrowDown className="w-5 h-5" />
          </div>
          <div
            className="button-drop-down flex items-center rounded-2xl gap-1 py-0.5"
            onMouseEnter={() => {
              setShowModal(true);
            }}
            onMouseLeave={() => {
              setShowModal(false);
            }}
          >
            <MdOutlinePhoneInTalk className="w-5 h-5" />
            <p>Miền Nam</p>
            <MdKeyboardArrowDown className="w-5 h-5" />
          </div>
        </div>
        <div className="flex items-center gap-1 absolute right-4  ">
          <CiLocationOn className="w-5 h-5" />
          <p>Hệ thống Showroom</p>
          <div class="border border-solid border-white h-4"></div>
          <HiOutlineSupport className="w-5 h-5" />
          <p>Hỗ trợ</p>
          <div class="border border-solid border-white h-4"></div>
          <BiSupport className="w-5 h-5" />
          <p>Trung tâm dịch vụ</p>
          <div class="border border-solid border-white h-4"></div>
          <CiGift className="w-5 h-5" />
          <p>Khuyến mãi</p>
        </div>
      </div>
      {showModal && createPortal(<ModalContent />, document.body)}
    </>
  );
}

export default HeaderBoxInfo;
