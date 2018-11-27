import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    FlatList,
    Text,
    Image,
    TextInput,
    TouchableOpacity,
    AppRegistry,
    Dimensions,
} from 'react-native';
import {Icon} from 'react-native-elements'
import {List, ListItem} from 'react-native-elements'

const bottomGutter = 24, marginSize = 2
const width = Dimensions.get('window').widt
const height = Dimensions.get('window').height - bottomGutter

const ImageElement = (props) => (
<View>
  <Image
    style={styles.image}
    source={{uri: props.imageUrl}}
  />
  {props.children}
</View>
)

const Button = (props) => (
  <TouchableOpacity
    style={[styles.button, props.style]}
    onPress={props.onPress}
  >
    <Icon
      name={`chevron-${props.name}`}
      color='white'
      size={50}
    />
  </TouchableOpacity>
)

export default class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      images: [
        'http://a0.att.hudong.com/32/05/01300000164151121680059549785.jpg',
        'https://res.klook.com/images/fl_lossy.progressive,q_65/c_fill,w_1295,h_720,f_auto/w_80,x_15,y_15,g_south_west,l_klook_water/activities/fpk8dstdpdma500z4pgr/%E4%B8%8A%E6%B5%B7%E4%B8%9C%E6%96%B9%E6%98%8E%E7%8F%A0%E5%A1%94.jpg', 
        'http://www.cf178.com/File/J_Pic/%E5%8E%A6%E9%97%A8%E9%BC%93%E6%B5%AA%E5%B1%BF.jpg',
        'http://scenery.image.nihaowang.com/scenery/1/839/201106302115193750.jpg',
         
      ],
      current: 1,
      data: null,
    }
  }



  componentDidMount(){
    fetch('http://guangdiu.com/api/gethots.php')
      .then( response => response.json() )
      .then( json => this.setState({
        data: json.data
      }))
      .catch( error => alert(error) )
  }

  _separator = () => (
      <View style={{height: 1, backgroundColor: 'white'}}/>
    )

  _keyExtractor = (item, index) => index //此函数用于为给定的item生成一个不重复的key。Key的作用是使React能够区分同类元素的不同个体，以便在刷新时能够确定其变化的位置，减少重新渲染的开销。若不指定此函数，则默认抽取item.key作为key值。若item.key也不存在，则使用数组下标。



  DelItem = (index) => {
    this.state.data.splice(index, 1)
    this.setState({
      data: this.state.data
    })
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

  

  _renderItem = ( {item, index} ) => (
      <View style={styles.container,{flexDirection:'row'}}>
        <TouchableOpacity
          activeOpacity={0.5}
          style={{flex: 11}}
        >
          <View style={styles.item} >
            <Image style={styles.avatar} source={{uri: item.image}}/>
            <Text style={{fontSize: 18,color:'#A39480'}}>{item.title}</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          activeOpacity={0.5}
          onPress={() => this.DelItem(index)}
          style={{flex: 1}}
        >
          <View style={styles.delbutton}>
            <Text style={{fontSize: 18}}>Del</Text>
          </View>
        </TouchableOpacity>
      </View>
    )

  render() {
    const image = this.state.images[this.state.current]
    return (
      <View style={styles.container}>
        <ImageElement imageUrl={image}>
          <Button
            name="left"
            style={{left:0}}
            onPress={this.goLeft}
          />
          <Button
            name="right"
            style={{right:0}}
            onPress={this.goRight}
          />
        </ImageElement>

         <View style={{flex: 1}}>
          <View style={styles.header}>
            <Text style={{fontSize: 25,color: '#A39480'}} >----- hot sale -----</Text>
          </View>
          <FlatList
            data={this.state.data}
            ref={(flatList) => this._flatList = flatList}
            ItemSeparatorComponent={this._separator}
            keyExtractor={this._keyExtractor}
            getItemLayout={(data, index) => ( {length: 120, offset: (120 + 1) * index, index} )}
            renderItem={this._renderItem}
          />
        </View>
        


      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
      flex:1,
  },

  flex:{
    flex:1
  },
  image: {
    width: width - (2 * marginSize),
    height: (height - (2 * marginSize))/2,
    margin: 5,
   // borderRadius:50

  },
  button: {
    position: 'absolute',
    width: width / 10,
    height: (height / 10)/2,
    top: 0,
    backgroundColor: 'rgba(150, 150, 150, 0.5)',
    margin: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  white: {
        color: "white",
        fontWeight: "900",
        textShadowColor: "#ccc",
        textShadowOffset: {width: 1, height: 1}
    },
center: {
        justifyContent: "center",
        alignItems: "center"
    },
item: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    margin: 2,
    marginTop: 5,
    height: 75,
    backgroundColor: 'rgb(245,222,179)',
    borderRadius:15,
  },
delbutton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 2,
    marginTop: 5,
    height: 75,
    backgroundColor: 'pink',
    borderRadius:15
  },
header: {
    height: 25,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgb(262,238,210)',
    borderRadius:50,
  },
  footer: {
    height: 16,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'silver'
  },
  avatar: {
    width: 100,
    height: 100,
    margin: 20,
    borderRadius:50,
  },


});