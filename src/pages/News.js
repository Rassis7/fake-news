import React, {useEffect, useState, useMemo} from 'react';
import {View, StatusBar, FlatList, TouchableOpacity} from 'react-native';
import styled from 'styled-components/native';

import Card from 'components/Card';
import FooterLoading from 'components/FooterLoading';
import {getColor} from 'utils/category';
import {getWidth} from 'styles/global';
import {getNews} from 'services/api/news';
import {useNavigation} from 'react-navigation-hooks';

const Container = styled.View`
  background: #f1f1f1;
  padding: ${getWidth(5)}px;
  height: 100%;
`;

const News = ({category}) => {
  const {navigate} = useNavigation();

  const [loading, setLoading] = useState(false);
  const [news, setNews] = useState([]);
  const [page, setPage] = useState(2);
  const color = getColor(category);

  useEffect(() => loadingNews(), [category]);

  const loadingNews = async () => {
    try {
      if (loading) return;
      setLoading(true);

      const response = await getNews(category, page);
      setNews([...news, ...response]);

      setPage(page + 1);
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  };

  const newsMemo = useMemo(
    () => news.filter(n => n.title && n.urlToImage && n.url && n.description),
    [news],
  );

  return (
    <Container>
      <StatusBar headerTintColor="#000" />
      <FlatList
        data={newsMemo}
        keyExtractor={item => item.url}
        ListEmptyComponent={
          <View>
            <Card />
            <Card />
            <Card />
          </View>
        }
        renderItem={({item}) => (
          <TouchableOpacity
            onPress={() => navigate('WebViewNews', {uri: item.url})}>
            <Card
              color={color}
              title={item.title}
              description={item.description}
              urlToImage={item.urlToImage}
              publishedAt={item.publishedAt}
            />
          </TouchableOpacity>
        )}
        onEndReached={loadingNews}
        onEndReachedThreshold={0.1}
        ListFooterComponent={<FooterLoading loading={loading} />}
      />
    </Container>
  );
};

export default News;
