const baseURL = 'localhost:3000'; 

export async function fetchApi(url, options = {}) {

  const defaultOptions = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    body: undefined,
  };

  const finalOptions = { ...defaultOptions, ...options };

  if (finalOptions.method === 'POST' ) {
    finalOptions.body = JSON.stringify(finalOptions.body);
  }

  const response = await fetch(`${baseURL}${url}`, finalOptions);

  if (!response.ok) {
    throw new Error('네트워크 에러!!');
  }

  return response.json();
}