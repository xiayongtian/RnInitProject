import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Ionicons from "react-native-vector-icons/Ionicons";
import { createStackNavigator } from '@react-navigation/stack';
import GesturePassword from "../GesturePassword"

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
// 统一定义颜色样式
let backgroundColor = "#f4511e"
let headerTintColor = '#fff'
const styles = StyleSheet.create({
  base: {
    color: "#000",
    fontSize: 17,
    fontWeight: "500",
    backgroundColor: "#fff",
    height: 50,
    lineHeight: 50,
    marginTop:10
  }
});

class TabNavigation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  // 显示手势密码进行设置
  setGesture = (test) => {
    this.props.changeVisible()

  }
  HomeScreen = () => {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>首页!</Text>
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
      <View >
        <Text onPress={() => { this.setGesture("test") }} style={styles.base}>手势密码</Text>
        {/* <GesturePassword/> */}
      </View>
    );
  }
  SettingsStackScreen = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="Setting"
          component={this.SettingsScreen}
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
  HotScreen = () => {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>热点</Text>
      </View>
    );
  }
  HotStackScreen = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="Hot"
          component={this.HotScreen}
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
  OrderScreen = () => {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>订单</Text>
      </View>
    );
  }
  OrderStackScreen = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="Order"
          component={this.OrderScreen}
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
  render() {
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
          <Tab.Screen name="首页" component={this.HomeStackScreen} />
          <Tab.Screen name="订单" component={this.OrderStackScreen} />
          <Tab.Screen name="热点" component={this.HotStackScreen} />
          <Tab.Screen name="我的" component={this.SettingsStackScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    );
  }
}

export default TabNavigation;
