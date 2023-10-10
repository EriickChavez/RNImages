import {createSlice} from '@reduxjs/toolkit';
import {ExampleEntity} from '../../../Domain/Entity/exampleEntity';

const initialState: ExampleEntity = {
  id: '',
  name: '',
};

const exampleSlice = createSlice({
  name: 'exampleSlice',
  initialState,
  reducers: {
    resetState: () => initialState,
  },
});

export default {
  reducer: exampleSlice.reducer,
  actions: exampleSlice.actions,
};
