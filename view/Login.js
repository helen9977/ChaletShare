import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  ToastAndroid,
  ImageBackground,

} from 'react-native';

import SettingItem from './SettingItem';

let windowWidth    = Dimensions.get('window').width;//屏幕宽度
let imgNightMode   = require('../Imgs/user1.png');
let imgCheck       = require('../Imgs/link.png');
let imgSetting     = require('../Imgs/user2.png');
let imgFeedback    = require('../Imgs/user3.png');
let imgEntr        = require('../Imgs/link2.png');
let imgEntr2        = require('../Imgs/link3.png');
let imgUserBg      = require('../Imgs/1.jpg');
let imgHeadDefault = require('../Imgs/my.png');



export default class Login extends Component {
     static navigationOptions = {
        //标题
        drawerLabel:'Mine',

    
        //图标
        drawerIcon:({tintColor}) => {
            return (
                <Image
                    source={require('../Imgs/ps.png')}
                    style={[{width:24,height:24}]}
                />
            );
        },
    };
    render() {
        return(

        <View style={styles.body}>
                <ImageBackground style={styles.headBgImg}
                    source={imgUserBg}>
                    <Image style={styles.userHeadImg}
                        source={imgHeadDefault}/>
                    <Text style={styles.userNameTxt}>Helen</Text>
                    <Text style={styles.userNameTxt}></Text>
                    <Text style={styles.userNameTxt}>I want to eat fish ~     :)</Text>
                     
                </ImageBackground>
                <Text style={styles.settingTxt}>Setting</Text>
                <SettingItem 
                    onPress={this.pressNightMode}
                    leftSource={imgNightMode}
                    rightSource={imgCheck}
                    info={'NightMode'}/>
                <View style={styles.line}/>
                <SettingItem 
                    onPress={this.pressMoreSetting}
                    leftSource={imgSetting}
                    rightSource={imgEntr}
                    info={'OtherSetting'}/>
                <View style={styles.line}/>
                <SettingItem 
                    onPress={this.pressFeedBack}
                    leftSource={imgFeedback}
                    rightSource={imgEntr2}
                    info={'UserFedback'}/>
                <View style={styles.line}/>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    body: {
        flex: 1,
        justifyContent: 'flex-start',
        marginTop: -50,
        backgroundColor: 'rgb(262,238,210)',
    },
    headBgImg: {
        opacity: 0.9,
        justifyContent: 'center',
        alignItems: 'center',
        width: windowWidth,
        height: (windowWidth+200 )/2 ,
    },
    userHeadImg: {
        height: 100,
        width: 100,
        borderRadius: 30,
        borderWidth: 2,
        borderColor: '#FFFFFF',
    },
    userNameTxt: {
        fontSize: 18,
        
        marginTop: 6,
    },
    settingTxt: {
        fontSize: 20,
        color: '#A39480',
        paddingTop: 6,
        paddingBottom: 6,
        paddingLeft: 10,
        backgroundColor: 'rgb(270,250,215)',
    },
    line: {
        height: 1,
        backgroundColor: 'rgba(200,200,200,0.8)',
    },
});

