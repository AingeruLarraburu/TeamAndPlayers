import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.headerStyle}>
        <Text style={styles.equipos}>Equipo 1</Text>
        <Text style={styles.equipos}>Equipo 2</Text>
        <Text style={styles.equipos}>Equipo 3</Text>
      </View>
      <View style={styles.bodyStyle}>
        <View style={styles.asideStyle}>
           <Text style={styles.jugadores}>Jugador 1.1</Text>
           <Text style={styles.jugadores}>Jugador 1.2</Text>
           <Text style={styles.jugadores}>Jugador 1.3</Text>
           <Text style={styles.jugadores}>Jugador 1.4</Text>
           <Text style={styles.jugadores}>Jugador 1.5</Text>
        </View>
        <View style={styles.jugador}>
           <Image style={styles.perfil} source={require('./assets/footbal.jpg')}/>
        </View>
      </View>
      <View style={styles.footerStyle}>
         <Text style={styles.footerItem}>www.jugadores.com</Text>
         <Text style={styles.footerItem}>123456789</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    borderColor: "#000000",
    flex: 1
  },
  headerStyle:{
    borderWidth: 2,
    borderColor: "#000000",
    height: 100,
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
  },
  footerStyle:{
    borderWidth: 2,
    borderColor: "#000000",
    height: 100,
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    justifyContent: "space-between"
  },
  bodyStyle:{
    borderWidth: 2,
    borderColor: "#000000",
    flex: 1,
    flexDirection: "row"
  },
  equipos: {
    fontSize: 16,
    borderWidth: 2,
    borderColor: "#000000",
    margin: 10,
  },
  footerItem: {
    fontSize: 16,
    borderWidth: 2,
    borderColor: "#000000",
    margin: 10,
  },
  jugadores: {
    fontSize: 16,
    borderWidth: 2,
    borderColor: "#000000",
    margin: 10,
  },
  perfil: {
    flex: 1,
    borderWidth: 2,
    borderColor: "#000000"
  },
  asideStyle: {
    borderWidth: 2,
    borderColor: "#00FF00",
    width: 200,
    padding: 10,
    flexDirection: "column"
  },
  jugador: {
    borderWidth: 2,
    borderColor: "#FF0000",
    flex: 1,
    padding: 10
  }
});
