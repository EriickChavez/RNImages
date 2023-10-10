import {useSelector} from 'react-redux';
import {RootState} from '../Infrastructure/store/store'; // Asegúrate de importar RootState desde tu store
import {imagesSelector} from '../Infrastructure/store/slices/imageSlices';
import {ImageEntity} from '../Domain/Entity/ImageEntity';

interface usePhotosInAlbumParams {
  albumId: number;
}

const usePhotosInAlbum = ({albumId}: usePhotosInAlbumParams): ImageEntity[] => {
  const images = useSelector((state: RootState) => imagesSelector(state));

  // Verifica si los datos están disponibles antes de buscar el álbum
  if (!images.data) {
    return [];
  }

  const album = images.data.filter(img => img.albumId === albumId);

  return album;
};

export default usePhotosInAlbum;
