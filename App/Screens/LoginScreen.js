import React from 'react'
import {
    StyleSheet, View, Text, ImageBackground, Image, TextInput, AsyncStorage, Alert,
    TouchableOpacity
} from 'react-native';
import { IconsPath } from '../Assets';
import { Ionicons, MaterialIcons } from 'react-native-vector-icons';


export default class LoginScreen extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            icEye: 'visibility-off',
            showPassword: true,
            email: '',
            password: '',
            emailError: '',
            passwordError: ''
        }

        this.baseurl = "http://192.168.1.102:8000/src/router"
     

    }



    validateUserLogin = (type) => {
        let emailrjx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        let passwordrjx = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/



        if (type == 'email') {
            if (emailrjx.test(this.state.email)) {
                this.setState({
                    emailError: ''
                })
            } else {
                this.setState({
                    emailError: 'Please enter valid email address'
                })
            }
        }
        else if (type == 'password') {
            if (passwordrjx.test(this.state.password)) {
                this.setState({
                    passwordError: ''
                })
            } else {
                this.setState({
                    passwordError: 'Password must be Minimum eight characters, at least one letter and one number '
                })
            }
        }


    }

    storeData = () => {
        const { navigate } = this.props.navigation;


        let login_collection = {
            email: this.state.email,
            password: this.state.password
        }

        let url = this.baseurl + '/login'
        console.log(url)
        if (this.state.email == '') {
            alert("Please enter valid email")
        } else if (this.state.password == '') {
            alert("Please enter valid password")
        } else {

            fetch(url,
                {
                    method: 'POST', // or 'PUT'
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(login_collection),

                })

                .then(response => response.json())
                .then((data) => {


                    if (data.message == 'Invalid email/password!!!') {
                        console.log("Invalid Login:", data)
                        Alert.alert(
                            'Oops!',
                            'Invalid Email/password'
                        );
                    }
                    console.log("Login suceessfull :", data)
                    this.setState({
                        email: '',
                        password: '',
                    })

                    AsyncStorage.setItem('tokenKey', data.data.token)
                    AsyncStorage.setItem('username', data.data.user.name)



                    if (data.erros) {


                        data.errors.map((err) => {

                            if (err.param == 'email') {
                                this.setState({
                                    emailError: err.msg
                                })
                            } else if (err.param == 'password') {
                                this.setState({
                                    passwordError: err.msg
                                })
                            }
                        })
                    }
                    else {
                        Alert.alert(
                            'Great!',
                            ' Login Successful',
                            [
                                { text: 'OK', onPress: () => navigate('ProfileScreen') },
                            ]
                        );
                    }




                }).catch((error) => console.log("Erros:", error))
        }
    }


    changePwdType = () => {

        if (this.state.showPassword) {
            this.setState({
                icEye: 'visibility',
                showPassword: false,
                password: this.state.password
            })
        } else {
            this.setState({
                icEye: 'visibility-off',
                showPassword: true,
                password: this.state.password
            })
        }

    };



    render() {

        return (

            <ImageBackground source={IconsPath.back} style={styles.container}>


                <Ionicons name="ios-mail" size={30} style={{ marginLeft: -190, top: 80 }} />
                <Ionicons name="ios-lock" size={30} style={{ marginLeft: -190, top: 120 }} />

                <TextInput style={styles.input}
                    underlineColorAndroid="transparent"
                    placeholder="email"
                    placeholderTextColor="black"
                    autoCapitalize='none'
                    value={this.state.email}
                    disableFullscreenUI={true}
                    onEndEditing={() => this.validateUserLogin('email')}
                    onChangeText={(text) => this.setState({ email: text })}
                />
                <Text style={{ top: 10, color: 'red', fontWeight: 'bold' }}>{this.state.emailError}</Text>

                <TextInput style={styles.input}
                    underlineColorAndroid="transparent"
                    placeholder="password"
                    placeholderTextColor="black"
                    secureTextEntry={this.state.showPassword}
                    autoCapitalize='none'
                    value={this.state.password}
                    disableFullscreenUI={true}
                    onEndEditing={() => this.validateUserLogin('password')}
                    onChangeText={(text) => this.setState({ password: text })}
                />
                <MaterialIcons
                    style={styles.icon}
                    name={this.state.icEye}
                    size={30}
                    onPress={this.changePwdType}
                />
                <Text style={{ top: 10, color: 'red', fontWeight: 'bold' }}>{this.state.passwordError}</Text>



                <View style={{ top: 10, backgroundColor: '#3399FF', width: 250, height: 50, borderRadius: 25 }}>
                    <TouchableOpacity style={{ top: 10, left: 90 }} onPress={() => this.storeData()}>
                        <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 20 }}>Login</Text>
                    </TouchableOpacity>
                </View>

                <View style={{ top: 30, flexDirection: 'row' }} >
                    <Text style={{ color: 'white', fontWeight: 'bold' }}>Don't have an account?</Text>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Registration')}>
                        <Text style={{ color: 'blue', fontWeight: 'bold' }}>Signup</Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>



        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 4,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%', height: '100%',

    },
    input: {
        //  margin: 15,
        width: 250,
        height: 50,
        fontSize: 16,
        paddingLeft: 60,
        borderWidth: 1,
        color: 'black',
        backgroundColor: 'white',
        fontWeight: 'bold',
        top: 10,
        opacity: 0.4,
        borderRadius: 25,
    },
    error: {
        borderColor: 'red',
        borderWidth: 3
    },
    icon: {
        top: -30,
        left: 90,

    }
})


