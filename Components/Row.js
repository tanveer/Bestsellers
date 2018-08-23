import React from 'react'
import { Dimensions, StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import { List, ListItem, Avatar } from 'react-native-elements';
import { Color } from '../src/Color'
const DEVICE_WIDTH = Dimensions.get('window').width

export default Row = props => (
  <View style={{ fekx: 1, padding: 10, minHeight: styles.image.height }}>
    <TouchableOpacity style={{ flexDirection: 'row' }}>
      <Image
        source={{ uri: props.book_image }}
        style={styles.image} />

      <View style={{ flex: 1, justifyContent: 'flex-start', paddingLeft: 10}}>
        <Text style={styles.title}>{props.title}</Text>
        <Text style={styles.subtitle}><Text style={styles.subText}>{'by '}</Text>{props.author}</Text>
        <View style={{ flexDirection: 'felx-end', }}>
          <Text style={styles.text}>Rank: {props.rank}</Text>
          <Text style={styles.text}>Weeks on list: {props.weeks_on_list}</Text>
          <Text style={styles.text}>Publisher: {props.publisher}</Text>

          {/* <Text style={{ color: 'red', paddingRight: 25, textAlign: 'right'}}>
            {
              (props.rank > props.rank_last_week && props.rank_last_week != 0) ? '⬇︎' :
                <Text style={{ color: 'green' }}>
                  {(props.rank < props.rank_last_week) ? '⬆︎' : ' '}
                </Text>
            }
          </Text> */}
        </View>

      </View>
    </TouchableOpacity>
  </View>
)

const styles = StyleSheet.create({
  row: {
    padding: 5,
    alignItems: 'center',
    flexDirection: 'row',
  },
  title: {
    fontSize: 16,
    fontFamily: 'Times New Roman',
    fontWeight: 'bold'
  },
  subtitle: {
    fontFamily: 'Helvetica Neue',
    fontSize: 12,
    paddingBottom: 5,
    color: Color.dark_gray
  },
  text: {
    fontFamily: 'Helvetica Neue',
    fontSize: 12,
    color: Color.dark_gray
  },
  subText: {
    fontFamily: 'Helvetica Neue',
    fontSize: 12,
    color: Color.tomato1,
  },
  container: {
    paddingLeft: 10,
  },
  image: {
    minHeight: 125,
    minWidth: 85
  }
})
