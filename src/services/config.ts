import { BASE_URL } from "./queryUrls";

interface APIOptions extends RequestInit {
  headers?: Record<string, string>;
}

async function request<T>(
  method: string,
  endpoint: string,
  options: APIOptions = {},
): Promise<T> {
  const url = `${BASE_URL}${endpoint}`;

  const response = await fetch(url, {
    ...options,
    method,
    headers: {
      'Content-Type': 'application/json',
      // TODO: add token to headers
      // ...(token && { Authorization: `Bearer ${token}` }),

      ...options.headers,
    },
  });

  if (!response.ok) {
    throw new Error('API request failed');
  }

  return response.json();
}

export const fetchAPI = {
  get: <T>(endpoint: string, options: APIOptions = {}) =>
    request<T>('GET', endpoint, options),
  post: <T>(endpoint: string, body: any, options: APIOptions = {}) =>
    request<T>('POST', endpoint, { ...options, body: JSON.stringify(body) }),
  put: <T>(endpoint: string, body: any, options: APIOptions = {}) =>
    request<T>('PUT', endpoint, { ...options, body: JSON.stringify(body) }),
  delete: <T>(endpoint: string, options: APIOptions = {}) =>
    request<T>('DELETE', endpoint, options),
};