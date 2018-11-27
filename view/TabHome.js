/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 **/

 import React, { Component } from 'react';
 import {
   AppRegistry,
   StyleSheet,
   Text,
   View,
   Image,
   Platform,
   StatusBar,
   TouchableOpacity,
 } from 'react-native';

 //引入tabbar支持包
 import TabNavigator from 'react-native-tab-navigator';
//首页
 import Home from './Home';
 import HZ from '../city/HZ';
 import QD from '../city/QD';
 import SH from '../city/SH';
 import XM from '../city/XM';


 const TabNavigatorItem =TabNavigator.Item;

 const TAB_NORMAL_1=require('../Imgs/HZ.png');
 const TAB_NORMAL_2=require('../Imgs/QD.png');
 const TAB_NORMAL_3=require('../Imgs/home.png')
 const TAB_NORMAL_4=require('../Imgs/SH.png');
 const TAB_NORMAL_5=require('../Imgs/XM.png');

 const TAB_PRESS_1=require('../Imgs/HZ_on.png');
 const TAB_PRESS_2=require('../Imgs/QD_on.png');
 const TAB_PRESS_3=require('../Imgs/home_on.png');
 const TAB_PRESS_4=require('../Imgs/SH_on.png');
 const TAB_PRESS_5=require('../Imgs/XM_on.png');

 export default class TabHome extends Component  {

   constructor(){
     super();
     this.state={
       selectedTab:'Home',
     }
   }

   /**
   tab点击方法
   **/
   onPress(tabName){
     if(tabName){
       this.setState(
         {
           selectedTab:tabName,
         }
       );
     }
   }
    /**
    渲染每项
    **/
    renderTabView(title,tabName,tabContent,isBadge){
      var tabNomal;
      var tabPress;
      var tabPage;
      switch (tabName) {
      case 'HangZhou':
          tabNomal=TAB_NORMAL_1;
          tabPress=TAB_PRESS_1;
          tabPage=<HZ/>
          break;
      case 'QingDao':
        tabNomal=TAB_NORMAL_2;
        tabPress=TAB_PRESS_2;
        tabPage=<QD/>
        break;
      case 'Home':
        tabNomal=TAB_NORMAL_3;
        tabPress=TAB_PRESS_3;
        tabPage=<Home/>
        break;
      case 'ShangHai':
        tabNomal=TAB_NORMAL_4;
        tabPress=TAB_PRESS_4;
        tabPage=<SH/>
        break;
      case 'XiaMen':
        tabNomal=TAB_NORMAL_5;
        tabPress=TAB_PRESS_5;
        tabPage=<XM/>
        break;
        default:

      }
      return(
        <TabNavigatorItem
         title={title}
         renderIcon={()=><Image style={styles.tabIcon} source={tabNomal}/>}
         renderSelectedIcon={()=><Image style={styles.tabIcon} source={tabPress}/>}
         selected={this.state.selectedTab===tabName}
         selectedTitleStyle={{color:'#f85959'}}
         onPress={()=>this.onPress(tabName)}
        >
       
         {tabPage}
          
        </TabNavigatorItem>
      );
    }

    /**
    自定义tabbar
    **/
   tabBarView(){
     return (
       <View style={{flex:1}}>
       <TabNavigator
        tabBarStyle={styles.tab}
       >
       {this.renderTabView('HangZhou','HangZhou','杭州板块',true)}
       {this.renderTabView('QingDao','QingDao','青岛板块',false)}
       {this.renderTabView('Home','Home','主页板块',false)}
       {this.renderTabView('ShangHai','ShangHai','上海板块',false)}
       {this.renderTabView('XiaMen','XiaMen','厦门板块',false)}
       </TabNavigator>
       </View>
     );
   }

  static navigationOptions = {
        //标题
        drawerLabel:'Home',

        //图标
        drawerIcon:({tintColor}) => {
            return (
                <Image
                    source={require('../Imgs/id.png')}
                    style={[{width:24,height:24}]}
                />
            );
        },
    };

   render() {
     var tabBarView=this.tabBarView();
     return (
       <View style={styles.container}>
        {tabBarView}


       </View>
     );
   }
 }

 const styles = StyleSheet.create({
   container: {
     flex: 1,
     backgroundColor: '#F5FCFF',

   },
   welcome: {
     fontSize: 20,
     textAlign: 'center',
     margin: 10,
   },
   instructions: {
     textAlign: 'center',
     color: '#333333',
     marginBottom: 5,
   },
   tab:{
     height: 52,
     alignItems:'center',
     backgroundColor:'#f4f5f6',
   },
   tabIcon:{
     width:25,
     height:25,
   },
   badgeView:{
     width:22,
     height:14 ,
     backgroundColor:'#f85959',
     borderWidth:1,
     marginLeft:10,
     marginTop:5,
     borderColor:'#FFF',
     alignItems:'center',
     justifyContent:'center',
     borderRadius:8,
   },
   badgeText:{
     color:'#fff',
     fontSize:8,
   },
    page: {
         flex: 1,
         justifyContent: 'center',
         alignItems: 'center',
         backgroundColor: '#FFFFFF'
     },
 });