import React, {Component} from 'react';
import {View, StatusBar, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import CategoriesScreen from '../src/screens/categories-screen';
import HomeScreen from '../src/screens/home-screen';
import FavScreen from '../src/screens/fav-screen';
import AboutScreen from '../src/screens/about-screen';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import RatingScreen from '../src/screens/rating-screen';
const BottomTabs = createBottomTabNavigator();
const Stack = createStackNavigator();
class BottomNavigator extends Component {
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
      <Stack.Navigator screenOptions={DefaultStyle}>
        <Stack.Screen name="Categories" component={CategoriesScreen} />
        {/* <Stack.Screen name="Favorites" component={FavScreen}/>
           <Stack.Screen name="About" component={AboutScreen}/> */}
      </Stack.Navigator>
    );
  };
  FavStack = () => {
    return (
      <Stack.Navigator screenOptions={DefaultStyle}>
        <Stack.Screen name="Favorites" component={FavScreen} />
        {/* <Stack.Screen name="Favorites" component={FavScreen}/>
           <Stack.Screen name="About" component={AboutScreen}/> */}
      </Stack.Navigator>
    );
  };
  AboutStack = () => {
    return (
      <Stack.Navigator screenOptions={DefaultStyle}>
        <Stack.Screen name="About" component={AboutScreen} />
        {/* <Stack.Screen name="Favorites" component={FavScreen}/>
           <Stack.Screen name="About" component={AboutScreen}/> */}
      </Stack.Navigator>
    );
  };
  RatingStack = () => {
    return (
      <Stack.Navigator screenOptions={DefaultStyle}>
        <Stack.Screen name="Rating" component={RatingScreen} />
        {/* <Stack.Screen name="Favorites" component={FavScreen}/>
           <Stack.Screen name="About" component={AboutScreen}/> */}
      </Stack.Navigator>
    );
  };
  render() {
    return (
      <NavigationContainer>
        <StatusBar backgroundColor="black" barStyle="light-content" />
        <BottomTabs.Navigator
          tabBarOptions={{
            showLabel: false,
            inactiveTintColor: '#737373',
            activeTintColor: 'black',
            style: {
              backgroundColor: '#f2f2f2',
            },
          }}>
          <BottomTabs.Screen
            name="Home"
            component={this.HomeStack}
            options={{
              tabBarLabel: 'Home',
              tabBarIcon: ({color}) => (
                <Entypo name="home" color={color} size={22} />
              ),
            }}
          />
          <BottomTabs.Screen
            name="Categories"
            component={this.CategoriesStack}
            options={{
              tabBarLabel: 'Categories',
              tabBarIcon: ({color}) => (
                <FontAwesome name="th-list" color={color} size={22} />
              ),
            }}
          />
          <BottomTabs.Screen
            name="Favorites"
            component={this.FavStack}
            options={{
              tabBarLabel: 'Favorites',
              tabBarIcon: ({color}) => (
                <FontAwesome name="heart" color={color} size={22} />
              ),
            }}
          />
          <BottomTabs.Screen
            name="About"
            component={this.AboutStack}
            options={{
              tabBarLabel: 'About',
              tabBarIcon: ({color}) => (
                <FontAwesome5 name="info-circle" color={color} size={22} />
              ),
            }}
          />
          <BottomTabs.Screen
            name="Rating"
            component={this.RatingStack}
            options={{
              tabBarLabel: 'Rating',
              tabBarIcon: ({color}) => (
                <FontAwesome name="star" color={color} size={22} />
              ),
            }}
          />
        </BottomTabs.Navigator>
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
export default BottomNavigator;
