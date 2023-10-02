import React from 'react';
import {View, Text, Image} from 'react-native';
import HeaderStyles from './Header.styles';
import CameraSvg from '../../../Assets/SVG/CameraSVG';

interface HeaderProps {}
const URL_AVATAR =
  'https://scontent.ftrc3-1.fna.fbcdn.net/v/t1.6435-9/103748065_3040140242736347_506363380410940809_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=3x2NIUp5CJEAX8lj4We&_nc_ht=scontent.ftrc3-1.fna&oh=00_AfBTS6qe0Cmip4dvhf_jv7nKeBwxV0T3Q8TCiUPSQU9M6g&oe=6542B3D2';
const Header: React.FC<HeaderProps> = ({}) => {
  return (
    <View style={HeaderStyles.container}>
      <View style={HeaderStyles.row}>
        <Image style={HeaderStyles.image} source={{uri: URL_AVATAR}} />
        <View style={HeaderStyles.info}>
          <Text style={HeaderStyles.name}>John Doe</Text>
          <Text style={HeaderStyles.title}>Software Engineer</Text>
        </View>
      </View>

      <View>
        <CameraSvg />
      </View>
    </View>
  );
};

export default Header;
