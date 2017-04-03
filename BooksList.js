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
	BackAndroid,
} from 'react-native';

import Book from './Book';
import {books} from './Storage';

var convos = books;

var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

export default class BooksList extends Component {
	constructor(props){
	    super(props);
	    this.state = {dataSource: ds.cloneWithRows(convos)};
		this.handleBack = (() => {
	        return true;
    	})
	}

	componentDidMount() {
    	BackAndroid.addEventListener('hardwareBackPress', this.handleBack);
    }

 	componentWillUnmount() {
    	BackAndroid.removeEventListener('hardwareBackPress', this.handleBack);
    }

	eachPic(x){
	    return(
	    	<TouchableOpacity onPress={() => {this.props.navigator.push({id: 'book', passProps: x.id, sceneConfig: Navigator.SceneConfigs.PushFromRight})}} style={styles.description}>
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
			<View style={{flex:1, marginBottom:25}}>
	       		<ListView
			      	showsHorizontalScrollIndicator = {true}
			    	dataSource={this.state.dataSource}
			    	pageSize = {5}
			      	renderRow={(rowData) =>this.eachPic(rowData)}
			      	style={styles.listView}
			    />
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
	    backgroundColor: "#34495e",
	},
	description:{
	    padding:0,
	    borderTopWidth:0,
	    borderBottomWidth:0,
	    borderColor:'#e3e3e3',
	    marginTop:2,
	    marginBottom:2,
	},
});