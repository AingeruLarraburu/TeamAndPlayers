import { StyleSheet, View} from 'react-native';
import HeaderView from './componentes/header';
import BodyComponent from './componentes/body';
import FooterComponent from './componentes/footer';
import { useState } from 'react';

export default function App() {
  //Configuracion
  const teamSize = 5;
  const equipoSize = 3;
  //Variables
  const equipos = []
  var jugadores = []
  var localjugadores = []
  
  for (let i = 1; i <= equipoSize; i++) {
    equipos.push("Equipo"+i)
  }
  for (let i = 1; i <= equipos.length; i++) {
    localjugadores = []
    for (let z = 1; z <= teamSize; z++) {
      localjugadores.push("Jugador_" + i + "." + z);
    }
    jugadores.push(localjugadores)
  }
  return (
    <View style={styles.container}>
      <HeaderView teams={equipos}></HeaderView>
      <BodyComponent jugadores={jugadores}></BodyComponent>
      <FooterComponent></FooterComponent>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    borderColor: "#000000",
    flex: 1
  }
});
