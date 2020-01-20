import React from 'react';
import styled from 'styled-components';
import {getWidth, getHeight} from 'styles/global';

const ImageStyled = styled.Image`
  height: ${props => getHeight(props.size) + getWidth(props.size)}px;
  width: ${props => getHeight(props.size) + getWidth(props.size)}px;
  border-radius: ${props =>
    (getHeight(props.size) + getWidth(props.size)) / 2}px;
`;

export default function Avatar({url, size}) {
  return (
    <ImageStyled
      source={{
        uri: url,
        cache: 'force-cache',
      }}
      size={size}
    />
  );
}
