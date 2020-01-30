import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import {Transition} from 'react-navigation-fluid-transitions';

import {getWidth, getHeight} from 'styles/global';
import styled from 'styled-components/native';

import Tabs from 'routes/tab';

import Profile from '../pages/Profile';
import WebViewNews from '../pages/WebView';
import Weather from '../pages/Weather';

import ShareNews from '../components/ShareNews';
import WeatherHeader from '../components/WeatherHeader';
import AvatarHeader from '../components/AvatarHeader';

import Icon from 'react-native-vector-icons/MaterialIcons';
Icon.loadFont();

const StyledHeaderBar = styled.TouchableOpacity`
  padding: ${getWidth(2)}px ${getHeight(2)}px;
`;

export const AppStack = createStackNavigator(
  {
    Tabs: {
      screen: Tabs,
      navigationOptions: () => ({
        title: 'AQUELA LOGO FODA AQUI',
        headerTintColor: '#000',
        headerStyle: {borderBottomWidth: 0},
        headerLeft: <AvatarHeader />,
        headerRight: <WeatherHeader />,
      }),
    },
    Profile: {
      screen: Profile,
      navigationOptions: ({navigation}) => ({
        headerLeft: (
          <StyledHeaderBar onPress={() => navigation.goBack()}>
            <Icon name="close" size={32} color="#999" />
          </StyledHeaderBar>
        ),
      }),
    },
    WeatherPage: {
      screen: Weather,
      navigationOptions: ({navigation}) => ({
        title: 'Clima de hoje',
        headerTintColor: '#fff',
        headerStyle: {
          backgroundColor: '#416DF8',
        },
        headerTitleStyle: {
          fontWeight: 'bold',
          fontSize: 20,
        },
        headerLeft: (
          <StyledHeaderBar onPress={() => navigation.goBack()}>
            <Icon name="close" size={32} color="#fff" />
          </StyledHeaderBar>
        ),
      }),
    },
    WebViewNews: {
      screen: WebViewNews,
      navigationOptions: ({navigation}) => ({
        headerRight: (
          <ShareNews
            style={{padding: 5}}
            news={navigation.getParam('news')}
            size={24}
            color="#999"
          />
        ),
        headerLeft: (
          <StyledHeaderBar onPress={() => navigation.goBack()}>
            <Icon name="close" size={32} color="#999" />
          </StyledHeaderBar>
        ),
      }),
    },
  },
  {
    mode: 'modal',
    transition: (
      <Transition.Sequence>
        <Transition.Out type="fade" durationMs={400} interpolation="easeIn" />
        <Transition.Change />
        <Transition.Together>
          <Transition.In
            type="slide-bottom"
            durationMs={400}
            interpolation="easeOut"
            propagation="bottom"
          />
          <Transition.In type="fade" durationMs={200} delayMs={100} />
        </Transition.Together>
      </Transition.Sequence>
    ),
  },
);
