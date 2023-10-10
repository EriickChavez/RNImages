import React from 'react';
import {Pressable, View} from 'react-native';
import FastImage from 'react-native-fast-image';
import PreviewStyles from './Preview.styles';
import {ImageEntity} from '../../../Domain/Entity/ImageEntity';

interface PreviewImageProps {
  item: ImageEntity;
  index: number;
  onPress?: (item: ImageEntity) => void;
}

const PreviewImage: React.FC<PreviewImageProps> = ({index, item, onPress}) => {
  const _onPress = () => {
    onPress && onPress(item);
  };
  return (
    <View style={PreviewStyles.ImageContainer} key={`key-preview-${index}`}>
      <Pressable style={PreviewStyles.button} onPress={_onPress}>
        <FastImage
          // sharedTransitionTag={`preview-tag-${item.albumId}-${item.id}`}
          style={PreviewStyles.Image}
          source={{
            uri: item.url,
            priority: FastImage.priority.high,
          }}
          resizeMode={FastImage.resizeMode.stretch}
        />
      </Pressable>
    </View>
  );
};

export default PreviewImage;
