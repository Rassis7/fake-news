import {useState, useEffect} from 'react';
import newsApi from 'services/newsApi';

const getNews = async (setNews, category, page) => {
  const response = await newsApi.get(
    `/top-headlines?country=br&category=${category}&page=${page ||
      1}&pageSize=10&apiKey=9e5574008a3e438e9758d1e389a7b20f`,
  );
  const state =
    response && response.data && response.data.articles
      ? response.data.articles
      : [];

  setNews(state);
};

export const useNews = (category, page) => {
  const [news, setNews] = useState([]);
  useEffect(() => {
    try {
      getNews(setNews, category, page);
    } catch (error) {
      console.log(error);
      alert('Opsss, aconteceu um erro ao carregar as notícias!');
    }
  }, [category, page]);

  return news;
};
