import React from 'react'
import {
    StyleSheet, View, Text, ImageBackground, Image, TextInput, ScrollView, SafeAreaView,
    Alert, ActivityIndicator
} from 'react-native';
import { IconsPath } from '../Assets';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Ionicons, MaterialIcons } from 'react-native-vector-icons';



export default class Registration extends React.Component {

    constructor() {
        super()
        this.state = {
            name: '',
            nameError: '',
            email: '',
            emailError: '',
            number: '',
            numberError: '',
            password: '',
            passwordError: 'dgh',
            icEye: 'visibility-off',
            showPassword: true,
        }

        this.baseurl = "http://192.168.1.102:8000/src/router"
    }



    validator = (type) => {

        let rjx = /^[a-zA-Z]*$/;
        let emailrjx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        let numberrjx = /^[0-9]{10}$/;
        let passwordrjx = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;




        if (type == 'name') {
            if (rjx.test(this.state.name)) {
                this.setState({
                    nameError: ''
                })

            } else {
                this.setState({
                    nameError: 'Name must be in alphabets only'
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


        else if (type == 'email') {
            if (emailrjx.test(this.state.email)) {
                this.setState({
                    emailError: ''
                })
            } else {
                this.setState({
                    emailError: 'This is not a valid email address'
                })
            }
        }

        else if (type == 'number') {
            if (numberrjx.test(this.state.number)) {
                this.setState({
                    numberError: ''
                })
            } else {
                this.setState({
                    numberError: 'Mobile number must be 10 digits'
                })
            }
        }

    }


    register = () => {
        const { navigate } = this.props.navigation

        let collections = {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password,
            phoneNumber: this.state.number
        };
        let url = this.baseurl + '/registerUser';

        if (this.state.name == '') {
            alert("Name is required")

        } else if (this.state.number == '') {
            alert("Phone number is required")
        } else if (this.state.email == '') {
            alert("Email is required")
        } else if (this.state.password == '') {
            alert("password is required")
        }
        else {

            fetch(url,
                {
                    method: 'POST', // or 'PUT'

                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(collections),

                })
                .then(response => response.json())

                .then(data => {

                    console.log('Successfull:', data);

                    this.setState({
                        name: '',
                        email: '',
                        password: '',
                        number: ''
                    })




                    if (data.errors) {
                        alert("Data not inserted")

                        data.errors.map((err) => {

                            if (err.param == 'name') {
                                this.setState({
                                    nameError: err.msg
                                })
                            } else if (err.param == 'email') {
                                this.setState({
                                    emailError: err.msg
                                })
                            } else if (err.param == 'password') {
                                this.setState({
                                    passwordError: err.msg
                                })
                            } else if (err.param == 'phoneNumber') {
                                this.setState({
                                    numberError: err.msg
                                })
                            }
                        });
                    } else {
                        Alert.alert(
                            'Alert Message',
                            ' Registration Complete  ',
                            [
                                { text: 'OK', onPress: () => navigate('LoginScreen') },
                            ]
                        );
                    }
                })

                .catch((error) => {
                    console.error('Errors are:', error);
                });

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
        //  this.setState(newState)
    };


    render() {


        return (
            <ImageBackground source={IconsPath.back} style={{ height: '100%', width: '100%' }}>

                <ScrollView>

                    <SafeAreaView style={styles.container}>



                        <Ionicons name="ios-person" size={30} style={{ top: 129, left: -90 }} />
                        <Ionicons name="ios-mail" size={30} style={{ top: 170, left: -90 }} />
                        <Ionicons name="ios-call" size={30} style={{ top: 210, left: -90 }} />
                        <Ionicons name="ios-lock" size={30} style={{ top: 245, left: -90 }} />




                        <TextInput style={styles.input}
                            underlineColorAndroid="transparent"
                            placeholder="Name"
                            placeholderTextColor="black"
                            autoCapitalize="none"
                            disableFullscreenUI={true}
                            value={this.state.name}
                            onEndEditing={() => this.validator('name')}
                            onChangeText={(text) => this.setState({ name: text })}
                        />


                        <Text style={{ top: -5, color: 'red', fontWeight: 'bold' }}>{this.state.nameError}</Text>


                        <TextInput style={styles.input}
                            underlineColorAndroid="transparent"
                            placeholder=" Email-id"
                            placeholderTextColor="black"
                            autoCapitalize="none"
                            keyboardType="email-address"
                            disableFullscreenUI={true}
                            value={this.state.email}
                            onEndEditing={() => this.validator('email')}
                            onChangeText={(text) => this.setState({ email: text })}
                        />
                        <Text style={{ top: -4, color: 'red', fontWeight: 'bold' }}>{this.state.emailError}</Text>


                        <TextInput style={styles.input}
                            underlineColorAndroid="transparent"
                            placeholder=" mobile number"
                            placeholderTextColor="black"
                            autoCapitalize="none"
                            disableFullscreenUI={true}
                            maxLength={10}
                            value={this.state.number}
                            keyboardType='numeric'
                            onEndEditing={() => this.validator('number')}
                            onChangeText={(text) => this.setState({ number: text })}
                        />
                        <Text style={{ top: -4, color: 'red', fontWeight: 'bold' }}>{this.state.numberError}</Text>


                        <TextInput style={styles.input}
                            underlineColorAndroid="transparent"
                            placeholder=" confirm Password"
                            placeholderTextColor="black"
                            secureTextEntry={this.state.showPassword}
                            autoCapitalize="none"
                            value={this.state.password}
                            disableFullscreenUI={true}
                            onEndEditing={() => this.validator('password')}
                            onChangeText={(text) => this.setState({ password: text })}
                        />
                        <MaterialIcons
                            style={styles.icon}
                            name={this.state.icEye}
                            size={30}
                            onPress={this.changePwdType}
                        />
                        <Text style={{ top: -30, color: 'red', fontWeight: 'bold' }}>{this.state.password}</Text>


                        <View style={{ top: -20, backgroundColor: '#3399FF', width: 250, height: 50, borderRadius: 25 }}>
                            <TouchableOpacity style={{ top: 10, left: 80 }} onPress={() => this.register()}>
                                <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 20 }}>Registration</Text>
                            </TouchableOpacity>
                        </View>




                    </SafeAreaView>

                </ScrollView>

            </ImageBackground>

        )


    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        top: -100
    },
    input: {

        width: 250,
        height: 50,
        fontSize: 16,
        fontWeight: 'bold',
        paddingLeft: 70,
        borderWidth: 1,
        color: 'black',
        backgroundColor: 'white',
        opacity: 0.4,
        borderRadius: 25,
    },
    icon:{
        top:-40,
        left:100
    }
})