import React from 'react'
import {FlatList, SectionList, ScrollView, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import {List, ListItem} from 'react-native-elements';
import fetchList from '../Network/Api'
import axios from 'axios'
import TopFiveRow from '../Components/TopFiveRow'
import Devider from '../Components/devider'


export default class ScreenOverview extends React.Component {
  static navigationOptions = ({navigation}) => ({
    headerTitle: 'Bestsellers'.toUpperCase(),
    headerTintColor: 'white',
    headerBackTitle: null,
    headerStyle: {
      backgroundColor: '#cc2a36',
    },
  })

  state = {
    results: {},
    lists: []
  }

  componentDidMount() {
    this.getTopFiveBoks()
  }

  getTopFiveBoks = async () => {
    const response = await axios.get("https://api.nytimes.com/svc/books/v3/lists/overview.json?api-key=e23d8891dde4b093681f4f541d5e24ac:17:73864633")
    const res = response.data
    this.setState({results: {...res}})
    this.setState({lists: [...res.results.lists]})
  }

  renderSection = obj => (
    <Text>{obj.section.title}</Text>
  )

  renderDevider = () => (
    <Devider />
  )

  rendreItem = obj => (
    <TopFiveRow {...obj} />
  )

  render() {
    const data = this.state.lists.map(books => books.books.map(book => book))
    const listName = this.state.lists.map(books => books.display_name)
    return (
      <ScrollView>
        {
          data.map(book => (
              <FlatList
                horizontal
                data={book}
                renderItem={({item}) =>
                  <TopFiveRow {...item} />
                }
                keyExtractor={item => item.title}
              />
          ))
        }
      </ScrollView>
    );
  }
}
