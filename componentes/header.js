import { StyleSheet, Text, View } from "react-native";
import EquipoComponent from "./equipo";

export default function HeaderView({ teams, actualTeam, setactualTeam }) {
  const equipos = teams;
  return (
    <View style={styles.headerStyle}>
      {equipos.map((equipo, index) => (
        <EquipoComponent
          key={index}
          index={index}
          equipo={equipo}
          actualTeam={actualTeam}
          setactualTeam={setactualTeam}
        ></EquipoComponent>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  headerStyle: {
    borderWidth: 2,
    borderColor: "#000000",
    height: 100,
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    borderRadius: 10,
  },
  equipos: {
    fontSize: 16,
    borderWidth: 2,
    borderColor: "#000000",
    margin: 10,
  },
});
