import React from 'react';
import {View, Text, Button} from 'react-native';
import BottomNavigator from './navigation/bottom-navigator';
import DrawerNavigator from './navigation/drawer-navigator';
import TopNavigator from './navigation/top-navigator';
const App = () => {
  return (
    <>
      {/* <AppTopNavigator /> */}
      <DrawerNavigator />
      <BottomNavigator />
    </>
  );
};

export default App;
