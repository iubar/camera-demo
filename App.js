import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import CameraScreen from './src/CameraScreen';
// import CameraExpoExample from './src/CameraExpoExample';

const Stack = createStackNavigator();

/**
 * 	@todo: React context and wrap the navigator with a context provider to pass data to the screens (recommended).
 */
export default class App extends React.Component {
	render() {
		return (
			<NavigationContainer>
				<Stack.Navigator initialRouteName="Home">
					<Stack.Screen name="Home" component={CameraScreen} options={{ title: 'Camera' }} />
				</Stack.Navigator>
			</NavigationContainer>
		);
	}
}
