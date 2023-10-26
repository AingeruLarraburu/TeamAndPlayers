import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';

export default function EquipoComponent({index, equipo, actualTeam, setactualTeam}) {
  const cambiarEquipo = () => {
    setactualTeam(index);
  }
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
    <TouchableOpacity onPress={cambiarEquipo}><Text style={[styles.equipos, index == actualTeam && {backgroundColor: "#FF0000"}]}>{equipo}</Text></TouchableOpacity>
  )
  
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
    backgroundColor: "#ff0000"
  }
});
