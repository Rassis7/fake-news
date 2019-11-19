import localApi from 'services/localApi';

export const getCategory = async setCategory => {
  const response = await localApi.get(`/categorys`);
  setCategory(response.data);
};
