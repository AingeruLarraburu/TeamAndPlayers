import { StyleSheet, Text, View, Image } from 'react-native';
import JugadorComponent from './jugador';
import PerfilComponent from './perfil';
import AsideComponent from './aside';

export default function BodyComponent() {
  return (
    <View style={styles.bodyStyle}>
      <AsideComponent></AsideComponent>
      <PerfilComponent imId={require('../assets/footbal.jpg')}></PerfilComponent>
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
