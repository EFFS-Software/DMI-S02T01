import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Titulo = ({ texto }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.texto}>{texto}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#3498db',
    padding: 10,
    alignItems: 'center',
  },
  texto: {
    color: 'white',
    fontSize: 20,
  },
});

export default Titulo;