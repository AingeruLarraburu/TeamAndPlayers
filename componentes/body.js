import { StyleSheet, Text, View, Image } from 'react-native';
import JugadorComponent from './jugador';
import PerfilComponent from './perfil';
import AsideComponent from './aside';

export default function BodyComponent({players, fotos, actualPlayer, setactualPlayer, actualTeam}) {
  console.log(players);
  const direFoto = fotos[actualTeam][actualPlayer]
  console.log(direFoto);
  return (
    <View style={styles.bodyStyle}>
      <AsideComponent players={players} actualPlayer={actualPlayer} setactualPlayer={setactualPlayer} actualTeam={actualTeam}></AsideComponent>
      <PerfilComponent url={direFoto}></PerfilComponent>
    </View>
  )
}

const styles = StyleSheet.create({
  bodyStyle:{
    borderWidth: 2,
    borderColor: "#000000",
    flex: 1,
    flexDirection: "row"
  }
});
