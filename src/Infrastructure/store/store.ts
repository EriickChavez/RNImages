import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {Storage, persistReducer, persistStore} from 'redux-persist';
import thunk from 'redux-thunk';
import AsyncStorage from '@react-native-async-storage/async-storage';

// import exampleSlice from './slices/example';
import imageSlices from './slices/imageSlices';
import albumSlice from './slices/albumSlice';

export const reduxStorage: Storage = AsyncStorage;

const persistConfig = {
  key: 'root',
  storage: reduxStorage,
};

// Reducers
const rootReducer = combineReducers({
  // example: exampleSlice.reducer,
  imagesStorage: imageSlices.reducer,
  albumsStorage: albumSlice.reducer,
});

const middlewares = [];

if (__DEV__) {
  const createDebugger = require('redux-flipper').default;
  middlewares.push(createDebugger());
}
middlewares.push(thunk);

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: middlewares,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const persistor = persistStore(store);
