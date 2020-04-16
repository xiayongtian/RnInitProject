import React, { Component } from 'react'
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity,AsyncStorage } from 'react-native'

import HomeSwiper from './HomeSwiper'
import baibao from '../TreasureBox/baibao'

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      applyList:[]
      }
  }
  setApply = () => {
    // this.props.setHeaderVisible()

    this.props.navigation.navigate('SetApply')
  }
  // 取得应用列表数据
  setApplyList=()=>{
    AsyncStorage.getItem(
      'indexApply', (error, result) => {
        console.log(result)
       
        this.setState({
          applyList:JSON.parse(result)
        })
      })
  }
  componentDidMount(){
    console.log("进入应用")
    this.setApplyList()
  
  }
  // 刷新列表
  componentDidUpdate(prevProps) {
    if(prevProps.route.params!==  this.props.route.params) {
      console.log("test----")
      this.setApplyList()

    }
}
  render() {
    
    return (
      <View style={{ flex: 1 }}>
      {/* 轮播图 */}
        <HomeSwiper/>
        {/* 应用设置 */}
        <View style={{ flexDirection: 'row', height:180,paddingTop:10, backgroundColor: '#fff', flexWrap: 'wrap', marginTop: -35, marginLeft: 20, marginRight: 20, marginBottom: 15, borderRadius: 20 }}>
          {this.state.applyList && this.state.applyList.map(item=>{
            return (
              <View style={styles.itemContain}>
              <ImageBackground source={baibao[item.bgName]} imageStyle={{}} style={styles.apply}>
              </ImageBackground>
             
              <Text numberOfLines={1}>{item.bgTitle}</Text>
            </View>
            )
          })}
          
         
          
         
          <TouchableOpacity onPress={this.setApply} style={styles.itemContain}>

            <ImageBackground source={require('../../../assets/treasureBox/companyLife/HSE.png')} imageStyle={{}} style={styles.apply}>
            </ImageBackground>
            <Text>更多应用</Text>

          </TouchableOpacity>
          <TouchableOpacity onPress={this.setApply} style={styles.itemContain}>

            <ImageBackground source={require('../../../assets/treasureBox/companyLife/HSE.png')} imageStyle={{}} style={styles.apply}>
            </ImageBackground>
            <Text>应用设置</Text>

          </TouchableOpacity>

        </View>
        <View style={{ height: 200, marginLeft: 20, marginRight: 20, marginBottom: 15, borderRadius: 20 }}>
          <Text>123</Text>
        </View>
      </View>
    )
  }
}
const styles = StyleSheet.create({
apply:{ width: 45, height: 45 },
itemContain:{ width: "20%", height: 80,justifyContent: 'center', alignItems: 'center' }
})

