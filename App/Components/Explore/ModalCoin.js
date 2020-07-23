import React from 'react'
import {
    StyleSheet, View, Text, Image, FlatList, TouchableOpacity, Modal,TouchableWithoutFeedback
} from 'react-native';
import { AntDesign } from 'react-native-vector-icons';
import { IconsPath } from '../../Assets';
import { RFC_2822 } from 'moment';


const reward_data = [
    {
        id: 1,
        day:'Today',
        coins:' ₹200',
        image: IconsPath.coins
    },
    {
        id: 2,
        day:'Day 2',
        coins: '₹400',
        image: IconsPath.coins
    },
    {
        id: 3,
        day:'Day 3',
        coins: '₹600',
        image: IconsPath.coins
    },
    {
        id: 4,
        day:'Day 4',
        coins: '₹800',
        image: IconsPath.coins
    },
]

export default class ModalCoin extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            show: true,


        }
    }

    closeModal = () => {
        this.setState({
            show: false
        })
    }
    renderItem(item) {
        return (
            
            <TouchableOpacity >
               
            <View style={{
                      width: 90, height: 130,
                      backgroundColor:'white',
                      borderColor: 'white', borderWidth: 1,marginLeft:10
                    }} >
                <Text style={{color:'black',left:25 }}>{item.day}</Text>
                <Image source={item.image} style={{ width: 40, height: 50,left:20 }} />
                <TouchableWithoutFeedback >
                <Text style={{color:'white',backgroundColor:"#DAA520",width:50,marginLeft:10,paddingLeft:10}}>{item.coins}</Text>
                </TouchableWithoutFeedback>
                </View>
            </TouchableOpacity>

        )
    }

    render() {
        return (
            <Modal
                transparent={true}
                visible={this.state.show}>

                <View style={{ backgroundColor: "black", flex: 1, marginLeft: 150, marginRight: 100, marginTop: 20, marginBottom: 100 }}>
                    <TouchableOpacity onPress={this.closeModal}>
                       <Text style={{color:'white',marginLeft:200}}>Daily Bonas</Text>
                        <AntDesign name='closecircle' size={27} style={{ marginLeft: 430, top: -30 }} color="white"/>
                    </TouchableOpacity >
                    <View style={{ backgroundColor: "black", marginLeft:30}}>

                        <FlatList
                            horizontal={true}
                            data={reward_data}
                            renderItem={({ item }) => this.renderItem(item)}
                            keyExtractor = {(item) => `key-${item.id}`}
                        />

                    </View>

                </View>
            </Modal>
        )
    }
}
