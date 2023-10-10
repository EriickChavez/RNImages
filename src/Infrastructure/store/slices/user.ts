import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import {UserEntity, UserState} from '../../../Domain/Entity/UserEntity';

const initialState: UserState = {
  user: {
    id: '',
    name: '',
    biography: '',
    albumId: null,
    favorites: null,
  },
};

const userSlice = createSlice({
  name: 'userSlice',
  initialState,
  reducers: {
    resetState: () => initialState,
    setUser: (state, action: PayloadAction<{user: UserEntity}>) => {
      const {user} = action.payload;
      state.user = user;
    },
  },
});

export default {
  reducer: userSlice.reducer,
  actions: userSlice.actions,
};
