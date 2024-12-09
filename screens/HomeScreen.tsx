import React from 'react';
import { View, Button, StyleSheet, Text } from 'react-native';

export default function HomeScreen({ navigation }: any) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ana Sayfa</Text>
      <Button title="Robotlar" onPress={() => navigation.navigate('Robots')} />
      <Button title="Özel İmalat" onPress={() => navigation.navigate('CustomManufacturing')} />
      <Button title="Yedek Parçalar" onPress={() => navigation.navigate('SpareParts')} />
      <Button title="Fiyat Talep" onPress={() => navigation.navigate('PriceRequest')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
});
