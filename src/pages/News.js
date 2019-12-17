import React, {useEffect, useState, useMemo} from 'react';
import {View, StatusBar, FlatList, TouchableOpacity} from 'react-native';
import styled from 'styled-components/native';

import Card from 'components/Card';
import FooterLoading from 'components/FooterLoading';
import {getColor} from 'utils/category';
import {getWidth} from 'styles/global';
import {useNavigation} from 'react-navigation-hooks';
import {useNews} from '../hooks/useNews';

const Container = styled.View`
  background: #f1f1f1;
  padding: ${getWidth(5)}px;
  height: 100%;
`;

const News = ({category}) => {
  const {navigate} = useNavigation();

  const [loading, setLoading] = useState(false);
  const [news, setNews] = useState([]);
  const [page, setPage] = useState(1);

  const newsResponse = useNews(category, page);
  const color = getColor(category);

  useEffect(() => setNews([...news, ...newsResponse]), [newsResponse]);

  const addPage = () => setPage(p => p + 1);

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
        onEndReached={addPage}
        onEndReachedThreshold={0.1}
        ListFooterComponent={<FooterLoading loading={loading} />}
      />
    </Container>
  );
};

export default News;
