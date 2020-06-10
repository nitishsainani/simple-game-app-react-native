import React, {Component} from 'react';
import GameScreen from './src/gameScreen'

import InputScreen from './src/screens/tabs/InputScreen'
import HistoryScreen from './src/screens/tabs/HistoryScreen'

import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from "@react-navigation/drawer";
import {createStackNavigator} from "@react-navigation/stack";
import {createMaterialBottomTabNavigator} from "@react-navigation/material-bottom-tabs";

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();
const MaterialBottomTabs = createMaterialBottomTabNavigator();

export default class App extends Component{
  constructor(props) {
    super(props);
    this.state = {}
  }

  createHomeStack = () =>
    <Stack.Navigator>
      <Stack.Screen name={'TabScreen'} component={this.createBottomTabs}/>
      <Stack.Screen name={'gameScreen'} component={GameScreen}/>
    </Stack.Navigator>

  createBottomTabs = () => {
    return <MaterialBottomTabs.Navigator activeColor="red" inactiveColor="black" barStyle={{ backgroundColor: 'white'}}>
      <MaterialBottomTabs.Screen name={'Game'} component={InputScreen}/>
      <MaterialBottomTabs.Screen name={'History'} component={HistoryScreen}/>
    </MaterialBottomTabs.Navigator>
  }

  render() {
    return (
      <NavigationContainer>
        <Drawer.Navigator>
          <Drawer.Screen name={'Home'} component={this.createHomeStack}/>
        </Drawer.Navigator>
      </NavigationContainer>
    );
  }
}