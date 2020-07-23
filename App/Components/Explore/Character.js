import React from 'react'
import {
   View, Text,Image, ScrollView,AsyncStorage
} from 'react-native';
import { IconsPath } from '../../Assets';

export default class Character extends React.Component{
    constructor(props){
       super(props)
      this.state={
        uservalue:'username',
       }
    }

    async componentDidMount(){
        const value= await AsyncStorage.getItem('username')
       
        const tokenValue =await AsyncStorage.getItem('tokenKey')
        console.log("tokenValue of login user:",tokenValue)    


        this.setState({
            uservalue:value,
         
        })
    }

    render(){
        

        return( 
       
              <View style={{
                      width: 80, height: 130,
                      backgroundColor:'black',
                      borderColor: 'white', borderWidth: 1
                    }} >
          
                   <Image source={this.props.img} style={{width:80,height:100,top:1,borderColor:'orange',borderWidth:5}}/> 
                  
                    <Text style={{color:'white',top:1,paddingLeft:10}}>{this.state.uservalue}</Text>
            </View> 
        )
    }
}