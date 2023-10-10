import React from 'react';
import ImageActionsStyles from './ImageActions.styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import LinearGradient from 'react-native-linear-gradient';

interface ImageActionsProps {
  onFavorite?: () => void;
  onAlbum?: () => void;
  isFavorite?: boolean;
}

const ImageActions: React.FC<ImageActionsProps> = ({
  onAlbum,
  onFavorite,
  isFavorite,
}) => {
  return (
    <LinearGradient
      colors={['rgba(0,0,0,0.0)', 'rgba(25,25,25,0.249)', 'rgba(25,25,25,1)']}
      style={ImageActionsStyles.imageActions}>
      <Icon
        name={'heart'}
        size={25}
        color={isFavorite ? '#FF3062' : '#FFFFFF'}
        onPress={onFavorite}
      />
      <Icon
        name={'image-album'}
        size={25}
        color={'#FFFFFF'}
        onPress={onAlbum}
      />
    </LinearGradient>
  );
};

export default ImageActions;
