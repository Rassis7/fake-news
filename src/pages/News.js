import React, {useEffect, useState, useContext, useCallback} from 'react';
import {View, FlatList, TouchableOpacity} from 'react-native';
import styled from 'styled-components/native';

import Card from 'components/Card';
import FooterLoading from 'components/FooterLoading';
import {getColor} from 'utils/category';
import {getWidth} from 'styles/global';
import {useNavigation} from 'react-navigation-hooks';
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

  const [loading, setLoading] = useState(false);
  const [news, setNews] = useState([]);
  const [page, setPage] = useState(1);
  const {weather, setWeather} = useContext(WeatherContext);

  const {newsResponse, hasError} = useNews(category, page);
  const weatherResponse = useWeather(weather.coord);

  const color = getColor(category);

  useEffect(() => setNews(n => [...n, ...newsResponse]), [newsResponse]);

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
              color={color}
              title={item.title}
              description={item.description}
              urlToImage={item.urlToImage}
              publishedAt={item.publishedAt}
            />
          </TouchableOpacity>
        )}
        onEndReached={() => {
          if (news.length / totalPages !== page) {
            setLoading(true);
            setPage(p => p + 1);
          } else {
            setLoading(false);
          }
        }}
        onEndReachedThreshold={0.1}
        ListFooterComponent={loading && <FooterLoading loading={loading} />}
      />
    </Container>
  );
};

export default News;
