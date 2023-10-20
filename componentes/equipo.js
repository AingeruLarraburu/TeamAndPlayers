import { StyleSheet, Text, View} from 'react-native';

export default function EquipoComponent({equipo}) {
  return (
    <Text style={styles.equipos}>{equipo}</Text>
  )
}

const styles = StyleSheet.create({
  equipos: {
    fontSize: 16,
    borderWidth: 2,
    borderColor: "#000000",
    margin: 10,
  }
});
