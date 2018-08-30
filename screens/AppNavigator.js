import React from 'react';
import { createStackNavigator, createBottomTabNavigator, createSwitchNavigator } from 'react-navigation';
import ScreenComponentList from './ScreenList'
import ScreenComponentBook from './ScreenBook'
import ScreenComponentOverview from './ScreenOverview'
import BookDetailScreen from './BookDetailScreen'

import Ionicons from 'react-native-vector-icons/Ionicons'
import { Color } from '../src/Color'

const ListNavigator = createStackNavigator({
  ScreenList: ScreenComponentList,
  ScreenBook: ScreenComponentBook,
  ScreenDetail: BookDetailScreen,
  initialRouteName: 'ScreenList',
});

ListNavigator.navigationOptions = {
  tabBarIcon: ({ focused, tintColor }) => (
    <Ionicons
      name={`ios-list${focused ? '' : '-outline'}`}
      size={30}
      color={tintColor}
    />
  )
}

const OverviewNavigator = createStackNavigator({
  Overview: ScreenComponentOverview,
  ScreenDetail: BookDetailScreen,
  initialRouteName: 'Overview',
});

OverviewNavigator.navigationOptions = {
  tabBarIcon: ({ focused, tintColor }) => (
    <Ionicons
      name={`ios-star${focused ? '' : '-outline'}`}
      size={30}
      color={tintColor}
    />
  )
}

const MainTabNavigator = createBottomTabNavigator({
  Bestsellers: OverviewNavigator,
  List: ListNavigator,
},
  {
    tabBarOptions: {
      activeTintColor: Color.white,
      inactiveTintColor: Color.grey,
      labelStyle: {
        fontSize: 14,
        fontFamily: 'Times New Roman',
        fontWeight: 'medium'
      },
      style: {
        backgroundColor: Color.pink_red,
      },
    },
  }
)


const AppNavigator = createSwitchNavigator(
  {
    Tab: MainTabNavigator,
  }
)

export default AppNavigator;
