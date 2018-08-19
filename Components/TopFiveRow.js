import React from 'react'
import { Dimensions, StyleSheet, View, TouchableOpacity, Image } from 'react-native'
const DEVICE_WIDTH = Dimensions.get('window').width

export default TopFiveRow = props => (
  <TouchableOpacity>
    <View style={styles.container}>
      <Image
        source={{ uri: props.imageLink }}
        style={styles.image}
      />
    </View>
  </TouchableOpacity>
)

const styles = StyleSheet.create({
  image: {
    flex: 1,
    minHeight: 125,
    minWidth: DEVICE_WIDTH / 4.5
  },
  container: {
    flex: 1,
    margin: 5
  },
})
