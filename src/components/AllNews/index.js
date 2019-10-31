import React, {useContext} from 'react';
import Touchable from 'react-native-platform-touchable';
import AllNewsContext from 'context/AllNews';
import CategorySelectedContext from 'context/Category';
import {useNavigation} from 'react-navigation-hooks';

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

  const loadPage = async (pageNumber = 1) => {};

  const {navigate} = useNavigation();
  return (
    <Container>
      <List
        data={allNewsContext}
        keyExtractor={item => item.url}
        //Execulta uma função ao chegar no fim da lista
        onEndReached={() => loadPage()}
        // Quando estiver a X% do fim da lista, começa a carregar novos itens de 0 a 1
        onEndReachedThreshold={0.1}
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
              <CardImage source={{uri: item.urlToImage}} resizeMode="cover" />
              <CardContent>
                <Title>{item.title}</Title>
                <Description>{item.description}</Description>
              </CardContent>
              <CardFooter>{/* <Button>Ir</Button> */}</CardFooter>
            </Card>
          </Touchable>
        )}
      />
    </Container>
  );
}
