import React, {useState, useEffect, useRef} from 'react';
import {StatusBar, Animated} from 'react-native';
import {useNavigation} from 'react-navigation-hooks';

import Category from 'components/Category';
import TopNews from 'components/TopNews';
import AllNews from 'components/AllNews';

import CategorySelectedContext from 'context/Category';
import {getNews} from 'services/api/news';

import {Container, HeaderNews, TitleNews} from './styles';

const Main = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [topNews, setTopNews] = useState([]);
  const [allNews, setAllNews] = useState([]);

  const animatedScrollYValue = useRef(new Animated.Value(0)).current;

  const {navigate} = useNavigation();

  useEffect(() => {
    const getNewsData = async () => {
      if (!selectedCategory) return;

      try {
        const newsData = await getNews(selectedCategory.type);

        if (newsData) {
          //Vou setar aproximadamente 20% das noticias buscadas e o resto listarei abaixo
          setTopNews(newsData.slice(0, parseInt(newsData.length * 0.2)));
          setAllNews(
            newsData.slice(parseInt(newsData.length * 0.2, newsData.length)),
          );
        }
      } catch (e) {
        console.tron.log('ERROR:', e);
        navigate('NotData');
      }
    };
    getNewsData();
  }, [selectedCategory]);

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
          {topNews && (
            <TopNews
              topNews={topNews}
              style={{
                maxHeight: animatedScrollYValue.interpolate({
                  inputRange: [0, 180],
                  outputRange: [260, 0],
                  extrapolate: 'clamp',
                }),
                opacity: animatedScrollYValue.interpolate({
                  inputRange: [0, 80, 95, 130, 150],
                  outputRange: [1, 0.7, 0.8, 0.4, 0],
                  extrapolate: 'clamp',
                }),
              }}
            />
          )}
          {allNews && (
            <AllNews
              allNews={allNews}
              scrollEventThrottle={16}
              onScroll={Animated.event([
                {nativeEvent: {contentOffset: {y: animatedScrollYValue}}},
              ])}
            />
          )}
        </CategorySelectedContext.Provider>
      </Container>
    </>
  );
};

Main.navigationOptions = {
  header: null,
};

export default Main;
