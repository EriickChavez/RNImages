import React, {useEffect} from 'react';
import {View, SafeAreaView} from 'react-native';
import Header from '../../Components/Header/Header';
import HomeStyles from './Home.styles';
import Search from '../../Components/Search/Search';
// import Filter from '../../Components/Filter/Filter';
import Preview from '../../Components/Preview/Preview';

import {ImageEntity} from '../../../Domain/Entity/ImageEntity';
import {useDispatch, useSelector} from 'react-redux';
import {imagesSelector} from '../../../Infrastructure/store/slices/imageSlices';
import {AppDispatch} from '../../../Infrastructure/store/store';
import {fetchImage} from '../../../Infrastructure/store/actions/imagesActions';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {useIsFocused} from '@react-navigation/native';
import {fetchAlbum} from '../../../Infrastructure/store/actions/albumActions';
import {HomeStackParamList} from '../../../Domain/Navigation/Navigation';

type HomeProps = NativeStackScreenProps<HomeStackParamList, 'HomeScreen'>;
const Home = ({navigation}: HomeProps) => {
  const {isLoading, data} = useSelector(imagesSelector);
  const dispatch = useDispatch<AppDispatch>();
  const isFocused = useIsFocused();

  useEffect(() => {
    if (data.length === 0) {
      // @ts-ignore
      dispatch(fetchImage());
      // @ts-ignore
      dispatch(fetchAlbum());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const carrouselData = React.useMemo(() => data.slice(0, 3), [data]);
  const onPress = (item: ImageEntity) => {
    navigation.navigate('DetailsScreen', {item});
  };

  return (
    <SafeAreaView style={HomeStyles.safeArea}>
      <View style={HomeStyles.container}>
        <Header />
        <View style={HomeStyles.separatorHorizontal} />
        <Search />
        {/* <View style={HomeStyles.separatorHorizontal} />
        <View>
          <Filter />
        </View> */}
        <View style={HomeStyles.separatorHorizontal} />
        <Preview
          data={(carrouselData as ImageEntity[]) ?? ([] as ImageEntity[])}
          isLoading={isLoading}
          onPress={onPress}
          autoplay={isFocused}
        />
      </View>
    </SafeAreaView>
  );
};

export default Home;
