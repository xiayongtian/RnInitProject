import React, { Component } from 'react';
import { Text, View, ScrollView, ImageBackground, StyleSheet, Switch, Image } from 'react-native';
import Ionicons from "react-native-vector-icons/Ionicons";
const styles = StyleSheet.create({
  settingContain: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'stretch'
  },
  newAndClear: {
    height: 100,
    flexDirection: 'column',
    justifyContent: 'space-between',
    marginBottom: 7
  },
  save: {
    textAlign: "center", lineHeight: 50, fontSize: 16
  },

  saveFlex: {
    flex: 1, height: 50, backgroundColor: '#fff'
  },

  saveOut: {
    height: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 7
  },

  sendNews: {
    flexDirection: 'row', justifyContent: 'space-between'
  },

  clearCache: {
    borderTopWidth: 1, borderColor: '#DCDCDC', flexDirection: 'row', justifyContent: 'space-between', alignItems: "center"
  },

  newsText: {
    textAlign: "left", paddingLeft: 15,
  },

  cacheText: {
    textAlign: "left"
  },
  paddingStyle: {
    paddingLeft: 15, paddingRight: 15
  },

  tuAndPingfen: {
    paddingRight: 15, alignItems: "center"
  },

  quit: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: "center",
    backgroundColor: '#fff',
    paddingLeft: 15,
    paddingRight: 15
  }
});
class Setting extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (
      <View style={styles.settingContain}>
        <View style={{ height: 150 }}>
          <ImageBackground source={require('../../assets/background.jpg')} style={{ width: '100%', height: '100%' }}>
            <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
              <ImageBackground source={require('../../assets/person.jpg')} imageStyle={{ borderRadius: 35 }} style={{ width: 70, height: 70, marginBottom: 5 }}>
              </ImageBackground>
              <Text style={{ fontSize: 17 }}>请登录</Text>
            </View>
          </ImageBackground>
        </View>

        {/* 收藏和评论 */}
        <View style={[styles.saveOut]}>
          <View style={[styles.saveFlex]}>
            <Text style={styles.save}>
              <Ionicons name={"ios-star-outline"} size={17} />我的收藏
            </Text>
          </View>
          <View style={styles.saveFlex}>
            <Text style={styles.save}>
              <Ionicons name={"ios-list-box"} size={17} />我的评论
            </Text>
          </View>
        </View>


        {/* 推送新闻，清空缓存 */}
        <View style={styles.newAndClear}>
          <View style={[styles.saveFlex, styles.sendNews]}>
            <Text style={[styles.save, styles.newsText]}>
              推送新闻
            </Text>
            <Switch trackColor={'#aaaa11'} testID={'one'} thumbColor={'#ff1111'} />
          </View>
          <View style={[styles.saveFlex, styles.paddingStyle]}>
            <View style={styles.clearCache}>
              <Text style={[styles.save, styles.cacheText]}>
                清空缓存
            </Text>
              <Ionicons name={"ios-arrow-forward"} size={17} color={"gray"} />
            </View>
          </View>
        </View>


        {/* 我要吐槽，应用评分 */}
        <View style={styles.newAndClear}>
          <View style={[styles.saveFlex, styles.sendNews, styles.tuAndPingfen]}>
            <Text style={[styles.save, styles.newsText,]}>
              我要吐槽
            </Text>
            <Ionicons name={"ios-arrow-forward"} size={17} color={"gray"} /></View>
          <View style={[styles.saveFlex, styles.paddingStyle]}>
            <View style={styles.clearCache}>
              <Text style={[styles.save, styles.cacheText]}>
                应用评分
            </Text>
              <Ionicons name={"ios-arrow-forward"} size={17} color={"gray"} />
            </View>
          </View>

        </View>


        {/* 退出登录 */}
        <View style={styles.newAndClear}>
          <View style={styles.quit}>
            <Text style={[styles.save, styles.cacheText]}>
              退出登录
            </Text>
            <Ionicons name={"ios-arrow-forward"} size={17} color={"gray"} />
          </View>
        </View>

      </View >
    
    );
  }
}

export default Setting;