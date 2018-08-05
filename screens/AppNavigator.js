import React from 'react';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import ScreenComponentList from './ScreenList'
import ScreenComponentBook from './ScreenBook'
import ScreenComponentOverview from './ScreenOverview'

const ListNavigator = createStackNavigator ({
  ScreenList: ScreenComponentList,
  ScreenBook: ScreenComponentBook,
  initialRouteName: 'ScreenList',
});

const OverviewNavigator = createStackNavigator ({
  Overview: ScreenComponentOverview,
  initialRouteName: 'Overview',
});

const AppNavigator = createBottomTabNavigator({
  Overview: OverviewNavigator,
  List: ListNavigator,
});

export default AppNavigator;
