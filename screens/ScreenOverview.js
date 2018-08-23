import React from 'react'
import { Dimensions, FlatList, StyleSheet, Text, View } from 'react-native'
import TopFiveRow from '../Components/TopFiveRow'
import { fetchFromBestsellerAPI } from '../actions'
import { connect } from 'react-redux'
import { Color } from '../src/Color'
import { _ } from 'lodash'

const DEVICE_WIDTH = Dimensions.get('window').width

class ScreenOverview extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    headerTitle: 'Bestsellers'.toUpperCase(),
    headerTintColor: Color.white,
    headerBackTitle: null,
    headerStyle: {
      backgroundColor: Color.pink_red,
    },
  })

  componentDidMount() {
    this.props.getBestsellers()
  }

  render() {
    const { lists, isFetching } = this.props.lists
    const bestellers = lists.map(list => ({ listName: list.display_name, data: list.books }))
    const flatten = _.flatten(bestellers.map(books => books.data))
    let books = flatten.map(f => f.book_image)
    books = _.uniq(books)

    if (isFetching) {
      <Text>Loading...</Text>
    }

    return (
      <FlatList style={styles.list}
        data={books}
        renderItem={({ item }) =>
          <TopFiveRow imageLink={item} />
        }
        numColumns={4}
        keyExtractor={item => item}
      >
      </FlatList>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    lists: state.lists
  }
}

const styles = StyleSheet.create({
  list: {
    backgroundColor:
      Color.white,
    flex: 1,
  },

})

export default connect(mapStateToProps, { getBestsellers: fetchFromBestsellerAPI })(ScreenOverview);
