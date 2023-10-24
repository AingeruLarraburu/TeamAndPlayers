import { StyleSheet, Text, View, Image } from 'react-native';
import JugadorComponent from './jugador';
import PerfilComponent from './perfil';

export default function AsideComponent() {
  const jugadores = ["Jugador 1.1", "Jugador 1.2", "Jugador 1.3", "Jugador 1.4", "Jugador 1.2", "Jugador 1.3", "Jugador 1.4",]
  return (
    <View style={styles.asideStyle}>
        {jugadores.map((jugador) => (
          <JugadorComponent nombre={jugador}></JugadorComponent>
        ))}
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
