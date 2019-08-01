import React from "react";
import { View, Text } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";
import CameraExample from './src/CameraExample';
import Photo from './src/Photo';
import Camera from './src/Camera';
 

const AppNavigator = createStackNavigator({
  Home: {
    //screen: CameraExample
	screen: Camera
  }
});

export default createAppContainer(AppNavigator);
