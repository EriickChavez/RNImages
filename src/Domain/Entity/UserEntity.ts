export interface UserEntity {
  id: string;
  name: string;
  biography: string;
  albumId: number | null | string;
  favorites: number[] | null;
}

export interface UserState {
  user: UserEntity;
}
