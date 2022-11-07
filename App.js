import {
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpaciy,
  View,
} from 'react-native'

import ShopingList from "./components/ShopingList/ShopingList"

export default function App() {
  return (
    <>
    <View style={styles.container}>
      <Text>Hola Coder!!</Text>
      <Text>Esta es mi App TinPet</Text>
    </View>
    <ShopingList/>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    height: "auto",
    marginTop: 25,
  },
})