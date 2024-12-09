import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';

export default function SparePartsScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Yedek Parçalar</Text>
      <Image source={{ uri: 'https://via.placeholder.com/300' }} style={styles.image} />
      <Text style={styles.text}>Ürettiğimiz yedek parçaları 3B olarak inceleyin:</Text>
      {/* 3B model bileşenleri burada entegre edilebilir */}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 10 },
  text: { fontSize: 16, marginVertical: 10 },
  image: { width: '100%', height: 200, marginBottom: 20 },
});