import React, { Component } from 'react';
import { Text, View, FlatList, TextInput, StyleSheet, ImageBackground, Button, TouchableHighlight } from 'react-native';
import { WebView } from 'react-native-webview';
class Setting extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    //  source={{html: '<h1>Hello world</h1>'}}
    //  return <WebView source={{ uri: 'http://192.168.80.24:8000/#/app' }} />;
    // let source = { uri: 'file:///android_asset/dist/index.html' }
    //  let source={uri:'file:///android_asset/pages/demo.html'}



    //  let source={uri:'file:///android_asset/build/index.html'}
    //  let source={uri:'file:///android_asset/dist1/index.html'}  //vue打包无图片版本
     let source={uri:'file:///android_asset/vueH5/index.html'} 
    return <WebView
      source={source}
      // style={{backgroundColor:'pink'}}
    />
  }
}

export default Setting;