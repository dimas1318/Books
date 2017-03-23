import React, {Component} from 'react';
import
{
	View,
	Navigator,
	StyleSheet,
	ScrollView,
	Text,
	TouchableOpacity,
	ListView,
	Image,
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

var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

export default class BooksList extends Component {
	constructor(props){
	    super(props)

	    this.state = {
	      	dataSource: ds.cloneWithRows(convos),
	      	image: '',
	    }
	}

	onPressButton = () => {
		this.props.navigator.push({
			id: 'profile',
		});
	}

	eachPic(x){
	    return(
	    	<TouchableOpacity onPress={() => this.props.navigator.push({id: 'book', passProps: x.id})} style={styles.description}>
	    		<View style={styles.container}>	    		
			        <Image source = {x.image} style={{width:100, height:150}} />
			        <View style={styles.rightContainer}>
			          	<Text style={styles.author}>{x.author}</Text>
		        		<Text style={styles.name}>{x.name}</Text>
			        </View>		        
	      		</View>
	      	</TouchableOpacity>
    )}

	render() {
		return (
			<View style={{flex:1}}>
				<View>
					<TouchableOpacity onPress={this.onPressButton} style={styles.buttonContainer}>
						<Text style={styles.buttonText}>to PROFILE</Text>
					</TouchableOpacity>
				</View>
				<View style={{flex:1}}>
		       		<ListView
				      	showsHorizontalScrollIndicator = {true}
				    	dataSource={this.state.dataSource}
				    	pageSize = {5}
				      	renderRow={(rowData) =>this.eachPic(rowData)}
				      	style={styles.listView}
				    />
		       </View>
      		</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
	    flex: 1,
	    flexDirection: 'row',
	    justifyContent: 'center',
	    alignItems: 'center',
	    backgroundColor: '#F5FCFF',
	},
	rightContainer: {
	    flex: 1,
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
	author: {
	    fontSize: 25,
	    marginBottom: 8,
	    textAlign: 'center',
	},
	name: {
		fontSize: 20,
	    textAlign: 'center',
	},	
	listView: {
	    paddingTop: 0,
	    backgroundColor: '#F5FCFF',
	},
	description:{
	    padding:0,
	    borderTopWidth:3,
	    borderBottomWidth:3,
	    borderColor:'#e3e3e3',
	    marginTop:2,
	    marginBottom:2
	},
});