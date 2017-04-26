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
	TextInput,
} from 'react-native';

import Book from './Book';

var convos = [];
var REQUEST_URL = 'http://192.168.1.164:8080/serverCrec/webresources/generic/get';

export default class BooksList extends Component {
	constructor(props){
	    super(props);
	    this.state = {
	    	dataSource: new ListView.DataSource({
	          rowHasChanged: (row1, row2) => row1 !== row2,
	        }),
	        loaded: false,
	    	text: ""
	    };
		this.handleBack = (() => {
	        return true;
    	})
	}

	componentDidMount() {
		this.fetchData();
    	BackAndroid.addEventListener('hardwareBackPress', this.handleBack);
    }

 	componentWillUnmount() {
    	BackAndroid.removeEventListener('hardwareBackPress', this.handleBack);
    }

    fetchData() {
      fetch(REQUEST_URL)
        .then((response) => response.json())
        .then((responseData) => {
          convos = responseData.books,
          this.setState({
          	dataSource: this.state.dataSource.cloneWithRows(convos),
            loaded: true,
          });
          
        })
        .done();
 	}

	eachPic(x){
	    return(
	    	<TouchableOpacity onPress={() => {this.props.navigator.push({id: 'book', passProps: x.id, sceneConfig: Navigator.SceneConfigs.PushFromRight})}} style={styles.description}>
	    		<View style={styles.container}>	    		
			        <Image source={{uri: x.image}} style={{width:100, height:150}} />
			        <View style={styles.rightContainer}>
			          	<Text style={styles.author}>{x.author}</Text>
		        		<Text style={styles.name}>{x.name}</Text>
			        </View>		        
	      		</View>
	      	</TouchableOpacity>
    )}

	render() {
		if (!this.state.loaded) {
	      return this.renderLoadingView();
	    }

		return (
			<View style={{flex:1, marginBottom:25}}>
				<TextInput 
					style={styles.textInput} 
					onChangeText={(text) => this.filterSearch(text)}
					placeholder="Search"
					value={this.state.text}
				/>
	       		<ListView
	       			enableEmptySections={true}
			      	showsHorizontalScrollIndicator = {true}
			    	dataSource={this.state.dataSource}
			    	pageSize = {5}
			      	renderRow={(rowData) =>this.eachPic(rowData)}
			      	style={styles.listView}
			    />
	       </View>
		);
	}

	renderLoadingView() {
      return (
        <View style={styles.container}>
          <Text>
            Loading books...
          </Text>
        </View>
      );
    }

	filterSearch(text){
		const newData = convos.filter(function(item){
			const itemData = item.name.toLowerCase();
			const textData = text.toLowerCase();
			return itemData.indexOf(textData) > -1;
		})
		this.setState({
			dataSource: this.state.dataSource.cloneWithRows(newData),
			text: text
		})
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
	textInput: {
	    paddingLeft: 30,
	  	fontSize: 22,
	  	height: 25,
	 	flex: 0.07,
		borderWidth: 3,
		borderColor: "#cecece",
	},
});