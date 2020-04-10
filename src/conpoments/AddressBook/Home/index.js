import React, { Component } from 'react';
import {
  View,
  Text,
  ListView,
  StyleSheet,
  // ART
} from 'react-native';
// import TimeAxis from './TimeAxis'
class Home extends Component {
  state = {}
  render() {
    var source = [
      { Text: "包裹等待揽收", Time: "2017-06-02 11:49:00" },
      { Text: "[北京市]XX快递 北京XX中心收件员XX已揽件", Time: "2017-06-02 15:49:05" },
      { Text: "[北京市]北京XX中心已发出", Time: "2017-06-02 16:20:11" },
      { Text: "[北京市]快件已到达XX站点", Time: "2017-06-02 20:15:04" },
      { Text: "[北京市]XX站点员：XXX正在派件", Time: "2017-06-03 07:35:18" },
      { Text: "[北京市]已完成", Time: "2017-06-03 08:21:48" }
    ];
    return (
      <View>
      {/* <TimeAxis></TimeAxis> */}
      </View>
    );
  }
}

export default Home;