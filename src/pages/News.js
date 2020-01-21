import React, {useEffect, useState, useContext} from 'react';
import {View, FlatList, TouchableOpacity} from 'react-native';
import styled from 'styled-components/native';
import {useNavigation} from 'react-navigation-hooks';

import Card from 'components/Card';
import FooterLoading from 'components/FooterLoading';

import {getColor} from 'utils/category';
import {getWidth} from 'styles/global';

import {useNews} from '../hooks/useNews';
import {useWeather} from '../hooks/useWeather';

import {WeatherContext} from '../Store';

const Container = styled.View`
  background: #f1f1f1;
  padding: ${getWidth(5)}px;
  height: 100%;
`;

const totalPages = 10;
const News = ({category}) => {
  const {navigate} = useNavigation();
  const {weather, setWeather} = useContext(WeatherContext);

  const [news, setNews] = useState([]);
  const [page, setPage] = useState(1);

  const {newsResponse, hasError, loading} = useNews(category, page);
  const weatherResponse = useWeather(weather.coord);

  useEffect(
    () =>
      setNews(n => {
        //Para evitar noticias repetidas!
        const newsFilter = newsResponse.filter(res => !n.includes(res));
        return [...n, ...newsFilter];
      }),
    [newsResponse],
  );

  useEffect(() => setWeather(w => ({...w, infos: weatherResponse})), [
    weatherResponse,
  ]);

  return (
    <Container>
      <FlatList
        data={news.filter(
          n => n.title && n.urlToImage && n.url && n.description,
        )}
        keyExtractor={item => item.url}
        ListEmptyComponent={
          <View>
            <Card />
            <Card />
          </View>
        }
        renderItem={({item}) => (
          <TouchableOpacity
            onPress={() => navigate('WebViewNews', {news: item})}>
            <Card
              color={getColor(category)}
              title={item.title}
              description={item.description}
              urlToImage={item.urlToImage}
              publishedAt={item.publishedAt}
            />
          </TouchableOpacity>
        )}
        onEndReached={() => {
          if (news.length / totalPages === page && !hasError)
            setPage(p => p + 1);
        }}
        onEndReachedThreshold={0.1}
        ListFooterComponent={loading && <FooterLoading />}
      />
    </Container>
  );
};

export default News;
