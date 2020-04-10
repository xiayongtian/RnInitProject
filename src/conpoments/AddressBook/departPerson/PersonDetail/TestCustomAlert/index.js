import React, { Component } from "react";
import { StyleSheet, Text, TouchableHighlight, View, } from 'react-native';
import CustomAlertDialog from "./CustomAlertDialog";

const typeArr = ["发消息", "拨打电话"];

export default class TestCustomAlert extends Component {
  constructor(props) {
    super(props);
    this.state = {
      typeName: '性别',
      type: 0,
      showTypePop: false,
    }
  }

  _openTypeDialog() {
    this.setState({ showTypePop: !this.state.showTypePop })
  }

  render() {

    return (
      <View style={{ flex: 1,}}>
        <TouchableHighlight onPress={() => this._openTypeDialog()} style={[styles.button,{marginTop:this.props.recentMobile ? 10 : 0,}]}
          underlayColor="#fff">
          <Text style={{color:'#1b90f7', fontSize:this.props.recentMobile ? 14 : 17}}>{this.props.mobile1}</Text>
        </TouchableHighlight>

        <CustomAlertDialog entityList={typeArr} mobile1={this.props.mobile1} callback={(i) => {
          this.setState({
            type: i,
            // typeName: typeArr[i],
          })
        }} show={this.state.showTypePop} closeModal={(show) => {
          this.setState({
            showTypePop: show
          })
        }} /> 
      </View>
    );

  }
}

const styles = StyleSheet.create({
  button: {
    // backgroundColor: 'white', 
    // borderBottomWidth: StyleSheet.hairlineWidth,
    // borderBottomColor: '#cdcdcd',
    width:150,
    height:20,
    // paddingTop:6
  },
});