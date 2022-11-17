import {
  StyleSheet,
  Text,
  View,
} from 'react-native'

const HomeScreen = () => {
  return (
    <>
    <View style={styles.screen}>
      <Text>Home Screen</Text>
    </View>
    </>
  )
}

const styles = StyleSheet.create({
  screen: {
    display: "flex",
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export default HomeScreen