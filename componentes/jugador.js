import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { useState } from "react";

export default function JugadorComponent({
  index,
  nombre,
  actualPlayer,
  setactualPlayer,
  actualTeam,
}) {
  const [encima, setencima] = useState(false);
  const entrar = () => {
    setencima(true);
  };
  const salir = () => {
    setencima(false);
  };
  const cambiar = () => {
    setactualPlayer(index);
  };
  /*   if (index == actualPlayer) {
    return (
      <TouchableOpacity onPress={cambiar}><Text style={styles.actual}>{nombre}</Text></TouchableOpacity>
    )
  } else {
    return (
      <TouchableOpacity onPress={cambiar}><Text style={styles.jugadores}>{nombre}</Text></TouchableOpacity>
    )
  } */
  return (
    <TouchableOpacity
      onPress={cambiar}
      onMouseEnter={entrar}
      onMouseLeave={salir}
    >
      <Text
        style={
          index == actualPlayer
            ? styles.actual
            : encima == true
            ? styles.encima
            : styles.jugadores
        }
      >
        {nombre}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  jugadores: {
    fontSize: 16,
    borderWidth: 2,
    borderColor: "#000000",
    margin: 10,
  },
  actual: {
    fontSize: 16,
    borderWidth: 2,
    borderColor: "#000000",
    margin: 10,
    backgroundColor: "#ff0000",
  },
  encima: {
    fontSize: 16,
    borderWidth: 2,
    borderColor: "#000000",
    margin: 10,
    backgroundColor: "#00FF00",
  },
});
