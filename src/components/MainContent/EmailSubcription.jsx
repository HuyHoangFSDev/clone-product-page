import React, { useState } from "react";

const EmailSubscription = () => {
  const [email, setEmail] = useState("");
  const [alert, setAlert] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email === "") {
      setAlert("Vui lòng nhập email");
      return;
    }

    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
      setAlert("Email không đúng, Mời bạn nhập lại!");
      return;
    }

    console.log("Email submitted:", email);
    setAlert("")
  };

  console.log(alert);

  return (
    <div className="bg-customeDarkBlue flex flex-col py-10">
      <h2 className="font-bold text-white text-center mb-4">
        ĐĂNG KÝ NHẬN EMAIL THÔNG BÁO KHUYẾN MẠI HOẶC ĐỂ ĐƯỢC TƯ VẤN MIỄN PHÍ
      </h2>
      <form
        id="submitForm"
        onSubmit={handleSubmit}
        className="flex justify-center"
      >
        <input
          id="email"
          placeholder="Nhập email của bạn"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={`${alert && "placeholder-red-300 border border-red-400 text-red-400"} p-2 w-4/5 md:w-3/4 lg:w-3/5 rounded-l-lg focus:outline-none`}
        />
        <button
          type="submit"
          className="bg-red-500 text-white p-2 rounded-r-lg w-56 hover:bg-red-600 focus:outline-none"
        >
          Gửi
        </button>
      </form>
      {alert && <p className="pl-48 text-red-500 text-sm">{alert}</p>}
    </div>
  );
};

export default EmailSubscription;
