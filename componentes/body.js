import { StyleSheet, Text, View, Image } from 'react-native';
import JugadorComponent from './jugador';
import PerfilComponent from './perfil';
import AsideComponent from './aside';

export default function BodyComponent({players, actualTeam}) {
  const fotos = ['https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png'];
  return (
    <View style={styles.bodyStyle}>
      <AsideComponent></AsideComponent>
      <PerfilComponent url='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png'></PerfilComponent>
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
