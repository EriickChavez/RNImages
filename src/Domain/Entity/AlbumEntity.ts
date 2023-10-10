export interface AlbumEntity {
  userId: number;
  id: number;
  title: string;
}

export interface AlbumState {
  data: AlbumEntity[] | [];
  isLoading: boolean;
}
