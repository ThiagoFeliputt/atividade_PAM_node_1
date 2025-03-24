import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

export default function App() {
  const [dist, setDist] = useState('');
  const [tempo, setTempo] = useState('');
  const [vel, setVel] = useState('');

  const calcVel = () => {
    const calc = parseFloat(dist) / parseFloat(tempo);
    setVel(`${calc}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Calculo da Velocidade Média</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite a distância em metros"
        keyboardType="numeric"
        value={dist}
        onChangeText={(text) => setDist(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Digite o tempo em segundos"
        keyboardType="numeric"
        value={tempo}
        onChangeText={(text) => setTempo(text)}
      />
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={calcVel}>
          <Text style={styles.buttonText}>Calcular</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.result}>Velocidade Média: {vel}m/s</Text>
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
