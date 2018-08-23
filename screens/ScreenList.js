import React from 'react'
import { FlatList, StyleSheet, } from 'react-native'
import { List } from 'react-native-elements';
import ListRow from '../Components/ListRow'
import Devider from '../Components/devider'
import { connect } from 'react-redux'
import { fetchFromBestsellerAPI } from '../actions'
import { Color } from '../src/Color'


class ScreenList extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    headerTitle: 'Bestsellers'.toUpperCase(),
    headerTintColor: Color.white,
    headerBackTitle: null,
    headerStyle: {
      backgroundColor: Color.pink_red,
    },
  })

  componentDidMount() {
    this.props.getBestSellerList()
  }

  renderDevider = () => (
    <Devider />
  )

  renderItem = (item) => (
    <ListRow {...item} navigation={this.props.navigation} />
  )

  render() {
    const { lists, isFetching } = this.props.lists
    const data = lists.map(list => ({
      listName: list.display_name,
      listImage: list.list_image,
      updated: list.updated,
      listNameEncoded: list.list_name_encoded,
      listId: list.list_id,
    }))

    return (
      <List containerStyle={styles.container}>
        <FlatList
          data={data}
          keyExtractor={item => item.listId}
          renderItem={({ item }) => this.renderItem(item)}
          ItemSeparatorComponent={this.renderDevider}
        />
      </List>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    lists: state.lists
  }
}

const styles = StyleSheet.create({
  container: {
    borderTopWidth: 0,
    borderBottomWidth: 0,
    marginTop: 0,
    backgroundColor: Color.white
  }
})

export default connect(mapStateToProps, { getBestSellerList: fetchFromBestsellerAPI })(ScreenList);