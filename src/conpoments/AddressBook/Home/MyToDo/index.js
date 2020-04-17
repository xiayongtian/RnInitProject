import React, { Component } from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity, AsyncStorage, } from 'react-native'
// import ToDoSwiper from './ToDoSwiper'
import ToDoSwiper from '../ToDoSwiper'
// import HomeSwiper from '../HomeSwiper'
class MyToDo extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (

      <View style={styles.contain}>
        <View style={styles.title}>
          {/* <View style={{ width: 5, height: 20, marginTop: 15, marginLeft: 20, backgroundColor: '#fc0000' }}></View> */}

          <View style={styles.titleLeft}>
            <View style={{width:1,height:30}}></View>

            <Text style={{ marginLeft: 10, fontSize: 17, fontWeight: 'bold' }}>我的待办</Text>
            <Text style={{ marginLeft: 7, marginTop:-10,fontSize: 13,color:'#fff', fontWeight: 'bold' ,borderRadius:8,backgroundColor:'#ea4741'}}>123</Text>
          </View>
          <View style={styles.titleRight}>
            <ImageBackground source={require('../../../../assets/io.png')} style={{ width: 30, height: 30, }}></ImageBackground>
            <View style={styles.viewALl}>
              <Text style={styles.viewAllContent}>查看全部</Text>
            </View>
          </View>
        </View>

        <View style={{ flex: 1, paddingLeft: 20,paddingRight:20,paddingBottom:30}}>
          <ToDoSwiper/>
        </View>




      </View>
    );
  }
}
const styles = StyleSheet.create({
  contain: {
    height: 250,
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 15,
    borderRadius: 20,

    backgroundColor: '#fff'
  },
  title: {
    // flex: 1,
    height: 50,
    flexDirection: 'row',
    // backgroundColor: 'pink'
  },
  titleLeft: {
    flex: 2,
    height: 50,
    flexDirection:'row',
    alignItems:'center'
    // justifyContent: 'flex-e'
  },
  titleRight: { flexDirection: 'row', height: 50,borderRadius: 20, flex: 1, backgroundColor: '#fff', justifyContent: 'flex-end', alignItems: 'center' },

  viewALl: {
    width: 100, marginRight: 10, marginLeft: 5, height: 25, borderRadius: 15, backgroundColor: '#f6f6f5', justifyContent: 'center', alignItems: 'center'
  },
  viewAllContent:
    { alignSelf: 'center', lineHeight: 30, alignItems: 'center', justifyContent: 'center' }


})
export default MyToDo;