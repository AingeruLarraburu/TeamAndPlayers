import { StyleSheet, Text, View} from 'react-native';
import EquipoComponent from './equipo';

export default function HeaderView() {
  return (
      <View style={styles.headerStyle}>
        <EquipoComponent equipo="Equipo 1"></EquipoComponent>
        <EquipoComponent equipo="Equipo 2"></EquipoComponent>
        <EquipoComponent equipo="Equipo 3"></EquipoComponent>
      </View>
  )
}

const styles = StyleSheet.create({
  headerStyle:{
    borderWidth: 2,
    borderColor: "#000000",
    height: 100,
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
  },
  equipos: {
    fontSize: 16,
    borderWidth: 2,
    borderColor: "#000000",
    margin: 10,
  }
});
