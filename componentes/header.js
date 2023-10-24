import { StyleSheet, Text, View} from 'react-native';
import EquipoComponent from './equipo';

export default function HeaderView() {
  const equipos = ["Equipo 1", "Equipo 2", "Equipo 3", "Equipo 4"];
  return (
      <View style={styles.headerStyle}>
        {equipos.map((equipo) => (
          <EquipoComponent equipo={equipo}></EquipoComponent>
        ))}
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
