import {useState, useEffect} from 'react';
import newsApi from 'services/newsApi';
import {NEWS_API_KEY} from 'react-native-dotenv';

export const useNews = (category, page) => {
  const [newsResponse, setNewsResponse] = useState([]);
  const [hasError, setHasError] = useState(false);

  const getNews = async (category, page) => {
    try {
      const response = await newsApi.get(
        `/top-headlines?country=br&category=${category}&page=${page ||
          1}&pageSize=10&apiKey=${NEWS_API_KEY}`,
      );

      setNewsResponse(response.data.articles);
    } catch (error) {
      setHasError(true);
    }
  };

  useEffect(() => {
    getNews(category, page);

    return () => {
      setNewsResponse([]);
      setHasError(false);
    };
  }, [category, page]);

  return {newsResponse, hasError};
};
