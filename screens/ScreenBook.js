import React from 'react'
import { FlatList, StyleSheet, Text, View, TouchableOpacity, Button, Image } from 'react-native'
import Row from '../Components/Row'
import { List } from 'react-native-elements'
import fetchList from '../Network/Api'
import Devider from '../Components/devider'
import { Color } from '../src/Color';


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
      <List containerStyle={{ borderTopWidth: 0, borderBottomWidth: 0, marginTop: 0, }}>
        <FlatList
          data={this.state.books}
          renderItem={({ item }) => <Row {...item} navigation={this.props.navigation} />}
          ItemSeparatorComponent={this.renderDevider}
          keyExtractor={item => item.title} />
      </List>
    )
  }
}
