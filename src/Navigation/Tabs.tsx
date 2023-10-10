import React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {TabStackParamList} from '../Domain/Navigation/Navigation';
import HomeStack from './HomeStack';

const Tab = createBottomTabNavigator<TabStackParamList>();

interface TabsProps {}

const Tabs: React.FC<TabsProps> = ({}) => {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen name="HomeStack" component={HomeStack} />
    </Tab.Navigator>
  );
};

export default Tabs;
