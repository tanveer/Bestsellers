import React from 'react'
import {FlatList, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import {List, ListItem} from 'react-native-elements';
import axios from 'axios'


export default class ScreenList extends React.Component {
  static navigationOptions = ({navigation}) => ({
    headerTitle: 'Bestsellers'.toUpperCase(),
    headerStyle: {
      backgroundColor: '#f5f5f5',
    },
  })

  state = {
    lists: [],
    listNameEncoded: '',
    apiKey: 'e23d8891dde4b093681f4f541d5e24ac:17:73864633',
    baseUrl: 'https://api.nytimes.com/svc/books/v3/lists/',
    listNames: 'names.json',
    overview: 'overview.json',
  }

  componentDidMount() {
    this.handleFetchReq()
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

  handleFetchReq = async () => {
    const {apiKey, baseUrl, listNames, overview,} = this.state
    const response = await axios.get(`${baseUrl}${listNames}?api-key=${apiKey}`)
    this.setState({lists: [...response.data.results]})
  }

  renderItem = ({item}) => (
    <TouchableOpacity  onPress={() => this.props.navigation.navigate('ScreenBook',
          {
            title: item.list_name_encoded,
            list: item.list_name,
            updated: item.updated,
          })} >
      <ListItem
        title={item.list_name}
        containerStyle={{borderBottomWidth: 0}}
      />
    </TouchableOpacity>
  )

  render() {
    return (
      <List containerStyle={{borderTopWidth: 0, borderBottomWidth: 0, marginTop: 0,}}>
          <FlatList
            data={this.state.lists}
            keyExtractor={item => item.list_name_encoded}
            renderItem={this.renderItem}
            ItemSeparatorComponent={this.renderSeparator}
          />
        </List>
    );
  }
}
