import React from 'react';
import {Share} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styled from 'styled-components';
import {getWidth, getHeight} from 'styles/global';

Icon.loadFont();

const StyleContainer = styled.TouchableOpacity`
  padding: ${getWidth(2)}px ${getHeight(2)}px;
`;

export default function ShareNews({news, ...props}) {
  const {title, url} = news;

  const handleShare = () => {
    Share.share({
      message: `${title}. Veja mais em: ${url}`,
    })
      .then(result => console.tron.log(result))
      .catch(errorMsg => console.tron.log(errorMsg));
  };

  return (
    <StyleContainer onPress={handleShare}>
      <Icon name="share" {...props} />
    </StyleContainer>
  );
}
