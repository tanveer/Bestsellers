import React from 'react'
import { Color } from '../src/Color'
import BookDetail from './BookDetail'

export default class BookDetailScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    headerTitle: navigation.getParam('book').title,
    headerTintColor: '#fff',
    headerStyle: {
      backgroundColor: Color.pink_red,
    },
  })

  render() {
    const book = this.props.navigation.getParam('book')
    return (
      <BookDetail {...book} />
    )
  }
}