
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


export default class XM extends Component {
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
        <Text style={{fontSize: 28,color: '#A39480'}} >Welcome to XiaMen!</Text>
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
    name: 'Kulangsu',
    id: '1',  //排名
    pic: 'https://dimg05.c-ctrip.com/images/fd/tg/g3/M01/F7/4B/CggYGlYBGgSAHV55ABimumb0Nmw520_R_1600_10000_Mtg_7.jpg',
    mark: '4.4 star',
    address: 'Kulangsu of \nSiming District',
    price: 'RMB 100',
    tel: '0592-2060777',
    time: 'open all day',
    p1: 'https://dimg09.c-ctrip.com/images/fd/tg/g4/M06/0C/65/CggYHFYBGfGAddIyABTn8RSDZvU570_R_1600_10000_Mtg_7.jpg',
    p2: 'https://dimg06.c-ctrip.com/images/tg/657/857/995/61af13258d0c40a1a0f95670d01d3f1d_R_1600_10000_Mtg_7.jpg',
    p3: 'https://dimg01.c-ctrip.com/images/tg/005/964/459/95e7f185b4ad4578966061d06aaefe8b_R_1600_10000_Mtg_7.jpg',
    p4: 'https://dimg02.c-ctrip.com/images/tg/751/327/402/598fcec14b3c41f2819ac50d20156302_C_1600_1200_Mtg_7.jpg',
  },
  {
    name: 'Xiamen University',
    id: '2',  //排名
    pic: 'https://dimg09.c-ctrip.com/images/fd/tg/g3/M02/62/93/CggYGVX45_qAAASLABNoVZUVZTM247_R_1600_10000_Mtg_7.jpg',
    mark: '4.5 star',
    address: 'No 422 on Siming South \nRoad of Siming District',
    price: 'free',
    tel: '0592-2180000',
    time: 'open all day on weekends',
    p1: 'https://dimg07.c-ctrip.com/images/fd/tg/g3/M03/62/31/CggYG1X45myAcZGfABpfw9ARJkE170_R_1600_10000_Mtg_7.jpg',
    p2: 'https://dimg02.c-ctrip.com/images/fd/tg/g1/M06/A7/8C/CghzfVWnbiGANUxvAB5PUAufIWc514_R_1600_10000_Mtg_7.jpg',
    p3: 'https://dimg07.c-ctrip.com/images/fd/tg/g4/M00/65/46/CggYHlYzMjWAPYhQAB7YEi7_uvI413_R_1600_10000_Mtg_7.jpg',
    p4: 'https://dimg08.c-ctrip.com/images/tg/970/723/188/fcf8e26f24f044fbbfa206b5a94f3b23_C_1600_1200_Mtg_7.jpg',
  },
  {
    name: 'Island Ring Boulevard',
    id: '3',  //排名
    pic: 'https://dimg05.c-ctrip.com/images/tg/702/643/083/6ac3cabcddeb4143a0a80ceb0c368b41_R_1600_10000_Mtg_7.jpg',
    mark: '4.7 star',
    address: 'Island Ring Boulevard \nof Siming District',
    price: 'RMB 6',
    tel: '0592-2565087',
    time: 'open all day',
    p1: 'https://dimg02.c-ctrip.com/images/fd/tg/g2/M02/B3/D0/CghzgVWnbaiADDJOABXG1_eDCKQ172_R_1600_10000_Mtg_7.jpg',
    p2: 'https://dimg06.c-ctrip.com/images/fd/tg/g2/M01/B4/61/CghzgFWnbJGAGH8NABv8T8Mto60309_R_1600_10000_Mtg_7.jpg',
    p3: 'https://dimg09.c-ctrip.com/images/fd/tg/g1/M0B/A7/85/CghzfVWnbamAB2kRABdsWRxPGUE726_R_1600_10000_Mtg_7.jpg',
    p4: 'https://dimg01.c-ctrip.com/images/tg/258/450/451/51f0d1b86ee648f88bf5bcd4050f1f9c_R_1600_10000_Mtg_7.jpg',
  },
  {
    name: 'Zeng Cuo An',
    id: '4',  //排名
    pic: 'https://dimg02.c-ctrip.com/images/fd/tg/g6/M00/31/73/CggYtFbNugmAWauIAARx1OU0yzs478_R_1600_10000_Mtg_7.jpg',
    mark: '4.3 star',
    address: 'Siming District',
    price: 'free',
    tel: '0592-5794010',
    time: '9:00-18:00',
    p1: 'https://dimg09.c-ctrip.com/images/fd/tg/g1/M05/7A/24/CghzfVWwsPSAVT8RAE4cjKXxAD0349_R_1600_10000_Mtg_7.jpg',
    p2: 'https://dimg03.c-ctrip.com/images/fd/tg/g3/M0A/9B/B2/CggYG1X6XQOAZywFABSjWN_9Snc532_R_1600_10000_Mtg_7.jpg',
    p3: 'https://dimg08.c-ctrip.com/images/tg/890/085/250/e180e8d1d40943df9deaa16921ea58f8_R_10000_1200_Mtg_7.jpg',
    p4: 'https://dimg07.c-ctrip.com/images/tg/764/727/895/9dae0a78dd45421da78cf055ec30fa4d_C_1600_1200_Mtg_7.jpg',
  },
  {
    name: 'Xiamen \nOriental Heritage',
    id: '5',  //排名
    pic: 'https://dimg08.c-ctrip.com/images/100c0e00000076t7vF283_R_1600_10000_Mtg_7.jpg',
    mark: '4.6 star',
    address: 'No 1111 on Xunnan Road \nof Tongan District',
    price: 'RMB 245',
    tel: '4001660006',
    time: '9:30-18:00',
    p1: 'https://dimg01.c-ctrip.com/images/10040e00000074a6k3B56_C_1600_1200_Mtg_7.jpg',
    p2: 'https://dimg05.c-ctrip.com/images/100i0e00000074942D08A_C_1600_1200_Mtg_7.jpg',
    p3: 'https://dimg05.c-ctrip.com/images/100j0e00000076vpn44C3_C_1600_1200_Mtg_7.jpg',
    p4: 'https://dimg08.c-ctrip.com/images/10060e00000076rj63113_R_10000_1200_Mtg_7.jpg',
  },
  {
    name: 'Hu Li Shan Fotress',
    id: '6',  //排名
    pic: 'https://dimg09.c-ctrip.com/images/fd/tg/g4/M09/27/53/CggYHFYDbkiADsjBAAuGx9-FtzI236_R_1600_10000_Mtg_7.jpg',
    mark: '4.5 star',
    address: 'No 2 on Zeng Cuo An Road \nof Siming District',
    price: 'RMB 23',
    tel: '0592-2099603',
    time: '7:30-17:30',
    p1: 'https://dimg03.c-ctrip.com/images/fd/tg/g3/M0B/22/10/CggYGVYDbj6AHhvnACMEag__FXE891_R_1600_10000_Mtg_7.jpg',
    p2: 'https://dimg07.c-ctrip.com/images/fd/tg/g3/M05/22/17/CggYGVYDbsOARKVpABN-OvZedDk879_R_1600_10000_Mtg_7.jpg',
    p3: 'https://dimg01.c-ctrip.com/images/fd/tg/g4/M02/27/5C/CggYHFYDbveAA-nBACRCTkIPPaI487_R_1600_10000_Mtg_7.jpg',
    p4: 'https://dimg02.c-ctrip.com/images/tg/707/727/413/84140f892e994153865ca818e197c145_C_1600_1200_Mtg_7.jpg',
  },
  {
    name: 'Southern Putuo \nTemple',
    id: '7',  //排名
    pic: 'https://dimg02.c-ctrip.com/images/fd/tg/g4/M07/65/AA/CggYHVX44FGAaoBTABJfr_vN5-s945_R_1600_10000_Mtg_7.jpg',
    mark: '4.5 star',
    address: 'No 515 on Siming South \nRoad of Siming District',
    price: 'RMB 75',
    tel: '0592-2087282',
    time: '3:00-18:00',
    p1: 'https://dimg01.c-ctrip.com/images/fd/tg/g4/M03/27/A6/CggYHlYDbsSAanXuACY2Qkut8HI148_R_1600_10000_Mtg_7.jpg',
    p2: 'https://dimg03.c-ctrip.com/images/fd/tg/g3/M01/61/50/CggYGVX44JiAQJupABjl8l4iYP4464_R_1600_10000_Mtg_7.jpg',
    p3: 'https://dimg03.c-ctrip.com/images/tg/629/441/191/4f13dfcd4bda4e218c28526d36e7c68f_R_1600_10000_Mtg_7.jpg',
    p4: 'https://dimg08.c-ctrip.com/images/tg/532/878/913/8b2eaa7e57e64cc890559d143db62c5e_R_1600_10000_Mtg_7.jpg',
  },
  {
    name: 'Zhongshan \nPedestrain Street',
    id: '8',  //排名
    pic: 'https://dimg08.c-ctrip.com/images/fd/tg/g3/M01/5D/FD/CggYGlX5BE6AWAXjABSi5K6jhio131_R_1600_10000_Mtg_7.jpg',
    mark: '4.4 star',
    address: 'Zhongshan Road \nof Siming District',
    price: 'free',
    tel: '0592-2213356',
    time: 'open all day',
    p1: 'https://dimg03.c-ctrip.com/images/fd/tg/g5/M08/34/A6/CggYsVbNyvaAYnbFAASgNFv_ZGA275_R_1600_10000_Mtg_7.jpg',
    p2: 'https://dimg02.c-ctrip.com/images/fd/tg/g5/M09/30/3E/CggYsFbNfneANNRuAAW21eoOOjI507_R_1600_10000_Mtg_7.jpg',
    p3: 'https://dimg03.c-ctrip.com/images/fd/tg/g3/M02/27/F8/CggYGlbNfnaAFLS3AAWnGsOjcu0836_R_1600_10000_Mtg_7.jpg',
    p4: 'https://dimg09.c-ctrip.com/images/fd/tg/g5/M0A/30/FA/CggYsVbNkuqAAgYLAAVrg-VWrAs469_R_1600_10000_Mtg_7.jpg',
  },
  {
    name: 'Xiamen \nScience&Technology \nMuseum',
    id: '9',  //排名
    pic: 'https://dimg06.c-ctrip.com/images/100n090000003pf2p2287_R_1600_10000_Mtg_7.jpg',
    mark: '4.6 star',
    address: 'No 95 on Sports Road \nof Siming District',
    price: 'RMB 70',
    tel: '0592-5148555',
    time: '9:00-17:00',
    p1: 'https://dimg09.c-ctrip.com/images/fd/tg/g2/M02/98/F1/CghzgFTURTWAUBNSAAEyA3NOfEs146_C_1600_1200_Mtg_7.jpg',
    p2: 'https://dimg05.c-ctrip.com/images/fd/tg/g2/M09/98/C3/CghzgVTURTaAc7V-AABxrS8yOXM710_C_1600_1200_Mtg_7.jpg', 
    p3: 'https://dimg09.c-ctrip.com/images/100c0f0000007a8vx24FF_C_1600_1200_Mtg_7.jpg',
    p4: 'https://dimg02.c-ctrip.com/images/tg/351/884/420/a00028e8c6524a43915d134aa832d412_R_1600_10000_Mtg_7.jpg',
  },
  {
    name: 'Xiamen \nFantawild Dreamland',
    id: '10', //排名
    pic: 'https://dimg06.c-ctrip.com/images/tg/495/100/699/ec259da4320d4c43abd8abaed93c7f40_C_1600_1200_Mtg_7.jpg',
    mark: '4.6 star',
    address: 'No 1111 on Xunnan Road \nof Tongan District',
    price: 'RMB 225',
    tel: '0553-2295555',
    time: '9:00-18:00',
    p1: 'https://dimg01.c-ctrip.com/images/100q0a0000004hry610E5_C_1600_1200_Mtg_7.jpg',
    p2: 'https://dimg02.c-ctrip.com/images/100q0b00000058w8p822A_C_1600_1200_Mtg_7.jpg',
    p3: 'https://dimg05.c-ctrip.com/images/tg/947/079/075/2e7fd7fde1a144a79723f9a987f0c0bd_C_1600_1200_Mtg_7.jpg',
    p4: 'https://dimg09.c-ctrip.com/images/tg/398/843/702/0d8b461110b74aec953ee094d4ce8e94_C_1600_1200_Mtg_7.jpg',
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