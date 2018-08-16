import React from 'react'
import {FlatList, StyleSheet, Text, View, TouchableOpacity, Button, Image} from 'react-native'
import {List, ListItem, Avatar} from 'react-native-elements';

export default TopFiveRow = props => (
    <TouchableOpacity>
      <ListItem
        avatar={
            <Avatar
              source={{uri: props.book_image}}
              height={100}
              width={65}
            />
        }
        hideChevron={true}
        containerStyle={{borderBottomWidth: 0,}}
        />
     </TouchableOpacity>
 )
 
const styles = StyleSheet.create({
  row: {
    padding: 5,
    alignItems: 'center',
    flexDirection: 'row',
  },

  title:{
    fontSize: 12,
    fontFamily: 'Helvetica-Bold',
  },

  subtitle: {
    fontFamily: 'HelveticaNeue-Light',
    fontSize: 11,
    paddingBottom: 5,
  },

  text: {
    fontFamily: 'Helvetica Neue',
    fontSize: 12,
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
