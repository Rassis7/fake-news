import React from 'react';
import {ActivityIndicator} from 'react-native';
import styled from 'styled-components/native';
import {getWidth} from 'styles/global';

const LoadingStyled = styled.View`
  padding: ${getWidth(5)}px;
`;

export default function FooterLoading() {
  return (
    <LoadingStyled>
      <ActivityIndicator />
    </LoadingStyled>
  );
}
