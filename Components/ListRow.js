import React from 'react'
import { ListItem, Avatar } from 'react-native-elements';
import { StyleSheet, TouchableOpacity, Text, View, } from 'react-native'

export default ListRow = props => (
  <TouchableOpacity onPress={() => props.navigation.navigate('ScreenBook',
    {
      title: props.listNameEncoded,
      list: props.listName,
      updated: props.updated,
    })} >
    <ListItem
      avatar={
        <Avatar
          source={{ uri: props.listImage }}
          height={100}
          width={65}
        />
      }
      title={
        <View style={styles.view}>
          <Text style={styles.text}>{props.listName}</Text>
        </View>}
      containerStyle={{ borderBottomWidth: 0 }}
    />
  </TouchableOpacity>
)

const styles = StyleSheet.create({
  text: {
    fontWeight: 'bold',
    fontSize: 16,
    marginLeft: 10,
  },
  view: {
    flex: 1,
    justifyContent: 'center',
  }
})
