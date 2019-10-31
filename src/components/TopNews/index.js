import React, {useState, useEffect, useContext} from 'react';
import api from 'services/api';
import Touchable from 'react-native-platform-touchable';
import CategorySelectedContext from 'context/Category';
import AllNewsContext from 'context/AllNews';

import {
  Container,
  List,
  Title,
  ItemList,
  TitleNews,
  Header,
  ImageList,
  Footer,
  Author,
} from './styles';

export default function TopNews() {
  const [news, setNews] = useState([]);
  const {selectedCategory} = useContext(CategorySelectedContext);
  const {setAllNewsContext} = useContext(AllNewsContext);

  useEffect(() => {
    const topNews = async () => {
      // const response = await api.get('/top-headlines?country=br&category=business');
      const categoryParam = selectedCategory
        ? `?=${selectedCategory.type}`
        : '';

      const response = await api.get(
        `/top-headlines?country=br${categoryParam}`,
      );

      const newsData = response.data.articles;

      //Vou setar aproximadamente 20% das noticias buscadas e o resto listarei abaixo
      const newsPercent = newsData.slice(0, parseInt(newsData.length * 0.2));
      setNews(newsPercent);

      //Seto o restante no context
      setAllNewsContext(
        newsData.slice(parseInt(newsData.length * 0.2, newsData.length)),
      );
    };
    topNews();
  }, []);

  return (
    <Container>
      <Header>
        <Title>Principais noticías</Title>
      </Header>
      <List
        horizontal={true}
        data={news}
        keyExtractor={item => item.url}
        renderItem={({item}) => (
          <Touchable onPress={() => console.tron.log('Go News')}>
            <ItemList>
              <ImageList source={{uri: item.urlToImage}} />
              <TitleNews>{item.title}</TitleNews>
              <Footer>
                <Author>Fonte: {item.author || 'Não informado'}</Author>
              </Footer>
            </ItemList>
          </Touchable>
        )}
      />
    </Container>
  );
}
