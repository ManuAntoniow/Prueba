import {
  Modal as NewModal,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native"

const Modal = (props) => {
  const { isVisible, actionDeleteItem } = props;

  return (
    <NewModal animationType="fade" transparent={true} visible={isVisible}>
      <View style={styles.centeredView}>
        <View style={styles.eliminar}>
          <Text>Queres eliminar este elemento ?</Text>
          <Pressable onPress={() => actionDeleteItem()} style={styles.boton}>
            <Text style={{color: "white"}}>ELIMINAR</Text>
          </Pressable>
        </View>
      </View>
    </NewModal>
  )
}

export default Modal

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  eliminar: {
    backgroundColor: "white",
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  boton: {
    backgroundColor: "red",
    marginTop: 5,
    padding: 5,
    borderRadius: 10,
  },
})