import React from 'react'
import {FlatList, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import {List, ListItem} from 'react-native-elements';
import fetchList from '../Network/Api'


export default class ScreenList extends React.Component {
  static navigationOptions = ({navigation}) => ({
    headerTitle: 'Bestsellers'.toUpperCase(),
    headerTintColor: 'white',
    headerBackTitle: null,
    headerStyle: {
      backgroundColor: '#cc2a36',
    },
  })

  state = {
    lists: [],
    listNameEncoded: '',
  }

  componentDidMount() {
    this.getList()
  }

  getList = async () => {
    const response = await fetchList('')
    this.setState({lists: [...response.data.results]})
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
