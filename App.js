import React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import CameraScreen from './src/CameraScreen';
import CameraExpoExample from './src/CameraExpoExample';
 
const Stack = createStackNavigator();

export default class App extends React.Component {	
	// TODO: Use React context and wrap the navigator with a context provider to pass data to the screens (recommended).
    render(){
		return (
		<NavigationContainer>
		  <Stack.Navigator initialRouteName="Home">
			<Stack.Screen name="Home" component={CameraScreen} options={{ title: 'Camera' }} />
		  </Stack.Navigator>
		</NavigationContainer>
		)
	}
}

