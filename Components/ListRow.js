import React from 'react'
import {ListItem} from 'react-native-elements';
import {TouchableOpacity} from 'react-native'

export default ListRow = props => (
    <TouchableOpacity  onPress={() => props.navigation.navigate('ScreenBook',
          {
            title: props.list_name_encoded,
            list: props.list_name,
            updated: props.updated,
          })} >
      <ListItem
        title={props.list_name}
        containerStyle={{borderBottomWidth: 0}}
      />
    </TouchableOpacity>
)
