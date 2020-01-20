import React, {useState, useMemo} from 'react';
import {WebView} from 'react-native-webview';
import {useNavigationParam} from 'react-navigation-hooks';
import Lottie from 'lottie-react-native';
import loadingWebView from '../../animations/loadingWebView';
import styled, {css} from 'styled-components';
import {getHeight} from 'styles/global';

const StyledView = styled.View`
  ${props => {
    if (props.loading)
      return css`
        overflow: hidden;
        max-height: 0;
        max-width: 0;
      `;
  }}
  flex: 1;
`;

const StyledViewAnimate = styled.View`
  justify-content: center;
  align-items: center;
  flex: 1;
`;

const StyledLottie = styled(Lottie)`
  height: ${getHeight(50)}px;
`;

const StyledAnimateText = styled.Text`
  font-size: 32px;
  font-weight: bold;
  color: #cecece;
`;

const WebViewNews = () => {
  const {url: uri} = useNavigationParam('news');
  const [loading, setLoading] = useState(true);

  return (
    <>
      <StyledView loading={loading}>
        <WebView
          source={{uri}}
          onLoad={() => setLoading(false)}
          allowsInlineMediaPlayback={true}
        />
      </StyledView>

      {loading && (
        <StyledViewAnimate>
          <StyledLottie
            autoSize
            resizeMode="contain"
            source={loadingWebView}
            autoPlay
            loop
          />
          <StyledAnimateText>Carregando a notícia...</StyledAnimateText>
        </StyledViewAnimate>
      )}
    </>
  );
};

export default WebViewNews;
