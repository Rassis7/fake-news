import {useState, useEffect} from 'react';
import {getCategory} from 'services/api/category';

export function useCategory() {
  const [category, setCategory] = useState([]);

  useEffect(() => getCategory(setCategory), []);

  return category;
}
