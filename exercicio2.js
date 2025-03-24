import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

export default function App() {
  const [mass, setMass] = useState('');
  const [acel, setAcel] = useState('');
  const [forc, setForc] = useState('');

  const calcForc = () => {
    const calc = parseFloat(mass) * parseFloat(acel);
    setForc(`${calc}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Calculo da Força</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite a massa em kg"
        keyboardType="numeric"
        value={mass}
        onChangeText={(text) => setMass(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Digite a aceleração em m/s"
        keyboardType="numeric"
        value={acel}
        onChangeText={(text) => setAcel(text)}
      />
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={calcForc}>
          <Text style={styles.buttonText}>Calcular</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.result}>Força: {forc}N</Text>
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
