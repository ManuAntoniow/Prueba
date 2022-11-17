import {
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

import Modal from "./Modal"
import { useState } from "react"

export default function ShopingList() {
  const [textItem, setTextItem] = useState("")
  const [list, setList] = useState([])
  const [modalVisible, setModalVisible] = useState(false)
  const [itemSelected, setItemSelected] = useState({})
  
  const onHandleChange = (t) => setTextItem(t)

  const addItem = () => {
    if (textItem != "") {
      setList((currentState) => [
        ...currentState,
        { id: Math.random().toString(), value: textItem },
      ])
      setTextItem("")
    }
  }

  const selectedItem = (id) => {
    console.log(id);
    setItemSelected(list.find((item) => item.id === id))
    setModalVisible(true)
  }

  const deleteItem = () => {
    console.log(itemSelected);
    setList((currentState) =>
      currentState.filter((item) => item.id !== itemSelected.id)
    )
    setItemSelected({})
    setModalVisible(false)
  }

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => selectedItem(item.id)}>
      <Text>- {item.value}</Text>
    </TouchableOpacity>
  )

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 30 }}>Shopping List 🛍️</Text>
      <View style={styles.inputcontainer}>
        <TextInput
          placeholder="new item"
          placeholderTextColor="black"
          style={styles.inputStyle}
          value={textItem}
          onChangeText={onHandleChange}
        />
        <TouchableOpacity style={styles.button} onPress={addItem}>
          <Text style={{color: "white"}}> Add </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.lista}>
        <FlatList
          data={list}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </View>
      <Modal isVisible={modalVisible} actionDeleteItem={deleteItem} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  inputcontainer: {
    marginTop: 30,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    width: "100%",
    paddingHorizontal: 30,
  },
  inputStyle: {
    borderBottomColor: "black",
    borderBottomWidth: 1,
    width: 250,
  },
  button: {
    backgroundColor: "red",
    height: 35,
    width: 45,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
    
  },
  lista: {
    paddingRight: 250,
  },
})