import axios from 'axios';

export default async function fetchImages(searchQuery, page) {
  const response = await axios.get('https://pixabay.com/api/', {
    params: {
      key: '29734383-6ec437d7a0c5df52cef54a0f9',
      q: searchQuery,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      page,
      per_page: 16,
    },
  });

  return response;
}
