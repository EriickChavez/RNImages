import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import {RootState} from '../store';
import {fetchAlbum} from '../actions/albumActions';
import {AlbumEntity, AlbumState} from '../../../Domain/Entity/AlbumEntity';

const initialState: AlbumState = {
  data: [],
  isLoading: false,
};

const AlbumSlice = createSlice({
  name: 'AlbumSlice',
  initialState,
  reducers: {
    resetState: () => initialState,
  },
  extraReducers: builder => {
    builder
      .addCase(fetchAlbum.pending, state => {
        state.isLoading = true;
        console.log('fetchAlbum.pending');
      })
      .addCase(
        fetchAlbum.fulfilled,
        (state, action: PayloadAction<AlbumEntity[]>) => {
          console.log('fetchAlbum.fulfilled');
          const data = action.payload;

          state.isLoading = false;
          state.data = data;
        },
      )
      .addCase(fetchAlbum.rejected, state => {
        state.isLoading = false;
        console.log('fetchAlbum.rejected');
        // state.error = action.error.message;
      });
  },
});

export const AlbumSelector = (state: RootState) => state.albumsStorage;

export default {
  reducer: AlbumSlice.reducer,
  actions: AlbumSlice.actions,
};
