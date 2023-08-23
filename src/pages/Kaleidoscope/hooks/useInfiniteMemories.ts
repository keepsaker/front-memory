import {
  UseInfiniteQueryResult,
  useInfiniteQuery,
} from '@tanstack/react-query';
import { fetchApi } from '../../../utils/fetchApi';
import { Memory } from '../../../types/memory';
import { FilterOption } from '../../../constant/filterBar';

interface PageData {
  data: Memory[];
  nextPage: number;
}

export function useMemories(
  filter: FilterOption
): UseInfiniteQueryResult<PageData, unknown> {
  return useInfiniteQuery<PageData, unknown>(
    ['memories', filter],
    async ({ pageParam = 1 }) => {
      const url = `/memories?page=${pageParam}&${filter}`;
      return fetchApi(url);
    },
    {
      getNextPageParam: (lastPage) => lastPage.nextPage,
    }
  );
}
