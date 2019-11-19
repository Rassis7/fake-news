import React, {useContext, useEffect} from 'react';
import CategorySelectedContext from 'context/Category';
import {useCategory} from 'hooks/category';

import {Container, List, Item, ItemText, TitleCategory} from './styles';

const Category = ({...props}) => {
  const {selectedCategory, setSelectedCategory} = useContext(
    CategorySelectedContext,
  );
  const category = useCategory();

  useEffect(() => {
    if (!selectedCategory) handleSelectedCategory(category[0]);
  }, [category]);

  const handleSelectedCategory = category => {
    setSelectedCategory(category);
  };

  return (
    <Container {...props}>
      <TitleCategory>Categorias</TitleCategory>
      <List
        horizontal={true}
        data={category}
        keyExtractor={item => item.type}
        renderItem={({item}) => (
          <Item
            onPress={() => handleSelectedCategory(item)}
            color={item.color}
            selected={
              selectedCategory && selectedCategory.type === item.type
                ? true
                : false
            }>
            <ItemText>{item.label}</ItemText>
          </Item>
        )}
      />
    </Container>
  );
};

export default Category;
