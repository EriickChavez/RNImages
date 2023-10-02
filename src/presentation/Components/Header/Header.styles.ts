import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
  },
  image: {
    width: 35,
    height: 35,
    borderRadius: 5,
  },
  info: {
    paddingLeft: 10,
  },
  name: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  title: {
    fontSize: 12,
  },
});
