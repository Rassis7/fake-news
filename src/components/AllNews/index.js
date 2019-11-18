import React, {useMemo, useContext} from 'react';
import Touchable from 'react-native-platform-touchable';
import CategorySelectedContext from 'context/Category';
import {useNavigation} from 'react-navigation-hooks';
import Skeleton from 'components/Skeleton';

import {
  List,
  Card,
  CardImage,
  CardContent,
  Title,
  Description,
  CardFooter,
} from './styles';

const AllNews = ({allNews, ...props}) => {
  const {selectedCategory} = useContext(CategorySelectedContext);
  const {navigate} = useNavigation();

  const loadPage = async (pageNumber = 1) => {};

  const allNewsMemo = useMemo(
    () => allNews.filter(a => a.title && a.urlToImage && a.urlToImage),
    [allNews],
  );

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
    />
  );
};

export default AllNews;
