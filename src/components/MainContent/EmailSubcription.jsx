import React, { useState } from 'react';

const EmailSubscription = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Email submitted:', email);
  };

  return (
    <div className="bg-customeDarkBlue py-10">
      <h2 className="font-bold text-white text-center mb-4">
        ĐĂNG KÝ NHẬN EMAIL THÔNG BÁO KHUYẾN MẠI HOẶC ĐỂ ĐƯỢC TƯ VẤN MIỄN PHÍ
      </h2>
      <form onSubmit={handleSubmit} className="flex justify-center">
        <input
          type="email"
          placeholder="Nhập email của bạn"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="p-2 w-4/5 md:w-3/4 lg:w-3/5 rounded-l-lg focus:outline-none"
          required
        />
        <button
          type="submit"
          className="bg-red-500 text-white p-2 rounded-r-lg w-56 hover:bg-red-600 focus:outline-none"
        >
          Gửi
        </button>
      </form>
    </div>
  );
};

export default EmailSubscription;
