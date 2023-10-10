import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import {ImageEntity, ImageState} from '../../../Domain/Entity/ImageEntity';
import {RootState} from '../store';
import {fetchImage} from '../actions/imagesActions';

const initialState: ImageState = {
  data: [],
  isLoading: false,
  carrouselData: [],
};

const imageSlice = createSlice({
  name: 'imageSlice',
  initialState,
  reducers: {
    resetState: () => initialState,
  },
  extraReducers: builder => {
    builder
      .addCase(fetchImage.pending, state => {
        state.isLoading = true;
        console.log('fetchImage.pending');
      })
      .addCase(
        fetchImage.fulfilled,
        (state, action: PayloadAction<ImageEntity[]>) => {
          console.log('fetchImage.fulfilled');
          const data = action.payload;
          const endOfCarousel = data.length >= 5 ? 5 : data.length;

          state.isLoading = false;
          state.data = data;
          state.carrouselData = data.slice(0, endOfCarousel);
        },
      )
      .addCase(fetchImage.rejected, state => {
        state.isLoading = false;
        console.log('fetchImage.rejected');
        // state.error = action.error.message;
      });
  },
});

export const imagesSelector = (state: RootState) => state.imagesStorage;

export default {
  reducer: imageSlice.reducer,
  actions: imageSlice.actions,
};
