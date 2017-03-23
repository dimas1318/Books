import React, { Component } from 'react';
import { 
	AppRegistry,
	StyleSheet,
	Text,
	View,
	Image,
	TextInput,
	TouchableOpacity,
} from 'react-native';

export default class Login extends Component {
	render() {
		return (
			<View style={styles.container}>
				<Image source={require('./images/books.jpg')} style={styles.backgroundImage}>
					<View style={styles.content}>
						<Text style={styles.logo}>Boogie Woogie</Text>
					
						<View style={styles.inputContainer}>
							
							<TextInput underlineColorAndroid='transparent' style={styles.input}
								onChangeText={(username) => this.setState({username})}
								value={this.state.username}	placeholder='username'>
							</TextInput>

							<TextInput secureTextEntry={true} underlineColorAndroid='transparent' style={styles.input}
								onChangeText={(password) => this.setState({password})}
								value={this.state.password}
								style={styles.input} placeholder='password'>
							</TextInput>

						</View>

						<TouchableOpacity onPress={this.login} style={styles.buttonContainer}>
							<Text style={styles.buttonText}>LOGIN</Text>
						</TouchableOpacity>

					</View>
				</Image>
			</View>
		);
	}

	constructor(props) {
		super(props);
		this.state = {username: '', password: ''};
	}

	login = () => {
		if (this.state.username === '' &&
				this.state.password === '') {
			this.props.navigator.push({				
				id: 'profile', 
			});
		} else {
			alert('User not found, please try again');
		}
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	backgroundImage: {
		flex: 1,
		alignSelf: 'stretch',
		width: null,
		justifyContent: 'center',
	},
	content: {
		alignItems: 'center',
	},
	logo: {
		color: 'green',
		fontSize: 50,
		fontStyle: 'italic',
		fontWeight: 'bold',
		textShadowColor: '#252525',
		textShadowOffset: {width: 2, height: 2},
		textShadowRadius: 15,
		marginBottom: 20,
	},
	inputContainer: {
		margin: 20,
		marginBottom: 0,
		padding: 20,
		paddingBottom: 10,
		alignSelf: 'stretch',
		borderWidth: 1,
		borderColor: '#fff',
		backgroundColor: 'rgba(255,255,255,0.2)',
	},
	input: {
		fontSize: 16,
		height: 40,
		padding: 10,
		marginBottom: 10,
		backgroundColor: 'rgba(255,255,255,1)',
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
	}
});