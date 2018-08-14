import React from 'react'
import {FlatList, SectionList, ScrollView, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import TopFiveRow from '../Components/TopFiveRow'
import {fetchFromBestsellerAPI} from '../actions'
import {connect} from 'react-redux'


class ScreenOverview extends React.Component {
  static navigationOptions = ({navigation}) => ({
    headerTitle: 'Bestsellers'.toUpperCase(),
    headerTintColor: 'white',
    headerBackTitle: null,
    headerStyle: {
      backgroundColor: '#cc2a36',
    },
  })

  componentDidMount() {
    this.props.getBestsellers()
  }

  render() {
    const {lists, isFetching} = this.props.lists
    const books = lists.map(list => list.books)

    if(isFetching) {
      <Text>Loading...</Text>
    } 
  
    return (
      <ScrollView>
        {
          books.map(book => <FlatList horizontal data={book} renderItem={({item}) => <TopFiveRow {...item} />} />)
        }
      </ScrollView>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    lists: state.lists
  }
}

export default connect(mapStateToProps, {getBestsellers: fetchFromBestsellerAPI})(ScreenOverview);
