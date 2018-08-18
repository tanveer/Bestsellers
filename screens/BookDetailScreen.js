import React from 'react'
import {
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Button,
  Image,
  Dimensions, } from 'react-native'
import Row from '../Components/Row'
import {List} from 'react-native-elements'
import fetchList from '../Network/Api'
import Devider from '../Components/devider'


export default class BookDetailScreen extends React.Component {
  static navigationOptions = ({navigation}) => ({
    headerTitle: navigation.getParam('title'),
    headerTintColor: '#fff',
    headerStyle: {
      backgroundColor: '#cc2a36',
    },
  })

  render() {
    const {width , height} = Dimensions.get('window')
    const book = this.props.navigation.getParam('book')
    return (
      <ScrollView>
        <View style={{flex: 1, alignItems: 'center', paddingTop: 25, paddingBottom: 20,}}>
          <Image source={{
            uri: book.book_image}}
            style={{width: 150, height: 225, alignItems: 'center',}}/>
          <Text style={{
            fontSize: 14,
            fontFamily: 'HelveticaNeue-Bold', }}>
            {book.title}
          </Text>
          <Text style={{
            fontSize: 12,
            fontFamily: 'HelveticaNeue',
            padding: 10,}}>
            {book.description}
          </Text>
        </View>
      </ScrollView>
    )
  }
}
