import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Ekranlar
import HomeScreen from './screens/HomeScreen';
import RobotsScreen from './screens/RobotsScreen';
import CustomManufacturingScreen from './screens/CustomManufacturingScreen';
import SparePartsScreen from './screens/SparePartsScreen';
import PriceRequestScreen from './screens/PriceRequestScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Ana Sayfa' }} />
        <Stack.Screen name="Robots" component={RobotsScreen} options={{ title: 'Robotlar' }} />
        <Stack.Screen
          name="CustomManufacturing"
          component={CustomManufacturingScreen}
          options={{ title: 'Özel İmalat' }}
        />
        <Stack.Screen name="SpareParts" component={SparePartsScreen} options={{ title: 'Yedek Parçalar' }} />
        <Stack.Screen name="PriceRequest" component={PriceRequestScreen} options={{ title: 'Fiyat Talep' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
