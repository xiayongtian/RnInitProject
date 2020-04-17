import React, { Component } from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity, AsyncStorage, } from 'react-native'
import Entypo from "react-native-vector-icons/Entypo";
import Tab from '../Tab'
class News extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (

      <View style={styles.contain}>
        <View style={styles.title}>
          <View style={styles.titleLeft}>
            <Text style={{ marginLeft: 15, fontSize: 17, fontWeight: 'bold' }}>新闻中心</Text>
          </View>
          <View style={styles.titleRight}>

            {/* <ImageBackground source={require('../../../../assets/io.png')} style={{ width: 30, height: 30, }}></ImageBackground> */}
            <View style={{ width: 40, height: 25, borderRadius: 25, backgroundColor: '#f6f6f5', justifyContent: 'center', alignItems: 'center' }}>
              <Entypo name={"tablet-mobile-combo"} size={15} color={"#000"} />
            </View>


            <View style={styles.viewALl}>
              <Text style={styles.viewAllContent}>查看全部</Text>
            </View>
          </View>
        </View>


        <View>
        <Tab/>
        </View>



      </View>
    );
  }
}
const styles = StyleSheet.create({
  contain: {
    height: 520,
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 15,
    borderRadius: 20,
    backgroundColor: '#fff'
  },
  title: {
    // flex: 1,
    flexDirection: 'row',
    height: 50,

  },
  titleLeft: {
    flex: 1,
    height: 50,
    justifyContent: 'center'
  },
  titleRight: { flexDirection: 'row', height: 50, borderRadius: 20, flex: 2, justifyContent: 'flex-end', alignItems: 'center' },

  viewALl: {
    width: 100, height: 25, marginRight: 10, marginLeft: 5, borderRadius: 15, backgroundColor: '#f6f6f5', justifyContent: 'center', alignItems: 'center'
  },
  viewAllContent:
    { alignSelf: 'center', lineHeight: 30, alignItems: 'center', justifyContent: 'center' }


})
export default News;