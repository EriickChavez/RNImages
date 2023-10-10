import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {
  View,
  Text,
  FlatList,
  ListRenderItemInfo,
  SafeAreaView,
  Pressable,
} from 'react-native';

import FastImage from 'react-native-fast-image';
import DetailsStyles from './Details.styles';
import useAlbum from '../../../Hooks/useAlbum';
import usePhotosInAlbum from '../../../Hooks/usePhotosInAlbum';
import ImageCard from '../../Components/ImageCard/ImageCard';
import {ImageEntity} from '../../../Domain/Entity/ImageEntity';
import ButtonBack from '../../Components/ButtonBack/ButtonBack';
import {HomeStackParamList} from '../../../Domain/Navigation/Navigation';
import ImageActions from '../../Components/ImageActions/ImageActions';

type DetailsProps = NativeStackScreenProps<HomeStackParamList, 'DetailsScreen'>;

const Details = ({route, navigation}: DetailsProps) => {
  const {item: photo} = route.params;
  const [photoSelected, setPhotoSelected] = React.useState<ImageEntity>(photo);
  const albumDetails = useAlbum({albumId: photoSelected.albumId});
  const album = usePhotosInAlbum({albumId: photoSelected.albumId});
  const renderItem = ({item, index}: ListRenderItemInfo<ImageEntity>) => (
    <Pressable
      onPress={() => {
        setPhotoSelected(item);
      }}
      style={[
        index % 2 === 0
          ? DetailsStyles.containerLeftCard
          : DetailsStyles.containerRightCard,
      ]}>
      <ImageCard {...item} />
    </Pressable>
  );

  const onClose = () => {
    navigation.canGoBack() && navigation.goBack();
  };

  return (
    <SafeAreaView style={DetailsStyles.safeArea}>
      <View style={DetailsStyles.container}>
        <View style={DetailsStyles.containerImage}>
          <FastImage
            style={DetailsStyles.image}
            source={{
              uri: photoSelected.thumbnailUrl,
              priority: FastImage.priority.high,
            }}
            resizeMode={FastImage.resizeMode.stretch}>
            <ButtonBack iconName="arrow-left" onPress={onClose} />
            <ImageActions />
          </FastImage>
        </View>
        <View>
          <View style={DetailsStyles.containerText}>
            <Text style={DetailsStyles.title}>{photoSelected.title}</Text>
            <Text style={DetailsStyles.subtitle}>{albumDetails.title}</Text>
          </View>
        </View>
        <View style={DetailsStyles.containerList}>
          <FlatList
            columnWrapperStyle={DetailsStyles.columnWrapperStyle}
            style={DetailsStyles.flatList}
            data={album}
            keyExtractor={item => item.id.toString()}
            numColumns={2}
            renderItem={renderItem}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Details;
