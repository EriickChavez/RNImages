import {createAsyncThunk} from '@reduxjs/toolkit';

const IMAGE_URL = 'https://jsonplaceholder.typicode.com/photos';

export const fetchImage = createAsyncThunk('image/fetchData', async () => {
  const response = await fetch(IMAGE_URL);
  const res = await response.json();

  return res;
});
