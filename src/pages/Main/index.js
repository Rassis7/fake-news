import React, {useState, useEffect, useRef} from 'react';
import {StatusBar, Animated} from 'react-native';

import Category from 'components/Category';
import TopNews from 'components/TopNews';
import AllNews from 'components/AllNews';

import CategorySelectedContext from 'context/Category';

import api from 'services/api';

import {Container, HeaderNews, TitleNews, AnimationView} from './styles';

const Main = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [topNews, setTopNews] = useState([]);
  const [allNews, setAllNews] = useState([]);

  const animatedScrollYValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const getNews = async () => {
      if (!selectedCategory) return;
      try {
        // const response = await api.get('/top-headlines?country=br&category=business');
        const response = await api.get(
          `/top-headlines-${selectedCategory.type}`,
        );
        const newsData = response.data.articles;

        //Vou setar aproximadamente 20% das noticias buscadas e o resto listarei abaixo
        const newsPercent = newsData.slice(0, parseInt(newsData.length * 0.2));
        setTopNews(newsPercent);

        //Seto o restante no context
        setAllNews(
          newsData.slice(parseInt(newsData.length * 0.2, newsData.length)),
        );
      } catch (e) {
        console.tron.log('error', e);
        navigate('NotData');
      }
    };

    getNews();
  }, [selectedCategory]);

  console.log('animatedScrollYValue', animatedScrollYValue);
  return (
    <>
      <StatusBar headerTintColor="#000" />
      <Container>
        <CategorySelectedContext.Provider
          value={{
            selectedCategory,
            setSelectedCategory,
          }}>
          <Category
            style={{
              maxHeight: animatedScrollYValue.interpolate({
                inputRange: [0, 180],
                outputRange: [150, 0],
                extrapolate: 'clamp',
              }),
              opacity: animatedScrollYValue.interpolate({
                inputRange: [0, 80, 95, 130, 150],
                outputRange: [1, 0.7, 0.8, 0.4, 0],
                extrapolate: 'clamp',
              }),
            }}
          />
          <HeaderNews>
            <TitleNews>Principais noticías</TitleNews>
          </HeaderNews>
          <TopNews
            topNews={topNews}
            style={{
              maxHeight: animatedScrollYValue.interpolate({
                inputRange: [0, 180],
                outputRange: [300, 0],
                extrapolate: 'clamp',
              }),
              opacity: animatedScrollYValue.interpolate({
                inputRange: [0, 80, 95, 130, 150],
                outputRange: [1, 0.7, 0.8, 0.4, 0],
                extrapolate: 'clamp',
              }),
            }}
          />
          <AllNews
            allNews={allNews}
            scrollEventThrottle={16}
            onScroll={Animated.event([
              {nativeEvent: {contentOffset: {y: animatedScrollYValue}}},
              // {useNativeDriver: true},
            ])}
          />
        </CategorySelectedContext.Provider>
      </Container>
    </>
  );
};

Main.navigationOptions = {
  header: null,
};

export default Main;
