import React, {useState} from 'react';
import {StatusBar} from 'react-native';

import Category from 'components/Category';
import TopNews from 'components/TopNews';
import AllNews from 'components/AllNews';

import CategorySelectedContext from 'context/Category';
import AllNewsContext from 'context/AllNews';

import {Container} from './styles';

const Main = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [allNewsContext, setAllNewsContext] = useState([]);

  return (
    <>
      <StatusBar headerTintColor="#000" />
      <Container>
        <CategorySelectedContext.Provider
          value={{selectedCategory, setSelectedCategory}}>
          <Category />
          <AllNewsContext.Provider value={{allNewsContext, setAllNewsContext}}>
            <TopNews />
            <AllNews />
          </AllNewsContext.Provider>
        </CategorySelectedContext.Provider>
      </Container>
    </>
  );
};

Main.navigationOptions = {
  header: null,
};

export default Main;
