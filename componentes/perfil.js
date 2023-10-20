import { StyleSheet, View, Image, Text } from 'react-native';

export default function PerfilComponent({imId}) {

  return (
    <View style={styles.jugador}>
       <Image style={styles.perfil} source={imId} />
    </View>
  )
}

const styles = StyleSheet.create({
    perfil: {
        flex: 1,
        borderWidth: 2,
        borderColor: "#000000"
      },
      jugador: {
        borderWidth: 2,
        borderColor: "#FF0000",
        flex: 1,
        padding: 10
      }
});