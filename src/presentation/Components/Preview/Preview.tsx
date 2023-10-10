import React, {useState} from 'react';
import {View, LayoutChangeEvent} from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import PreviewStyles from './Preview.styles';
import {ImageEntity} from '../../../Domain/Entity/ImageEntity';
import Skeleton from '../Skeleton/Skeleton';
import PreviewImage from './PreviewImage';

interface PreviewProps {
  data: ImageEntity[] | [];
  isLoading?: boolean;
  autoplay?: boolean;
  onPress?: (item: ImageEntity) => void;
}

const Preview: React.FC<PreviewProps> = ({
  data = [],
  isLoading = true,
  onPress,
  autoplay = false,
}) => {
  const [size, setSize] = useState({width: 10, height: 10});
  const onLayout = (event: LayoutChangeEvent) => {
    const {width, height} = event.nativeEvent.layout;
    setSize({width, height});
  };

  const renderItem = ({item, index}: {item: ImageEntity; index: number}) => {
    return <PreviewImage item={item} index={index} onPress={onPress} />;
  };

  return (
    <View style={PreviewStyles.container} onLayout={onLayout}>
      {isLoading ? (
        <Skeleton />
      ) : (
        <Carousel
          loop
          width={size.width}
          height={size.height}
          autoPlay={autoplay}
          data={data}
          scrollAnimationDuration={1600}
          renderItem={renderItem}
        />
      )}
    </View>
  );
};

export default Preview;
