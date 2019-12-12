import React from 'react';
import {WebView} from 'react-native-webview';
import {useNavigationParam} from 'react-navigation-hooks';
//user isso https://stackoverflow.com/questions/39333215/react-native-pre-load-uri-while-webview-not-visible
const WebViewNews = () => {
  const uri = useNavigationParam('uri');
  return <WebView source={{uri}} />;
};

export default WebViewNews;
