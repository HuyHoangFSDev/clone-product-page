import img1 from "../images/img1.jpg";
import img2 from "../images/img2.jpg";
import img3 from "../images/img3.jpg";
import img4 from "../images/img4.jpg";
import img5 from "../images/img5.jpg";
import img6 from "../images/img6.jpg";
import img7 from "../images/img7.jpg";
import img8 from "../images/img8.jpg";
import img9 from "../images/img9.jpg";
import product1 from "../../assets/images/product1.jpg";
import product2 from "../../assets/images/product2.jpg";
import product3 from "../../assets/images/product3.jpg";
import news1 from "../../assets/images/news1.jpg";
import news2 from "../../assets/images/news2.jpg";
import news3 from "../../assets/images/news3.jpg";
import news4 from "../../assets/images/news4.jpg";
import {
  FaTruck,
  FaExchangeAlt,
  FaCreditCard,
  FaHeadset,
} from "react-icons/fa";

export const newsArticles = [
  {
    title:
      "Hướng dẫn cơ bản khi mua router trong năm 2023 – Sự lựa chọn đáng tin cậy",
    image: news1,
    excerpt:
      "Nếu bạn đang tìm kiếm một router có giá cả phải chăng, sự dụng được cho...",
    link: "#",
  },
  {
    title: "Cách chọn màn hình phụ dành cho người sử dụng hệ sinh thái Apple",
    image: news2,
    excerpt:
      "Với ProArt, màn hình máy tính đồ họa chất lượng cao, giúp bạn có thể tận...",
    link: "#",
  },
  {
    title: "HACOM đồng hành cùng tiếp sức mùa thi 2023!",
    image: news3,
    excerpt:
      "HACOM Thanh Hóa đồng hành cùng các bạn sinh viên tiếp sức mùa thi...",
    link: "#",
  },
  {
    title: "SỞ HỮU BẢN QUYỀN WINRAR CỰC RẺ HỢP VÍ",
    image: news4,
    excerpt: "Hôm nay HACOM sẽ hướng dẫn các bạn cách mua bản quyền WinRAR...",
    link: "#",
  },
];

export const policies = [
  {
    icon: <FaTruck className="text-red-500 w-12 h-12" />,
    title: "CHÍNH SÁCH GIAO HÀNG",
    description: "Nhận hàng và thanh toán tại nhà",
  },
  {
    icon: <FaExchangeAlt className="text-red-500 w-12 h-12" />,
    title: "ĐỔI TRẢ DỄ DÀNG",
    description: "1 đổi 1 trong 15 ngày",
  },
  {
    icon: <FaCreditCard className="text-red-500 w-12 h-12" />,
    title: "THANH TOÁN TIỆN LỢI",
    description: "Trả tiền mặt, CK, trả góp 0%",
  },
  {
    icon: <FaHeadset className="text-red-500 w-12 h-12" />,
    title: "HỖ TRỢ NHIỆT TÌNH",
    description: "Tư vấn, giải đáp mọi thắc mắc",
  },
];

export const specifications = [
  ["Hãng sản xuất", "Acer"],
  ["Chủng loại", "Aspire 7 A715-76G-59MW– model giải trí, gaming"],
  ["Part Number", "NH.QMYSV.001"],
  ["Màu sắc, chất liệu", "Đen (Charcoal Black); vỏ nhôm mặt A"],
  ["Bộ vi xử lý", "Intel® Core™ i5-12450H (3.3GHz upto 4.4Ghz/12MB cache)"],
  ["Chipset", ""],
  ["Bộ nhớ trong", "8GB DDR4 3200Mhz"],
  ["Số khe cắm", "2"],
  ["Dung lượng tối đa", "32GB"],
  ["VGA", "NVIDIA® GeForce RTX™ 2050 4GB GDDR6"],
  ["Ổ cứng", "512GB SSD PCIe NVMe"],
];

export const products = [
  {
    name: "Laptop Acer Gaming Aspire 7 A715-42G-R4XX (NH.QAYSV.008) (R5...",
    image: product1,
    originalPrice: "16.650.000₫",
    discountedPrice: "15.499.000₫",
    discount: 7,
    rating: 0,
  },
  {
    name: "Laptop Acer Gaming Aspire 7 A715-43G-R8GA (NH.QHDSV.002) (R5...",
    image: product2,
    originalPrice: "23.999.000₫",
    discountedPrice: "15.999.000₫",
    discount: 33,
    rating: 0,
  },
  {
    name: "Laptop Acer Gaming Aspire 7 A715-76G-5806 (NH.QMFSV.002) (i5...",
    image: product3,
    originalPrice: "22.999.000₫",
    discountedPrice: "20.999.000₫",
    discount: 9,
    rating: 0,
  },
];

export const imgDetail = [img1, img2, img3, img4, img5, img6, img7, img8, img9];

export const stores = [
  { name: "Kho tổng Bắc Giang", quantity: 1 },
  { name: "Kho tổng Hai Bà Trưng", quantity: 1 },
  { name: "Kho tổng Đống Đa", quantity: 2 },
  { name: "Kho tổng Cầu Giấy", quantity: 3 },
  { name: "Kho tổng Hà Đông 1", quantity: 1 },
  { name: "Kho tổng Long Biên", quantity: 1 },
  { name: "Kho tổng Từ Sơn", quantity: 1 },
  { name: "Kho tổng Thanh Trì", quantity: 1 },
  { name: "Kho tổng Đông Anh", quantity: 1 },
];

export const promotions = [
  "Giảm ngay 50.000đ khi mua Balo, Cặp, Túi chống sốc cao cấp...",
  "Giảm ngay 100.000đ khi mua Ram Laptop thương hiệu KINGSTON",
  "Giảm ngay 100.000đ khi mua Ram Laptop thương hiệu LEXAR",
  "Giảm ngay 200.000đ khi mua Ghế công thái học thương hiệu LEGION",
  "Giảm ngay 40.000đ khi mua kèm phần mềm diệt virus",
  "Giảm ngay 500.000đ khi mua kèm Ổ HDD",
  "Giảm ngay 100.000đ khi mua Ram Laptop thương hiệu LEXAR",
];
