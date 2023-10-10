import {createAsyncThunk} from '@reduxjs/toolkit';

const ALBUM_URL = 'https://jsonplaceholder.typicode.com/albums';

export const fetchAlbum = createAsyncThunk('album/fetchData', async () => {
  const response = await fetch(ALBUM_URL);
  const res = await response.json();

  return res;
});
