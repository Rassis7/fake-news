import {useState, useEffect} from 'react';
import api from 'services/api';
import {useNavigation} from 'react-navigation-hooks';

const loadingNews = async (setNews, cartegory) => {
  const {navigate} = useNavigation();

  try {
    const response = await api.get(
      `/top-headlines?country=br&category=${cartegory.type}`,
    );
    // const response = await api.get(`/top-headlines-${cartegory.type}`);
    const newsData = response.data.articles;

    //Vou setar aproximadamente 20% das noticias buscadas e o resto listarei abaixo
    const topNews = newsData.slice(0, parseInt(newsData.length * 0.2));
    const allNews = newsData.slice(
      parseInt(newsData.length * 0.2, newsData.length),
    );

    return setNews({topNews, allNews});
  } catch (e) {
    navigate('NotData');
  }
};

export function useNews(cartegory) {
  const [news, setNews] = useState([]);

  useEffect(() => {
    if (cartegory) loadingNews(setNews, cartegory);
  }, [cartegory]);

  return news;
}
