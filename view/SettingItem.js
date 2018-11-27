import React, { Component } from 'react';

import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableWithoutFeedback,
} from 'react-native';

export default class SettingItem extends Component{

	render() {
		return(
			<TouchableWithoutFeedback
				onPress={this.props.onPress}>
				<View style={styles.body}>
					<Image style={styles.icon}
						source={this.props.leftSource}/>
					<Text style={styles.infoTxt}>{this.props.info}</Text>
					<View style={{flex: 1,}}/>
					<Image style={styles.icon}
						source={this.props.rightSource}/>
				</View>
			</TouchableWithoutFeedback>
		);
	}
}

const styles = StyleSheet.create({
	body: {
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'rgb(262,238,210)',
		height: 80,
		padding: 10,
	},
	icon: {
		height: 20,
		width: 20,
		marginRight: 10,
	},
	infoTxt: {
		fontSize: 18,
		color: '#111111',
	}
});