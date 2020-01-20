import GetLocation from 'react-native-get-location';

export const getCurrentLocation = () => {
  let response;
  try {
    response = GetLocation.getCurrentPosition({
      enableHighAccuracy: true,
      timeout: 15000,
    });
  } catch (error) {
    response = {error};
  }

  return response;
};
