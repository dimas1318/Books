import React, {Component} from 'react';
import
{
	View,
	Text,
	TouchableOpacity,
	StyleSheet,
	ScrollView,
	Image,
	Dimensions,
	ListView,
} from 'react-native';
import Swiper from 'react-native-swiper';

import BooksList from './BooksList';
import {friends} from './Storage';

var convos = friends;

var {height, width} = Dimensions.get('window');

var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

export default class Profile extends Component {
	constructor(props){
	    super(props)

	    this.state = {
	      	dataSource: ds.cloneWithRows(convos),
	    }
	}

	eachPic(x){
	    return(
	        <TouchableOpacity style={{alignItems:'center'}}>
	        <Image source = {x.image} style={{width:70, height:70, borderRadius:35, margin:10}} />
	        <Text style={{fontWeight:'600', color:'#444'}}>{x.name}</Text>
	        </TouchableOpacity>
    )}

	render() {
		return (
		  	<Swiper style={{marginBottom:10}} showsPagination={false}>
		  		<View style={{flex:1, marginBottom:25}}>
					<ScrollView style={styles.container}>
				 		<Image source ={require('./images/profile.jpg')} resizeMode="stretch" style={{height:300, width:width}} />
				  		<View style={[styles.row, {marginTop:15}]}>
			       			<Text style = {{fontSize:19, fontWeight:'400'}}>Hugh, </Text><Text style={{fontSize:21, fontWeight:'300', marginBottom:-2}}>48</Text>
			       		</View>
			       		<View style={styles.row}>
			       			<Text style={{color:'#444', fontSize:15}}>Professional</Text>
			      		</View>
			       		<View style={styles.row}>
			       			<Text style={{color:'#777', fontSize:11}}>read 1593 books</Text>
			       		</View>
			       		<View style={styles.description}>
			       			<Text style = {styles.title}> Favourite quote</Text>
			       			<Text style={{color:'#555'}}>To be, or not to be?</Text>
			       		</View>
			       		<View style ={styles.commons}>
			       			<Text style = {styles.title}> Preferences in genres</Text>
			       			<Text style={{marginTop:10, fontSize:14, color:'#666', fontWeight:"400"}}>Romance, Mystery, Horror</Text>
			       		</View>
				        <View /*style ={{marginBottom:10}/*styles.commons}*/>
				       		<Text style = {[styles.title, {padding:15}]}> Friends</Text>
				       		<ListView 
						      	horizontal={true}
						      	showsHorizontalScrollIndicator = {false}
						    	dataSource={this.state.dataSource}
						    	pageSize = {4}
						      	renderRow={(rowData) =>this.eachPic(rowData)}
						    />
				        </View>
					</ScrollView>
	  			</View>
		        <BooksList navigator={this.props.navigator}/>
	   		</Swiper>
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
	container: {
	    flex: 1,
	    backgroundColor: '#f7f7f7',
	},
	row: {
	    flexDirection:'row',
	    margin:15,
	    marginBottom:0,
	    marginTop:5,
	    alignItems:'flex-end'
	},
	title:{
	    fontSize:14,
	    fontWeight:'600',
	    color:'#333'
	},
	commons:{
	    padding:15
	},
	description:{
	    padding:15,
	    borderTopWidth:1,
	    borderBottomWidth:1,
	    borderColor:'#e3e3e3',
	    marginTop:10,
	    marginBottom:10
	},
});