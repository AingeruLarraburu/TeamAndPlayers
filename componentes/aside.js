import { StyleSheet, Text, View, Image } from "react-native";
import JugadorComponent from "./jugador";
import PerfilComponent from "./perfil";

export default function AsideComponent({
  players,
  actualPlayer,
  setactualPlayer,
  actualTeam,
}) {
  const jugadores = players[actualTeam];
  return (
    <View style={styles.asideStyle}>
      {jugadores.map((jugador, index) => (
        <JugadorComponent
          key={index}
          index={index}
          nombre={jugador}
          actualPlayer={actualPlayer}
          setactualPlayer={setactualPlayer}
          actualTeam={actualTeam}
        ></JugadorComponent>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  asideStyle: {
    borderWidth: 2,
    borderColor: "#00FF00",
    width: 200,
    padding: 10,
    flexDirection: "column",
  },
});
