import React from 'react';
import {useNavigationParam} from 'react-navigation-hooks';
import {StatusBar, SafeAreaView} from 'react-native';
import {ScrollView, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import ShareNews from 'components/ShareNews';

Icon.loadFont();
import {
  HeaderLeftView,
  Header,
  Content,
  Title,
  PublishedAt,
  ContentBody,
  ContentNews,
  OriginalNews,
  Border,
} from './styles';

const News = () => {
  const {
    source,
    author,
    title,
    url,
    urlToImage,
    publishedAt,
    content,
    description,
  } = useNavigationParam('item');

  const color = useNavigationParam('categoryColor');

  return (
    <SafeAreaView>
      <StatusBar barStyle="light-content" headerTintColor="#fff" />

      <ScrollView>
        <Header source={{uri: urlToImage}} resizeMode="cover" />

        <Content>
          <View>
            {/* <Author></Author> */}
            <PublishedAt>{publishedAt}</PublishedAt>
            <Title>{title}</Title>
          </View>
          <Border border={color} />
          <ContentBody>
            <ContentNews>{content !== '' ? content : description}</ContentNews>
            <Border border={color} />
            <OriginalNews>{url}</OriginalNews>
          </ContentBody>
        </Content>
      </ScrollView>
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
    headerRight: (
      <>
        <ShareNews news={navigation.getParam('item')} size={24} color="#fff" />
      </>
    ),
    headerLeft: (
      <HeaderLeftView onPress={() => navigation.goBack()}>
        <Icon name="keyboard-arrow-down" size={40} color="#fff" />
      </HeaderLeftView>
    ),
  };
};

export default News;
