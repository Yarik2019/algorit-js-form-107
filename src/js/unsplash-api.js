import axios from 'axios';
axios.defaults.baseURL = 'https://api.unsplash.com';

export async function getPhotos(q) {
  const API_KEY = 'LxvKVGJqiSe6NcEVZOaLXC-f2JIIWZaq_o0WrF8mwJc';

  try {
    const response = await axios.get('/search/photos', {
      params: {
        query: q,
        page: 1,
        per_page: 12,
        orientation: 'portrait',
        client_id: API_KEY,
      },
    });
    return response.data;
  } catch (err) {
    console.error(err.status);
  }
}
