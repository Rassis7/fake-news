import React, {useContext} from 'react';
import Touchable from 'react-native-platform-touchable';
import AllNewsContext from 'context/AllNews';
import CategorySelectedContext from 'context/Category';
import {useNavigation} from 'react-navigation-hooks';
import {Text} from 'react-native';

import Skeleton from 'components/Skeleton';

import {
  Container,
  List,
  Card,
  CardImage,
  CardContent,
  Title,
  Description,
  CardFooter,
} from './styles';

export default function AllNews() {
  const {allNewsContext} = useContext(AllNewsContext);
  const {selectedCategory} = useContext(CategorySelectedContext);
  const {navigate} = useNavigation();

  const loadPage = async (pageNumber = 1) => {};

  const allNewsContextFilter = allNewsContext.filter(
    a => a.title && a.urlToImage && a.urlToImage,
  );

  return (
    <Container>
      <List
        data={allNewsContextFilter}
        keyExtractor={item => item.url}
        removeClippedSubviews={true} // Unmount components when outside of window
        initialNumToRender={2} // Reduce initial render amount
        maxToRenderPerBatch={1} // Reduce number in each render batch
        maxToRenderPerBatch={100} // Increase time between renders
        windowSize={7} // Reduce the window size
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
    </Container>
  );
}
