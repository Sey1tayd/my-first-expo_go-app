// screens/RobotScreen.tsx
import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';

export default function RobotScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>6 Eksen Robotlarımız</Text>
      <Image source={{ uri: 'https://via.placeholder.com/300' }} style={styles.image} />
      <Text style={styles.text}>Robotlarımız endüstriyel ihtiyaçlar için tasarlanmıştır. Aşağıda bazı örnek resim ve videoları bulabilirsiniz.</Text>
      {/* Daha fazla içerik eklenebilir */}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 10 },
  text: { fontSize: 16, marginVertical: 10 },
  image: { width: '100%', height: 200, marginBottom: 20 },
});
