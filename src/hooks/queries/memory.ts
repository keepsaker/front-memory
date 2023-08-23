import { useQuery } from '@tanstack/react-query';
import { fetchApi } from '../../utils/fetchApi';

export function memory(memoryId: string, { options = {} } = {}) {
  return useQuery(
    ['memory', memoryId],
    () => {
      const url = `/memory/${memoryId}`; // url의 id 부분을 변수로 변경
      return fetchApi(url);
    },
    { ...options }
  );
}
