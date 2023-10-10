import {useSelector} from 'react-redux';
import {RootState} from '../Infrastructure/store/store'; // Asegúrate de importar RootState desde tu store
import {AlbumSelector} from '../Infrastructure/store/slices/albumSlice';
import {AlbumEntity} from '../Domain/Entity/AlbumEntity';

interface useAlbumParams {
  albumId: number;
}

const defaultAlbum = {
  id: 0,
  title: 'not found',
  userId: 0,
};
const useAlbum = ({albumId}: useAlbumParams): AlbumEntity => {
  const albums = useSelector((state: RootState) => AlbumSelector(state));

  // Verifica si los datos están disponibles antes de buscar el álbum
  if (!albums.data) {
    return defaultAlbum;
  }

  const album = albums.data.find(alb => alb.id === albumId);

  return (
    album ?? {
      id: 0,
      title: 'not found',
      userId: 0,
    }
  );
};

export default useAlbum;
