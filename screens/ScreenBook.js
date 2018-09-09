import React from 'react'
import { Dimensions, FlatList, StyleSheet, Text, View, TouchableOpacity, Button, Image } from 'react-native'
import Row from '../Components/Row'
import { List } from 'react-native-elements'
import fetchList from '../Network/Api'
import Devider from '../Components/devider'
import { Color } from '../src/Color';
import Carousel from 'react-native-snap-carousel'
import Card from './Card'

const HEIGHT = Dimensions.get('window').height
const WIDTH = Dimensions.get('window').width

export default class ScreenBook extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    headerTitle: navigation.getParam('list'),
    headerTintColor: Color.white,
    headerStyle: {
      backgroundColor: Color.pink_red,
    },
  })

  state = {
    books: [],
    encodedName: '',
  }

  getBooks = async (list) => {
    const response = await fetchList(list)
    this.setState({ books: [...response.data.results.books] })
  }

  componentDidMount() {
    const list = this.props.navigation.getParam('title')
    this.getBooks(list)
  }
  renderDevider = () => (
    <Devider />
  )

  render() {
    return (
      <Carousel layout={'default'}
        data={this.state.books}
        renderItem={({ item }) => <Card {...item} navigation={this.props.navigation} />}
        sliderWidth={WIDTH}
        itemWidth={WIDTH}
        keyExtractor={item => item.title} />
    )
  }
}
