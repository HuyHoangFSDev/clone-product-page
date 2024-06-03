import React from 'react';
import { newsArticles } from '../../assets/data/data';

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
