
import React from 'react'
import { 
    ImageBackground,
    Image,
    View, 
    Text, 
    StyleSheet,
    Dimensions,

} from 'react-native'

import { BlurView } from 'expo'

const blur_radius = 11

export default BookDetail = props => {
    return (
        <View style={{ flex: 1 }}>
        <ImageBackground
          source={{
            uri: props.book_image
          }}
          style={styles.backgroundImage}
          resizeMode='cover'
          blurRadius={blur_radius} />

        <BlurView tint="dark" intensity={65} style={[StyleSheet.absoluteFill, styles.blurView]}>
          <Image
            source={{
              uri: props.book_image
            }}
            resizeMode='contain'
            style={styles.nestedImage} />
            <View style={styles.contentView}>
              <Text style={styles.title}>{props.title}</Text>
              <Text style={styles.author}><Text style={{ color: 'red' }}>By </Text>{props.author}</Text>
              <Text style={styles.description}>{props.description}</Text>

              <View style={{ flexDirection: 'row', justifyContent: 'center', paddingTop: 25, }}>
                <View style={styles.detail}>
                  <Text style={{ textAlign: 'right', paddingRight: 15, }}>{'WEEKS ON LIST'}</Text>
                  <Text style={{ textAlign: 'right', paddingRight: 15, }}>{'RANK LAST WEEK'}</Text>
                  <Text style={{ textAlign: 'right', paddingRight: 15, }}>{'PUBLISHER'}</Text>
                  <Text style={{ textAlign: 'right', paddingRight: 15, }}>{'ISBN 10'}</Text>
                  <Text style={{ textAlign: 'right', paddingRight: 15, }}>{'ISBN 13'}</Text>
                </View>
                <View style={styles.detail}>
                  <Text>{props.weeks_on_list}</Text>
                  <Text>{props.rank_last_week}</Text>
                  <Text>{props.publisher}</Text>
                  <Text>{props.primary_isbn10}</Text>
                  <Text>{props.primary_isbn13}</Text>
                </View>
              </View>
              
            </View>
        </BlurView>
      </View>
    )
}

const styles = StyleSheet.create({
    backgroundImage: {
      flex: 1,
      width: null,
      height: null,
      alignItems: 'center',
      paddingTop: 20,
    },
    nestedImage: {
      width: 165,
      height: 200,
    },
    contentView: {
      height: Dimensions.get('window').height / 1.5,
      width: Dimensions.get('window').width,
      backgroundColor: '#FFFFFF',
      marginTop: 25,
    },
  
    blurView: {
      alignItems: 'center',
      paddingTop: 25
    },
    title: {
      fontSize: 14,
      fontWeight: 'bold',
      paddingTop: 10,
      paddingLeft: 10,
    },
    author: {
      fontSize: 12,
      fontWeight: 'normal',
      paddingLeft: 10,
      paddingTop: 5,
    },
    description: {
      fontSize: 12,
      fontWeight: 'normal',
      paddingTop: 20,
      paddingLeft: 10,
      paddingRight: 10,
    },
    detail: {
      flexDirection: 'colunm',
    }
  })

