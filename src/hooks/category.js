import {useState, useEffect, useContext} from 'react';
import localApi from 'services/localApi';

import CategorySelectedContext from 'context/Category';

const loadingCategory = async setCategory => {
  const response = await localApi.get(`/categorys`);
  setCategory(response.data);
};

export function useCategory() {
  const [category, setCategory] = useState([]);
  const {selectedCategory, setSelectedCategory} = useContext(
    CategorySelectedContext,
  );

  useEffect(() => {
    loadingCategory(setCategory);
    if (!selectedCategory) setSelectedCategory(category[0]);
  }, []);

  return category;
}
