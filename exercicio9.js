import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

export default function App() {
  const [salHr, setSalHr] = useState('');
  const [hrTrab, setHrTrab] = useState('');
  const [salTotal, setSalTotal] = useState('');

  const calcSalTotal = () => {
    const calc = parseFloat(salHr) * parseFloat(hrTrab);
    setSalTotal(`${calc}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Calculo do Salário Mensal</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite seu salário por hora"
        keyboardType="numeric"
        value={salHr}
        onChangeText={(text) => setSalHr(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Digite quantas horas por mês você trabalha"
        keyboardType="numeric"
        value={hrTrab}
        onChangeText={(text) => setHrTrab(text)}
      />
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={calcSalTotal}>
          <Text style={styles.buttonText}>Calcular</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.result}>Salário Total: R${salTotal}</Text>
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
