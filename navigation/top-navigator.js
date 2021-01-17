import React, {Component} from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import CategoriesScreen from '../src/screens/categories-screen';
import HomeScreen from '../src/screens/home-screen';
import FavScreen from '../src/screens/fav-screen';
import AboutScreen from '../src/screens/about-screen';
const TopTabs = createMaterialTopTabNavigator();
const Stack = createStackNavigator();
class TopNavigator extends Component {
  HomeStack = () => {
    return (
      <Stack.Navigator screenOptions={DefaultStyle}>
        <Stack.Screen name="Home" component={HomeScreen} />
        {/* <Stack.Screen name="About" component={AboutScreen}/> */}
      </Stack.Navigator>
    );
  };
  CategoriesStack = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen name="Categories" component={CategoriesScreen} />
        {/* <Stack.Screen name="Favorites" component={FavScreen}/>
           <Stack.Screen name="About" component={AboutScreen}/> */}
      </Stack.Navigator>
    );
  };
  FavStack = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen name="Favorites" component={FavScreen} />
        {/* <Stack.Screen name="Favorites" component={FavScreen}/>
           <Stack.Screen name="About" component={AboutScreen}/> */}
      </Stack.Navigator>
    );
  };
  AboutStack = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen name="About" component={AboutScreen} />
        {/* <Stack.Screen name="Favorites" component={FavScreen}/>
           <Stack.Screen name="About" component={AboutScreen}/> */}
      </Stack.Navigator>
    );
  };

  render() {
    return (
      <NavigationContainer>
        <StatusBar backgroundColor="black" barStyle="light-content" />
        <TopTabs.Navigator>
          <TopTabs.Screen name="Home" component={HomeScreen} />
          <TopTabs.Screen name="Categories" component={CategoriesScreen} />
          <TopTabs.Screen name="About" component={AboutScreen} />
        </TopTabs.Navigator>
      </NavigationContainer>
    );
  }
}
const DefaultStyle = {
  headerStyle: {
    backgroundColor: 'black',
    elevation: 0,
  },
  // headerTitle : "Testing",
  // headerTitleAlign: "center",
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontWeight: 'bold',
  },
};
export default TopNavigator;
