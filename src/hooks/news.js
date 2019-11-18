import {useState, useEffect} from 'react';
import api from 'services/api';
import {useNavigation} from 'react-navigation-hooks';

const loadingNews = async (setNews, selectedCategory) => {
  const {navigate} = useNavigation();

  try {
    // const response = await api.get('/top-headlines?country=br&category=business');
    const response = await api.get(`/top-headlines-${selectedCategory.type}`);
    return setNews(response.data.articles);
  } catch (e) {
    navigate('NotData');
  }
};

export function useNews(selectedCategory) {
  const [news, setNews] = useState([]);

  useEffect(() => {
    if (selectedCategory) loadingNews(setNews, selectedCategory);
  }, [selectedCategory]);

  return news;
}
