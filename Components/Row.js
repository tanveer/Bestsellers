import React from 'react'
import {FlatList, StyleSheet, Text, View, TouchableOpacity, Button, Image} from 'react-native'
import {List, ListItem, Avatar} from 'react-native-elements';

export default Row = props => (
  <TouchableOpacity>
    <ListItem
      avatar={
        <Avatar
          source={{uri: props.book_image}}
          height={100}
          width={65}
         />
       }
      title={
        <View style={{paddingLeft: 10,}}>
          <Text style={styles.title}>{props.title}</Text>
          <Text>{'Author: ' + props.author}</Text>
          <Text>{'Rank: ' + props.rank}</Text>
          <Text>{'Weeks on list: ' + props.weeks_on_list}</Text>
        </View>
      }
      containerStyle={{borderBottomWidth: 0,}} />
  </TouchableOpacity>
)

const styles = StyleSheet.create({
  row: {
    padding: 5,
    alignItems: 'center',
    flexDirection: 'row',
    },
    title:{
      paddingBottom: 5,
      fontSize: 12,
      fontFamily: 'Helvetica-Bold',
    },
    image: {
      width: 50,
      height: 50,
      marginRight: 10,
    },
    view: {
      flex: 1,
      flexWrap: 'wrap'
    },
})
