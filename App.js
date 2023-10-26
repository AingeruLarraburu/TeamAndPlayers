import { StyleSheet, View, Text} from 'react-native';
import HeaderView from './componentes/header';
import BodyComponent from './componentes/body';
import FooterComponent from './componentes/footer';
import { useState } from 'react';
import { TouchableOpacity } from 'react-native-web';
import Prueba from './componentes/prueba';

export default function App() {
  //var contador = 0;
  const [perfil, setperfil] = useState("medico")
  const cambiar = () => {
    if (perfil == "medico") {
      setperfil("pacience");
    }else{
      setperfil("medico");
    }
  }
  if (perfil=="medico") {
    return (
      <View style={styles.container}>
        <Text style={styles.texto}>Eres el medico</Text>
        <TouchableOpacity onPress={cambiar}><Text>Button</Text></TouchableOpacity>
      </View>
    )
  }
  else{
    return (
      <View style={styles.container}>
        <Text style={styles.texto}>Eres el paciente</Text>
        <Text style={styles.texto}>Eres el paciente</Text>
        <Text style={styles.texto}>Eres el paciente</Text>
        <Text style={styles.texto}>Eres el paciente</Text>
        <TouchableOpacity onPress={cambiar}><Text>Button</Text></TouchableOpacity>
      </View>
    )
  }
  
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
