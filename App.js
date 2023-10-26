import { StyleSheet, View, Text} from 'react-native';
import HeaderView from './componentes/header';
import BodyComponent from './componentes/body';
import FooterComponent from './componentes/footer';
import { useState } from 'react';
import { TouchableOpacity } from 'react-native-web';
import Prueba from './componentes/prueba';

export default function App() {
  //var contador = 0;
  const [contador, setContador] = useState(0)
  const cambiar = () => {
    setContador(contador+1);
  }
  return (
    <View style={styles.container}>
      <Text style={styles.texto}>El numero es: {contador}</Text>
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
