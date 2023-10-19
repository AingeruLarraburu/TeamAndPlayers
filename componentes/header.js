import { StyleSheet, Text, View} from 'react-native';

export default function HeaderView() {
  return (
      <View style={styles.headerStyle}>
        <Text style={styles.equipos}>Equipo 1</Text>
        <Text style={styles.equipos}>Equipo 2</Text>
        <Text style={styles.equipos}>Equipo 3</Text>
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
