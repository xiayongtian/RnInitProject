import React, { Component } from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity, AsyncStorage, } from 'react-native'

class LawWork extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (

      <View style={styles.contain}>
        <View style={styles.title}>
          <View style={{ width: 5, height: 20, marginTop: 15, marginLeft: 20, backgroundColor: '#fc0000' }}></View>

          <View style={styles.titleLeft}>
            {/* <View style={{width:20,height:30,backgroundColor:'pink'}}></View> */}

            <Text style={{ marginLeft: 10, fontSize: 17, fontWeight: 'bold' }}>2019年法律工作会议</Text>
          </View>
          <View style={styles.titleRight}>
            <ImageBackground source={require('../../../../assets/io.png')} style={{ width: 30, height: 30, }}></ImageBackground>
            <View style={styles.viewALl}>
              <Text style={styles.viewAllContent}>查看全部</Text>
            </View>
          </View>
        </View>

        <View style={{ flex: 1, paddingLeft: 20 }}>
          <View style={{ flex: 1, justifyContent: 'center' }}><Text style={{ fontSize: 16, fontWeight: 'bold' }}>温馨提示</Text></View>
          <View style={{ height: 50, flexDirection: 'row', justifyContent: "space-between" }}>
            <Text style={{ borderWidth: 1, height: 20, paddingLeft: 3, borderRadius: 3, paddingRight: 3, borderColor: '#fc0000' }}>置顶</Text>
            <Text style={{ alignItems: 'flex-end', color: 'gray', paddingRight: 10 }}>2019-10-21 19:43</Text>
          </View>
        </View>




      </View>
    );
  }
}
const styles = StyleSheet.create({
  contain: {
    height: 200,
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
    justifyContent: 'center'
  },
  titleRight: { flexDirection: 'row',borderRadius: 20, height: 50, flex: 1, backgroundColor: '#fff', justifyContent: 'flex-end', alignItems: 'center' },

  viewALl: {
    width: 100, marginRight: 10, marginLeft: 5, height: 25, borderRadius: 15, backgroundColor: '#f6f6f5', justifyContent: 'center', alignItems: 'center'
  },
  viewAllContent:
    { alignSelf: 'center', lineHeight: 30, alignItems: 'center', justifyContent: 'center' }


})
export default LawWork;