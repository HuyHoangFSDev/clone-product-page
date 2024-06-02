import React from "react";
import logoHacom from "../../assets/logos/logo-hacom.svg";
import dmcaLogo from "../../assets/logos/dmcaLogo.png";
import govLogo from "../../assets/logos/govLogo.png";

function BottomLink() {
  return (
    <div className="container flex w-full bg-white py-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left">
        <div>
          <img src={logoHacom} alt="HACOM" className="h-auto mb-4 mx-auto md:mx-0" />
          <ul className="text-gray-600 space-y-2">
            <li>Về chúng tôi</li>
            <li>Liên hệ hợp tác kinh doanh</li>
            <li>Tuyển dụng nhân sự</li>
            <li>Tin tức công nghệ</li>
            <li>Tin tức</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-bold mb-4">HỖ TRỢ</h3>
          <ul className="text-gray-600 space-y-2">
            <li>Xây dựng cấu hình</li>
            <li>Tra cứu đơn hàng</li>
            <li>Hướng dẫn mua hàng trực tuyến</li>
            <li>Hướng dẫn thanh toán</li>
            <li>Hướng dẫn mua hàng trả góp</li>
            <li>In hóa đơn điện tử</li>
            <li>Bảng giá vật tư</li>
            <li>Góp ý, Khiếu lại</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-bold mb-4">CHÍNH SÁCH</h3>
          <ul className="text-gray-600 space-y-2">
            <li>Chính sách, quy định chung</li>
            <li>Chính sách giao hàng</li>
            <li>Chính sách bảo hành</li>
            <li>Chính sách cho doanh nghiệp</li>
            <li>Chính sách hàng chính hãng</li>
            <li>Bảo mật thông tin khách hàng</li>
            <li>Chính sách nhập lại tính phí</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-bold mb-4">KẾT NỐI</h3>
          <ul className="text-gray-600 space-y-2">
            <li>
              <span className="flex items-center justify-center md:justify-start">
                <svg
                  className="w-5 h-5 mr-2"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M15 12c0-1.66-1.34-3-3-3S9 10.34 9 12s1.34 3 3 3 3-1.34 3-3z"></path>
                  <path d="M12 2C6.48 2 2 6.48 2 12c0 5.52 4.48 10 10 10s10-4.48 10-10c0-5.52-4.48-10-10-10zm0 18c-4.41 0-8-3.59-8-8 0-4.41 3.59-8 8-8 4.41 0 8 3.59 8 8 0 4.41-3.59 8-8 8z"></path>
                </svg>
                Hotline: <span className="font-bold text-red-500 ml-1">1900 1903</span>
              </span>
            </li>
            <li>
              <span className="flex items-center justify-center md:justify-start">
                <svg
                  className="w-5 h-5 mr-2"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M21 8V7l-3 2-2-2-2 2-2-2-2 2-2-2-2 2-3 2v1l3-2 2 2 2-2 2 2 2-2 2 2 2-2 2 2 3-2zM12 2C6.48 2 2 6.48 2 12c0 5.52 4.48 10 10 10s10-4.48 10-10c0-5.52-4.48-10-10-10zM5 18v-3l5-5 5 5v3H5z"></path>
                </svg>
                Email: <span className="ml-1">info@hacom.vn</span>
              </span>
            </li>
          </ul>
          <div className="flex justify-center md:justify-start space-x-4 mt-4">
            <a href="#" className="text-blue-600">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.04C6.477 2.04 2 6.524 2 12.093c0 5.022 3.656 9.167 8.432 9.924v-7.03h-2.54V12h2.54V9.545c0-2.506 1.493-3.89 3.776-3.89 1.095 0 2.24.194 2.24.194v2.47h-1.26c-1.243 0-1.63.774-1.63 1.567V12h2.773l-.443 2.987h-2.33v7.03C18.346 21.26 22 17.115 22 12.093 22 6.524 17.522 2.04 12 2.04z"></path>
              </svg>
            </a>
            <a href="#" className="text-red-600">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19.615 3.183C18.84 3.64 18 4.006 17.133 4.313a4.796 4.796 0 0 0-8.155 4.36A13.576 13.576 0 0 1 2.226 4.28 4.816 4.816 0 0 0 3.2 9.86a4.786 4.786 0 0 1-2.158-.6v.057a4.81 4.81 0 0 0 3.85 4.708 4.763 4.763 0 0 1-1.258.166c-.31 0-.616-.03-.913-.09a4.8 4.8 0 0 0 4.48 3.32A9.605 9.605 0 0 1 0 20.66a13.536 13.536 0 0 0 7.32 2.148c8.785 0 13.585-7.296 13.585-13.62 0-.207 0-.414-.014-.618a9.657 9.657 0 0 0 2.365-2.47l-.054-.024z"></path>
              </svg>
            </a>
            <a href="#" className="text-blue-500">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-2C14.895 0 14 .895 14 2v2h-4V2c0-1.105-.895-2-2-2H6C4.895 0 4 .895 4 2v2H2C.895 4 0 4.895 0 6v12c0 1.105.895 2 2 2h2v2c0 1.105.895 2 2 2h2c1.105 0 2-.895 2-2v-2h4v2c0 1.105.895 2 2 2h2c1.105 0 2-.895 2-2v-2h2c1.105 0 2-.895 2-2V6c0-1.105-.895-2-2-2h-2V2c0-1.105-.895-2-2-2zm-7 15h-4V9h4v6zm0-8h-4V5h4v2z"></path>
              </svg>
            </a>
            <a href="#" className="text-pink-500">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c-3.204 0-5.8 2.595-5.8 5.8 0 3.204 2.596 5.8 5.8 5.8s5.8-2.596 5.8-5.8c0-3.204-2.596-5.8-5.8-5.8zM12 12.614c-2.22 0-4.02-1.8-4.02-4.02S9.78 4.573 12 4.573 16.02 6.373 16.02 8.593c0 2.22-1.8 4.02-4.02 4.02zM12 0C8.26 0 5 3.26 5 7.294c0 4.034 3.26 7.294 7 7.294s7-3.26 7-7.294C19 3.26 15.74 0 12 0z"></path>
                <path d="M20.452 18.518c-.075-.15-1.837-3.712-5.752-3.712-2.282 0-3.768 1.43-4.7 1.43-.932 0-2.417-1.43-4.7-1.43-3.914 0-5.677 3.562-5.752 3.712-.108.218.02.482.27.53.023.004 3.333.58 5.48.58.93 0 1.805-.114 2.586-.324.78.21 1.655.324 2.586.324.894 0 1.75-.11 2.586-.324.78.21 1.655.324 2.586.324 2.147 0 5.456-.575 5.48-.58.25-.048.378-.312.27-.53z"></path>
              </svg>
            </a>
          </div>
          <div className="flex justify-center md:justify-start space-x-4 mt-4">
            <img src={dmcaLogo} alt="DMCA" className="h-6" />
            <img src={govLogo} alt="Bộ Công Thương" className="h-6" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default BottomLink;
