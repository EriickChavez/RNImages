import React from 'react';
import {View, Pressable} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import ButtonBackStyles from './ButtonBack.styles';

type backButtonIcon = 'window-close' | 'arrow-left';
interface ButtonBackProps {
  iconName: backButtonIcon;
  onPress?: () => void;
}

const ButtonBack: React.FC<ButtonBackProps> = ({
  onPress,
  iconName = 'window-close',
}) => {
  return (
    <View style={ButtonBackStyles.closeButton}>
      <Pressable onPress={onPress}>
        <Icon name={iconName} size={25} color="#FFFFFF" />
      </Pressable>
    </View>
  );
};

export default ButtonBack;
