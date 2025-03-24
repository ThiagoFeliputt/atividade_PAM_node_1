import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

export default function App() {
  const [mass, setMass] = useState('');
  const [vel, setVel] = useState('');
  const [energiaCinetica, setEnergiaCinetica] = useState('');

  const calcEnergiaCinetica = () => {
    const calc = (parseFloat(mass) * parseFloat(vel) * parseFloat(vel)) / 2;
    setEnergiaCinetica(`${calc}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Calculo da Energia Cinética</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite a massa em kg"
        keyboardType="numeric"
        value={mass}
        onChangeText={(text) => setMass(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Digite a velocidade em m/s"
        keyboardType="numeric"
        value={vel}
        onChangeText={(text) => setVel(text)}
      />
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={calcEnergiaCinetica}>
          <Text style={styles.buttonText}>Calcular</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.result}>Energia Cinética: {energiaCinetica}J</Text>
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
