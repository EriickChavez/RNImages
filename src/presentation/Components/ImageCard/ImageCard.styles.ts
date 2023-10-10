import {Dimensions, StyleSheet} from 'react-native';

const {width: screenWidth} = Dimensions.get('window');

const cardMDWidth = screenWidth / 2 - 20;
const cardMDHeight = screenWidth / 2 - 20;

export default StyleSheet.create({
  image: {
    width: cardMDWidth,
    height: cardMDHeight,
    borderRadius: 5,
  },
});
