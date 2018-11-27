
import React, {Component} from 'react'
import {
    StyleSheet,
    View,
    FlatList,
    Text,
    Image,
    Button,
    TextInput,
    TouchableOpacity,
    AppRegistry,
    Dimensions,

} from 'react-native'

import {Icon} from 'react-native-elements'

const bottomGutter = 24, marginSize = 2
const width = Dimensions.get('window').widt
const height = Dimensions.get('window').height - bottomGutter



const ImageElement = (props) => (
<View>
  <Image
    style={UsersListStyles .images}
    source={{uri: props.imageUrl}}
  />
  {props.children}
</View>
)

const Button1 = (props) => (
  <TouchableOpacity
    style={[UsersListStyles .button, props.style]}
    onPress={props.onPress}
  >
    <Icon
      name={`chevron-${props.name}`}
      color='white'
      size={50}
    />
  </TouchableOpacity>
)

class Picture extends Component {
  constructor(props) {
    super(props)
    this.state = {
      images: [ this.props.pic1,
                this.props.pic2,
                this.props.pic3,
                this.props.pic4,
              ],
      current: 1
    }
  }

  goLeft = () => {
    this.setState({
      current: this.state.current === 0 ? this.state.images.length - 1 : this.state.current - 1
    })
  }

  goRight = () => {
    this.setState({
      current: this.state.current === this.state.images.length - 1 ? 0 : this.state.current + 1
    })
  }

  render() {
    const image = this.state.images[this.state.current]
    return (
      <View style={UsersListStyles.flex}>
        <ImageElement imageUrl={image}>
          <Button1
            name="left"
            style={{left:0}}
            onPress={this.goLeft}
          />
          <Button1
            name="right"
            style={{right:0}}
            onPress={this.goRight}
          />
        </ImageElement>
     </View>
    );
  }
}


export default class HZ extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this._UsersData,
      page: 0,
      index: 0
    }
  }

  _header = () => (
      <View style={UsersListStyles.header}>
        <Text style={{fontSize: 28,color: '#A39480'}} >Welcome to HangZhou!</Text>
      </View>   
    )

  _footer = () => (
      <View style={UsersListStyles.footer} >
        <Text style={{fontSize: 20,color: '#A39480'}}>In the end!</Text>
      </View>
    )

  _separator = () => (
      <View style={{height: 1, backgroundColor: 'white'}}/>
    )

  _keyExtractor = (item, index) => index

  showDetails = (index) => (
      //alert('login: ' + item.login + '\nname: ' + item.name + '\nblog: ' + item.blog + '\nlocation: ' + item.location )
      this.setState({
        page: 1,
        index: index
      })
    )

  DelItem = (index) => {
    this.state.data.splice(index, 1)
    this.setState({
      data: this.state.data
    })
  }

  goBack = () => {
    this.setState({
      page: 0
    })
  }

  _renderItem = ( {item, index} ) => (
      <View style={UsersListStyles.container}>
        <TouchableOpacity
          activeOpacity={0.5}
          onPress={() => this.showDetails(index)}
          style={{flex: 10}}
        >
          <View style={UsersListStyles.item} >
          

            <Image style={UsersListStyles.avatar} source={{uri: item.pic}}/>
            <View>
            <Text style={{fontSize: 20,color:'orange', textAlign:'auto', includeFontPadding:true}}>{item.name}</Text>
            <Text style={{fontSize: 15}}>{item.address}</Text>
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          activeOpacity={0.5}
          onPress={() => this.DelItem(index)}
          style={{flex: 2}}
        >
          <View style={UsersListStyles.delbutton}>
            <Text style={{fontSize: 18}}>Dislike</Text>
          </View>
        </TouchableOpacity>
      </View>
    )

  _UsersData=[
   {
    name: 'West Lake',
    id: '1',
    pic: 'https://dimg07.c-ctrip.com/images/100v0h00000091vol6690_C_1600_1200_Mtg_7.jpg',//?ͼ
    mark: '4.7 star',
    address: 'Lake of hangzhou west \nlake scenic area',
    price: 'RMB 7',
    tel: '4008780011',
    time: 'open all day',
    
    p1:'https://dimg07.c-ctrip.com/images/fd/tg/g2/M0A/87/3B/Cghzf1WwquGABP4PAAOS3_wfy24829_C_1600_1200_Mtg_7.jpg',
    p2:'https://dimg07.c-ctrip.com/images/fd/tg/g1/M00/7E/9E/CghzfFWw5kCAV4pGAAMLvkL2kSw694_C_1600_1200_Mtg_7.jpg',
    p3:'https://dimg02.c-ctrip.com/images/fd/tg/g1/M0A/67/BA/CghzflWsuTOAHRsyAB40GAEXzmw876_R_1600_10000_Mtg_7.jpg',
    p4:'https://dimg09.c-ctrip.com/images/tg/220/779/066/716f454381f14872b530aca28557e754_R_1600_10000_Mtg_7.jpg',
  },
  {
    name: 'LingYin Temple',
    id: '2',  
    pic: 'https://dimg03.c-ctrip.com/images/fd/tg/g6/M02/FE/94/CggYtFbTnSmAOQrQAAZs5eqH2_4961_R_1600_10000_Mtg_7.jpg',
    mark: '4.5 star',
    address: 'No 1 on LingYin Road \nFayun Lane of \nWest Lake District',
    price: 'RMB 119',
    tel: '0571-87968665',
    time: '7:00-18:15',
    p1: 'https://dimg03.c-ctrip.com/images/fd/tg/g1/M0B/80/F4/CghzfFWxCOKAVvMZAAy7jQn8zH8767_R_1600_10000_Mtg_7.jpg',
    p2: 'https://dimg02.c-ctrip.com/images/fd/tg/g2/M06/8E/4E/CghzgFWxCL6AeMgFABKrkPlBk_k350_R_1600_10000_Mtg_7.jpg',
    p3: 'https://dimg06.c-ctrip.com/images/fd/tg/g4/M0B/1F/22/CggYHlZVVIOAMPOhAC_u-jMAAjQ818_R_1600_10000_Mtg_7.jpg',
    p4: 'https://dimg09.c-ctrip.com/images/tg/680/539/262/8cde4dbc9af14ed48c67d3ffc81d1269_C_1600_1200_Mtg_7.jpg',
  },
  {
    name: 'Songcheng \nscenic spot',
    id: '3',  
    pic: 'https://dimg01.c-ctrip.com/images/tg/754/141/296/8bc71e48345e41fb918e399dcf3ff191_C_1600_1200_Mtg_7.jpg',
    mark: '4.7 star',
    address: 'No 148 on Zhijiang Road\nof West Lake District',
    price: 'RMB 280',
    tel: '0571-87313101',
    time: '9:00-16:00',
    p1: 'https://dimg09.c-ctrip.com/images/tg/088/338/836/470ad44f6192469f86209d5dbc08b9ae_C_1600_1200_Mtg_7.jpg',
    p2: 'https://dimg03.c-ctrip.com/images/tg/621/696/221/2900f53458fe4024ba4b793b3a76c057_C_1600_1200_Mtg_7.jpg',
    p3: 'https://dimg01.c-ctrip.com/images/tg/702/024/429/7bcfcf0a0871414298956c71719a07bf_R_1600_10000_Mtg_7.jpg',
    p4: 'https://dimg02.c-ctrip.com/images/tg/657/535/396/ebeec192538c40a18a05f28f08c5274c_C_1600_1200_Mtg_7.jpg',
  },
  {
    name: 'Zoo of Hangzhou',
    id: '4',  
    pic: 'https://dimg08.c-ctrip.com/images/fd/tg/g4/M0A/B9/46/CggYHlX7adSALmt0AA9JUUzXoMA460_R_1600_10000_Mtg_7.jpg',
    mark: '4.6 star',
    address: 'No 40 on Hupao Road\nof West Lake District',
    price: 'RMB 20',
    tel: '0571-87970657',
    time: '7:00-17:30',
    p1: 'https://dimg06.c-ctrip.com/images/10050k000000b647n6EB8_R_1600_10000_Mtg_7.jpg',
    p2: 'https://dimg03.c-ctrip.com/images/100f0k000000b4ktm0FE0_R_1600_10000_Mtg_7.jpg',
    p3: 'https://dimg08.c-ctrip.com/images/tg/048/958/610/834b6a79a7b64610a5b4285bd4d8356c_C_1600_1200_Mtg_7.jpg',
    p4: 'https://dimg06.c-ctrip.com/images/fd/tg/g6/M08/62/0E/CggYs1cJ6kqAYT5UAAPGw6Ej1Sg669_C_1600_1200_Mtg_7.jpg',
  },
  {
    name: 'Qinghefang',
    id: '5', 
    pic: 'https://dimg01.c-ctrip.com/images/100e0h00000092cds0D20_R_1600_10000_Mtg_7.jpg',
    mark: '4.3 star',
    address: 'No 180 in Hefang Street\nof Shangcheng District',
    price: 'RMB 148',
    tel: '0571-87813477',
    time: '9:30-21:00',
    p1: 'https://dimg06.c-ctrip.com/images/fd/tg/g1/M00/C7/87/CghzflWwsqeAGdW0ABKTU09dY4M625_R_1600_10000_Mtg_7.jpg',
    p2: 'https://dimg07.c-ctrip.com/images/tg/102/613/780/2db014e7086646cf8f6fd8a00f1709a6_R_1600_10000_Mtg_7.jpg',
    p3: 'https://dimg06.c-ctrip.com/images/fd/tg/g1/M04/C7/8D/CghzflWwswGAIiDAABd0X11HmaQ226_R_1600_10000_Mtg_7.jpg',
    p4: 'https://dimg07.c-ctrip.com/images/100a0h00000092btc92ED_R_1600_10000_Mtg_7.jpg',
  },
  {
    name: 'Leifeng Tower',
    id: '6',  
    pic: 'https://dimg07.c-ctrip.com/images/fd/tg/g3/M0A/EF/84/CggYGVbIcumAHxHUAAMmKNSVZuw241_R_1600_10000_Mtg_7.jpg',
    mark: '4.4 star',
    address: 'No 15 on Nanshan Road\nof West Lake District',
    price: 'RMB 82',
    tel: '0571-87982111',
    time: '8:00-17:30(Winter),\n        8:00-20:00(Summer)',
    p1: 'https://dimg07.c-ctrip.com/images/fd/tg/g2/M04/88/4D/CghzgFWwsqGAMTIOAAzhWuEvqDE436_R_1600_10000_Mtg_7.jpg',
    p2: 'https://dimg03.c-ctrip.com/images/fd/tg/g1/M05/C7/88/CghzflWwsruACmqaABigZ1EUfjk285_R_1600_10000_Mtg_7.jpg',
    p3: 'https://dimg09.c-ctrip.com/images/tg/204/187/776/804ba3e55be24839851f90a75c52799b_C_1600_1200_Mtg_7.jpg',
    p4: 'https://dimg03.c-ctrip.com/images/fd/tg/g3/M09/8B/4A/CggYGVbQAB2AE2QDAAMzQosn9XE580_R_10000_1200_Mtg_7.jpg',
  },
  {
    name: 'Chang Qiao \nPolar Ocean Park',
    id: '7',  
    pic: 'https://dimg06.c-ctrip.com/images/fd/tg/g4/M09/AB/E0/CggYHla-BFCAC0QHAAIY7r7K3Kw526_C_1600_1200_Mtg_7.jpg',
    mark: '4.5 star',
    address: 'No 777 on Xianghu \nRoad of Xiaoshan District',
    price: 'RMB 235',
    tel: '0571-82609090',
    time: '9:00-17:00',
    p1: 'https://dimg06.c-ctrip.com/images/tg/569/110/990/72683ac65ed54d4cbdbd28847e384743_C_1600_1200_Mtg_7.jpg',
    p2: 'https://dimg01.c-ctrip.com/images/fd/tg/g1/M01/AE/41/CghzfVSmIFeAKuSkABgRU5O3lhU285_R_1600_10000_Mtg_7.jpg',
    p3: 'https://dimg03.c-ctrip.com/images/tg/295/768/963/a3bc321a5b54497c8938f72b1d433e61_C_1600_1200_Mtg_7.jpg',
    p4: 'https://dimg03.c-ctrip.com/images/tg/247/810/303/49e30dc674fe48d4b2c9cd51a59d4413_C_1600_1200_Mtg_7.jpg',
  },
  {
    name: 'Three pools \nmirroring the moon',
    id: '8',  
    pic: 'https://dimg05.c-ctrip.com/images/10080g0000007rrpq06D5_C_1600_1200_Mtg_7.jpg',
    mark: '4.4 star',
    address: 'Three pools mirroring \nthe moon on West Lake \nof West Lake District',
    price: 'RMB 76',
    tel: '0571-87977638',
    time: '8:00-17:00',
    p1: 'https://dimg07.c-ctrip.com/images/tg/989/803/205/fab8fd04b080453db7e966c00034875e_C_1600_1200_Mtg_7.jpg',
    p2: 'https://dimg05.c-ctrip.com/images/fd/tg/g3/M03/B1/AC/CggYGVbQ-LqAGPwRAAJHhcw2SSs394_C_1600_1200_Mtg_7.jpg',
    p3: 'https://dimg08.c-ctrip.com/images/fd/tg/g4/M0A/28/74/CggYHlbLFXeAWPEdAAFBytUHB8c333_C_1600_1200_Mtg_7.jpg',
    p4: 'https://dimg09.c-ctrip.com/images/fd/tg/g1/M01/79/8B/CghzfVWwqseAT62YAAOoDfp4Y-8813_C_1600_1200_Mtg_7.jpg',
  },
  {
    name: 'Hangzhou Safari Park',
    id: '9',  
    pic: 'https://dimg07.c-ctrip.com/images/tg/530/435/124/ae887a35d62d4cbfa2a44b4c7416f1c9_C_1600_1200_Mtg_7.jpg',
    mark: '4.7 star',
    address: 'No 1 Jiulong Avenue \non Hangfu Road of \nFuyang District',
    price: 'RMB 210',
    tel: '400-102-6688',
    time: '9:30-16:30',
    p1: 'https://dimg03.c-ctrip.com/images/tg/256/954/674/2d856c0fb9dd48f39a4eb7650c1793a6_C_1600_1200_Mtg_7.jpg',
    p2: 'https://dimg07.c-ctrip.com/images/tg/921/845/271/53639a356153444e861844130ef0ff09_C_1600_1200_Mtg_7.jpg',
    p3: 'https://dimg02.c-ctrip.com/images/tg/716/700/454/2932ad5009d741759401dd11db65ffd9_C_1600_1200_Mtg_7.jpg',
    p4: 'https://dimg01.c-ctrip.com/images/fd/tg/g6/M0A/E7/FF/CggYtFbJXwyAGAxRAAWSM4khwEs014_C_1600_1200_Mtg_7.jpg',
  },
  {
    name: 'Xixi National \nWetland Park',
    id: '10', 
    pic: 'https://dimg03.c-ctrip.com/images/tg/081/443/460/e06ade257efd468394352c5682c748ea_R_1600_10000_Mtg_7.jpg',
    mark: '4.5 star',
    address: 'No 518 on Tianmushan Road \nof West Lake District',
    price: 'RMB 70',
    tel: '0571-88106696',
    time: '8:00-18:00',
    p1: 'https://dimg08.c-ctrip.com/images/fd/tg/g1/M06/CA/F4/CghzflWw4kmAQdJTAALsejfqndU453_C_1600_1200_Mtg_7.jpg',
    p2: 'https://dimg03.c-ctrip.com/images/fd/tg/g1/M04/7D/F2/CghzfVWw5kaAQEQ1ABDkOIj-ZIs430_R_1600_10000_Mtg_7.jpg',
    p3: 'https://dimg01.c-ctrip.com/images/tg/237/580/256/e3d3c612818048aeb960ece5abe7f9eb_C_1600_1200_Mtg_7.jpg',
    p4: 'https://dimg02.c-ctrip.com/images/fd/tg/g5/M02/DB/C7/CggYsFbIYWOAJvXTAAH9Lwng4yM999_C_1600_1200_Mtg_7.jpg',
  },
   
]


  render(){
    switch(this.state.page){
      case 0:
      return(
        <View style={{flex: 1}}>

          <FlatList
            data={this.state.data}
            ref={(flatList) => this._flatList = flatList}
            ListHeaderComponent={this._header}
            ListFooterComponent={this._footer}
            ItemSeparatorComponent={this._separator}
            keyExtractor={this._keyExtractor}
            getItemLayout={(data, index) => ( {length: 120, offset: (120 + 1) * index, index} )}
            renderItem={this._renderItem}
          />
        </View>
      )

      case 1:
      return(
        <View style={{flex: 1}}>
          <View style={{height:50, backgroundColor: 'white', 
          flexDirection: 'row', justifyContent: 'center', alignItems: 'center',
           marginTop:5,
           marginLeft:5,
           marginRight:5,
           borderRadius:15
        }}>
            <Text style={{fontSize: 22,color:'#A39480',includeFontPadding:true,textAlign:'auto'}} >{this.state.data[this.state.index].name}</Text>
          </View>

          <TouchableOpacity
            style={UsersListStyles.backbutton}
            onPress={() => this.goBack()}
          >
            <Icon
              name = {'close'}
              color ='grey'
              size = {50}
            />
          </TouchableOpacity>

          <Picture 
          pic1={this.state.data[this.state.index].p1}
          pic2={this.state.data[this.state.index].p2}
          pic3={this.state.data[this.state.index].p3}
          pic4={this.state.data[this.state.index].p4}
          >
          </Picture>
          <View style={{flexDirection: 'column', alignItems: 'center',flex:1}}>
           
            
            <Text style={{fontSize: 18}}>Rank: {this.state.data[this.state.index].id}</Text>
            <Text style={{fontSize: 18}}>Mark: {this.state.data[this.state.index].mark}</Text>
            <Text style={{fontSize: 18}}>Price: {this.state.data[this.state.index].price}</Text>
            <Text style={{fontSize: 18}}>Telphone: {this.state.data[this.state.index].tel}</Text>
            <Text style={{fontSize: 18}}>Open Time: {this.state.data[this.state.index].time}</Text>

          </View>
        </View>
      )
    }
  }


}

const UsersListStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 120,
  },
  flex:{
    flex:2,
  },
  item: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    margin: 2,
    marginTop: 5,
    height: 75,
    backgroundColor: 'rgb(262,238,210)',
    borderRadius:15

  },
  delbutton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 2,
    marginTop: 5,
    height: 75,
    backgroundColor: 'rgb(245,222,179)',
    borderRadius:15
  },
  backbutton: {
    position: 'absolute',
    width: 60,
    height: 60
  },
  header: {
    height: 50,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgb(255,192,203)'
  },
  footer: {
    height: 16,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgb(255,192,203)'
  },
  avatar: {
    width: 100,
    height: 100,
    margin: 20,
    borderRadius:25,
  },
  image: {
    width: 300,
    height: 300,
    margin: 20,
  },

   images: {
    width: width - (2 * marginSize),
    height: height/2 - (2 * marginSize),
    margin: 5,
    borderRadius:50

  },
  button: {
    position: 'absolute',
    width: width / 10,
    height: (height / 10)/2,
    top: 150,
    backgroundColor: 'rgba(150, 150, 150, 0.5)',
    margin: 5,
    alignItems: 'center',
    justifyContent: 'center'
  },
})