
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


export default class SH extends Component {
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
        <Text style={{fontSize: 28,color: '#A39480'}} >Welcome to ShangHai!</Text>
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
    name: 'Disney Resort',
    id: '1',  
    pic: 'https://dimg03.c-ctrip.com/images/100l050000000m7gz7F22_R_1600_10000_Mtg_7.jpg',
    mark: '4.6 star',
    address: 'Disney Resort on Chuansha \nNew Town of \nPudong New District',
    price: 'RMB 370',
    tel: '021-31580000',
    time: '9:00-20:00',
    p1: 'https://dimg06.c-ctrip.com/images/100h050000000m7w04635_R_1600_10000_Mtg_7.jpg',
    p2: 'https://dimg09.c-ctrip.com/images/1006050000000m7cy979C_R_1600_10000_Mtg_7.jpg',
    p3: 'https://dimg02.c-ctrip.com/images/100f050000000m7g8ED65_R_1600_10000_Mtg_7.jpg',
    p4: 'https://dimg08.c-ctrip.com/images/100r050000000m84356D5_R_1600_10000_Mtg_7.jpg',
  },
  {
    name: 'The Bund',
    id: '2',  
    pic: 'https://dimg08.c-ctrip.com/images/fd/tg/g2/M02/AE/B7/Cghzf1WnQzqAUYrKACigWhppfsA528_R_1600_10000_Mtg_7.jpg',
    mark: '4.7 star',
    address: 'Zhongshan East One Road \nof Hunagpu District',
    price: 'free',
    tel: '4006367979',
    time: 'open all day',
    p1: 'https://dimg06.c-ctrip.com/images/100k0c00000062prlF2D5_R_1600_10000_Mtg_7.jpg',
    p2: 'https://dimg09.c-ctrip.com/images/fd/tg/g1/M02/7A/DB/CghzfFWwsWiAWarYABdhpT54eRM674_R_1600_10000_Mtg_7.jpg',
    p3: 'https://dimg07.c-ctrip.com/images/tg/249/080/189/38fbdad6d37248da881b2045ff031edc_C_1600_1200_Mtg_7.jpg',
    p4: 'https://dimg02.c-ctrip.com/images/tg/705/779/838/7fd2b7bfb923414b9eaa184d3d712d80_R_1600_10000_Mtg_7.jpg',
  },
  {
    name: 'Oriental Pearl',
    id: '3',  
    pic: 'https://dimg09.c-ctrip.com/images/10090e00000077v7y885E_R_1600_10000_Mtg_7.jpg',
    mark: '4.6 star',
    address: 'Lu Jia Zui No 1 on\nCentury Avenue of \nPudong New District',
    price: 'RMB 165',
    tel: '021-58791888',
    time: '8:00-21:30',
    p1: 'https://dimg01.c-ctrip.com/images/tg/335/468/261/e696b07b83e64a0cb970ad0caf0fea3d_R_1600_10000_Mtg_7.jpg',
    p2: 'https://dimg03.c-ctrip.com/images/tg/140/975/224/e70bc1c2f79d47579bc0c7a5ee615321_R_1600_10000_Mtg_7.jpg',
    p3: 'https://dimg06.c-ctrip.com/images/fd/tg/g1/M09/7D/A0/CghzfVWw4KuAMUTMABzHa3ekK2I392_R_1600_10000_Mtg_7.jpg',
    p4: 'https://dimg09.c-ctrip.com/images/10090e00000077v7y885E_R_1600_10000_Mtg_7.jpg',
  },
  {
    name: 'Nanjing Road \nWalkway',
    id: '4',  
    pic: 'https://dimg05.c-ctrip.com/images/fd/tg/g3/M0B/31/F7/CggYGVXDD1yAcxs1ABCssFd1-wg742_R_1600_10000_Mtg_7.jpg',
    mark: '4.5 star',
    address: 'Nanjing East Road \nof Hunagpu District',
    price: 'free',
    tel: '021-63526638',
    time: 'open all day',
    p1: 'https://dimg07.c-ctrip.com/images/fd/tg/g4/M0B/10/FD/CggYHFbS3NuACohuAALgsBqlP_g348_C_1600_1200_Mtg_7.jpg',
    p2: 'https://dimg09.c-ctrip.com/images/fd/tg/g4/M09/60/78/CggYHFbWN8-AWbWQAAMwAhmIFyQ876_R_1600_10000_Mtg_7.jpg',
    p3: 'https://dimg09.c-ctrip.com/images/fd/tg/g2/M06/8C/A0/CghzgFWw8CmAAeV_ABk6ZKXpdQA414_R_1600_10000_Mtg_7.jpg',
    p4: 'https://dimg07.c-ctrip.com/images/fd/tg/g5/M09/32/F2/CggYsFbNqgWADsztAAYEhuR7QT8828_R_1600_10000_Mtg_7.jpg',
  },
  {
    name: 'City God Temple',
    id: '5', 
    pic: 'https://dimg03.c-ctrip.com/images/fd/tg/g2/M01/2C/D4/CghzgVW2GqeAZzixABXvla1ZEi8703_R_1600_10000_Mtg_7.jpg',
    mark: '4.3 star',
    address: 'No 249 on Fangbang \nCentral Road of \nHunagpu District',
    price: 'RMB 10',
    tel: '02163865700',
    time: '8:00-16:30',
    p1: 'https://dimg09.c-ctrip.com/images/100t0b0000005o4hwFEBC_R_1600_10000_Mtg_7.jpg',
    p2: 'https://dimg09.c-ctrip.com/images/fd/tg/g2/M09/2C/CA/CghzgVW2GhSABweRABLkuqvkJfU561_R_1600_10000_Mtg_7.jpg',
    p3: 'https://dimg09.c-ctrip.com/images/tg/672/974/394/e8ae8f964ce34eb99bf1128088965878_C_1600_1200_Mtg_7.jpg',
    p4: 'https://dimg09.c-ctrip.com/images/fd/tg/g5/M02/D6/11/CggYsFbSZ_6AOZmtAAf0Lzmbfew467_R_1600_10000_Mtg_7.jpg',
  },
  {
    name: 'Wild Life Park',
    id: '6'  ,
    pic: 'https://dimg07.c-ctrip.com/images/100v0j000000ah3so1C5E_R_1600_10000_Mtg_7.jpg',
    mark: '4.7 star',
    address: 'No 178 on Nanliugong Road \nof Pudong New District',
    price: 'RMB 65',
    tel: '021-61180000',
    time: '8:00-17:00',
    p1: 'https://dimg05.c-ctrip.com/images/100r0j000000af4zl5432_R_1600_10000_Mtg_7.jpg',
    p2: 'https://dimg09.c-ctrip.com/images/100t0j000000af52xCD17_R_1600_10000_Mtg_7.jpg',
    p3: 'https://dimg02.c-ctrip.com/images/tg/664/540/957/e56a636501e540bcb336eb8d99cffc1c_R_1600_10000_Mtg_7.jpg',
    p4: 'https://dimg09.c-ctrip.com/images/tg/719/974/012/8164f99cffb94f5ebe958f75b650d0da_R_1600_10000_Mtg_7.jpg',
  },
  {
    name: 'Ocean Aquarium',
    id: '7', 
    pic: 'https://dimg09.c-ctrip.com/images/fd/tg/g2/M0A/8E/62/CghzgVWxE2CAY9BMAAwtjhrxP9g924_R_1600_10000_Mtg_7.jpg',
    mark: '4.4 star',
    address: 'No 1388 on Lu Jia Zui \nRing Road of \nPudong New District',
    price: 'RMB 150',
    tel: '021-58779988',
    time: '9:00-18:00',
    p1: 'https://dimg06.c-ctrip.com/images/tg/075/183/013/18df1dee1060466e99efa65a2504f744_C_1600_1200_Mtg_7.jpg',
    p2: 'https://dimg06.c-ctrip.com/images/tg/357/014/064/84e04a5ad7774a59a5f88b5864499a1b_C_1600_1200_Mtg_7.jpg',
    p3: 'https://dimg09.c-ctrip.com/images/fd/tg/g2/M08/29/A4/CghzgVWLmA-AQlgFAAOq6mlx1pE069_C_1600_1200_Mtg_7.jpg',
    p4: 'https://dimg02.c-ctrip.com/images/fd/tg/g6/M03/AE/F0/CggYs1bRY5aACSOMAAMx03Hd3hY982_C_1600_1200_Mtg_7.jpg',
  },
  {
    name: 'Lu Jia Zui',
    id: '8',  
    pic: 'https://dimg01.c-ctrip.com/images/fd/tg/g1/M01/7A/DB/CghzfFWwsWaAGiOrACbKEWUM5Ug169_R_1600_10000_Mtg_7.jpg',
    mark: '4.7 star',
    address: 'No 1432 on Pujian Road \nof Pudong New District',
    price: 'free',
    tel: '02168767121',
    time: 'open all day',
    p1: 'https://dimg02.c-ctrip.com/images/fd/tg/g1/M0B/CA/DC/CghzflWw4KWAWJvKABFAo7KZpK0711_R_1600_10000_Mtg_7.jpg',
    p2: 'https://dimg06.c-ctrip.com/images/fd/tg/g1/M05/78/8B/CghzfVWwo2WAJ5KeADSXFtmKK-0553_R_1600_10000_Mtg_7.jpg',
    p3: 'https://dimg08.c-ctrip.com/images/100a0c00000062qxuFB43_R_1600_10000_Mtg_7.jpg',
    p4: 'https://dimg02.c-ctrip.com/images/10090c0000006513z04D0_R_1600_10000_Mtg_7.jpg',
  },
  {
    name: 'Mayan Beach \nWater Park',
    id: '9',  
    pic: 'https://dimg08.c-ctrip.com/images/1002060000001ducs7BAF_R_1600_10000_Mtg_7.jpg',
    mark: '4.6 star',
    address: 'No 888 on Linhu Road \nin Sheshan Town of \nSongjiang District',
    price: 'RMB 220',
    tel: '021-37792222',
    time: '9:30-21:30',
    p1: 'https://dimg02.c-ctrip.com/images/tg/659/762/739/c6d8042853f940a99d763107f3230fbb_C_1600_1200_Mtg_7.jpg',
    p2: 'https://dimg01.c-ctrip.com/images/fd/tg/g4/M0B/AD/0A/CggYHlXTHMqARd4tAAPJ3hhmV8o106_C_1600_1200_Mtg_7.jpg',
    p3: 'https://dimg08.c-ctrip.com/images/100808000000399i5D8F9_C_1600_1200_Mtg_7.jpg',
    p4: 'https://dimg03.c-ctrip.com/images/100w060000001ducy4115_R_1600_10000_Mtg_7.jpg',
  },
  {
    name: 'Happy Valley',
    id: '10' ,
    pic: 'https://dimg02.c-ctrip.com/images/tg/015/514/388/1edc59382558459ca67aa18a07eb0b80_C_1600_1200_Mtg_7.jpg',
    mark: '4.7 star',
    address: 'No 888 on Linhu Road \nin Sheshan Town of \nSongjiang District',
    price: 'RMB 215',
    tel: '021-37792222',
    time: '9:00-21:00',
    p1: 'https://dimg05.c-ctrip.com/images/tg/639/038/146/aa8334f1a4584e429feb1286b73a861f_R_1600_10000_Mtg_7.jpg',
    p2: 'https://dimg07.c-ctrip.com/images/fd/tg/g2/M0A/8C/4C/CghzgFWw60aARj5eAB_fo6J9TvI897_R_1600_10000_Mtg_7.jpg',
    p3: 'https://dimg07.c-ctrip.com/images/100r060000001xwe66003_R_1600_10000_Mtg_7.jpg',
    p4: 'https://dimg09.c-ctrip.com/images/1003060000001xwexE5C4_R_1600_10000_Mtg_7.jpg',
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