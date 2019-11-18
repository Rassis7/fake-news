import React, {useState, useEffect, useContext} from 'react';
import api from 'services/api';
import CategorySelectedContext from 'context/Category';

import {Container, List, Item, ItemText, TitleCategory} from './styles';

const Category = ({...props}) => {
  const [category, setCategory] = useState([]);
  const {selectedCategory, setSelectedCategory} = useContext(
    CategorySelectedContext,
  );

  useEffect(() => {
    const getCategorys = async () => {
      const response = await api.get(`/categorys`);

      setCategory(response.data);
      if (!selectedCategory) handleSelectedCategory(response.data[0]);
    };
    getCategorys();
  }, [selectedCategory]);

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
