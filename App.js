import { StyleSheet, View, Text } from "react-native";
import HeaderView from "./componentes/header";
import BodyComponent from "./componentes/body";
import FooterComponent from "./componentes/footer";
import { useState } from "react";
import { Dimensions, Platform } from "react-native";

export default function App() {
  //librerias
  //Configuracion
  const teamSize = 5;
  const equipoSize = 3;
  //Estados
  const [actualTeam, setactualTeam] = useState(0);
  const [actualPlayer, setactualPlayer] = useState(0);
  const [screenWidth, setscreenWidth] = useState(
    Dimensions.get("window").width
  );
  //Variables
  const equipos = [];
  var jugadores = [];
  var localjugadores = [];
  var jugafotolocal = [];
  var jugafoto = [];
  var fotocount = 1;

  for (let i = 1; i <= equipoSize; i++) {
    equipos.push("Equipo" + i);
  }
  for (let i = 1; i <= equipos.length; i++) {
    localjugadores = [];
    jugafotolocal = [];
    for (let z = 1; z <= teamSize; z++) {
      localjugadores.push("Jugador_" + i + "." + z);
      jugafotolocal.push(
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" +
          fotocount +
          ".png"
      );
      fotocount++;
    }
    jugadores.push(localjugadores);
    jugafoto.push(jugafotolocal);
  }
  console.log(jugafoto);
  const updateDimensions = () => {
    setscreenWidth(Dimensions.get("window").width);
  };
  Dimensions.addEventListener("change", updateDimensions);
  return (
    <View style={styles.container}>
      <HeaderView
        teams={equipos}
        actualTeam={actualTeam}
        setactualTeam={setactualTeam}
      ></HeaderView>
      <BodyComponent
        players={jugadores}
        fotos={jugafoto}
        actualPlayer={actualPlayer}
        setactualPlayer={setactualPlayer}
        actualTeam={actualTeam}
      ></BodyComponent>
      <FooterComponent></FooterComponent>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    borderColor: "#000000",
    flex: 1,
  },
  texto: {
    fontSize: 16,
    borderWidth: 2,
    borderColor: "#000000",
    margin: 10,
  },
});
