import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Ionicons from "react-native-vector-icons/Ionicons";
import { createStackNavigator } from '@react-navigation/stack';
import GesturePassword from "../GesturePassword"

const Stack = createStackNavigator();
// 统一定义颜色样式
let backgroundColor = "#f4511e"
let headerTintColor = '#fff'
function setGesture() {
  // this.props.

}
function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Details!</Text>
    </View>
  );
}

function HomeStackScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
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

function SettingsScreen() {
  return (
    <View >
      <Text onPress={setGesture} style={styles.base}>手势密码</Text>
      {/* <GesturePassword/> */}
    </View>
  );
}

function SettingsStackScreen(props) {
  alert(props.test)
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Setting"
        component={SettingsScreen}
        options={{
          title: '我的',
          headerStyle: {
            backgroundColor
          },
          headerTintColor
        }}
      />
    </Stack.Navigator>
  );
}
function HotScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>热点</Text>
    </View>
  );
}

function HotStackScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Hot"
        component={HotScreen}
        options={{
          title: '热点',
          headerStyle: {
            backgroundColor
          },
          headerTintColor
        }}
      />
    </Stack.Navigator>
  );
}
function OrderScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>订单</Text>
    </View>
  );
}

function OrderStackScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Order"
        component={OrderScreen}
        options={{
          title: '订单',
          headerStyle: {
            backgroundColor
          },
          headerTintColor
        }}
      />
    </Stack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

export default function TabNavigation(props) {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === '首页') {
              iconName = 'md-home'
            } if (route.name === '我的') {
              iconName = 'ios-person'
            } else if (route.name === '订单') {
              iconName = 'ios-list-box'
            } else if (route.name === '热点') {
              iconName = 'md-flame'
            }
            color = focused ? 'red' : color;

            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
        }}
      >
        <Tab.Screen name="首页" component={HomeStackScreen} />
        <Tab.Screen name="订单" component={OrderStackScreen} />
        <Tab.Screen name="热点" component={HotStackScreen} />
        <Tab.Screen name="我的" test={props.test} component={SettingsStackScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  base: {
    color: "#000",
    fontSize: 20,
    fontWeight: "700",
    backgroundColor: "#fff",
    height: 50,
    lineHeight: 50
  }
});
