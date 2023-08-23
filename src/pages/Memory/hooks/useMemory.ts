import { UseQueryResult } from '@tanstack/react-query';
import { memory } from '../../../hooks/queries/memory';
import { Memory } from '../../../types/memory';

export function useMemory(id: string): UseQueryResult<Memory> {
  return memory(id, {
    options: {
      suspense: true,
    },
  });
}
