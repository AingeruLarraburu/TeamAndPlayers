import { StyleSheet, View, Text} from 'react-native';
import HeaderView from './componentes/header';
import BodyComponent from './componentes/body';
import FooterComponent from './componentes/footer';
import { useState } from 'react';
import { TouchableOpacity } from 'react-native-web';
import Prueba from './componentes/prueba';

export default function App() {
  const [clicks, setclicks] = useState(0)
  return (
    <View style={styles.container}>
      <Text style={styles.texto}>En componente App: {clicks}</Text>
      <Prueba clicked={clicks} setclicked={setclicks}></Prueba>
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
