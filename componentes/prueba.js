import { StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import { useState } from 'react';

export default function Prueba({clicked, setclicked}) {
  const cambiar = () => {
    setclicked(clicked + 1)
  }
  return (
    <View style={styles.container}>
      <Text style={styles.texto}>En componente prueba: {clicked}</Text>
      <TouchableOpacity onPress={cambiar}><Text>Button</Text></TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    borderColor: "#000000",
    flex: 1
  },
  texto: {
    fontSize: 16,
    borderWidth: 2,
    borderColor: "#000000",
    margin: 10,
  }
});
