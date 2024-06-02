import React from 'react';
import news1 from '../../assets/images/news1.jpg';
import news2 from '../../assets/images/news2.jpg';
import news3 from '../../assets/images/news3.jpg';
import news4 from '../../assets/images/news4.jpg';

const NewsCard = ({ news }) => {
  return (
    <div className="border rounded-lg overflow-hidden shadow-lg m-4 w-full">
      <img src={news.image} alt={news.title} className="w-full h-40 object-cover" />
      <div className="p-4">
        <h3 className="text-sm font-bold mb-2">{news.title}</h3>
        <p className="text-gray-600 text-xs mb-4">{news.excerpt}</p>
        <a href={news.link} className="text-blue-500 text-sm">Xem thêm</a>
      </div>
    </div>
  );
};

const NewsList = () => {
  const newsArticles = [
    {
      title: 'Hướng dẫn cơ bản khi mua router trong năm 2023 – Sự lựa chọn đáng tin cậy',
      image: news1,
      excerpt: 'Nếu bạn đang tìm kiếm một router có giá cả phải chăng, sự dụng được cho...',
      link: '#',
    },
    {
      title: 'Cách chọn màn hình phụ dành cho người sử dụng hệ sinh thái Apple',
      image: news2,
      excerpt: 'Với ProArt, màn hình máy tính đồ họa chất lượng cao, giúp bạn có thể tận...',
      link: '#',
    },
    {
      title: 'HACOM đồng hành cùng tiếp sức mùa thi 2023!',
      image: news3,
      excerpt: 'HACOM Thanh Hóa đồng hành cùng các bạn sinh viên tiếp sức mùa thi...',
      link: '#',
    },
    {
      title: 'SỞ HỮU BẢN QUYỀN WINRAR CỰC RẺ HỢP VÍ',
      image: news4,
      excerpt: 'Hôm nay HACOM sẽ hướng dẫn các bạn cách mua bản quyền WinRAR...',
      link: '#',
    },
  ];

  return (
    <div className="container mx-auto flex justify-end">
      <div className="w-full md:w-2/5">
        <h2 className="text-gray-700 text-xl font-bold mt-8 mb-4 px-4">Tin tức mới nhất</h2>
        <div className="grid grid-cols-2 gap-4 px-4">
          {newsArticles.slice(0, 4).map((news, index) => (
            <NewsCard key={index} news={news} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewsList;
