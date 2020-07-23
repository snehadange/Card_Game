import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ImageBackground,
  Animated,
  Dimensions,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  Image,
} from 'react-native';
import Board from '../Components/Board';
import { IconsPath } from '../Assets';
import { Ionicons } from 'react-native-vector-icons';
import Card from '../Components/Card';
import shuffle from '../Utilis/random';
import Character from '../Components/Explore/Character';
import OptionsGame from '../Components/OptionsGame';


const { height, width } = Dimensions.get('window');
let cards = [1, 2, 3];


export default class App extends React.Component {
  _isMounted = false;
  constructor(props) {
    super(props);

    this.state = {
      play: false,
      order: [],
      uname: 'username',
      userimg: IconsPath.firstavtar,
      playerLastBlindValue: 50,
      playerLastChaalValue: 50,
      isLoading: false,
      turn: 0,
      players: [
        { id: 1, status: true, seen: false, fund: 0, cards: [], moneyValue: '10000', bet: 'Blind', chaalValue: 50 },
        { id: 2, status: true, seen: false, cards: [], moneyValue: '20000', bet: 'Blind', chaalValue: 50 },
        { id: 3, status: true, seen: false, cards: [], moneyValue: '30000', bet: 'Blind', chaalValue: 50 },
        { id: 4, status: true, seen: false, cards: [], moneyValue: '40000', bet: 'Blind', chaalValue: 50 },
        { id: 5, status: true, seen: false, cards: [], moneyValue: '50000', bet: 'Blind', chaalValue: 50 }]
    };

    this.BoardElement = React.createRef();


    this.IncrementItemPlayerOne = this.IncrementItemPlayerOne.bind(this)
    this.IncrementItemPlayerTwo = this.IncrementItemPlayerTwo.bind(this)
    this.IncrementItemPlayerThree = this.IncrementItemPlayerThree.bind(this)
    this.IncrementItemPlayerFour = this.IncrementItemPlayerFour.bind(this)
    this.IncrementItemPlayerFive = this.IncrementItemPlayerFive.bind(this)
  }


  seen = (id) => {

    const { play, players } = this.state;

    let playersNew = players.map((item) => {
      if (item.id == id) {

        item.bet = 'Chaal'

        let a = item.bet


        this.setState({
          a
        })


        return { ...item, seen: true }
      } else {
        return item

      }
    })
    this.setState({
      players: playersNew,

    })

  }

  async componentDidMount() {
    this._isMounted = true;

    const { user } = this.props.route.params;


    this.setState({
      userimg: user
    })

    this.handlingAmount()

    var index = 0;
    this.timer = setInterval(() => {


      if (index == 0) {
        this.setState({
          turn: 1,
        })

        this.handle_betOne()
      } else if (index == 1) {
        this.setState({
          turn: 2
        })
        this.handle_betTwo()
      } else if (index == 2) {
        this.setState({
          turn: 3
        })
        this.handle_betThree()
      } else if (index == 3) {
        this.setState({
          turn: 4
        })
        this.handle_betFour()
      } else if (index == 4) {
        this.setState({
          turn: 5
        })
        this.handle_betFive()
      }
      index = (index + 1) % (this.state.players.length);
    }, 12000)



  }



  handlingAmount = () => {
    let editMoney = [...this.state.players]
    editMoney[0].moneyValue = editMoney[0].moneyValue - 50
    editMoney[1].moneyValue = editMoney[1].moneyValue - 50
    editMoney[2].moneyValue = editMoney[2].moneyValue - 50
    editMoney[3].moneyValue = editMoney[3].moneyValue - 50
    editMoney[4].moneyValue = editMoney[4].moneyValue - 50
    this.setState({
      editMoney
    })


  }
  startPlay = async () => {
    const { play, players } = this.state;
    await this.setState({ play: true });
    var ranNums = shuffle([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52]);

    let playersNew = players.map(item => {

      return {
        ...item, seen: false, cards: [ranNums.next().value, ranNums.next().value,
        ranNums.next().value]

      }


    });

    await this.setState({ players: playersNew })
  }

  stop = () => {
    this.setState({ play: false });
  }

  seen = (id) => {

    const { play, players } = this.state;

    let playersNew = players.map((item) => {
      if (item.id == id) {

        item.bet = 'Chaal'

       this.setState({
           item
        })
       

        return { ...item, seen: true }
      } else {
        return item

      }
    })
    this.setState({
      players: playersNew,

    })

  }


  handle_betOne = () => {
    if (this.state.players[0].bet == 'Blind') {
      let editIndex = [...this.state.players]
      editIndex[0].chaalValue = this.state.playerLastBlindValue
      editIndex[0].moneyValue =  editIndex[0].moneyValue - editIndex[0].chaalValue
      this.setState({
        editIndex,
        playerLastBlindValue: editIndex[0].chaalValue
      })
      
    }else{
      console.log("Hii")
    }

  }



  IncrementItemPlayerOne = () => {

    let editIndexplayerOne = [...this.state.players]

    editIndexplayerOne[0].chaalValue = editIndexplayerOne[0].chaalValue * 2
    editIndexplayerOne[0].moneyValue = editIndexplayerOne[0].moneyValue - editIndexplayerOne[0].chaalValue
    this.setState({
      editIndexplayerOne,
    })
    if (this.state.players[0].bet == 'Blind') {
      this.setState({
        playerLastBlindValue: editIndexplayerOne[0].chaalValue
      })

    }

  }

  handle_betTwo = () => {
    if (this.state.players[1].bet == 'Blind') {
      let editIndex = [...this.state.players]
      editIndex[1].chaalValue = this.state.playerLastBlindValue
      editIndex[1].moneyValue =  editIndex[1].moneyValue - editIndex[1].chaalValue
      this.setState({
        editIndex,
        playerLastBlindValue: editIndex[1].chaalValue
      })
      
    }

  }

  handle_betThree = () => {
    if (this.state.players[2].bet == 'Blind') {
      let editIndex = [...this.state.players]
      editIndex[2].chaalValue = this.state.playerLastBlindValue
      editIndex[2].moneyValue =  editIndex[2].moneyValue - editIndex[2].chaalValue
      this.setState({
        editIndex,
        playerLastBlindValue: editIndex[2].chaalValue
      })
      
    }

  }

  handle_betFour = () => {
    if (this.state.players[3].bet == 'Blind') {
      let editIndex = [...this.state.players]
      editIndex[3].chaalValue = this.state.playerLastBlindValue
      editIndex[3].moneyValue =  editIndex[3].moneyValue - editIndex[3].chaalValue
      this.setState({
        editIndex,
        playerLastBlindValue: editIndex[3].chaalValue
      })
      
    }

  }


  handle_betFive = () => {
    if (this.state.players[4].bet == 'Blind') {
      let editIndex = [...this.state.players]
      editIndex[4].chaalValue = this.state.playerLastBlindValue
      editIndex[4].moneyValue =  editIndex[4].moneyValue - editIndex[4].chaalValue
      this.setState({
        editIndex,
        playerLastBlindValue: editIndex[4].chaalValue
      })
      
    }

  }





  IncrementItemPlayerTwo = () => {

    let editIndexplayerTwo = [...this.state.players]

    editIndexplayerTwo[1].chaalValue = editIndexplayerTwo[1].chaalValue * 2
 

    this.setState({
      editIndexplayerTwo,

    })
    if (this.state.players[1].bet == 'Blind') {
      this.setState({
        playerLastBlindValue: editIndexplayerTwo[1].chaalValue
      })

    }
  }
    
  



  IncrementItemPlayerThree = () => {
    let editIndexplayerThree = [...this.state.players]

    editIndexplayerThree[2].chaalValue = editIndexplayerThree[2].chaalValue * 2
  
    this.setState({
      editIndexplayerThree,

    })
    if (this.state.players[2].bet == 'Blind') {
      this.setState({
        playerLastBlindValue: editIndexplayerThree[2].chaalValue
      })
    }
  }



  IncrementItemPlayerFour = () => {
    let editIndexplayerFour = [...this.state.players]

    editIndexplayerFour[3].chaalValue = editIndexplayerFour[3].chaalValue * 2
 
    this.setState({
      editIndexplayerFour,

    })
    if (this.state.players[3].bet == 'Blind') {
      this.setState({
        playerLastBlindValue: editIndexplayerFour[3].chaalValue
      })
    }
  }



  IncrementItemPlayerFive = () => {
    let editIndexplayerFive = [...this.state.players]

    editIndexplayerFive[4].chaalValue = editIndexplayerFive[4].chaalValue * 2
    
    this.setState({
      editIndexplayerFive

    })
    if (this.state.players[4].bet == 'Blind') {
      this.setState({
        playerLastBlindValue: editIndexplayerFive[4].chaalValue
      })
    }
  }





  DecreaseItem = () => {
    editplayerOne = [...this.state.players]

    if (editplayerOne[0] == 0) {
      this.setState({
        editplayerOne: 0
      });
    } else {
      editplayerOne[0].chaalValue = editplayerOne[0].chaalValue - 1
      this.setState({
        editplayerOne
      });
    }
  }





  show_bet = (index) => {
    this.seen(this.state.players[index].id)
  }




  render() {
    const { play, players } = this.state;

    return (

      <View>
        <StatusBar barStyle="dark-content" />

        <SafeAreaView>
          {!play ? (
            <ImageBackground source={IconsPath.back} style={{
              width: '100%',
              height: '100%',
            }}>

              <View style={{ top: 200 }}>
                <Character img={this.state.userimg} />
                <Text style={{ color: 'white' }}>{players[3].moneyValue}</Text>
              </View>
              <TouchableOpacity style={{ top: -140 }}>
                <Ionicons name="ios-settings" color="white" size={50} />
              </TouchableOpacity>
              <View style={styles.play}>
                <TouchableOpacity onPress={this.startPlay}>
                  <Text style={styles.start}>Play Game</Text>
                </TouchableOpacity>
              </View>

            </ImageBackground>
          ) : (


              <ImageBackground
                source={IconsPath.back}

                style={{
                  width: '100%',
                  height: '100%',
                }}>

                <TouchableOpacity onPress={this.stop} >
                  <Image source={IconsPath.backbutton} style={{ marginLeft: 20, width: 50, height: 60, marginTop: 10 }} />
                </TouchableOpacity>



                <Board ref={this.BoardElement} one={this.state.players[0].chaalValue} two={players[1].chaalValue}
                  three={players[2].chaalValue} four={players[3].chaalValue} five={players[4].chaalValue}>

                  <View style={{ flexDirection: "row" }} >

                    {/*Player 1 */}
                    <View style={{
                      width: 70, height: 100,
                      backgroundColor: 'black',
                      backgroundColor: this.state.turn == 1 ? 'white' : 'black',
                      opacity: 0.7,
                      marginTop: -10, left: -30,
                      borderColor: 'orange', borderWidth: 3
                    }} />

                    <View style={{ flexDirection: 'column', marginLeft: -100, marginTop: -10, alignItems: 'center' }}>
                      <Text style={{ color: 'black', fontWeight: 'bold' }}>{players[0].bet}</Text>
                      <Image source={IconsPath.firstavtar} style={{ width: 70, height: 60, }} />
                      <Text style={{ color: 'black', fontWeight: 'bold' }}>{players[0].moneyValue}₹</Text>
                    </View>

                    <View style={{ flexDirection: 'row', marginTop: -20, marginLeft: 10 }}>

                      {players[0].status && players[0].cards.map((item, index) => (
                        <Card
                          key={index}
                          onPress={() => this.state.turn == 1 ? this.show_bet(0) : console.warn('Please select your own cards')}
                          status={players[0].seen}
                          number={item}
                        />

                      ))}

                    </View>

                    {/**Player 2 */}
                    <View style={{
                      width: 80, height: 100,
                      backgroundColor: this.state.turn == 2 ? 'white' : 'black',
                      opacity: 0.7, top: -10, left: 250, borderColor: 'orange', borderWidth: 3
                    }} />

                    <View style={{ flexDirection: 'column', marginLeft: 175, alignItems: 'center', top: -10 }}>
                      <Text style={{ color: 'black', fontWeight: 'bold' }}>{players[1].bet}</Text>
                      <Image source={IconsPath.secondavtar} style={{ width: 70, height: 60 }} />
                      <Text style={{ color: 'black', fontWeight: 'bold' }}>{players[1].moneyValue}₹</Text>
                    </View>

                    <View style={{ flexDirection: 'row', marginTop: -20, left: -140 }}>
                      {players[1].status && players[1].cards.map((item, index) => (
                        <Card
                          key={index}
                          // onPress={()=>this.handler_bet(1)}
                          onPress={() => this.state.turn == 2 ? this.show_bet(1) : console.warn('error')}
                          status={players[1].seen} s
                          number={item}
                        />
                      ))}
                    </View>

                    {/**Player 5 */}
                    <View style={{
                      width: 80, height: 100,
                      backgroundColor: this.state.turn == 5 ? 'white' : 'black',
                      opacity: 0.7,
                      marginTop: 130, marginLeft: -570,
                      borderColor: 'orange', borderWidth: 3
                    }} />

                    <View style={{ flexDirection: 'column', marginLeft: -75, alignItems: 'center', top: 130 }}>
                      <Text style={{ color: 'black', fontWeight: 'bold' }}>{players[4].bet}</Text>
                      <Image source={IconsPath.thirdavtar} style={{ width: 70, height: 60 }} />
                      <Text style={{ color: 'black', fontWeight: 'bold' }}>{players[4].moneyValue}₹</Text>
                    </View>

                    <View style={{ flexDirection: 'row', marginTop: 90, left: 10 }}>
                      {players[4].status && players[4].cards.map((item, index) => (
                        <Card
                          key={index}
                          onPress={() => this.state.turn == 5 ? this.show_bet(4) : console.warn('error')}
                          status={players[4].seen}
                          number={item}
                        />
                      ))}

                    </View>

                    {/**Player 4 */}
                    <View style={{
                      width: 150, height: 100,
                      backgroundColor: this.state.turn == 4 ? 'white' : 'black',
                      opacity: 0.7,
                      marginTop: 150, marginLeft: 10, borderColor: 'orange', borderWidth: 3
                    }} />

                    <View style={{ flexDirection: 'column', marginLeft: -70, alignItems: 'center', top: 150 }}>
                      <Text style={{ color: 'black', fontWeight: 'bold' }}>{players[3].bet}</Text>
                      <Image source={IconsPath.fouravtar} style={{ width: 70, height: 60 }} />
                      <Text style={{ color: 'black', fontWeight: 'bold' }}>{players[3].moneyValue}₹</Text>
                    </View>

                    <View style={{ flexDirection: 'row', marginTop: 120, left: -130 }}>
                      {players[3].status && players[3].cards.map((item, index) => (
                        <Card
                          key={index}
                          onPress={() => this.state.turn == 4 ? this.show_bet(3) : console.warn('error')}
                          status={players[3].seen}
                          number={item}
                        />
                      ))}
                    </View>


                    {/**Player 3 */}
                    <View style={
                      {
                        width: 80, height: 100,
                        backgroundColor: 'black',
                        opacity: 0.7,
                        backgroundColor: this.state.turn == 3 ? 'white' : 'black', opacity: 0.7,
                        marginTop: 140, marginLeft: -10, borderColor: 'orange', borderWidth: 3
                      }} />

                    <View style={{ flexDirection: 'column', marginTop: 140, marginLeft: -70, alignItems: 'center' }}>
                      <Text style={{ color: 'black', fontWeight: 'bold' }}>{players[2].bet}</Text>
                      <Image source={IconsPath.fiveavtar} style={{ width: 70, height: 60 }} />
                      <Text style={{ color: 'black', fontWeight: 'bold' }}>{players[2].moneyValue}₹</Text>
                    </View>
                    <View style={{ flexDirection: 'row', marginTop: 100, left: -130 }}>
                      {players[2].status && players[2].cards.map((item, index) => (
                        <Card
                          key={index}
                          onPress={() => this.state.turn == 3 ? this.show_bet(2) : console.warn('error')}
                          status={players[2].seen}
                          number={item}
                        />
                      ))}

                    </View>


                  </View>

                </Board>
                {this.state.players.map((item,index)=>{
                  <OptionsGame
                  />
                })}
                <OptionsGame

                  turnvalue={this.state.turn} actionaddone={this.IncrementItemPlayerOne}
                  playersData={this.state.players}
                  actionaddtwo={this.IncrementItemPlayerTwo}
                  actionaddthree={this.IncrementItemPlayerThree} actionaddfour={this.IncrementItemPlayerFour}
                  actionaddfive={this.IncrementItemPlayerFive}
                  actionMinus={this.DecreaseItem} handler={this.handle}
                 />



              </ImageBackground>

            )}

        </SafeAreaView>
      </View>


    );
  }
}


const styles = StyleSheet.create({
  play: {
    top: -60,
    marginLeft: 300,
    width: '100%',
    height: '100%',
  },
  start: {
    fontSize: 30,
    fontWeight: '700',
    color: 'white'
  },
  square: {
    width: 60, height: 100,
    backgroundColor: 'black',
    opacity: 0.7
  }

});
