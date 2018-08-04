import React from 'react'
import {FlatList, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import {List, ListItem} from 'react-native-elements';
import fetchList from '../Network/Api'
import ListRw from '../Components/ListRow'
import Devider from '../Components/devider'


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


renderDevider = () => (
  <Devider />
)

  renderItem = ({item}) => (
    <ListRw {...item} navigation={this.props.navigation} />
  )

  render() {
    return (
      <List containerStyle={{borderTopWidth: 0, borderBottomWidth: 0, marginTop: 0,}}>
          <FlatList
            data={this.state.lists}
            keyExtractor={item => item.list_name_encoded}
            renderItem={this.renderItem}
            ItemSeparatorComponent={this.renderDevider}
          />
        </List>
    );
  }
}
