import React from 'react';
import { View, TextInput, Button, Text, StyleSheet } from 'react-native';
import { Formik } from 'formik';

interface FormValues {
  name: string;
  email: string;
  details: string;
}

export default function PriceRequestScreen() {
  return (
    <Formik<FormValues>
      initialValues={{ name: '', email: '', details: '' }}
      onSubmit={(values: FormValues) => alert(JSON.stringify(values))}
    >
      {({ handleChange, handleSubmit, values }) => (
        <View style={styles.container}>
          <Text style={styles.title}>Fiyat Talep Formu</Text>
          <TextInput
            style={styles.input}
            placeholder="İsim"
            onChangeText={handleChange('name')}
            value={values.name}
          />
          <TextInput
            style={styles.input}
            placeholder="E-posta"
            onChangeText={handleChange('email')}
            value={values.email}
            keyboardType="email-address"
          />
          <TextInput
            style={[styles.input, styles.textArea]}
            placeholder="Talep Detayları"
            onChangeText={handleChange('details')}
            value={values.details}
            multiline
          />
          <Button
            title="Gönder"
            onPress={() => handleSubmit()} // Burada lambda kullanıyoruz.
          />
        </View>
      )}
    </Formik>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 15,
    backgroundColor: '#fff',
  },
  textArea: {
    height: 100,
    textAlignVertical: 'top',
  },
});
