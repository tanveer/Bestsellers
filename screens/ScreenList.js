import React from 'react'
import {FlatList, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import {List, ListItem} from 'react-native-elements';
import ListRow from '../Components/ListRow'
import Devider from '../Components/devider'
import { connect } from 'react-redux'
import {fetchBestsellerListName } from '../actions'


class ScreenList extends React.Component {
  static navigationOptions = ({navigation}) => ({
    headerTitle: 'Bestsellers'.toUpperCase(),
    headerTintColor: 'white',
    headerBackTitle: null,
    headerStyle: {
      backgroundColor: '#cc2a36',
    },
  })

  componentDidMount() {
    this.props.fetchListnames()
  }

  renderDevider = () => (
    <Devider />
  )

    renderItem = ({item}) => (
      <ListRow {...item} navigation={this.props.navigation} />
    )

    render() {
      const {list_names} = this.props.list_names
      return (
        <List containerStyle={{borderTopWidth: 0, borderBottomWidth: 0, marginTop: 0,}}>
            <FlatList
              data={list_names}
              keyExtractor={item => item.list_name_encoded}
              renderItem={this.renderItem}
              ItemSeparatorComponent={this.renderDevider}
            />
        </List>
      );
    }
  }

  mapStateToProps = (state) => {
    const {list_names} = state.list_names
    return {
      list_names: state.list_names
    }
  }

  export default connect(mapStateToProps, {fetchListnames: fetchBestsellerListName})(ScreenList)
