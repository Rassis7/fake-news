import api from 'services/api';

export const getNews = async (category, page) => {
  const response = await api.get(
    `/top-headlines?country=br&category=${category}&page=${page ||
      1}&pageSize=10&apiKey=9e5574008a3e438e9758d1e389a7b20f`,
  );
  return response.data.articles;
};
