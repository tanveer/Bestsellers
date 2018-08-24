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
  Dimensions,
} from 'react-native'
import Row from '../Components/Row'
import { List } from 'react-native-elements'
import fetchList from '../Network/Api'
import Devider from '../Components/devider'


export default class BookDetailScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    headerTitle: navigation.getParam('title'),
    headerTintColor: '#fff',
    headerStyle: {
      backgroundColor: '#cc2a36',
    },
  })

  render() {
    const width = Dimensions.get('window').width
    const height = Dimensions.get('window').height
    const book = this.props.navigation.getParam('book')
    return (
      <ScrollView>
        <View style={{paddingTop: 10}}>
            <Image source={{
              uri: book.book_image
            }}
            style={{felx: 1, width: width, height: height / 1.5, resizeMode: 'contain', alignItems: 'center'}} />
          <View style={{paddingLeft: 10, paddingTop: 5}}>
          <Text style={{
            fontSize: 14,
            fontFamily: 'HelveticaNeue-Bold',
          }}>
            {book.title}
          </Text>
          <Text style={{
            fontSize: 12,
            fontFamily: 'HelveticaNeue',
          }}>
            {book.description}
          </Text>
          </View>
        </View>
      </ScrollView>
    )
  }
}
