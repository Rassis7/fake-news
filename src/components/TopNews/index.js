import React, {useState, useEffect, useContext} from 'react';
import api from 'services/api';
import Touchable from 'react-native-platform-touchable';
import CategorySelectedContext from 'context/Category';
import AllNewsContext from 'context/AllNews';
import {useNavigation} from 'react-navigation-hooks';
import Skeleton from 'components/Skeleton';

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
  ContainerSkeleton,
} from './styles';

export default function TopNews() {
  const [news, setNews] = useState([]);
  const {selectedCategory} = useContext(CategorySelectedContext);
  const {setAllNewsContext} = useContext(AllNewsContext);

  const {navigate} = useNavigation();

  useEffect(() => {
    const topNews = async () => {
      if (!selectedCategory) return;
      try {
        // const response = await api.get('/top-headlines?country=br&category=business');
        const response = await api.get(
          `/top-headlines-${selectedCategory.type}`,
        );
        const newsData = response.data.articles;

        //Vou setar aproximadamente 20% das noticias buscadas e o resto listarei abaixo
        const newsPercent = newsData.slice(0, parseInt(newsData.length * 0.2));
        setNews(newsPercent);

        //Seto o restante no context
        setAllNewsContext(
          newsData.slice(parseInt(newsData.length * 0.2, newsData.length)),
        );
      } catch (e) {
        console.tron.log('error', e);
        navigate('NotData');
      }
    };

    topNews();
  }, [selectedCategory]);

  return (
    <Container>
      <Header>
        <Title>Principais noticías</Title>
      </Header>

      <List
        horizontal={true}
        data={news}
        keyExtractor={item => item.url}
        ListEmptyComponent={
          <>
            <ItemList>
              <Skeleton.Image style={{marginTop: 7}} width={190} height={80} />
              <Skeleton.Text height={35} width={190} />
              <Skeleton.Text width={190} />
              <Skeleton.Text width={190} />
            </ItemList>
            <ItemList>
              <Skeleton.Image style={{marginTop: 7}} width={190} height={80} />
              <Skeleton.Text height={35} width={190} />
              <Skeleton.Text width={190} />
              <Skeleton.Text width={190} />
            </ItemList>
          </>
        }
        renderItem={({item}) => (
          <Touchable
            onPress={() =>
              navigate('News', {
                item,
                categoryColor: selectedCategory.color,
                categoryTitle: selectedCategory.label,
              })
            }>
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
