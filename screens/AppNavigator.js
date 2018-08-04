import React from 'react';
import { createStackNavigator } from 'react-navigation';
import ScreenComponentList from './ScreenList'
import ScreenComponentBook from './ScreenBook'

const AppNavigator = createStackNavigator({
  ScreenList: ScreenComponentList,
  ScreenBook: ScreenComponentBook,
  initialRouteName: 'ScreenList',
});

export default AppNavigator;
