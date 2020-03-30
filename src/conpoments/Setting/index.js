import React, { Component } from 'react';
import { Text, View, StyleSheet, Switch } from 'react-native';
import Ionicons from "react-native-vector-icons/Ionicons";
const styles = StyleSheet.create({
  settingContain: {
    flex: 1, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'stretch'
  },
  newAndClear: {
    height: 120, flexDirection: 'column', justifyContent: 'space-between', marginBottom: 10
  },
  save: {
    textAlign: "center", lineHeight: 60, fontSize: 16
  },

  saveFlex: {
    flex: 1, height: 60, backgroundColor: '#fff'
  },

  saveOut: {
    height: 60,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10
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

        {/* 收藏和评论 */}
        <View style={styles.saveOut}>
          <View style={styles.saveFlex}>
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
          <View style={[{ flexDirection: 'row', justifyContent: 'space-between', alignItems: "center", backgroundColor: '#fff', paddingLeft: 15, paddingRight: 15 }]}>
            <Text style={[styles.save, styles.cacheText]}>
              退出登录
            </Text>
            <Ionicons name={"ios-arrow-forward"} size={17} color={"gray"} />
          </View>
        </View>
        
      </View>
    );
  }
}

export default Setting;