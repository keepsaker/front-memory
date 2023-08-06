const baseURL = 'http://localhost:3000'

export async function fetchApi(url, options = {}) {
  // 토큰을 가져와서 헤더에 넣어주는 경우 고려
  // header에 Authorization: Bearer {token} 추가만 하면 됨
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