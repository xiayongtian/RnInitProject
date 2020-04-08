import * as React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Ionicons from "react-native-vector-icons/Ionicons";
import { createStackNavigator } from '@react-navigation/stack';
import GesturePassword from "../GesturePassword"
import Setting from "../Setting/indexBack1"
import Order from "../Order"
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
    marginTop: 10,

  }
});

class TabNavigation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      num: 1,
      rt:"xiwei"
    }
  }
  // 显示手势密码进行设置
  setGesture = (test) => {
    this.props.changeVisible()

  }

  setScale = () => {
    this.setState({
      // num: 3,
      rt:"xiozi"
    }, () => {
      console.log(this.state.rt)
    })
  }
  HomeScreen = () => {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        {/* <Text style={{ transform: [{ scale: this.state.num }] }} >
          首页---- {this.state.num}-----{this.state.rt}
        </Text> */}
        <Text>{this.state.rt}</Text>
        <Button
         onPress={()=>this.setScale()}
          title="Learn More"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />

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
        {/* <Text onPress={() => { this.setGesture("test") }} style={styles.base}>手势密码</Text> */}
        <Setting style={{ flex: 1 }} />
      </View>
    );
  }
   DetailsScreen=()=>{
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
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
  HotScreen = ({navigation}) => {
    return (
      // <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      //   <Text>热点</Text>
      // </View>
         <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
    );
  }
   DetailsScreen=()=> {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
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
        <Stack.Screen name="Details" component={this.DetailsScreen} />
      </Stack.Navigator>
    );
  }
  OrderScreen = () => {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        
        {/* <Order/> */}
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
