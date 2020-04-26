import React, { forwardRef,createRefuseState, useCallback, useEffect, useRef } from 'react';
import { Text, View, StyleSheet, Button, BackHandler, AsyncStorage } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Ionicons from "react-native-vector-icons/Ionicons";
import Entypo from "react-native-vector-icons/Entypo";
import { createStackNavigator } from '@react-navigation/stack';
import AddressBookScreen from "./AddressBookScreen"
import Depart from "./departPerson/Depart"
import Person from "./departPerson/Person"
import PersonDetail from "./departPerson/PersonDetail"
import SameDepart from "./SameDepart"
import SetApply from "../AddressBook/Home/SetApply"
import Setting from "./Setting"

import { useFocusEffect } from '@react-navigation/native';
import TreasureBox from './TreasureBox'
import Favorite from "./Favorite"
import Home from "./Home"
import SearchPerson from "./SearchPerson"
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
// 统一定义颜色样式
let backgroundColor = "#3385ff"
let headerTintColor = '#fff'
const styles = StyleSheet.create({
  headerTitle: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 'auto',
    marginLeft: 'auto',
  },
  headerText: {
    color: '#FFFFFF',
    fontSize: 17,
    fontWeight: '500',
    marginRight: 4,
  },
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
      initRouterName: "AddressBook",
      applyList: []
    }
    // this.ref = createRef();
  }

  setScale = () => {
    this.setState({
      // num: 3,
      rt: "xiozi"
    }, () => {
      console.log(this.state.rt)
    })
  }
  LogoTitle = () => {
    return (
      <View><Text>123</Text></View>
    );
  }

 


  saveApply = (data) => {
    // this.refs.setApply.saveApply()

   


  }
  HomeStackScreen = ({ navigation }) => {
    return (
      <Stack.Navigator
        headerMode={'none'}
        
        header={null}
      >
        {/* 首页 */}
        <Stack.Screen
          name="Home"
        >
          {props => <Home {...props} applyList={this.state.applyList} setHeaderVisible={this.setHeaderMode} headerVisible={this.state.headerModeVisible} />}
        </Stack.Screen>

        {/* 编辑首页应用页面 */}
        <Stack.Screen
          name="SetApply"
          // component={SetApply}
          // component={this.test}
          options={{
            title: '编辑首页应用',
            // header: null,
            // headerStyle: {
            //   backgroundColor
            // },
            // headerTintColor,
            // headerRight: () => (
            //   <View><Text onPress={this.saveApply} style={{ marginRight: 10, color: '#fff' }}>保存</Text></View>
            // ),
          }}>
          {/* <SetApply ref="setApplys" saveApply={this.saveApply}/> */}
          {props => <SetApply {...props}  saveApply={this.saveApply}/>}
        </Stack.Screen>


      </Stack.Navigator>
    );
  }
  SettingsScreen = () => {
    return (
      <View style={{ flex: 1 }}>
      {/* <Text> 辅导费</Text> */}
          <Setting/>
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
  componentDidUpdate() {
    // alert("123")
  }
  back = () => {
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

  //  控制tab是否显示
  getIsTabBarVisible = (route) => {

    // const routeName = route.state
    //   ? route.state.routes[route.state.index].name
    //   : route.params 
    //     ? route.params.screen 
    //     : '首页';
    console.log()
    const routeName = route.state
      ? route.state.routes[route.state.index].name
      : "AddressBook"
    // if(routeName=='AddressBook'){
    //   // console.log('test',route.state)
    //   this.setState({'headerModeVisible':'none'})
    //   // alert("add")
    // }
    switch (routeName) {
      case 'Home': return true;
      case 'AddressBook':
        return true;
      default:
        return false;
    }
  }


  // 百宝箱
  TreasureBoxStackScreen = () => {
    return (
      <Stack.Navigator
        headerMode={this.state.headerModeVisible}
      >
        <Stack.Screen
          name="TreasureBox"
          component={TreasureBox}
          options={{
            title: '百宝箱',
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
            tabBarVisible: this.getIsTabBarVisible(route),
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
              console.log('--', route.name)
              if (route.name === '首页') {
                iconName = 'md-home'
              } if (route.name === '百宝箱') {
                iconName = 'ios-settings'
                return <Entypo name={'box'} size={size} color={color} />;
              } if (route.name === '通讯录') {
                iconName = 'ios-list-box'
              } else if (route.name === '设置') {
                iconName = 'ios-settings'
              }
              color = focused ? backgroundColor : color;

              return <Ionicons name={iconName} size={size} color={color} />;

            }

          })}

          tabBarOptions={{
            activeTintColor: backgroundColor,
            inactiveTintColor: 'gray',
          }}

        >
          <Tab.Screen name="首页" component={this.HomeStackScreen} />
          <Tab.Screen name="百宝箱" component={this.TreasureBoxStackScreen} />
          {/* <Tab.Screen name="通讯录" component={this.AddressStackScreen} /> */}
          <Tab.Screen name="设置" component={this.SettingsStackScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    );
  }
}

export default AddressBook;
