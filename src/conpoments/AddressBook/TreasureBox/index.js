import React, { Component } from 'react';
import {
  View,
  Text,
  ListView,
  StyleSheet,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
  AsyncStorage
} from 'react-native';
import baiRecentVisit from '../allJson/baiRecentVisit.json'
import gaoxiaoList from '../allJson/gaoxiao.json'
import companyLife from '../allJson/companyLife.json'
import baibao from "./baibao"
import laboratory from "../allJson/laboratory.json"


class TreasureBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recentVisitList: [],
      // oldList: []
    };

  }

  componentDidMount() {
    AsyncStorage.getItem(
      'recentList', (error, result) => {
        console.log(result)
        this.setState({
          recentVisitList: JSON.parse(result)
        })
      })
  }
  /**
   * 保存点击应用到AsyncStorage，最近访问显示
   */
  saveRecentVisit = (item) => {
    // AsyncStorage.removeItem('key', (error) => {
    // })
    AsyncStorage.getItem(
      'recentList',
      (error, result) => {
        if (error) {
        } else {
          let tempArray = [];
          // 判断是否是初次点击
          if (result) {
            
            console.log("取得Storage数值", result)
            let oldList = JSON.parse(result)
            // 去重
            let temp = oldList.filter(value => {
              return item.id !== value.id
            })
            temp.unshift(item)
            this.setState({
              recentVisitList: temp
            })
            tempArray = temp
          } else {

            let temp=[]
            temp.push(item)
            this.setState({
              recentVisitList: temp
            })
            tempArray.push(item)

          }
          let tempData = JSON.stringify(tempArray);
          AsyncStorage.setItem(
            'recentList',
            tempData || [],
            (error, result) => {
              if (error) {
                console.log('存值失败:', error);
              } else {
                console.log('存值成功!');
              }
            }
          );
        }
      }
    )
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={styles.base}>
          <ScrollView>
            <View style={{ flex: 1 }}>
            {/* 这里只需要一个蓝白的图片即可，这张图片蓝色高度部分到最近访问高度的一半，下面就是白色的 */}
              <ImageBackground source={require('../../../assets/bg.jpg')} imageStyle={{ borderRadius: 5 }} style={styles.bg}>
                {/* 天气，地点 */}
                <View style={styles.tianqiContain}>
                  <View>
                    <View><Text style={styles.baibaoTitle}>百宝箱</Text></View>
                  </View>

                  <View style={{ flex: 1, flexDirection: 'row' }}>
                    <View>
                      <Text style={{ fontSize: 50, color: "#fff" }}>16</Text>
                    </View>
                    <View style={{ marginTop: 13, marginLeft: 10 }}>
                      <Text style={{ color: "#e5ebfe" }}>℃</Text>
                      <ImageBackground source={require('../../../assets/taiyang.jpg')} imageStyle={{ borderRadius: 5 }} style={{ width: 20, height: 20 }}>
                      </ImageBackground>
                    </View>
                    <View style={styles.dateStyle}>
                      <View style={{ width: 100, height: 25 }}>
                        <Text style={{ fontSize: 17, color: "#e5ebfe" }}>星期一</Text>
                      </View>
                      <View style={{ width: 250, height: 25 }}>
                        <Text style={{ fontSize: 17, color: "#e5ebfe" }}>4月13日 天津市</Text>
                      </View>
                    </View>
                  </View>
                </View>
                {/* 最近访问 */}
                <View style={styles.containItem}>
                  <View>
                    <Text style={styles.containTitle}>最近访问</Text>
                  </View>
                  <View style={styles.item}>
                    {this.state.recentVisitList && this.state.recentVisitList.map(item => {
                      return <View style={styles.content}>
                        <View>
                          <ImageBackground source={baibao[item.bgName]} imageStyle={{}} style={styles.imageStyle}>
                          </ImageBackground>
                        </View>

                        <View>
                          <Text style={styles.itemText}>{item.bgTitle}</Text>
                        </View>
                      </View>
                    })}
                  </View>
                </View>
              </ImageBackground>
              {/* 高效工作 */}
              <View style={styles.containItem}>
                <View>
                  <Text style={styles.containTitle}>高效工作</Text>
                </View>

                <View style={styles.item}>
                  {gaoxiaoList && gaoxiaoList.body.map(item => {
                    return (
                      <TouchableOpacity onPress={() => this.saveRecentVisit(item)} style={styles.content}>
                        {/* <View > */}
                        <View>
                          <ImageBackground source={baibao[item.bgName]} imageStyle={{}} style={styles.imageStyle}>
                          </ImageBackground>
                        </View>

                        <View>
                          <Text style={styles.itemText}>{item.bgTitle}</Text>
                        </View>
                        {/* </View> */}
                      </TouchableOpacity>
                    )

                  })}
                </View>
              </View>
              {/* 企业生活 */}
              <View style={styles.containItem}>
                <View>
                  <Text style={styles.containTitle}>企业生活</Text>
                </View>
                <View style={styles.item}>
                  {companyLife && companyLife.body.map(item => {
                    return (
                      <TouchableOpacity onPress={() => this.saveRecentVisit(item)} style={styles.content}>
                        <View>
                          <ImageBackground source={baibao[item.bgName]} imageStyle={{}} style={styles.imageStyle}>
                          </ImageBackground>
                        </View>
                        <View>
                          <Text style={styles.itemText}>{item.bgTitle}</Text>
                        </View>
                      </TouchableOpacity>
                    )

                  })}
                </View>
              </View>

              {/* 实验室 */}
              <View style={styles.containItem}>
                <View>
                  <Text style={styles.containTitle}>实验室</Text>
                </View>
                <View style={styles.item}>
                  {laboratory && laboratory.body.map(item => {
                    return (
                      <TouchableOpacity onPress={() => this.saveRecentVisit(item)} style={styles.content}>

                        <View>
                          <ImageBackground source={baibao[item.bgName]} imageStyle={{}} style={styles.imageStyle}>
                          </ImageBackground>
                        </View>
                        <View>
                          <Text style={styles.itemText}>{item.bgTitle}</Text>
                        </View>
                      </TouchableOpacity>
                    )
                  })}
                </View>
              </View>
            </View>
          </ScrollView>
        </View>

      </View>
    );
  }
}
const styles = StyleSheet.create({
  base: {

  },
  bg: {
    width: '100%',
  },
  tianqiContain: {
    height: 120, padding: 20, paddingTop: 10,
  },
  containItem: {
    borderRadius: 20,
    padding: 5,
    margin: 15,
    paddingTop: 20,
    backgroundColor: '#fff'
  },
  containTitle: { fontSize: 20, color: '#120f25', paddingLeft: 20, fontWeight: 'bold', paddingBottom: 5 },
  item: { paddingBottom: 10, alignItems: 'center', flexDirection: 'row', flexWrap: 'wrap', borderBottomLeftRadius: 20, borderBottomRightRadius: 20 },
  content: {  width: '25%', height: 100, justifyContent: 'center', alignItems: 'center', },
  itemText: { fontSize: 12, color: '#120f25', marginTop: 10 },
  imageStyle: { width: 40, height: 40 },
  baibaoTitle: {
    fontSize: 20, color: "#fff"
  },
  dateStyle: {
    flex: 1, marginTop: 10, marginLeft: 15
  },
});
export default TreasureBox;