import React from 'react'
import {FlatList, StyleSheet, Text, View, TouchableOpacity, Button, Image} from 'react-native'
import Row from '../Components/Row'
import {List} from 'react-native-elements'
import axios from 'axios'


export default class ScreenBook extends React.Component {
  static navigationOptions = ({navigation}) => ({
    headerTitle: navigation.getParam('list'),
    headerStyle: {
      backgroundColor: '#f5f5f5',
    },
  })

  state = {
    books: [],
    encodedName: '',
    apiKey: 'e23d8891dde4b093681f4f541d5e24ac:17:73864633',
    baseUrl: 'https://api.nytimes.com/svc/books/v3/lists/',
  }

  handleFetchReq = async (list) => {
    const {apiKey, baseUrl, encodedName} = this.state
    const response = await axios.get(`${baseUrl}${list}?&api-key=${apiKey}`)
    this.setState({books: [...response.data.results.books]})
  }

  componentDidMount() {
    const list = this.props.navigation.getParam('title')
    this.handleFetchReq(list)
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
