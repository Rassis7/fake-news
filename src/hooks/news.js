import {useState, useEffect} from 'react';
import {getNews} from 'services/api/news.js';

export const useNews = (category, page = 1, pageSize = 10) => {
  const [news, setNews] = useState([]);
  useEffect(() => getNews(setNews, category, page, pageSize), [
    category,
    page,
    pageSize,
  ]);

  return news;
};
