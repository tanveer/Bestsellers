import React from 'react'
import { FlatList, ScrollView, Text, View } from 'react-native'
import TopFiveRow from '../Components/TopFiveRow'
import { fetchFromBestsellerAPI } from '../actions'
import { connect } from 'react-redux'

class ScreenOverview extends React.Component {
  static navigationOptions = ({ navigation }) => ({
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

  renderList = (data) => {
    return (
      <FlatList style={{ paddingTop: 10, paddingBottom: 10, }}
        horizontal
        data={data}
        renderItem={({ item }) =>
          <TopFiveRow {...item} />
        }
        keyExtractor={item => item.listName}
        >
      </FlatList>
    )
  }

  sectionHeader = (section) => {
    return (
      <View style={{ backgroundColor: '#DDDDDD', height: 30, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize: 14, fontWeight: 'bold' }}>{section}</Text>
      </View>
    )
  }

  render() {
    const { lists, isFetching } = this.props.lists
    const bestellers = lists.map(list => ({ listName: list.display_name, data: list.books }))

    if (isFetching) {
      <Text>Loading...</Text>
    }

    return (
      <ScrollView>
        {
          bestellers.map(books => 
          <View style={{flex: 1,}}>
            {this.sectionHeader(books.listName)}
            {this.renderList(books.data)}
          </View>
          )
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

export default connect(mapStateToProps, { getBestsellers: fetchFromBestsellerAPI })(ScreenOverview);
