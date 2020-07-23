import React from "react";
import { View, Image, TouchableOpacity, Text, Dimensions, Animated,ImageBackground} from "react-native";
import { IconsPath } from '../Assets';

const { height, width } = Dimensions.get("window");



export default class Card extends React.Component {
  constructor(props) {
    super(props)
    
    this.state = { 
      margin : new Animated.Value(100),
      isLoading:false
    }
  }

  

  
 

componentDidMount(){
  Animated.timing(this.state.margin, {
    toValue: 0,
    duration: 500
  }).start()
  
 
} 



  render() {
    
   const { status,number} = this.props;
   
   
    return (
     
      <View >
       
          {status? <TouchableOpacity  style={{ marginLeft:-15,transform:[{rotate:'9deg'}]}} onPress={()=>this.props.onPress()} >
            
            <Animated.Image resizeMode="contain" source={IconsPath[number]}
              style={{ width: 40, height: 150, borderRadius: 3, marginTop: this.state.margin, marginLeft:this.state.margin,   }} />
          </TouchableOpacity> :
           <TouchableOpacity  style={{ marginLeft: -15,transform:[{rotate:'9deg'}]}} onPress={()=>this.props.onPress()} >
            <Animated.Image resizeMode="contain" source={IconsPath.cardBackground} onLoadStart={(e) => this.setState({isLoading: true})}
              style={{ width: 40, height: 150, borderRadius: 3, marginTop: this.state.margin, marginLeft:this.state.margin,  }} />
          </TouchableOpacity>}
      </View>
     
    )
  }
}