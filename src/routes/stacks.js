import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import {getWidth, getHeight} from 'styles/global';
import styled from 'styled-components/native';
import SignIn from '../pages/SignIn';
import Profile from '../pages/Profile';
import WebViewNews from '../pages/WebView';
import Avatar from 'components/Avatar';
import Tabs from 'routes/tab';
import ShareNews from '../components/ShareNews';
import {Transition} from 'react-navigation-fluid-transitions';

import Icon from 'react-native-vector-icons/MaterialIcons';
Icon.loadFont();

const StyledHeaderBar = styled.TouchableOpacity`
  padding: ${getWidth(2)}px ${getHeight(2)}px;
`;

export const AuthStack = createStackNavigator({SignIn});

export const AppStack = createStackNavigator(
  {
    Tabs: {
      screen: Tabs,
      navigationOptions: ({navigation}) => ({
        // title: 'AQUELA LOGO FODA AQUI',
        headerTintColor: '#000',
        headerStyle: {borderBottomWidth: 0},

        headerLeft: (
          <Transition shared="avatarProfile">
            <StyledHeaderBar onPress={() => navigation.navigate('Profile')}>
              <Avatar
                url="https://avatars3.githubusercontent.com/u/6963242?s=400&u=20e06b9d3692da2a949349b9979e5221cd34178e&v=4"
                size={3}
              />
            </StyledHeaderBar>
          </Transition>
        ),
      }),
    },
    Profile: {
      screen: Profile,
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
