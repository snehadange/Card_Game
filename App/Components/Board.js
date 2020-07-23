import React from 'react'
import {
    StyleSheet, View, Text, Image,
    ImageBackground, Dimensions, Animated,
} from 'react-native';



const { height, width } = Dimensions.get("window");

import { IconsPath } from '../Assets';

export default class Board extends React.Component {
    constructor(props) {
        super(props)


        this.state = {
            running: true,
            value: 10,
            boot_value: 50,

            tokenAmount: " ",

            slideAnimationDialog: false,
            xValue: new Animated.Value(40),
            fadeAnim: new Animated.Value(1),
            margin: new Animated.Value(80),
            marginright: new Animated.Value(100),
            marginleft: new Animated.Value(80),

        }


    }

    componentDidMount() {


        Animated.timing(this.state.xValue, {
            toValue: -2,
            duration: 1000,

        }).start();

        Animated.timing(this.state.marginright, {
            toValue: -40,
            duration: 1000,

        }).start();

        Animated.timing(this.state.marginleft, {
            toValue: -80,
            duration: 1000,

        }).start();

        Animated.timing(this.state.margin, {
            toValue: -30,
            duration: 1000
        }).start(() => {
            Animated.timing(this.state.fadeAnim, {
                toValue: 0,
                duration: 500
            }).start();
        });

        //  this.setState({
        //    tokenAmount:this.props.one+this.props.two+this.props.three+this.props.four+this.props.five
        //})

    }

    /* updateTableAmountOne=()=>{
        
           this.setState({
             tokenAmount:this.props.one+this.state.tokenAmount
         })
         console.log("Board componet token"+this.state.tokenAmount)
     }
 
     updateTableAmountTwo=()=>{
         this.setState({
           tokenAmount:this.props.two+this.state.tokenAmount
       })
   }
    
   updateTableAmountThree=()=>{
     this.setState({
       tokenAmount:this.props.three+this.state.tokenAmount
   })
 }
 
 updateTableAmountFour=()=>{
     this.setState({
       tokenAmount:this.props.four+this.state.tokenAmount
   })
 }
 
 updateTableAmountFive=()=>{
     this.setState({
       tokenAmount:this.props.five+this.state.tokenAmount
   })
 }*/




    render() {



        return (
            <View>


                <ImageBackground source={IconsPath.pokerTable} style={{

                    width: 400, marginLeft: 160,
                    height: 200, marginTop: -30,

                }} >

                    {this.props.children}

                    {/*   <Text style={{left:170,top:-190,fontSize:20,color:'white'}}>₹{this.state.tokenAmount}</Text>*/}
                    <Image source={IconsPath.coins} style={{ width: 90, height: 50, top: -250, marginLeft: 160 }} />
                </ImageBackground>

                <Animated.View style={{
                    width: 100, height: 30, backgroundColor: 'black', borderRadius: 20,
                    marginTop: -150, marginLeft: 190, right: this.state.marginright, opacity: this.state.fadeAnim
                }}>
                    <Text style={{ color: 'white', paddingLeft: 40 }}>{this.props.one}</Text>
                </Animated.View>

                <Animated.View style={{
                    width: 100, height: 30, backgroundColor: 'black', borderRadius: 20,
                    marginLeft: 460, marginTop: -30, left: this.state.margin, opacity: this.state.fadeAnim
                }}>
                    <Text style={{ color: 'white', paddingLeft: 40 }}>{this.props.two}</Text>
                </Animated.View>

                <Animated.View style={{
                    width: 100, height: 30, backgroundColor: 'black', borderRadius: 20,
                    marginTop: this.state.margin, right: this.state.margin, opacity: this.state.fadeAnim, marginLeft: 190
                }}>
                    <Text style={{ color: 'white', paddingLeft: 40 }}>{this.props.three}</Text>
                </Animated.View>


                <Animated.View style={{
                    width: 100, height: 30, backgroundColor: 'black', borderRadius: 20,
                    marginLeft: 300, marginTop: 20, opacity: this.state.fadeAnim, left: this.state.moveleft
                }}>
                    <Text style={{ color: 'white', paddingLeft: 40 }}>{this.props.four}</Text>
                </Animated.View>

                <Animated.View style={{
                    width: 100, height: 30, backgroundColor: 'black', borderRadius: 20,
                    marginLeft: 500, marginTop: 30, top: this.state.marginleft, left: this.state.marginleft, opacity: this.state.fadeAnim
                }}>
                    <Text style={{ color: 'white', paddingLeft: 40 }}>{this.props.five}</Text>
                </Animated.View>




            </View>

        )
    }

}
