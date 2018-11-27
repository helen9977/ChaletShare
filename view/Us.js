import React, {Component} from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    Image
} from 'react-native';
export default class Login extends Component {
     static navigationOptions = {
        //标题
        drawerLabel:'About Us',

    
        //图标
        drawerIcon:({tintColor}) => {
            return (
                <Image
                    source={require('../Imgs/US.png')}
                    style={[{width:24,height:24}]}
                />
            );
        },
    };
    render() {
        return(

        <View style={styles.container}>
         <Image
            source={require('../Imgs/back.png')}
            style={[{width:100,height:100}]}
                />
        <Text style={styles.information}>
        CS1502 Helen
        </Text>
        <Text style={styles.programmer}>
        CS1505 Leo
        </Text>
        <Text style={styles.instructions}>
          if you have any suggestions, 
        </Text>
      <Text style={styles.email}>
          contact us
        </Text>
        <Text style={styles.at}>
          at liaoguangenlgg@163.com
        </Text>
       
      </View>
        );
    }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgb(262,238,210)',   
  },
  information: {
    fontSize: 30,
    textAlign: 'center',
    margin: 10,
  },
  programmer: {
    fontSize: 30,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    fontSize: 20,
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  email: {
    fontSize: 20,
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  at: {
    fontSize: 20,
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
