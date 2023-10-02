import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  input: {
    paddingHorizontal: 10,
    height: 35,
    borderRadius: 5,
    backgroundColor: '#FFFFFF',
    shadowColor: '#E3E3E3',
    flex: 1,
    marginRight: 10,
  },
  button: {
    width: 35,
    height: 35,
    shadowColor: '#FF3062',
    backgroundColor: '#FF3062',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  shadows: {
    shadowOffset: {
      width: 0,
      height: 9,
    },
    shadowOpacity: 1,
    shadowRadius: 16.0,
    elevation: 24,
  },
});
