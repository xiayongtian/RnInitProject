import React, { Component } from 'react';
import {
  Alert,
  StyleSheet,
  Text,
  View,
  Navigator,
  PanResponder,
  ImageBackground,
  Switch,
  Image
} from 'react-native';


import Ionicons from "react-native-vector-icons/Ionicons";

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      eventName: '',
      pos: '',
      loginHeight: 150,
      initPosX: "",
      initPosY: "",
      initHeight: "",  //元素初始高度150
      scaleNum: 1, //缩放值
      backWidth: 70,
      backHeight: 70,
      isContinueValue: "",
      isSl: "",  //up:上拉 down:下拉
      pox: "",  //连续改变方向的峰值
      fontSizeValue:17
   
    };

    this.myPanResponder = {}
  }

  componentDidMount = () => {
    setTimeout(this.showMeasure);  //需要在页面加载完毕之后对视图进行测量,所有需要setTimeout
  }

  showMeasure = () => {
    this.refs.loginInfo.measure((x, y, width, height, px, py) =>
      this.setState({
        initHeight: height
      })
    );
  }

  componentWillMount() {

    this.myPanResponder = PanResponder.create({
      //要求成为响应者：
      onStartShouldSetPanResponder: (evt, gestureState) => true,
      onStartShouldSetPanResponderCapture: (evt, gestureState) => true,
      onMoveShouldSetPanResponder: (evt, gestureState) => true,
      onMoveShouldSetPanResponderCapture: (evt, gestureState) => true,
      onPanResponderTerminationRequest: (evt, gestureState) => true,

      //响应对应事件后的处理:
      onPanResponderGrant: (evt, gestureState) => {
        this.state.eventName = '触摸开始';
        console.log('x:', gestureState.x0, gestureState.y0)
        this.setState({
          initPosX: gestureState.x0,
          initPosY: gestureState.y0
        })
        this.forceUpdate();
      },
      // 滑动事件
      onPanResponderMove: (evt, gestureState) => {

        var _pos = 'x:' + gestureState.moveX + ',y:' + gestureState.moveY;
        let moveY = this.state.initPosY - gestureState.moveY
        this.setState({
          pox: gestureState.moveY
        })
        console.log("moveY", moveY)

        this.setState({
          isContinueValue: moveY,
          scaleNum:0.6
        })
        // 上拉处理
        if (moveY > this.state.isContinueValue) {

          console.log("上拉", Math.abs(moveY))
          this.setState({
            isSl: "up"
          })
          if (Math.abs(moveY) <= 150) {
            this.setState({
              loginHeight: 150 - Math.abs(moveY)
            })
          } else {

            this.setState({
              loginHeight: 0
            })
          }
          // 连续改变方向处理
          if (this.state.isSl == "down") {
            moveY = this.state.pox - gestureState.moveY
            console.log("up之后连续down", moveY, this.state.isSl)
            this.setState({
              loginHeight: this.state.loginHeight - moveY,
              initPosY: this.state.pox
            })
          }
          // 下拉处理
        } else if (moveY < this.state.isContinueValue) {
          this.setState({
            isSl: "down"
          })

          if (Math.abs(moveY) <= 150) {
            this.setState({
              loginHeight: Math.abs(moveY)
            })
          } else {
            this.setState({
              loginHeight: 150
            })
          }
          // 连续改变方向处理
          if (this.state.isSl == "up") {
            moveY = gestureState.moveY - this.state.pox
            console.log("down之后连续up", moveY, this.state.isSl)
            this.setState({
              loginHeight: this.state.loginHeight + moveY,
              initPosY: this.state.pox
            })
          }

        }

        let step= (150-this.state.loginHeight)/5
        this.setState({
          pos: _pos,
          backWidth:70-step,
          backHeight:70-step,
          fontSizeValue:17-step/5
        })

      // 70->40
        //
        
        

      },
      onPanResponderRelease: (evt, gestureState) => {
        this.setState({ eventName: '抬手' });
        // 抬手时重置isSl状态
        this.setState({
          isSl: ""
        })

      },
      onPanResponderTerminate: (evt, gestureState) => {
        this.setState({ eventName: '另一个组件已经成为了新的响应者' })
      },
    });
  }

  render() {
    return (
      <View style={styles.settingContain} {...this.myPanResponder.panHandlers}>
        <View style={{ height: this.state.loginHeight }}>
          <ImageBackground source={require('../../assets/background.jpg')} style={{ width: '100%', height: '100%' }}>
            <View style={{  flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
              <ImageBackground source={require('../../assets/person.jpg')} imageStyle={{ borderRadius: 35 }} style={{ width: this.state.backWidth, height: this.state.backHeight, marginBottom: 5 }}>
              </ImageBackground>
              <Text ref='loginInfo' style={{ fontSize: this.state.fontSizeValue }}>请登录{this.state.scaleNum}</Text>
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
        <View style={{ marginBottom: 30, height: 100, backgroundColor: "pink" }}>
          <Text >eventName:{this.state.eventName}|{this.state.pos}</Text>
        </View>
      </View >
      //   </View>
    );
  }
}



const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1
  },

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