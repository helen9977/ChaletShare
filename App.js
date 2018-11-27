import React, {Component} from 'react';
import {
    StyleSheet,
    View
} from 'react-native';

import TabHome from './view/TabHome';

import Login from './view/Login';
import Us from'./view/Us';
import {DrawerNavigator} from 'react-navigation';


const Drawer = DrawerNavigator(
    {
        Home:{
            screen:TabHome,
        },
        second:{
            screen:Login,
        },
        left:{
          screen:Us,
        }
    },
    {
      drawerWidth:300,
      drawerPosition:'left',
      initialRouteName: 'Home', // 默认显示界面
  
      mode: 'card',  // 页面切换模式, 左右是card(相当于iOS中的push效果), 上下是modal(相当于iOS中的modal效果)
      headerMode: 'screen', // 导航栏的显示模式, screen: 有渐变透明效果, float: 无透明效果, none: 隐藏导航栏

      contentOptions:{

        activeTintColor: 'orange',
        inactiveTintColor:'#A39480',

        /*
        activeBackgroundColor:'pink',
       
        inactiveBackgroundColor:'skyblue',
        */


        labelStyle:{
           fontSize:35,
           height : 40,
        },
        style:{
            marginRight:0,
            marginVertical : 0,
          
        }
    }
  }

);

export default class App extends Component {
    render() {
        return(
             <Drawer/>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent:'center',
        alignItems:'center',
       }
})