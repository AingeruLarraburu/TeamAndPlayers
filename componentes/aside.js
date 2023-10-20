import { StyleSheet, Text, View, Image } from 'react-native';
import JugadorComponent from './jugador';
import PerfilComponent from './perfil';

export default function AsideComponent() {
  return (
    <View style={styles.asideStyle}>
        <JugadorComponent nombre="Jugador 1.1"></JugadorComponent>
        <JugadorComponent nombre="Jugador 1.2"></JugadorComponent>
        <JugadorComponent nombre="Jugador 1.3"></JugadorComponent>
        <JugadorComponent nombre="Jugador 1.4"></JugadorComponent>
        <JugadorComponent nombre="Jugador 1.5"></JugadorComponent>
    </View>
  )
}

const styles = StyleSheet.create({
  asideStyle: {
    borderWidth: 2,
    borderColor: "#00FF00",
    width: 200,
    padding: 10,
    flexDirection: "column"
  }
});
