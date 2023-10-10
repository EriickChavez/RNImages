import {ImageEntity} from '../Entity/ImageEntity';

export type TabStackParamList = {
  HomeStack: undefined;
  FavoriteStack: undefined;
  ProfileStack: undefined;
};

export type HomeStackParamList = {
  HomeScreen: undefined;
  DetailsScreen: {item: ImageEntity};
};
