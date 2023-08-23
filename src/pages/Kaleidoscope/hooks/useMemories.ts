import { memories } from '../../../hooks/queries/memories';

export function useMemories() {
  return memories({
    options: {
      suspense: true,
    },
  });
}
