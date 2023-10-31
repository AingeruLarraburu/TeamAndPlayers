import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { useState } from "react";

export default function EquipoComponent({
  index,
  equipo,
  actualTeam,
  setactualTeam,
}) {
  const [encima, setencima] = useState(false);
  const cambiarEquipo = () => {
    setactualTeam(index);
  };
  const entrar = () => {
    setencima(true);
  };
  const salir = () => {
    setencima(false);
  };
  /*   if (index == actualTeam) {
    return (
      <TouchableOpacity onPress={cambiarEquipo}><Text style={styles.seleccionado}>{equipo}</Text></TouchableOpacity>
    )
    
  }
  else{
    return (
      <TouchableOpacity onPress={cambiarEquipo}><Text style={styles.equipos}>{equipo}</Text></TouchableOpacity>
    )
  } */
  return (
    <TouchableOpacity
      onPress={cambiarEquipo}
      onMouseEnter={entrar}
      onMouseLeave={salir}
    >
      <Text
        style={[
          styles.equipos,
          encima == true && { backgroundColor: "#00FF00" },
          index == actualTeam && { backgroundColor: "#FF0000" },
        ]}
      >
        {equipo}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  equipos: {
    fontSize: 16,
    borderWidth: 2,
    borderColor: "#000000",
    margin: 10,
  },
  seleccionado: {
    fontSize: 16,
    borderWidth: 2,
    borderColor: "#000000",
    margin: 10,
    backgroundColor: "#ff0000",
  },
});
