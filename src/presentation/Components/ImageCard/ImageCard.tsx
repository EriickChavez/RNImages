import React from 'react';
import {ImageEntity} from '../../../Domain/Entity/ImageEntity';
import FastImage from 'react-native-fast-image';
import ImageCardStyles from './ImageCard.styles';

interface ImageCardProps extends ImageEntity {}

const ImageCard: React.FC<ImageCardProps> = ({thumbnailUrl}) => {
  return (
    <FastImage
      style={ImageCardStyles.image}
      source={{
        uri: thumbnailUrl,
        priority: FastImage.priority.high,
      }}
      resizeMode={FastImage.resizeMode.stretch}
    />
  );
};

export default ImageCard;
