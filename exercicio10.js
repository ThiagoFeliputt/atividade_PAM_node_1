import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

export default function App() {
  const [size, setSize] = useState('');
  const [speed, setSpeed] = useState('');
  const [time, setTime] = useState('');

  const calcTime = () => {
    const calc = (parseFloat(size) / (parseFloat(speed) / 8)) / 60;
    setTime(`${calc.toFixed(2)}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Calculo do Tempo de Download</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite o tamanho do arquivo em MB"
        keyboardType="numeric"
        value={size}
        onChangeText={(text) => setSize(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Digite a velocidade do link de Internet em Mbps"
        keyboardType="numeric"
        value={speed}
        onChangeText={(text) => setSpeed(text)}
      />
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={calcTime}>
          <Text style={styles.buttonText}>Calcular</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.result}>Tempo: {time} minutos</Text>
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
