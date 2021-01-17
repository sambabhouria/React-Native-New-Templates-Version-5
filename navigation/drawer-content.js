import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from '@react-navigation/drawer';

function Menu(props) {
  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.container}>
        <Image
          source={require('../src/imges/sambabhouria.jpg')}
          style={styles.image}
        />
        <Text style={styles.text}>DIALLO MAMADOU SAMBA</Text>
      </View>
      <DrawerItemList {...props} />
      <DrawerItem
        icon={({color, size}) => (
          <MaterialIcons name="logout" color="white" size={size} />
        )}
        label="Logout"
        inactiveTintColor="white"
        style={{
          width: '100%',
          marginLeft: 0,
          borderRadius: 0,
          padding: 1,
        }}
        onPress={() => {}}
      />
    </DrawerContentScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    height: 120,
    padding: 20,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 90,
    height: 90,
    borderRadius: 50,
  },
  text: {
    color: 'white',
    fontSize: 18,
    // fontFamily: 'Helvetica-Bold-Font',
  },
});
export default Menu;
