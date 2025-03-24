import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

export default function App() {
  const [forc, setForc] = useState('');
  const [dist, setDist] = useState('');
  const [trab, setTrab] = useState('');

  const calcTrab = () => {
    const calc = parseFloat(forc) * parseFloat(dist);
    setTrab(`${calc}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Calculo do Trabalho Mecânico</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite a força em newtons"
        keyboardType="numeric"
        value={forc}
        onChangeText={(text) => setForc(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Digite a distância em metros"
        keyboardType="numeric"
        value={dist}
        onChangeText={(text) => setDist(text)}
      />
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={calcTrab}>
          <Text style={styles.buttonText}>Calcular</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.result}>Trabalho: {trab}J</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
    },
  input: {
    width: '80%',
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginVertical: 10,
    borderRadius: 5,
    backgroundColor: '#fff',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 20,
    width: '80%',
  },
  button: {
    backgroundColor: '#777',
    padding: 10,
    borderRadius: 5,
    marginHorizontal: 5,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  result: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
});
