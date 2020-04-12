import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { Provider as ForecastProvider } from './src/context/ForecastContext';
import AccountScreen from './src/screens/AccountScreen';
import CurrentForecastListScreen from './src/screens/CurrentForecastListScreen';
import HistoricForecastListScreen from './src/screens/HistoricForecastListScreen';
import ForecastDetailScreen from './src/screens/ForecastDetailScreen';
import { FontAwesome } from '@expo/vector-icons';
import CreateForecastScreen from './src/screens/CreateForecastScreen';


const CurrentForecastStackNavigator = createStackNavigator({
        CurrentForecast: CurrentForecastListScreen,
        ForecastDetail: ForecastDetailScreen,
        CreateForecast: CreateForecastScreen})

const HistoricForecastStackNavigator = createStackNavigator({
        HistoricForecast: HistoricForecastListScreen,
        ForecastDetail: ForecastDetailScreen})

CurrentForecastStackNavigator.navigationOptions = {
  tabBarIcon: <FontAwesome name="home" size ={25} />
}

HistoricForecastStackNavigator.navigationOptions = {
  tabBarIcon: <FontAwesome name="tachometer" size={25} />
}

const App = createAppContainer( 
    createBottomTabNavigator({
      CurrentForecastSwitchNavigator: CurrentForecastStackNavigator,
      HistoricForecastSwitchNavigator: HistoricForecastStackNavigator,
      Account: AccountScreen
    }, {
      tabBarOptions: {
        showLabel: false
      }
    })
  );

export default () => {
  return (
  <ForecastProvider>
    <App />
  </ForecastProvider>)
}