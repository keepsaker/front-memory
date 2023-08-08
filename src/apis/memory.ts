import type { NewMemory } from '../types/memory';

export const postMemory = async (form: NewMemory) =>
  await fetch('/memories', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(form),
  });
