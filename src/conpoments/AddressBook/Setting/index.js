import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { WebView } from 'react-native-webview';

class Setting extends Component {
  constructor(props) {
    super(props);
    this.state = {
      webViewData: 0
    }
    this.data = 99
  }
  // webView传递参数触发onMessage
  sendMessage() {
    this.refs.webview.postMessage(++this.data);
  }

  handleMessage(e) {

    this.setState({ webViewData: e.nativeEvent.data });
  }
  render() {
    //  source={{html: '<h1>Hello world</h1>'}}
    //  return <WebView source={{ uri: 'http://192.168.80.24:8000/#/app' }} />;
    // let source = { uri: 'file:///android_asset/dist/index.html' }
    let source = { uri: 'file:///android_asset/pages/demo.html' }



    //  let source={uri:'file:///android_asset/build/index.html'}
    //  let source={uri:'file:///android_asset/dist1/index.html'}  //vue打包无图片版本
    //  let source={uri:'file:///android_asset/vueH5/index.html'} 
    // return <WebView source={source}/>


    return <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <WebView
        ref={'webview'}
        source={{ uri: 'file:///android_asset/pages/demo.html' }}
        style={{ width: 375, height: 120, backgroundColor: '#eee' }}
        onMessage={(event) => {
          // alert(e.nativeEvent.data)
          console.log(event.nativeEvent)
          this.handleMessage(event)
        }} />
      <Text>来自webview的数据 : {this.state.webViewData}</Text>
      <Text onPress={() => {
        this.sendMessage()
      }}>发送数据到WebView</Text>
    </View>

  }
}

export default Setting;