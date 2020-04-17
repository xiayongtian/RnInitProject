import React, { Component } from 'react';
import { Text, View } from 'react-native';
class Tab extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (
      <View style={{ flex: 1, paddingLeft: 15, paddingRight: 15, backgroundColor: 'blue' }}>
        <View style={{ height: 150, borderBottomWidth: 1, borderBottomColor: '#d5d5d5' }}>
          <View style={{ height: 100 }}>

            <Text style={{ fontSize: 17, fontWeight: 'bold' }}>百度</Text>
          </View>
          <View style={{ height: 20, flexDirection: 'row' }}>
            <Text style={{ width: 50, backgroundColor: '#ffeeed', borderRadius: 20, color: '#ef7354', textAlign: 'center', lineHeight: 20 }}>最新</Text>
            <Text style={{ width: 50, borderRadius: 20, color: '#d5d5d5', textAlign: 'center', lineHeight: 20 }}>04-08</Text>
          </View>
        </View>
        <View style={{ height: 150, borderBottomWidth: 1, borderBottomColor: '#d5d5d5', marginTop: 15 }}>
          <View style={{ height: 100 }}>

            <Text style={{ fontSize: 17, fontWeight: 'bold' }}>百度</Text>
          </View>
          <View style={{ height: 20, flexDirection: 'row' }}>
            <Text style={{ width: 50, backgroundColor: '#ffeeed', borderRadius: 20, color: '#ef7354', textAlign: 'center', lineHeight: 20 }}>最新</Text>
            <Text style={{ width: 50, borderRadius: 20, color: '#d5d5d5', textAlign: 'center', lineHeight: 20 }}>04-08</Text>
          </View>
        </View>
        <View style={{ height: 150 ,marginTop:15}}>
          <View style={{ height: 100 }}>

            <Text style={{ fontSize: 17, fontWeight: 'bold' }}>百度</Text>
          </View>
          <View style={{ height: 20, flexDirection: 'row' }}>
            <Text style={{ width: 50, backgroundColor: '#ffeeed', borderRadius: 20, color: '#ef7354', textAlign: 'center', lineHeight: 20 }}>最新</Text>
            <Text style={{ width: 50, borderRadius: 20, color: '#d5d5d5', textAlign: 'center', lineHeight: 20 }}>04-08</Text>
          </View>
        </View>




      </View>
    );
  }
}

export default Tab;