import { useQuery } from '@tanstack/react-query';
import { fetchApi } from '../../utils/fetchApi';

export function memories({ options = {} } = {}) {
  return useQuery(
    ['memories'],
    () => {
      const url = '/memories';
      return fetchApi(url);
    },
    { ...options }
  );
}
