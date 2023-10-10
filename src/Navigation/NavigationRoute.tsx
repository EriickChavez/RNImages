import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import Tabs from './Tabs';

interface NavigationRouteProps {}

const NavigationRoute: React.FC<NavigationRouteProps> = ({}) => {
  return (
    <NavigationContainer>
      <Tabs />
    </NavigationContainer>
  );
};

export default NavigationRoute;
