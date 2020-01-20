import two from '../../animations/weather/02';
import eleven from '../../animations/weather/11';
import fifty from '../../animations/weather/50';
import threeD from '../../animations/weather/03d';
import threeN from '../../animations/weather/03n';
import tenD from '../../animations/weather/10d';
import tenN from '../../animations/weather/10n';

export const getIconWeather = animateName => {
  let icon;
  switch (animateName) {
    case '02n':
    case '02d':
      icon = two;
      break;
    case '11n':
    case '11d':
      icon = eleven;
      break;
    case '50n':
    case '50d':
      icon = fifty;
      break;
    case '04d':
    case '03d':
      icon = threeD;
      break;
    case '04n':
    case '03n':
      icon = threeN;
      break;
    case '09d':
    case '10d':
      icon = tenD;
      break;
    case '09n':
    case '10n':
      icon = tenN;
      break;
  }
  return icon;
};
