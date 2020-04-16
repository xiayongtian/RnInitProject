import React, { Component } from 'react';
import { Text, View, StyleSheet, Button, BackHandler } from 'react-native';

class LogoTitle extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( 
      <View style={{backgroundColor:'blue',width:900,}}><Text style={{alignSelf:'center'}}>123</Text></View>
     );
  }
}
 
export default LogoTitle;