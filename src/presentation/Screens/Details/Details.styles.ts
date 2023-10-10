import {Dimensions, StyleSheet} from 'react-native';

const {width: screenWidth} = Dimensions.get('window');

const cardMDWidth = screenWidth / 2 - 20;

const twoCards = cardMDWidth * 2;
const bottomSpace = screenWidth - twoCards;

export default StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
    padding: 5,
  },
  containerImage: {
    width: '100%',
    height: '30%',
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 5,
    flexDirection: 'column-reverse',
  },
  containerList: {
    flex: 1,
  },
  flatList: {
    borderRadius: 5,
  },
  containerRightCard: {
    marginBottom: bottomSpace,
  },
  containerLeftCard: {
    marginBottom: bottomSpace,
  },
  columnWrapperStyle: {
    justifyContent: 'space-between',
  },
  containerText: {
    justifyContent: 'center',
    padding: 5,
    marginVertical: 5,
  },
  title: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 12,
  },
});
