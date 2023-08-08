export const getCategories = async () =>
  await fetch('/categories', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
