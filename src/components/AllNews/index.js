import React, {useState, useMemo, useContext, useEffect} from 'react';
import {View, ActivityIndicator} from 'react-native';
import Touchable from 'react-native-platform-touchable';
import CategorySelectedContext from 'context/Category';
import {useNavigation} from 'react-navigation-hooks';
import Skeleton from 'components/Skeleton';
import {getNews} from 'services/api/news';

import {
  List,
  Card,
  CardImage,
  CardContent,
  Title,
  Description,
  Loading,
} from './styles';

const AllNews = ({allNews, ...props}) => {
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(2);
  const [allNewsState, setAllNewsState] = useState([]);

  const {selectedCategory} = useContext(CategorySelectedContext);
  const {navigate} = useNavigation();

  useEffect(() => {
    setPage(2);
    setAllNewsState([]);
  }, [selectedCategory]);

  const allNewsMemo = useMemo(
    () =>
      [...allNews, ...allNewsState].filter(
        a => a.title && a.urlToImage && a.url && a.description,
      ),
    [allNews, allNewsState],
  );

  const renderFooter = () => {
    if (!loading) return null;
    return (
      // <View style={styles.loading}>
      <Loading>
        <ActivityIndicator />
      </Loading>
    );
  };

  const loadingNews = async () => {
    if (loading) return;
    setLoading(true);

    const news = await getNews(selectedCategory.type, page);
    console.tron.log('page', page);

    await setAllNewsState([...allNewsState, ...news]);
    setPage(page + 1);
    setLoading(false);
  };

  return (
    <List
      {...props}
      data={allNewsMemo}
      keyExtractor={item => item.url}
      ListEmptyComponent={
        <>
          <Card>
            <Skeleton.Image style={{marginTop: 7}} />
            <Skeleton.Text height={35} style={{marginTop: 15}} />
            <Skeleton.Text />
            <Skeleton.Text />
          </Card>
          <Card>
            <Skeleton.Image style={{marginTop: 7}} />
            <Skeleton.Text height={35} style={{marginTop: 15}} />
            <Skeleton.Text />
            <Skeleton.Text />
          </Card>
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
          <Card>
            <CardImage
              source={{uri: item.urlToImage, cache: 'force-cache'}}
              // resizeMode="cover"
            />
            <CardContent>
              <Title>{item.title}</Title>
              <Description>{item.description}</Description>
            </CardContent>
          </Card>
        </Touchable>
      )}
      onEndReached={loadingNews}
      onEndReachedThreshold={0.1}
      ListFooterComponent={renderFooter}
    />
  );
};

export default AllNews;
