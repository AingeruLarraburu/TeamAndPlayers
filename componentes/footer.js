import { StyleSheet, Text, View} from 'react-native';

export default function FooterComponent() {
  const paginaWeb = "www.jugadores.com"
  const numeroTelefono = "123456789"
  return (
    <View style={styles.footerStyle}>
      <Text style={styles.footerItem}>{paginaWeb}</Text>
      <Text style={styles.footerItem}>{numeroTelefono}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  footerStyle:{
    borderWidth: 2,
    borderColor: "#000000",
    height: 100,
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    justifyContent: "space-between"
  },
  footerItem: {
    fontSize: 16,
    borderWidth: 2,
    borderColor: "#000000",
    margin: 10,
  }
});
