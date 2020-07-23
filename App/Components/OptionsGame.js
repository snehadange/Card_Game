import React from 'react'
import { StyleSheet, View, TouchableOpacity, Text, Image, Animated } from 'react-native'
import { IconsPath } from '../Assets';



export default class OptionsGame extends React.Component {
    constructor(props){
      super(props)
      
      this.state = {
        xValue: new Animated.Value(20),
        option_imgOne: IconsPath.blind,
        option_img: IconsPath.blind,
     
        marginright: new Animated.Value(100),
        fadeAnim: new Animated.Value(1),
        tokenAmount:''
      }
    
    }
   

    async componentDidMount() {
      
        Animated.timing(this.state.xValue, {
            toValue: 40,
            duration: 1000,

        }).start();
        
        this.setState({
           tokenAmount:this.props.playersData[0].chaalValue+this.props.playersData[1].chaalValue+
           this.props.playersData[2].chaalValue+this.props.playersData[3].chaalValue+this.props.playersData[4].chaalValue
        })
        
       
    }

 

    
  

    
    _handleChaalOne = () => {
   
       
        this.state.fadeAnim.setValue(1)
        this.state.marginright.setValue(70)
        Animated.timing(this.state.marginright, {
            toValue: -200,
            duration: 1500
        }).start(() => {
            ; Animated.timing(this.state.fadeAnim, {
                toValue: 0,
                duration: 500
            }).start();
        });
       this.setState({
           tokenAmount:this.state.tokenAmount+this.props.playersData[0].chaalValue
       })
    }

    _handleChaalTwo = () => {
   
       
        this.state.fadeAnim.setValue(1)
        this.state.marginright.setValue(70)
        Animated.timing(this.state.marginright, {
            toValue: -200,
            duration: 1500
        }).start(() => {
            ; Animated.timing(this.state.fadeAnim, {
                toValue: 0,
                duration: 500
            }).start();
        });
       this.setState({
           tokenAmount:this.state.tokenAmount+this.props.playersData[1].chaalValue
       })
    }

    _handleChaalThree= () => {
        
        this.state.fadeAnim.setValue(1)
        this.state.marginright.setValue(70)
        Animated.timing(this.state.marginright, {
            toValue: -200,
            duration: 1500
        }).start(() => {
            ; Animated.timing(this.state.fadeAnim, {
                toValue: 0,
                duration: 500
            }).start();
        });
       this.setState({
           tokenAmount:this.state.tokenAmount+this.props.playersData[2].chaalValue
       })
    }


    _handleChaalFour = () => {
       
       
        this.state.fadeAnim.setValue(1)
        this.state.marginright.setValue(70)
        Animated.timing(this.state.marginright, {
            toValue: -200,
            duration: 1500
        }).start(() => {
            ; Animated.timing(this.state.fadeAnim, {
                toValue: 0,
                duration: 500
            }).start();
        });
       this.setState({
           tokenAmount:this.state.tokenAmount+this.props.playersData[3].chaalValue
       })
    }


    _handleChaalFive = () => {
      
        this.state.fadeAnim.setValue(1)
        this.state.marginright.setValue(70)
        Animated.timing(this.state.marginright, {
            toValue: -200,
            duration: 1500
        }).start(() => {
            ; Animated.timing(this.state.fadeAnim, {
                toValue: 0,
                duration: 500
            }).start();
        });
       this.setState({
           tokenAmount:this.state.tokenAmount+this.props.playersData[4].chaalValue
       })
    }


   

   

    render() {
       
        return (
            <View >
               <Text style={{left:330,top:-110,fontSize:20,color:'white'}}>₹{this.state.tokenAmount}</Text>
                  {/**Player 1*/}
              {this.props.turnvalue == 1 ?
               <Animated.View style={{ flexDirection: 'row', top: this.state.xValue,left:150}}>
                 
                    {/**Pack Button*/}
                    <TouchableOpacity>
                        <Image source={IconsPath.pack} style={{ width: 100, height: 30 }} />
                    </TouchableOpacity>

                    {/**Less Button */}
                    <TouchableOpacity onPress={this.props.actionMinus}>
                        <Image source={IconsPath.less} style={{ width: 30, height: 30 }} />
                    </TouchableOpacity>


                    {/**Chaal Value*/}
                    <View style={{
                        height: 28, borderWidth: 1, alignItems: 'center', justifyContent: 'center',
                        width: 120, backgroundColor: 'white', color: 'black'
                    }}>

                        <Text style={{ fontWeight: 'bold' }}>{this.props.playersData[0].chaalValue}</Text></View>


                    {/**add Button */}
                    <TouchableOpacity onPress={this.props.actionaddone}>
                        <Image source={IconsPath.add} style={{ width: 30, height: 30 }} />
                    </TouchableOpacity>


                    {/**Chaal/Blind Button*/}
                    <TouchableOpacity style={{
                        height: 28, borderWidth: 1, alignItems: 'center', justifyContent: 'center',
                        width: 120, backgroundColor: 'white', color: 'black'
                    }} onPress={()=>this._handleChaalOne()}>

                        <Text style={{ fontWeight: 'bold' }}>{this.props.playersData[0].bet}</Text>
                        </TouchableOpacity>

                </Animated.View>:null}
                
              
              
                {this.props.turnvalue == 2 ?
               <Animated.View style={{ flexDirection: 'row', top: this.state.xValue,left:150}}>
                 
                    {/**Pack Button*/}
                    <TouchableOpacity>
                        <Image source={IconsPath.pack} style={{ width: 100, height: 30 }} />
                    </TouchableOpacity>

                    {/**Less Button */}
                    <TouchableOpacity onPress={this.props.actionMinus}>
                        <Image source={IconsPath.less} style={{ width: 30, height: 30 }} />
                    </TouchableOpacity>


                    {/**Chaal Value*/}
                    <View style={{
                        height: 28, borderWidth: 1, alignItems: 'center', justifyContent: 'center',
                        width: 120, backgroundColor: 'white', color: 'black'
                    }}>

                        <Text style={{ fontWeight: 'bold' }}>{this.props.playersData[1].chaalValue}</Text></View>


                    {/**add Button */}
                    <TouchableOpacity onPress={this.props.actionaddtwo}>
                        <Image source={IconsPath.add} style={{ width: 30, height: 30 }} />
                    </TouchableOpacity>


                    {/**Chaal/Blind Button*/}
                    <TouchableOpacity style={{
                        height: 28, borderWidth: 1, alignItems: 'center', justifyContent: 'center',
                        width: 120, backgroundColor: 'white', color: 'black'
                    }} onPress={()=>this._handleChaalTwo()}>

                        <Text style={{ fontWeight: 'bold' }}>{this.props.playersData[1].bet}</Text>
                        </TouchableOpacity>
                </Animated.View>:null}


              
              
                {this.props.turnvalue == 3 ?
               <Animated.View style={{ flexDirection: 'row', top: this.state.xValue,left:150}}>
                 
                    {/**Pack Button*/}
                    <TouchableOpacity>
                        <Image source={IconsPath.pack} style={{ width: 100, height: 30 }} />
                    </TouchableOpacity>

                    {/**Less Button */}
                    <TouchableOpacity onPress={this.props.actionMinus}>
                        <Image source={IconsPath.less} style={{ width: 30, height: 30 }} />
                    </TouchableOpacity>


                    {/**Chaal Value*/}
                    <View style={{
                        height: 28, borderWidth: 1, alignItems: 'center', justifyContent: 'center',
                        width: 120, backgroundColor: 'white', color: 'black'
                    }}>

                        <Text style={{ fontWeight: 'bold' }}>{this.props.playersData[2].chaalValue}</Text></View>


                    {/**add Button */}
                    <TouchableOpacity onPress={this.props.actionaddthree}>
                        <Image source={IconsPath.add} style={{ width: 30, height: 30 }} />
                    </TouchableOpacity>


                    {/**Chaal/Blind Button*/}
                    <TouchableOpacity style={{
                        height: 28, borderWidth: 1, alignItems: 'center', justifyContent: 'center',
                        width: 120, backgroundColor: 'white', color: 'black'
                    }} onPress={()=>this._handleChaalThree()}>

                        <Text style={{ fontWeight: 'bold' }}>{this.props.playersData[2].bet}</Text>
                        </TouchableOpacity>
                </Animated.View>:null}

               
               
                {this.props.turnvalue == 4 ?
               <Animated.View style={{ flexDirection: 'row', top: this.state.xValue,left:150}}>
                 
                    {/**Pack Button*/}
                    <TouchableOpacity>
                        <Image source={IconsPath.pack} style={{ width: 100, height: 30 }} />
                    </TouchableOpacity>

                    {/**Less Button */}
                    <TouchableOpacity onPress={this.props.actionMinus}>
                        <Image source={IconsPath.less} style={{ width: 30, height: 30 }} />
                    </TouchableOpacity>


                    {/**Chaal Value*/}
                    <View style={{
                        height: 28, borderWidth: 1, alignItems: 'center', justifyContent: 'center',
                        width: 120, backgroundColor: 'white', color: 'black'
                    }}>

                        <Text style={{ fontWeight: 'bold' }}>{this.props.playersData[3].chaalValue}</Text></View>


                    {/**add Button */}
                    <TouchableOpacity onPress={this.props.actionaddfour}>
                        <Image source={IconsPath.add} style={{ width: 30, height: 30 }} />
                    </TouchableOpacity>


                    {/**Chaal/Blind Button*/}
                    <TouchableOpacity style={{
                        height: 28, borderWidth: 1, alignItems: 'center', justifyContent: 'center',
                        width: 120, backgroundColor: 'white', color: 'black'
                    }} onPress={()=>this._handleChaalFour()}>

                        <Text style={{ fontWeight: 'bold' }}>{this.props.playersData[3].bet}</Text>
                        </TouchableOpacity>
                </Animated.View>:null}
              
             
              




                {this.props.turnvalue == 5 ?
               <Animated.View style={{ flexDirection: 'row', top: this.state.xValue,left:150}}>
                 
                    {/**Pack Button*/}
                    <TouchableOpacity>
                        <Image source={IconsPath.pack} style={{ width: 100, height: 30 }} />
                    </TouchableOpacity>

                    {/**Less Button */}
                    <TouchableOpacity onPress={this.props.actionMinus}>
                        <Image source={IconsPath.less} style={{ width: 30, height: 30 }} />
                    </TouchableOpacity>


                    {/**Chaal Value*/}
                    <TouchableOpacity style={{
                        height: 28, borderWidth: 1, alignItems: 'center', justifyContent: 'center',
                        width: 120, backgroundColor: 'white', color: 'black'
                    }}>

                        <Text style={{ fontWeight: 'bold' }}>{this.props.playersData[4].chaalValue}</Text></TouchableOpacity>


                    {/**add Button */}
                    <TouchableOpacity onPress={this.props.actionaddfive}>
                        <Image source={IconsPath.add} style={{ width: 30, height: 30 }} />
                    </TouchableOpacity >


                    {/**Chaal/Blind Button*/}
                    <TouchableOpacity style={{
                        height: 28, borderWidth: 1, alignItems: 'center', justifyContent: 'center',
                        width: 120, backgroundColor: 'white', color: 'black'
                    }} onPress={()=>this._handleChaalFive()}>

                        <Text style={{ fontWeight: 'bold' }}>{this.props.playersData[4].bet}</Text>
                        </TouchableOpacity>
                </Animated.View>:null}
         


                      
               {this.props.turnvalue == 1 ? <Animated.View style={{
                    backgroundColor: "black", width: 100, height: 30, borderRadius: 20,
                    alignItems: 'center', opacity: this.state.fadeAnim, top: this.state.marginright,
                    marginTop:80,left:300 
                }}>
                  <Text style={{ color: 'white' }}>{this.props.playersData[0].chaalValue}</Text>
                </Animated.View>:  this.props.turnvalue == 2 ? <Animated.View style={{
                    backgroundColor: "black", width: 100, height: 30, borderRadius: 20,
                    alignItems: 'center', opacity: this.state.fadeAnim, top: this.state.marginright,
                    marginTop:80,left:300 
                }}>
                  <Text style={{ color: 'white' }}>{this.props.playersData[1].chaalValue}</Text>
                </Animated.View>:  this.props.turnvalue == 3 ? <Animated.View style={{
                    backgroundColor: "black", width: 100, height: 30, borderRadius: 20,
                    alignItems: 'center', opacity: this.state.fadeAnim, top: this.state.marginright,
                    marginTop:80,left:300 
                }}>
                  <Text style={{ color: 'white' }}>{this.props.playersData[2].chaalValue}</Text>
                </Animated.View>: this.props.turnvalue == 4 ? <Animated.View style={{
                    backgroundColor: "black", width: 100, height: 30, borderRadius: 20,
                    alignItems: 'center', opacity: this.state.fadeAnim, top: this.state.marginright,
                    marginTop:80,left:300 
                }}>
                  <Text style={{ color: 'white' }}>{this.props.playersData[3].chaalValue}</Text>
                </Animated.View>:this.props.turnvalue == 5 ? <Animated.View style={{
                    backgroundColor: "black", width: 100, height: 30, borderRadius: 20,
                    alignItems: 'center', opacity: this.state.fadeAnim, top: this.state.marginright,
                    marginTop:80,left:300 
                }}>
                  <Text style={{ color: 'white' }}>{this.props.playersData[4].chaalValue}</Text>
                </Animated.View>:null}


              
              
            </View>
        )
    }
}