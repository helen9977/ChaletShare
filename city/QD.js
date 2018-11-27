
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


export default class QD extends Component {
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
        <Text style={{fontSize: 28,color: '#A39480'}} >Welcome to QingDao!</Text>
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
    name: 'landing stage',
    id: '1',  //排名
    pic: 'https://dimg08.c-ctrip.com/images/10040h00000091y45E920_C_1600_1200_Mtg_7.jpg',
    mark: '4.3 star',
    address: 'No 14 on Taiping Road \nof Citysouth District',
    price: 'RMB2',
    tel: '0532-8288',
    time: 'open all day',
    p1: 'https://dimg09.c-ctrip.com/images/fd/tg/g6/M08/45/CE/CggYslbXZ_GAF8UIAAOXxX9Q_Rw912_R_1600_10000_Mtg_7.jpg',
    p2: 'https://dimg07.c-ctrip.com/images/fd/tg/g3/M00/04/04/CggYGVbJ6LmAVb1yAAGk3FonKoI220_C_1600_1200_Mtg_7.jpg',
    p3: 'https://dimg08.c-ctrip.com/images/fd/tg/g6/M06/01/D1/CggYslbLIE-AXKUTAAO3_Z0Uxvc129_R_1600_10000_Mtg_7.jpg',
    p4: 'https://dimg06.c-ctrip.com/images/fd/tg/g1/M04/CB/9C/CghzflWw7I2AIbXNACXxM4EIYZc843_R_1600_10000_Mtg_7.jpg',
  },
  {
    name: 'Laoshan Mountain',
    id: '2',  //排名
    pic: 'https://dimg03.c-ctrip.com/images/100s040000000926p404B_R_1600_10000_Mtg_7.jpg',
    mark: '4.4 star',
    address: 'Laoshan scenic area \nof Laoshan District',
    price: 'RMB90',
    tel: '0532-88899000',
    time: '6:30-17:30(midseason),\n           7:30-16:30(slack season)',
    p1: 'https://dimg01.c-ctrip.com/images/fd/tg/g6/M06/01/0B/CggYslbTtnyAffIFAANVjbR8FEg183_C_1600_1200_Mtg_7.jpg',
    p2: 'https://dimg05.c-ctrip.com/images/100o040000000925dE8B9_R_1600_10000_Mtg_7.jpg',
    p3: 'https://dimg05.c-ctrip.com/images/fd/tg/g6/M01/DF/64/CggYtFbSxBOAFftzAAJitosF9A4601_R_1600_10000_Mtg_7.jpg',
    p4: 'https://dimg08.c-ctrip.com/images/fd/tg/g3/M07/F9/EC/CggYGVbS_g-ARhbmAAV9xajzxZk816_R_1600_10000_Mtg_7.jpg',
  },
  {
    name: 'Eight Great Passes',
    id: '3',  //排名
    pic: 'https://dimg07.c-ctrip.com/images/fd/tg/g6/M00/22/3B/CggYslcYdvaAWtO5ABGewE588OM360_R_1600_10000_Mtg_7.jpg',
    mark: '4.5 star',
    address: 'The northeast corner \nof Huiquan in the \nCitysouth District',
    price: 'RMB30',
    tel: '0532-83869357', 
    time: 'open all day',
    p1: 'https://dimg01.c-ctrip.com/images/fd/tg/g6/M09/68/30/CggYtFcgms6AGpXJABNp6JxWXbc414_R_1600_10000_Mtg_7.jpg',
    p2: 'https://dimg02.c-ctrip.com/images/tg/484/461/719/09f5a4478b594c1e95e4da99b0f6481e_C_1600_1200_Mtg_7.jpg',
    p3: 'https://dimg07.c-ctrip.com/images/fd/tg/g3/M06/E1/E3/CggYG1bSVQGAFthjAANd9OjSEMc184_R_10000_1200_Mtg_7.jpg',
    p4: 'https://dimg02.c-ctrip.com/images/fd/tg/g6/M0B/94/19/CggYs1bQsbqAZGDpAAUAXv6Da1M287_R_1600_10000_Mtg_7.jpg',
  },
  {
    name: 'Haichang polar \nOcean Park',
    id: '4',  //排名
    pic: 'https://dimg07.c-ctrip.com/images/fd/tg/g2/M00/6E/FC/CghzgFW4Y86AU13QAGa3x82VZhs488_R_1600_10000_Mtg_7.jpg',
    mark: '4.3 star',
    address: 'No 60 on Eastsea East Road \nof Laoshan District',
    price: 'RMB60',
    tel: '0532-85909999',
    time: '8:30-17:00',
    p1: 'https://dimg06.c-ctrip.com/images/tg/207/095/035/16d53cdf1d794845abfb513f4d861c50_R_1600_10000_Mtg_7.jpg',
    p2: 'https://dimg01.c-ctrip.com/images/fd/tg/g1/M0B/60/B6/CghzfFW4Y9aAXaKSAEoTBHvRg18289_R_1600_10000_Mtg_7.jpg',
    p3: 'https://dimg09.c-ctrip.com/images/tg/632/658/903/12516749fa574e28a49ff3f06f3b0977_C_1600_1200_Mtg_7.jpg',
    p4: 'https://dimg07.c-ctrip.com/images/tg/553/725/244/fb50a4c869764d12bcf4e43521a0d5ac_C_1600_1200_Mtg_7.jpg',
  },
  {
    name: 'Huangdao \nGolden Beach',
    id: '5',  //排名
    pic: 'https://dimg08.c-ctrip.com/images/tg/046/620/960/4f0b4e9048a4460a913ada25492872e1_C_1600_1200_Mtg_7.jpg',
    mark: '4.5 star',
    address: 'in the Huangdao District',
    price: 'RMB10',                                                                                                                       
    tel: '0532-86708180',
    time: 'open all day',
    p1: 'https://dimg05.c-ctrip.com/images/fd/tg/g4/M06/95/E6/CggYHFYLKHuAVQqYAAGeiseTOt0174_C_1600_1200_Mtg_7.jpg',
    p2: 'https://dimg01.c-ctrip.com/images/100e060000001yhhvAEE7_R_1600_10000_Mtg_7.jpg',
    p3: 'https://dimg09.c-ctrip.com/images/fd/tg/g4/M05/96/33/CggYHVYLKICAb3xgAAFkGjmfy68774_C_1600_1200_Mtg_7.jpg',
    p4: 'https://dimg08.c-ctrip.com/images/tg/866/276/349/fe11caba826343889785c80a554ee8e5_R_1600_10000_Mtg_7.jpg',
  },
  {
    name: 'May Fourth Square',
    id: '6',  //排名
    pic: 'https://dimg01.c-ctrip.com/images/fd/tg/g2/M01/8B/BD/CghzgVWw7IuAML-_ACk8kMOBzDw788_R_1600_10000_Mtg_7.jpg',
    mark: '4.5 star',
    address: 'on Eastsea West Road \nof Citysouth District',
    price: 'RMB2',
    tel: '0532-83886355',
    time: 'open all day',
    p1: 'https://dimg01.c-ctrip.com/images/fd/tg/g1/M06/CB/9A/CghzflWw7HGAckgUADN9bsfHEQg592_R_1600_10000_Mtg_7.jpg',
    p2: 'https://dimg07.c-ctrip.com/images/fd/tg/g2/M05/2C/23/CghzgFW2CsuADMJQAAGwlLKrHYA652_C_1600_1200_Mtg_7.jpg',
    p3: 'https://dimg07.c-ctrip.com/images/fd/tg/g6/M01/19/FC/CggYtFcYe9WAZhj-AAiQZsk4f0U817_R_1600_10000_Mtg_7.jpg',
    p4: 'https://dimg07.c-ctrip.com/images/fd/tg/g4/M01/AC/45/CggYHlbQV1mAUg__AAQfduvltQo361_C_1600_1200_Mtg_7.jpg',
  },
  {
    name: 'QingDao \nUnderwaterWorld',
    id: '7',//排名
    pic: 'https://dimg06.c-ctrip.com/images/fd/tg/g6/M09/48/A2/CggYs1dGj86ASTfSAELl4n1X6sM741_R_1600_10000_Mtg_7.jpg',
    mark: '4.6 star',
    address: 'No 2 on Laiyang Road \nof Citysouth District',
    price: 'RMB90',
    tel: '0532-82892187',
    time: '8:00-17:30',
    p1: 'https://dimg08.c-ctrip.com/images/tg/524/342/541/24d4317144b14caa9f556e1d89ef1a1a_R_1600_10000_Mtg_7.jpg',
    p2: 'https://dimg06.c-ctrip.com/images/tg/672/598/620/97c04a9f6fba40d78b1775ab0bf229cc_R_1600_10000_Mtg_7.jpg',
    p3: 'https://dimg07.c-ctrip.com/images/tg/629/540/955/fe7c51cd55d94e2186423abfb175f74b_C_1600_1200_Mtg_7.jpg',
    p4: 'https://dimg02.c-ctrip.com/images/tg/651/298/536/c6b5d035edb24e6cb490372fcfc994e6_C_1600_1200_Mtg_7.jpg',
  },
  {
    name: 'QingDao Olympic \nSailing Center',
    id: '8',  //排名
    pic: 'https://dimg03.c-ctrip.com/images/fd/tg/g1/M09/62/0F/CghzfVWk4mGAA1Z6ACkYBQctrak141_R_1600_10000_Mtg_7.jpg',
    mark: '4.4 star',
    address: 'No 1 on Yanerdao Road\nof Citysouth District',
    price: 'RMB5',
    tel: '0532-66776720',
    time: 'open all day',
    p1: 'https://dimg05.c-ctrip.com/images/fd/tg/g1/M0B/84/EB/CghzfFWmIXuACf9LAC-4US1ZxfY601_R_1600_10000_Mtg_7.jpg',
    p2: 'https://dimg01.c-ctrip.com/images/fd/tg/g2/M05/8C/63/CghzgFWw7G-AYRAzACVFhLB95M0823_R_1600_10000_Mtg_7.jpg',
    p3: 'https://dimg08.c-ctrip.com/images/tg/663/180/711/80fc58cee8b640b7beaf4c464dc9e9fd_C_1600_1200_Mtg_7.jpg',
    p4: 'https://dimg08.c-ctrip.com/images/fd/tg/g1/M0B/84/FF/CghzfFWmIhqAGR1BAC7wP2ne88A020_R_1600_10000_Mtg_7.jpg',
  },
  {
    name: 'QingDao \nBeer Museum',
    id: '9',  //排名
    pic: 'https://dimg05.c-ctrip.com/images/tg/669/323/205/f8524262169940cd988b57ef01683c1f_C_1600_1200_Mtg_7.jpg',
    mark: '4.7 star',
    address: 'No 56 on Dengzhou Road \nof Citynorth District',
    price: 'RMB35',
    tel: '0532-83833437',
    time: '8:30-17:00',
    p1: 'https://dimg03.c-ctrip.com/images/fd/tg/g6/M01/D3/ED/CggYslbyakmAdRgWACg3u0jljSQ813_R_1600_10000_Mtg_7.jpg',
    p2: 'https://dimg02.c-ctrip.com/images/tg/046/617/017/90b01cff3f84460aba39aaa7ffbd6cc5_C_1600_1200_Mtg_7.jpg',
    p3: 'https://dimg07.c-ctrip.com/images/tg/883/895/795/697ef61708b743c5b87f0de0c8fe1ac2_R_1600_10000_Mtg_7.jpg',
    p4: 'https://dimg07.c-ctrip.com/images/fd/tg/g5/M04/D4/6C/CggYr1byaqeAMXsbACfzJmAv8m4448_R_1600_10000_Mtg_7.jpg',
  },
  {
    name: 'Axe Firewood Court',
    id: '10',  //排名
    pic: 'https://dimg02.c-ctrip.com/images/fd/tg/g6/M02/CA/C1/CggYtFbyag6ALYlMACGSAS1PCwo417_R_1600_10000_Mtg_7.jpg',
    mark: '3.9 star',
    address: 'Districts in Qingdao \nzhongshan road \ncommercial circle',
    price: 'RMB6',
    tel: '03128458523',
    time: 'open all day',
    p1: 'https://dimg01.c-ctrip.com/images/fd/tg/g5/M06/92/95/CggYr1bQnD2AR0kCAATBvQJHmQE318_R_1600_10000_Mtg_7.jpg',
    p2: 'https://dimg08.c-ctrip.com/images/fd/tg/g3/M0B/CB/2C/CggYG1XtU7eAKg-AAGo8Mow6Bnk987_R_1600_10000_Mtg_7.jpg',
    p3: 'https://dimg07.c-ctrip.com/images/fd/tg/g4/M07/CD/AC/CggYHVXtUmqAPulJAGZDNSh80z4825_R_1600_10000_Mtg_7.jpg',
    p4: 'https://dimg06.c-ctrip.com/images/fd/tg/g3/M07/18/F1/CggYGVbT7AKAMU0BAAMEBkUZ1-I831_R_10000_1200_Mtg_7.jpg',
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