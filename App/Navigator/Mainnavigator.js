import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Login from '../Screen/Auth/login';
import Setting from '../Screen/setting.js/setting';
import Profile from '../Screen/Account/profile';
import Icon1 from 'react-native-vector-icons/Ionicons';
// import Icon from 'react-native-vector-icons/Feather';
import Icon2 from 'react-native-vector-icons/Ionicons';
import {createDrawerNavigator} from '@react-navigation/drawer';

const Tab = createBottomTabNavigator();
const Mainnavigator = () => {
  return (
    <Tab.Navigator initialRouteName="Home">
      {/* <Tab.Screen
        name="Services"
        component={Login}
        options={{
          tabBarIcon: () => (
            <Image
              source={{
                uri: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcT4jfoRqm_3KOy2Ww3URN5HZA7B8U7lMPNQjtWS3FRk_If-Ztmw',
              }}
              style={{height: 30, width: 30}}></Image>
          ),
          tabBarStyle: {height: 60},
          tabBarLabelStyle: {
            fontSize: 15,
            fontWeight: 'bold',
            // color: 'black',
            marginBottom: 4,
          },
          headerShown: false,
        }}
      /> */}
      <Tab.Screen
        name="Home"
        component={Setting}
        options={{
          tabBarIcon: ({tintcolor}) => (
            <Icon2 name="home-sharp" color={tintcolor} size={25} />
            // <Image
            //   source={{
            //     uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTk4-kuY57ycq6Z9aCLDBim9KlUZCDqNZkBnfTNO67FQfKfg5Dq',
            //   }}
            //   style={{height: 37, width: 40, borderRadius: 20}}
            // />
          ),
          tabBarStyle: {height: 60},
          tabBarLabelStyle: {
            fontSize: 15,
            fontWeight: 'bold',
            // color: 'black',
            marginBottom: 4,
          },
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Me"
        component={Profile}
        options={{
          tabBarIcon: tintcolor => (
            <Icon1 name="person" size={30} color={tintcolor} />
          ),
          tabBarStyle: {height: 60},
          tabBarLabelStyle: {
            fontSize: 15,
            fontWeight: 'bold',
            // color: 'black',
            marginBottom: 4,
          },

          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
};

export default Mainnavigator;
