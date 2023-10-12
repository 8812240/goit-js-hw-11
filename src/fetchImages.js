import axios from 'axios';
// axios.defaults.baseURL = 'https://pixabay.com/api/';
// // axios.defaults.headers.common['x-api-key'] =
//   '39666030-ea9dc56083af2dcfa2b4ed886';

async function fetchImages(name, page, perPage) {
  const baseURL = 'https://pixabay.com/api/';
  const key = '39666030-ea9dc56083af2dcfa2b4ed886';

  try {
    const response = await axios.get(
      `${baseURL}?key=${key}&q=${name}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=${perPage}`
    );
    return response.data;
  } catch (error) {
    console.log('ERROR: ' + error);
  }
}

export { fetchImages };