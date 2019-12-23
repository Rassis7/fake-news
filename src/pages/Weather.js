import React, {useContext, useMemo} from 'react';
import styled from 'styled-components';
import {getWidth, getHeight} from 'styles/global';
import {WeatherContext} from '../Store';
import WeatherLottie from '../components/WeatherLottie';

const Container = styled.SafeAreaView`
  padding: ${getWidth(0.05)}px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: ${getHeight(5)}px;
`;

const StyledTemp = styled.View`
  justify-content: center;
  align-items: center;
  margin-top: ${getHeight(3)}px;
`;

const StyledTempText = styled.Text`
  font-size: ${getHeight(8)}px;
  color: #ccc;
`;

const StyledTempTextMinMax = styled.Text`
  font-size: ${getHeight(4)}px;
  color: #ddd;
`;

const StyledTempTextDescription = styled.Text`
  margin-top: ${getHeight(3)}px;
  font-size: ${getHeight(3)}px;
  font-weight: 400;
  color: #ccc;
`;

const Weather = () => {
  const {weather} = useContext(WeatherContext);

  const weatherFormatted = useMemo(() => {
    const {infos} = weather;
    console.tron.log(infos);

    return {
      ...infos,
      main: {
        ...infos.main,
        temp: `${parseInt(infos.main.temp)}°C`,
        temp_min: `${parseInt(infos.main.temp_min)}°C`,
        temp_max: `${parseInt(infos.main.temp_max)}°C`,
      },
      weather: {
        ...infos.weather,
        description: String(infos.weather.description).toUpperCase(),
      },
    };
  }, weather);

  return (
    <Container>
      <WeatherLottie size={30} />

      <StyledTemp>
        <StyledTempText>{weatherFormatted.main.temp}</StyledTempText>
        <StyledTempTextMinMax>
          {weatherFormatted.main.temp_min}/{weatherFormatted.main.temp_max}
        </StyledTempTextMinMax>

        <StyledTempTextDescription>
          {weatherFormatted.weather.description}
        </StyledTempTextDescription>
      </StyledTemp>
    </Container>
  );
};

export default Weather;
