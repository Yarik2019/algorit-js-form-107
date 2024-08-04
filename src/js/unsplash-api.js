import axios from 'axios';

export async function getPhotos(q) {
  const BASE_URL = 'https://api.unsplash.com';
  const API_KEY = 'LxvKVGJqiSe6NcEVZOaLXC-f2JIIWZaq_o0WrF8mwJc';
  const END_POINT = '/search/photos';

  try {
    return await axios.get(`${BASE_URL}${END_POINT}`, {
      params: {
        query: q,
        page: 1,
        per_page: 12,
        orientation: 'portrait',
        client_id: API_KEY,
      },
    });
  } catch (err) {
    console.error(err.status);
  }
}

console.log(1);
