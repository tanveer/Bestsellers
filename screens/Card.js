import React from 'react'
import {
    Dimensions,
    Image,
    Text,
    View,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';

const HEIGHT = Dimensions.get('window').height
const WIDTH = Dimensions.get('window').width

export default class Card extends React.Component {

    render() {
        return (
            <View style={{
                flex: 1,
                paddingLeft: 20,
                paddingRight: 20,
                paddingBottom: 10,
                paddingTop: 10,

            }}>
                <TouchableOpacity style={{flex: 1,}}
                    onPress={() => this.props.navigation.navigate('ScreenDetail',
                        {
                            book: { ...this.props },
                            navigation: this.props.navigation
                        })
                    }>

                    <View style={{
                        flex: 1,
                        borderTopLeftRadius: 10,
                        borderTopRightRadius: 10,
                        overflow: 'hidden',
                        backgroundColor: 'white',
                        borderWidth: 1,
                        borderColor: 'white',
                        paddingTop: 10

                    }}>
                        <Image resizeMode='contain'
                            source={{ uri: this.props.book_image }}
                            style={{
                                flex: 1,
                            }}

                        />
                    </View>

                    <View style={{
                        height: 200,
                        backgroundColor: 'white',
                        borderBottomRightRadius: 10,
                        borderBottomLeftRadius: 10,
                    }}>
                        <Text style={{ fontSize: 16, fontWeight: 'bold', textAlign: 'center' }}>{this.props.title}</Text>
                        <Text style={{ fontSize: 14, fontWeight: 'normal', textAlign: 'center' }}>{this.props.author}</Text>
                        <Text style={
                            styles.explanation
                        }
                            numberOfLines={4}
                            ellipsizeMode='tail'>
                            {
                                this.props.description
                            }
                        </Text>
                    </View>
                </TouchableOpacity>
            </View>


        )
    }
}

const styles = StyleSheet.create({
    explanation: {
        fontSize: 14,
        fontWeight: '400',
        paddingRight: 10,
        paddingLeft: 10,
        paddingTop: 10
    }
})