import React from 'react';
import Lottie from 'lottie-react-native';

import styled from 'styled-components';
import {getWidth, getHeight} from 'styles/global';
import notUser from '../../animations/notUser';

const ImageStyled = styled.Image`
  height: ${({size}) => getHeight(size) + getWidth(size)}px;
  width: ${({size}) => getHeight(size) + getWidth(size)}px;
  border-radius: ${({size}) => (getHeight(size) + getWidth(size)) / 2}px;
`;

const StyledLottie = styled(Lottie)`
  height: ${({size}) => getHeight(size) + getWidth(size)}px;
  width: ${({size}) => getHeight(size) + getWidth(size)}px;
  border-radius: ${({size}) => (getHeight(size) + getWidth(size)) / 2}px;
`;

export default function Avatar({url, size}) {
  return url ? (
    <ImageStyled
      source={{
        uri: url,
        cache: 'force-cache',
      }}
      size={size}
    />
  ) : (
    <StyledLottie
      size={size}
      autoSize
      resizeMode="contain"
      source={notUser}
      autoPlay
      loop={false}
    />
  );
}
