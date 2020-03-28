/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import TabNavigation from "./src/conpoments/TabNavigation"
import GesturePassword from "./src/conpoments/GesturePassword"

const App: () => React$Node = () => {
  return (
    <>
    {/* 手势密码 */}
     {/* <GesturePassword/> */}
     {/* 底下四个tab标签 */}
    <TabNavigation/>   
     
    </>
  );
};


export default App;
