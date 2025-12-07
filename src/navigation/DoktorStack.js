import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import girisDr from '../screens/girisDr';
import kayitDr from '../screens/kayitDr';
import sifremiUnuttum from '../screens/sifremiUnuttum';

import DoktorTabs from './DoktorTabs';

const Stack = createNativeStackNavigator();

const DoktorStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="girisDr" component={girisDr} />
      <Stack.Screen name="kayitDr" component={kayitDr} />
      <Stack.Screen name="sifremiUnuttum" component={sifremiUnuttum} />
      <Stack.Screen name="DoktorTabs" component={DoktorTabs} />
    </Stack.Navigator>
  );
};

export default DoktorStack;
