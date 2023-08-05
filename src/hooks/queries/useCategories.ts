import { useQuery } from '@tanstack/react-query';
import type { Category, CategoryResponse } from '../../types/category';
import { getCategories } from '../../apis/category';

const useCategories = () =>
  useQuery<CategoryResponse, Error, Array<Category['name']>>({
    queryKey: ['category'],
    queryFn: async () => {
      const response = await getCategories();
      const data = await response.json();
      return data;
    },
    select: ({ categories }) => categories.map(({ name }) => name),
    initialData: { categories: [] },
  });

export default useCategories;
