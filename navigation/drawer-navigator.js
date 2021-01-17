import React, {Component} from 'react';
import {View, Text, StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import CategoriesScreen from '../src/screens/categories-screen';
import HomeScreen from '../src/screens/home-screen';
import FavScreen from '../src/screens/fav-screen';
import AboutScreen from '../src/screens/about-screen';
import DrawerContent from './drawer-content';
import Icon from 'react-native-vector-icons/Entypo';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();
class DrawerNavigator extends Component {
  HomeStack = (props) => {
    return (
      <Stack.Navigator screenOptions={DefaultStyle}>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerLeft: () => {
              return (
                <Icon.Button
                  backgroundColor="black"
                  name="menu"
                  size={30}
                  onPress={() => {
                    props.navigation.openDrawer();
                  }}
                />
              );
            },
            drawerIcon: ({focused, size}) => (
              <Icon name="home" size={25} color={focused ? '#7cc' : '#ccc'} />
            ),
          }}
        />
        {/* <Stack.Screen name="About" component={AboutScreen}/> */}
      </Stack.Navigator>
    );
  };
  CategoriesStack = (props) => {
    return (
      <Stack.Navigator screenOptions={DefaultStyle}>
        <Stack.Screen
          name="Categories"
          component={CategoriesScreen}
          options={{
            headerLeft: () => {
              return (
                <Icon.Button
                  backgroundColor="black"
                  name="menu"
                  size={30}
                  onPress={() => {
                    props.navigation.openDrawer();
                  }}
                />
              );
            },
            drawerIcon: ({focused, size}) => (
              <Icon name="home" size={25} color={focused ? '#7cc' : '#ccc'} />
            ),
          }}
        />
        {/* <Stack.Screen name="Favorites" component={FavScreen}/>
       <Stack.Screen name="About" component={AboutScreen}/> */}
      </Stack.Navigator>
    );
  };
  FavStack = (props) => {
    return (
      <Stack.Navigator screenOptions={DefaultStyle}>
        <Stack.Screen
          name="Favorites"
          component={FavScreen}
          options={{
            headerLeft: () => {
              return (
                <Icon.Button
                  backgroundColor="black"
                  name="menu"
                  size={30}
                  onPress={() => {
                    props.navigation.openDrawer();
                  }}
                />
              );
            },
          }}
        />
        {/* <Stack.Screen name="Favorites" component={FavScreen}/>
       <Stack.Screen name="About" component={AboutScreen}/> */}
      </Stack.Navigator>
    );
  };
  AboutStack = (props) => {
    return (
      <Stack.Navigator screenOptions={DefaultStyle}>
        <Stack.Screen
          name="About"
          component={AboutScreen}
          options={{
            headerLeft: () => {
              return (
                <Icon.Button
                  backgroundColor="black"
                  name="menu"
                  size={30}
                  onPress={() => {
                    props.navigation.openDrawer();
                  }}
                />
              );
            },
          }}
        />
        {/* <Stack.Screen name="Favorites" component={FavScreen}/>
       <Stack.Screen name="About" component={AboutScreen}/> */}
      </Stack.Navigator>
    );
  };

  render() {
    return (
      <NavigationContainer>
        <StatusBar backgroundColor="black" barStyle="light-content" />
        <Drawer.Navigator
          drawerContent={(props) => {
            return <DrawerContent {...props} />;
          }}
          drawerStyle={{
            backgroundColor: '#262626',
          }}
          drawerContentOptions={{
            activeTintColor: '#00ff00',
            activeBackgroundColor: 'black',
            inactiveTintColor: 'white',
            itemStyle: {
              width: '100%',
              marginLeft: 0,
              borderRadius: 0,
              padding: 1,
              marginVertical: 1,
            },
          }}>
          <Drawer.Screen
            name="Home"
            component={this.HomeStack}
            options={{
              drawerIcon: ({focused, color}) => {
                return <FontAwesome5 name="home" color={color} size={25} />;
              },
            }}
          />
          <Drawer.Screen
            name="Categories"
            component={this.CategoriesStack}
            options={{
              drawerIcon: ({focused, color}) => {
                return (
                  <MaterialIcons name="category" color={color} size={25} />
                );
              },
            }}
          />
          <Drawer.Screen
            name="Favorites"
            component={this.FavStack}
            options={{
              drawerIcon: ({focused, color}) => {
                return (
                  <MaterialIcons name="favorite" color={color} size={25} />
                );
              },
            }}
          />
          <Drawer.Screen
            name="About"
            component={this.AboutStack}
            options={{
              drawerIcon: ({focused, color}) => {
                return <MaterialIcons name="info" color={color} size={25} />;
              },
            }}
          />
        </Drawer.Navigator>
      </NavigationContainer>
    );
  }
}
const DefaultStyle = {
  headerStyle: {
    backgroundColor: 'black',
    elevation: 0,
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontWeight: 'bold',
  },
};
export default DrawerNavigator;
