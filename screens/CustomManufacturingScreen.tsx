import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';

export default function CustomManufacturingScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Özel İmalat</Text>
      <Image source={{ uri: 'https://via.placeholder.com/300' }} style={styles.image} />
      <Text style={styles.text}>Müşterilerimize özel çözümler sunuyoruz. İşte bazı örnekler:</Text>
      {/* Özel imalat resim ve videoları burada listelenebilir */}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 10 },
  text: { fontSize: 16, marginVertical: 10 },
  image: { width: '100%', height: 200, marginBottom: 20 },
});