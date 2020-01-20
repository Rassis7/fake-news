import React from 'react';
import styled from 'styled-components/native';
import ShimmerPlaceHolder from 'react-native-shimmer-placeholder';

import {getWidth, getHeight} from 'styles/global';
import Lottie from 'lottie-react-native';
import loadingImage from '../../animations/loadingImage';
import {formatDate} from 'utils/format';
import {format} from 'date-fns';

const CardStyled = styled.View`
  width: ${getWidth(90)}px;
  background: #fff;
  margin-bottom: ${getHeight(2)}px;
  border-radius: 10px;
`;

const AnimateStyled = styled(Lottie)`
  width: ${getWidth(90)}px;
  flex-direction: row;
  aspect-ratio: 1.7;
  opacity: 0.4;
`;

const CardImageStyled = styled.Image`
  width: 100%;
  flex-direction: row;
  aspect-ratio: 1.9;
  border-width: 1px;
  border-color: #ddd;
  border-radius: ${getHeight(1)}px;
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
`;

const CardContentStyled = styled.View`
  padding: ${getWidth(5)}px;
`;

const TitleStyled = styled.Text.attrs({
  numberOfLines: 3,
})`
  color: ${props => (props.color ? props.color : '#999')};
  font-size: ${getWidth(5)}px;
  font-weight: bold;
  margin-bottom: ${getHeight(1)}px;
`;

const DescriptionStyled = styled.Text.attrs({
  numberOfLines: 3,
})`
  font-size: ${getWidth(5)}px;
  color: #666;
  margin-bottom: ${getWidth(3)}px;
`;

const PublishedAtStyled = styled.View`
  display: flex;
  align-items: flex-end;
  margin-top: ${getWidth(4)}px;
`;

const TextPublishedAtStyled = styled.Text`
  color: #666;
`;

const Card = React.memo(
  ({urlToImage, title, description, publishedAt, color}) => {
    return (
      <CardStyled>
        {urlToImage ? (
          <CardImageStyled
            source={{
              uri: urlToImage,
              cache: 'force-cache',
            }}
            // resizeMode="cover"
          />
        ) : (
          <AnimateStyled
            autoSize
            resizeMode="contain"
            source={loadingImage}
            autoPlay
            loop
          />
        )}

        <CardContentStyled>
          {title ? (
            <TitleStyled color={color}>{title}</TitleStyled>
          ) : (
            <>
              <ShimmerPlaceHolder
                autoRun={true}
                height={getHeight(2)}
                width={getWidth(80)}
                style={{marginBottom: getHeight(1)}}
              />
              <ShimmerPlaceHolder
                autoRun={true}
                height={getHeight(2)}
                width={getWidth(80)}
                style={{marginBottom: getHeight(1)}}
              />
              <ShimmerPlaceHolder
                autoRun={true}
                height={getHeight(2)}
                width={getWidth(80)}
                style={{marginBottom: getHeight(1)}}
              />
            </>
          )}

          {/* {description ? (
            <DescriptionStyled>{description}</DescriptionStyled>
          ) : (
            <ShimmerPlaceHolder
              autoRun={true}
              height={getHeight(2)}
              width={getWidth(40)}
            />
          )} */}

          <PublishedAtStyled>
            <TextPublishedAtStyled>
              {publishedAt && formatDate(publishedAt)}
            </TextPublishedAtStyled>
          </PublishedAtStyled>
        </CardContentStyled>
      </CardStyled>
    );
  },
);

export default Card;
