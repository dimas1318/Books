import React, { Component } from 'react';
import { 
	AppRegistry,
	StyleSheet,
	Text,
	View,
	Image,
	TouchableOpacity,
	BackAndroid,
} from 'react-native';
import randomcolor from 'randomcolor'

import {books} from './Storage';

var convos = books;

export default class Book extends Component {
	constructor(props) {
		super(props);
		this.state = {id: this.props.passProps};
		this.handleBack = (() => {
        	this.props.navigator.pop();
	        return true;
    	})
	}

	componentDidMount() {
    	BackAndroid.addEventListener('hardwareBackPress', this.handleBack);
    }

 	componentWillUnmount() {
    	BackAndroid.removeEventListener('hardwareBackPress', this.handleBack);
    }

	render() {
		var item = convos.find(x => x.id === this.state.id);
		return (			
			<View style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: randomcolor()}}>	    		
	        	<Image source = {item.image} style={styles.image} />
		        <View style={styles.rightContainer}>
		          	<Text style={styles.author}>{item.author}</Text>
	        		<Text style={styles.name}>"{item.name}"</Text>
      			</View>
        	</View>
		);
	}
}

const styles = StyleSheet.create({
	buttonContainer: {
		alignSelf: 'stretch',
		margin: 20,
		padding: 20,
		backgroundColor: 'blue',
		borderWidth: 1,
		borderColor: '#fff',
		backgroundColor: 'rgba(255,255,255,0.6)',
	},
	buttonText: {
		fontSize: 16,
		fontWeight: 'bold',
		textAlign: 'center',
	},
	rightContainer: {
	    flex: 1,
	},
	author: {
	    fontSize: 28,
	    marginBottom: 8,
	    textAlign: 'center',
	    fontStyle: 'italic',
		fontWeight: 'bold',
	},
	name: {
		fontSize: 30,
	    textAlign: 'center',
	    fontWeight: 'bold',
	    textShadowColor: '#252525',
		textShadowOffset: {width: 1, height: 1},
	},	
	image: {
		marginTop: 30,
		width: 300,
    	height: 460,
	    alignItems: 'center',
	}
});