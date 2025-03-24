import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

export default function App() {
  const [t0, setT0] = useState('');
  const [tF, setTempF] = useState('');

  const calcCelcius = () => {
    const calc = (parseFloat(t0) - 32) / 1.8;
    setTempF(`${calc}°C`);
  };

  const calcFahrenheit = () => {
    const calc = (parseFloat(t0) * 1.8) + 32;
    setTempF(`${calc}°F`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Conversão de Temperatura</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite a temperatura"
        keyboardType="numeric"
        value={t0}
        onChangeText={(text) => setT0(text)}
      />
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={calcCelcius}>
          <Text style={styles.buttonText}>Converter para Celcius</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={calcFahrenheit}>
          <Text style={styles.buttonText}>Converter para Fahrenheit</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.result}>Temperatura: {tF}</Text>
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
