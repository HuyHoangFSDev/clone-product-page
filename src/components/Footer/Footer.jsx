import React from "react";

function Footer() {
  return (
    <footer className="bg-customeDarkBlue py-6 mt-8">
      <div className="container mx-auto text-textFooter">
        <p>© 2021 Công ty Cổ phần đầu tư công nghệ HACOM</p>
        <p>
          <span className="font-bold">Địa chỉ:</span> Tầng 3 Tòa nhà LILAMA, số 124 Minh Khai, Phường Minh Khai,
          Quận Hai Bà Trưng, Hà Nội
        </p>
        <p>GPĐKKD số 0101161194 do Sở KHĐT Tp.Hà Nội cấp ngày 31/8/2001</p>{" "}
        <p><span className="font-bold">Email:</span> info@hacom.vn</p>
        <p><span className="font-bold">Điện thoại:</span> 1900 1903</p>
      </div>
    </footer>
  );
}

export default Footer;
