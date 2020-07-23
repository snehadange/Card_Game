import React from 'react'
import {
  StyleSheet, View, Text, ImageBackground, Image, FlatList, TouchableOpacity, AsyncStorage, ActivityIndicator
} from 'react-native';
import { IconsPath } from '../Assets';
import Character from '../Components/Explore/Character';
import ModalCoin from '../Components/Explore/ModalCoin';



export default class ProfileScreen extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      DATA: [
        {
          id: 1,
          image: IconsPath.firstavtar,
        },
        {
          id: 2,
          image: IconsPath.secondavtar,
        },
        {
          id: 3,
          image: IconsPath.thirdavtar,
        },
        {
          id: 4,
          image: IconsPath.fouravtar,
        },
        {
          id: 5,
          image: IconsPath.fiveavtar,
        },
        {
          id: 6,
          image: IconsPath.sixavtar,
        },
      ],
      uimg: IconsPath.firstavtar,
      isModalVisible: false,
      showME: true
    }

  }

  componentWillMount() {
    setTimeout(() => {
      this.setState({
        showME: false
      })
    }, 3000)
  }


  getselecteditem = (img) => {
    //alert(img)
    this.setState({
      uimg: img
    })
  }

  submitData = () => {
    const { navigate } = this.props.navigation;
    const { uimg } = this.state;

    AsyncStorage.setItem('imagesArray', uimg);

    navigate('StartScreen', { user: uimg })

  }


  renderItem(item) {
    return (

      <TouchableOpacity onPress={() => this.getselecteditem(item.image)}>
        <Image source={item.image} style={{ width: 80, height: 100, marginTop: 50, borderColor: 'orange', borderWidth: 5, padding: 20 }} />
      </TouchableOpacity>

    )
  }
  render() {


    return (
      <ImageBackground source={IconsPath.back} style={{ width: '100%', height: '100%' }}>

        {this.state.showME ? <ActivityIndicator size="large" color="white" style={{ marginTop: 100 }} /> :
          <View style={styles.container}>
            <View style={styles.container}>

              <FlatList

                horizontal={true}
                data={this.state.DATA}
                renderItem={({ item }) => this.renderItem(item)}
                keyExtractor={(item) => `key-${item.id}`}
              />


            </View>
            <View style={{ marginLeft: 50, top: -20 }}>
              <Character img={this.state.uimg} />
            </View>
            <TouchableOpacity style={{ marginLeft: 450, top: -100, width: 100 }} onPress={this.submitData}>
              <Text style={{ fontSize: 25, fontWeight: 'bold', padding: 10, borderRadius: 10 }}>Submit</Text>
            </TouchableOpacity>

            <ModalCoin />
          </View>}





      </ImageBackground>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})