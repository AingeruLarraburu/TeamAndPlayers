import { StyleSheet, View} from 'react-native';
import HeaderView from './componentes/header';
import BodyComponent from './componentes/body';
import FooterComponent from './componentes/footer';

export default function App() {
  return (
    <View style={styles.container}>
      <HeaderView></HeaderView>
      <BodyComponent></BodyComponent>
      <FooterComponent></FooterComponent>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    borderColor: "#000000",
    flex: 1
  }
});
