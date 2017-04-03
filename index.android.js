import React, { Component } from 'react';
import { 
	AppRegistry,
	StyleSheet,
	Text,
	View, 
	Navigator
} from 'react-native';

import Login from './Login';
import Profile from './Profile';
import BooksList from './BooksList';
import Book from './Book';

export default class Books extends Component {
	render() {
		return (
			<Navigator initialRoute = {{id: 'login'}}
			renderScene = {this.navigatorRenderScene}
            configureScene={(route) => {
		        if (route.sceneConfig) {
		          return route.sceneConfig;
		        }
		        return Navigator.SceneConfigs.FadeAndroid;
		    }} />
		);
	}

	navigatorRenderScene(route, navigator) {
		switch (route.id) {
			case 'login':
				return ( <Login navigator = {navigator} /> );
			case 'profile':
       			return ( <Profile navigator={navigator} /> );
      		/*case 'bookslist':
        		return ( <BooksList navigator={navigator} /> );*/
        	case 'book':
        		return ( <Book navigator = {navigator} passProps={route.passProps} /> );
		}
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#F5FCFF',
	},
	welcome: {
		fontSize: 20,
		textAlign: 'center',
		margin: 10,
	},
	instructions: {
		textAlign: 'center'
	}
})

AppRegistry.registerComponent('Books', () => Books);