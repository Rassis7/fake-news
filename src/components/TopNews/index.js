import React, {useContext} from 'react';
import Touchable from 'react-native-platform-touchable';
import CategorySelectedContext from 'context/Category';
import {useNavigation} from 'react-navigation-hooks';
import Skeleton from 'components/Skeleton';

import {
  // Container,
  List,
  ItemList,
  TitleNews,
  ImageList,
  Footer,
  Author,
} from './styles';

export default function TopNews({topNews, ...props}) {
  const {selectedCategory} = useContext(CategorySelectedContext);

  const {navigate} = useNavigation();

  return (
    <List
      {...props}
      horizontal={true}
      data={topNews}
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
  );
}
