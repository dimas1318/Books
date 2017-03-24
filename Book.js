import React, { Component } from 'react';
import { 
	AppRegistry,
	StyleSheet,
	Text,
	View,
	Image,
	TouchableOpacity,
} from 'react-native';

var book1 = require('./images/book1.jpg')
var book2 = require('./images/book2.jpg')
var book3 = require('./images/book3.jpg')
var book4 = require('./images/book4.jpg')
var book5 = require('./images/book5.jpg')

var convos = [{
  "id": 1,
  "name": "Властелин колец",
  "author": "Дж. Р.Р. Толкин",
  "image" : book1
}, {
  "id": 2,
  "name": "Война и мир",
  "author": "Л.Н. Толстой",
  "image" : book2
}, {
  "id": 3,
  "name": "Илиада",
  "author": "Гомер",
  "image" : book3
}, {
  "id": 4,
  "name": "Преступление и наказание",
  "author": "Ф.М. Достоевский",
  "image" : book4
}, {
  "id": 5,
  "name": "Мастер и маргарита",
  "author": "М. Булгаков",
  "image" : book5
}]

export default class Book extends Component {
	constructor(props) {
		super(props);
		this.state = {
			id: this.props.passProps,
		};
	}

	onPressButton = () => {
		this.props.navigator.push({
			id: 'bookslist'
		});
	}

	render() {
		var item = convos.find(x => x.id === this.state.id);
		return (
			<View style={{flex:1, backgroundColor:"#3498db"}}>
				
				<View style={styles.view}>	    		
		        	<Image source = {item.image} style={styles.image} />
			        <View style={styles.rightContainer}>
			          	<Text style={styles.author}>{item.author}</Text>
		        		<Text style={styles.name}>"{item.name}"</Text>
	      			</View>
	        	</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	view: {
		backgroundColor: 'rgba(255,255,255,0.2)',
		flex: 1,
		justifyContent: 'center',
	    alignItems: 'center',
	},
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
		width: 320,
    	height: 480,
	    alignItems: 'center',
	}
});