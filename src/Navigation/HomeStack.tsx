import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../presentation/Screens/Home/Home';
import Details from '../presentation/Screens/Details/Details';
import {HomeStackParamList} from '../Domain/Navigation/Navigation';

const Stack = createNativeStackNavigator<HomeStackParamList>();

const HomeStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="HomeScreen" component={Home} />
      <Stack.Screen name="DetailsScreen" component={Details} />
    </Stack.Navigator>
  );
};

export default HomeStack;
