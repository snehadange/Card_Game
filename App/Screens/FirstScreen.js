import React from 'react'
import {
    StyleSheet, View, TouchableOpacity, Text, ImageBackground, Image, ActivityIndicator
} from 'react-native';
import { IconsPath } from '../Assets';
import { Octicons, MaterialCommunityIcons } from 'react-native-vector-icons';

export default class FirstScreen extends React.Component {
    state = {
        showME: true
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                showME: false
            })
        }, 4000)
    }
    render() {
        return (

            <ImageBackground source={IconsPath.back} style={{
                width: '100%',
                height: '100%',
            }}>
                {this.state.showME ?
                    <ActivityIndicator size="large" color="white" style={{ marginTop: 100 }} /> :
                    <View style={styles.container}>
                    

                        <TouchableOpacity>
                            <Image source={IconsPath.facebook} style={{ height: 40, width: 200, borderRadius: 5 }} />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.square} onPress={() => this.props.navigation.navigate('ProfileScreen')} >
                            <Octicons name="person" size={40} color='white' style={{ marginLeft: 10 }} />
                            <Text style={styles.textColor}>Play as a guest</Text>
                        </TouchableOpacity>
                    </View>
                }
            </ImageBackground>

        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 2,
        alignItems: 'center',
        justifyContent: 'center'
    },
    textColor: {
        color: 'white',
        fontSize: 20,
        alignSelf: 'center',
        marginTop: -30,
        marginLeft: 30
    },
    square: {
        width: 100 * 3,
        height: 50,
        backgroundColor: 'green',
        opacity: 0.8,
        borderRadius: 10,
        marginTop: 10
    }
})