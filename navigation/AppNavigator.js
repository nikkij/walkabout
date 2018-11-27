import React from 'react';
import { createSwitchNavigator, createStackNavigator } from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';
import WalkScreen from '../screens/WalkScreen';
import HomeScreen from '../screens/HomeScreen';

// const SecondaryNav = createStackNavigator({
//   Walk: {screen: WalkScreen}
// });

// export default createSwitchNavigator({
//   // You could add another route here for authentication.
//   // Read more at https://reactnavigation.org/docs/en/auth-flow.html
//   Main: MainTabNavigator,
// });

export default createStackNavigator({
  Walk: WalkScreen,
  Home: HomeScreen,
  Main: MainTabNavigator,
},{initialRouteName:'Main'});