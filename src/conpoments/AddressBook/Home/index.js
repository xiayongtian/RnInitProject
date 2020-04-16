import React, { Component } from 'react'
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity, AsyncStorage } from 'react-native'

import HomeSwiper from './HomeSwiper'
import baibao from '../TreasureBox/baibao'
import Tab from './Tab'
export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      applyList: [],
      heightValue:180
    }
  }
  setApply = () => {
    // this.props.setHeaderVisible()

    this.props.navigation.navigate('SetApply')
  }
  // 取得应用列表数据
  setApplyList = () => {
    AsyncStorage.getItem(
      'indexApply', (error, result) => {
        console.log(result)
        if(result){
          this.setState({
            applyList: JSON.parse(result)
          })
        }
       
      })
  }
  componentDidMount() {
    console.log("进入应用")
    this.setApplyList()

  }
  // 刷新列表
  componentDidUpdate(prevProps) {
    if (prevProps.route.params !== this.props.route.params) {
      console.log("test----")
      this.setApplyList()

    }
  }
  render() {

    return (
      <View style={{ flex: 1 }}>
        {/* 轮播图 */}
        <HomeSwiper />
        {/* 应用设置 */}
        <View style={{ flexDirection: 'row', height:this.state.applyList.length>3 ? 180 : 110, paddingTop: 10, backgroundColor: '#fff', flexWrap: 'wrap', marginTop: -35, marginLeft: 20, marginRight: 20, marginBottom: 15, borderRadius: 20 }}>
          {this.state.applyList && this.state.applyList.map(item => {
            return (
              <View style={styles.itemContain}>
                <ImageBackground source={baibao[item.bgName]} imageStyle={{}} style={styles.apply}>
                </ImageBackground>

                <Text numberOfLines={1} style={{fontSize:12}}>{item.bgTitle}</Text>
              </View>
            )
          })}

          <TouchableOpacity onPress={this.setApply} style={styles.itemContain}>

            <ImageBackground source={require('../../../assets/more.png')} imageStyle={{}} style={styles.apply}>
            </ImageBackground>
            <Text style={{fontSize:12}}>更多应用</Text>

          </TouchableOpacity>
          <TouchableOpacity onPress={this.setApply} style={styles.itemContain}>

            <ImageBackground source={require('../../../assets/setting.png')} imageStyle={{}} style={styles.apply}>
            </ImageBackground>
            <Text style={{fontSize:12}}>应用设置</Text>

          </TouchableOpacity>

        </View>

        <View style={{ height: 200, marginLeft: 20, marginRight: 20, marginBottom: 15, borderRadius: 20, backgroundColor: 'pink' }}>
          <View style={{ flex: 1, flexDirection: 'row', }}>
          <Text>新闻中心</Text>
            <View style={{ alignSelf: 'flex-end' }}>
              <Text>新闻中心</Text>
              <Text>查看全部</Text>
            </View>

          </View>



        </View>
      </View>

      // <Tab/> 
    )
  }
}
const styles = StyleSheet.create({
  apply: { width: 40, height: 40 },
  itemContain: { width: "20%", height: 80, justifyContent: 'center', alignItems: 'center' }
})

