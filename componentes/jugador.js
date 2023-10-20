import { StyleSheet, Text } from 'react-native';

export default function JugadorComponent({nombre}) {
  return (
       <Text style={styles.jugadores}>{nombre}</Text>
  )
}

const styles = StyleSheet.create({
    jugadores: {
        fontSize: 16,
        borderWidth: 2,
        borderColor: "#000000",
        margin: 10,
      }
});
