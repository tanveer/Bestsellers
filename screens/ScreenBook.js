import React from 'react'
import {FlatList, StyleSheet, Text, View, TouchableOpacity, Button, Image} from 'react-native'
import Row from '../Components/Row'
import {List} from 'react-native-elements'
import fetchList from '../Network/Api'


export default class ScreenBook extends React.Component {
  static navigationOptions = ({navigation}) => ({
    headerTitle: navigation.getParam('list'),
    headerTintColor: '#fff',
    headerStyle: {
      backgroundColor: '#cc2a36',
    },
  })

  state = {
    books: [],
    encodedName: '',
  }

  getBooks = async (list) => {
    const response = await fetchList(list)
    this.setState({books: [...response.data.results.books]})
  }

  componentDidMount() {
    const list = this.props.navigation.getParam('title')
    this.getBooks(list)
  }

  renderSeparator = () => {
    return (
      <View
        style={{
          backgroundColor: '#cccccc',
          width: '90%',
          height: 1,
          marginLeft: '5%',
        }}
      />
    )
  }

  render() {
    return (
      <List containerStyle={{borderTopWidth: 0, borderBottomWidth: 0, marginTop: 0,}}>
        <FlatList
          data={this.state.books}
          renderItem={({item}) => <Row {...item} updated={this.props.navigation.getParam('updated')}/>}
          ItemSeparatorComponent={this.renderSeparator}
          keyExtractor={item => item.title}/>
      </List>
    )
  }
}
