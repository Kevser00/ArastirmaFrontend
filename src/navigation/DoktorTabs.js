import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import drAnaSayfa from '../screens/drAnaSayfa';
import drHastaGoruntule from '../screens/drHastaGoruntule';
import drIlacEkle from '../screens/drIlacEkle';
import drBilgiSayfa from '../screens/drBilgiSayfa';

const Tab = createBottomTabNavigator();

const DoktorTabs = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="drAnaSayfa" component={drAnaSayfa} />
      <Tab.Screen name="drHastaGoruntule" component={drHastaGoruntule} />
      <Tab.Screen name="drIlacEkle" component={drIlacEkle} />
      <Tab.Screen name="drBilgiSayfa" component={drBilgiSayfa} />
    </Tab.Navigator>
  );
};

export default DoktorTabs;
