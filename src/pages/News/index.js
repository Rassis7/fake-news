import React, {useContext} from 'react';
import {View, Text} from 'react-native';
import {useNavigationParam} from 'react-navigation-hooks';
import {StatusBar, SafeAreaView} from 'react-native';

// import { Container } from './styles';

const News = () => {
  const {
    source,
    author,
    title,
    description,
    url,
    utlToImage,
    publishedAt,
    content,
  } = useNavigationParam('item');

  return (
    <SafeAreaView>
      <StatusBar barStyle="light-content" headerTintColor="#fff" />
    </SafeAreaView>
  );
};

News.navigationOptions = ({navigation}) => {
  return {
    title: navigation.getParam('categoryTitle'),
    headerStyle: {
      backgroundColor: navigation.getParam('categoryColor'),
    },
    headerTintColor: '#fff',
  };
};

export default News;
