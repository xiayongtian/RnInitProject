import React, { useState, useCallback, useEffect, useRef } from 'react';
import { Text, View, StyleSheet, Button,BackHandler } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Ionicons from "react-native-vector-icons/Ionicons";
import { createStackNavigator } from '@react-navigation/stack';
import AddressBookScreen from "./AddressBookScreen"
import Depart from "./departPerson/Depart"
import Person from "./departPerson/Person"
import PersonDetail from "./departPerson/PersonDetail"
import SameDepart from "./SameDepart"

import Favorite from "./Favorite"
import Home from "./Home"
import SearchPerson from "./SearchPerson"
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
// 统一定义颜色样式
let backgroundColor = "#3385ff"
let headerTintColor = '#fff'
const styles = StyleSheet.create({
  base: {
    color: "#000",
    fontSize: 17,
    fontWeight: "500",
    height: 50,
    lineHeight: 50,
    marginTop: 10,

  }
});

class AddressBook extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      num: 1,
      rt: "xiwei",
      headerModeVisible: "none",
      initRouterName: "AddressBook"
    }
  }
  
  setScale = () => {
    this.setState({
      // num: 3,
      rt: "xiozi"
    }, () => {
      console.log(this.state.rt)
    })
  }
  HomeScreen = () => {
    return (
      // <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      //   <Text>{this.state.rt}</Text>
      //   <Button
      //     onPress={() => this.setScale()}
      //     title="Learn More"
      //     color="#841584"
      //     accessibilityLabel="Learn more about this purple button"
      //   />

      // </View>
      <View>
        <Home/>
      </View>
    );
  }
  HomeStackScreen = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={this.HomeScreen}
          options={{
            title: '首页',
            headerStyle: {
              backgroundColor
            },

            headerTintColor
          }}
        />
      </Stack.Navigator>
    );
  }
  SettingsScreen = () => {
    return (
      <View style={{ flex: 1 }}>

      </View>
    );
  }
  // 设置
  SettingsStackScreen = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="Setting"
          component={this.SettingsScreen}
          options={{
            title: '设置',
            headerStyle: {
              backgroundColor
            },
            headerTintColor
          }}
        />


      </Stack.Navigator>
    );
  }
  Depart = () => {
    return (
      <View>
        <Text>123</Text>
      </View>
    )
  }
  setHeaderMode = () => {
    this.setState({
      headerModeVisible: 'screen'
    })
  }
  back = () => {
    alert('90')
    return <View><Text>90</Text></View>
  }
  //  通讯录
  AddressStackScreen = () => {
    return (
      <Stack.Navigator
        headerMode={this.state.headerModeVisible}
        initialRouteName={this.state.initRouterName}
        // headerLeft={this.back}
        // headerLeft={() => <HeaderBackButton
        //   title="信息"//返回按钮的标题
        //   tintColor='white'//返回按钮的颜色
        //   // onPress={() => navigation.state.params.handleSave()}
        // />}


      >
        <Stack.Screen
          name="AddressBook"
        // component={AddressBookScreen}
        // options={{
        //   title: '通讯录',
        //   headerStyle: {
        //     backgroundColor
        //   },
        //   headerTintColor,

        // }}
        >
          {props => <AddressBookScreen {...props} setHeaderVisible={this.setHeaderMode} headerVisible={this.state.headerModeVisible} />}
        </Stack.Screen>
        {/* 通讯录部门列表 */}
        <Stack.Screen
          name="Depart"
          component={Depart}
          options={{
            title: '通讯录',
            headerStyle: {
              backgroundColor
            },
            headerTintColor,

          }}
        />
        {/* 通讯录人员列表 */}
        <Stack.Screen
          name="Person"
          component={Person}
          options={{
            title: '通讯录',
            headerStyle: {
              backgroundColor
            },
            headerTintColor,

          }}
        />

        {/* 通讯录人员详情 */}
        <Stack.Screen
          name="PersonDetail"
          component={PersonDetail}
          options={{
            title: '通讯录',
            headerStyle: {
              backgroundColor
            },
            headerTintColor,

          }}
        />

        {/* 收藏夹 */}
        <Stack.Screen
          name="Favorite"
          component={Favorite}
          options={{
            title: '通讯录',
            headerStyle: {
              backgroundColor
            },
            headerTintColor,

          }}
        />

        {/* 同部门 */}
        <Stack.Screen
          name="SameDepart"
          component={SameDepart}
          options={{
            title: '通讯录',
            headerStyle: {
              backgroundColor
            },
            headerTintColor,

          }}
        />

        {/* 搜索页面 */}
        <Stack.Screen
          name="SearchPerson"
          component={SearchPerson}
          options={{
            title: '通讯录',
            headerStyle: {
              backgroundColor
            },
            headerTintColor,

          }}
        />
      </Stack.Navigator>
      // <AddressBookScreen/>
    );
  }
  render() {
    return (
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
              if (route.name === '首页') {
                iconName = 'md-home'
              } if (route.name === '通讯录') {
                iconName = 'ios-list-box'
              } else if (route.name === '设置') {
                iconName = 'ios-settings'
              }
              color = focused ? backgroundColor : color;

              return <Ionicons name={iconName} size={size} color={color} />;
            },
          })}

          tabBarOptions={{
            activeTintColor: backgroundColor,
            inactiveTintColor: 'gray',
          }}
        >
          <Tab.Screen name="首页" component={this.HomeStackScreen} />
          <Tab.Screen name="通讯录" component={this.AddressStackScreen} />
          <Tab.Screen name="设置" component={this.SettingsStackScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    );
  }
}

export default AddressBook;
