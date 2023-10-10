export interface ImageEntity {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

export interface ImageState {
  data: ImageEntity[] | [];
  carrouselData: ImageEntity[] | [];
  isLoading: boolean;
}
