import React, { Component } from 'react';
import {
  View,
  Text,
  ListView,
  StyleSheet,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
  AsyncStorage,
  ToastAndroid,
} from 'react-native';
import baiRecentVisit from '../../allJson/baiRecentVisit.json'
import gaoxiaoList from '../../allJson/gaoxiao.json'
import companyLife from '../../allJson/companyLife.json'
import baibao from "../baibao"
import laboratory from "../../allJson/laboratory.json"
import Ionicons from "react-native-vector-icons/AntDesign";

class ApplyManage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recentVisitList: [],
      editApply: true,  //是否编辑应用
      touchOpacity: 0.2,
      iconType: { name: 'pluscircle', color: "#25ca77" },  //绿色:pluscircle  红色:minuscircle  灰色：checkcircle
      gaoxiaoList: [],
      companyLifeList: [],
      laboratoryList: [],
      tempRecentVisitList: []
    }

  }
  // 保存
  saveApply = () => {

    this.saveApplyList('indexApply', this.state.recentVisitList)
    this.saveApplyList('gaoxiaoList', this.state.gaoxiaoList)
    this.saveApplyList('companyLifeList', this.state.companyLifeList)
    this.saveApplyList('laboratoryList', this.state.laboratoryList)

  }
  componentDidMount() {
    // AsyncStorage.removeItem(
    //   'recentList')
    // AsyncStorage.removeItem(
    //   'gaoxiaoList')
    // AsyncStorage.removeItem(
    //   'companyLifeList')
    // AsyncStorage.removeItem(
    //   'laboratoryList')
    // AsyncStorage.removeItem(
    //   'indexApply')
    // 首页应用处理逻辑
    if (this.state.editApply) {

      this.setState({
        // gaoxiaoList: gaoxiaoList.body,
        touchOpacity: 1
      })

      AsyncStorage.getItem(
        'indexApply', (error, result) => {
          console.log('result', result)
          if (result) {
            this.setState({
              recentVisitList: JSON.parse(result)
            })
          } else {

          }

        })

      AsyncStorage.getItem(
        'gaoxiaoList', (error, result) => {
          console.log('result', result)
          if (result) {

            this.setState({
              gaoxiaoList: JSON.parse(result)
            })
            // this.setState({
            //   gaoxiaoList: gaoxiaoList.body
            // })

          } else {
            this.setState({
              gaoxiaoList: gaoxiaoList.body
            })
          }

        })

      AsyncStorage.getItem(
        'companyLifeList', (error, result) => {
          console.log('result', result)
          if (result) {

            this.setState({
              companyLifeList: JSON.parse(result)
            })

            // this.setState({
            //   companyLifeList: companyLife.body
            // })

          } else {
            this.setState({
              companyLifeList: companyLife.body
            })
          }

        })

      AsyncStorage.getItem(
        'laboratoryList', (error, result) => {
          console.log('result', result)
          if (result) {

            this.setState({
              laboratoryList: JSON.parse(result)
            })

            // this.setState({
            //   laboratoryList: laboratory.body
            // })

          } else {
            this.setState({
              laboratoryList: laboratory.body
            })
          }

        })


      // this.saveApplyList('gaoxiaoList',this.state.gaoxiaoList)

    } else {

      // 百宝箱处理逻辑
      AsyncStorage.getItem(
        'recentList', (error, result) => {
          console.log(result)
          this.setState({
            recentVisitList: JSON.parse(result)
          })
        })
    }



  }
  /**
   *  编辑首页应用
   */
  setApply = (item, statue, applyType) => {

    let list = []
    if (applyType == 'apply') {
      applyType = item.type + 'List'
    }

    debugger;
    if (applyType == "gaoxiaoList") {
      list = this.state.gaoxiaoList
    } else if (applyType == "companyLifeList") {
      list = this.state.companyLifeList
    } else if (applyType == "laboratoryList") {
      list = this.state.laboratoryList
    }

    this.chooseApply(item, statue, list, applyType)
    // this.chooseApply(item,statue,this.state.companyLifeList,'companyLifeList')

  }

  chooseApply = (item, statue, itemList, itemTypeList) => {
    let green = { name: 'checkcircle', color: "#E0E0E0" }
    let tempList = JSON.parse(JSON.stringify(itemList))
    // 红色---->绿色

    if (statue) {
      // debugger
      let tempIndexApply = this.state.recentVisitList
      let a = this.state.recentVisitList.filter(item1 => {
        return item1.id !== item.id
      })
      // this.saveApplyList(tempIndexApply)
      this.setState({
        recentVisitList: a
      })

      tempList.map(value => {

        if (item.id == value.id && item.iconName == "minuscircle") {
          value.iconName = "pluscircle"
          value.iconColor = "#25ca77"

        }
      })
      this.setState({
        [itemTypeList]: tempList,
        // recentVisitList: tempIndexApply
      })
      return;
    } else if (item.iconName == 'checkcircle') {
      return
    }

    // 绿色应用--->灰色应用
    tempList.map(value => {

      if (item.id == value.id && item.iconName == "pluscircle") {
        value.iconName = "checkcircle"
        value.iconColor = "#E0E0E0"

      }
    })

    // 应用添加限制最多8个
    if (this.state.recentVisitList.length > 0 && this.state.recentVisitList.length < 8) {
      // let tempIndexApply = []
      let tempIndexApply = this.state.recentVisitList
      // item={ name: 'minuscircle', color: "#FF5151" }
      item.iconName = "minuscircle"
      item.iconColor = "#FF5151"
      if (this.state.recentVisitList.length > 8) { return }
      tempIndexApply.push(item)

      console.log("opop", this.state.recentVisitList, tempIndexApply)

      // this.saveApplyList(tempIndexApply)
      this.setState({
        [itemTypeList]: tempList,
        recentVisitList: tempIndexApply
      })

    } else if (this.state.recentVisitList.length > 7) {
      // ToastAndroid.show("A pikachu appeared nearby !", ToastAndroid.SHORT);
      ToastAndroid.showWithGravity(
        "您最多只能添加8个应用",
        ToastAndroid.SHORT,
        ToastAndroid.CENTER
      );
      // return
    } else {
      let tempIndexApply = []
      item.iconName = "minuscircle"
      item.iconColor = "#FF5151"
      tempIndexApply.push(item)
      // this.saveApplyList(tempIndexApply)
      this.setState({
        [itemTypeList]: tempList,
        recentVisitList: tempIndexApply
      })
    }

  }
  saveApplyList = (key, data) => {
    // alert(data)
    AsyncStorage.setItem(
      key,
      // 'indexApply',
      JSON.stringify(data),
      (error, result) => {
        if (error) {
          console.log('存值失败:', error);
        } else {
          console.log('存值成功!', result);
        }
      }
    );
  }


  /**
   * 保存点击应用到AsyncStorage，最近访问显示
   */
  saveRecentVisit = (item) => {
    // 首页应用处理逻辑

    // AsyncStorage.removeItem('key', (error) => {
    // })
    // iconType:{ name: 'minuscircle', color: "red" } 
    if (this.state.editApply) {
      return
    }
    // 百宝箱处理逻辑
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

            let temp = []
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
              {/* 首页应用 */}
              <View style={styles.containItem}>
                <View>
                  <Text style={styles.containTitle}>首页应用</Text>
                </View>
                <View style={styles.item}>
                  {this.state.recentVisitList && this.state.recentVisitList.map(item => {
                    return <View style={styles.content}>
                      <Ionicons name={item.iconName} size={20} onPress={() => { this.setApply(item, true, 'apply') }} style={{ alignSelf: 'flex-end' }} color={item.iconColor} />

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

              {/* 高效工作 */}
              <View style={styles.containItem}>
                <View>
                  <Text style={styles.containTitle}>高效工作</Text>
                </View>

                <View style={styles.item}>
                  {this.state.gaoxiaoList && this.state.gaoxiaoList.map(item => {
                    return (
                      <TouchableOpacity activeOpacity={this.state.touchOpacity} onPress={() => this.saveRecentVisit(item)} style={styles.content}>

                        <Ionicons name={item.iconName} size={20} onPress={() => { this.setApply(item, false, 'gaoxiaoList') }} style={{ alignSelf: 'flex-end' }} color={item.iconColor} />
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
              {/* 企业生活 */}
              <View style={styles.containItem}>
                <View>
                  <Text style={styles.containTitle}>企业生活</Text>
                </View>
                <View style={styles.item}>
                  {this.state.companyLifeList && this.state.companyLifeList.map(item => {
                    return (
                      <TouchableOpacity activeOpacity={this.state.touchOpacity} onPress={() => this.saveRecentVisit(item)} style={styles.content}>
                        <Ionicons name={item.iconName} size={20} onPress={() => { this.setApply(item, false, 'companyLifeList') }} style={{ alignSelf: 'flex-end' }} color={item.iconColor} />

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
                  {this.state.laboratoryList && this.state.laboratoryList.map(item => {
                    return (
                      <TouchableOpacity activeOpacity={this.state.touchOpacity} onPress={() => this.saveRecentVisit(item)} style={styles.content}>
                        <Ionicons name={item.iconName} size={20} onPress={() => { this.setApply(item, false, 'laboratoryList') }} style={{ alignSelf: 'flex-end' }} color={item.iconColor} />

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
  content: { width: '25%', height: 100, justifyContent: 'center', alignItems: 'center', },
  itemText: { fontSize: 12, color: '#120f25', marginTop: 10 },
  imageStyle: { width: 40, height: 40 },
  baibaoTitle: {
    fontSize: 20, color: "#fff"
  },
  dateStyle: {
    flex: 1, marginTop: 10, marginLeft: 15
  },
});
export default ApplyManage;