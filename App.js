/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import TabNavigation from "./src/conpoments/TabNavigation"
import GesturePassword from "./src/conpoments/GesturePassword"
import { AppState } from 'react-native';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.flage = false
    this.state = {
      visible: false,
      fromBackStage: false  //是否从后台进入，true：显示手势密码
    }
  }
  _handleAppStateChange = (nextAppState) => {
    if (nextAppState != null && nextAppState === 'active') {
      //如果是true ，表示从后台进入了前台 ，请求数据，刷新页面。或者做其他的逻辑
      if (this.flage) {
        //这里的逻辑表示 ，第一次进入前台的时候 ，不会进入这个判断语句中。
        // 因为初始化的时候是false ，当进入后台的时候 ，flag才是true ，
        // 当第二次进入前台的时候 ，这里就是true ，就走进来了。
        //测试通过
        // alert("从后台进入前台");
        // 这个地方进行网络请求等其他逻辑。
        this.setState({
          visible: true,
          fromBackStage: true
        })
      }
      this.flage = false;
    } else if (nextAppState != null && nextAppState === 'background') {
      this.flage = true;
    }
  }

  componentDidMount() {
    AppState.addEventListener('change', this._handleAppStateChange);
  }
  // 改变状态,显示手势密码
  setVisible = (statue) => {
    this.setState({
      visible: statue ? true : false,
      fromBackStage: false
    })
  }

  render() {
    return (
      <>
        {/* 手势密码  */}
        {
          this.state.visible && <GesturePassword fromBackStage={this.state.fromBackStage} changeVisible={() => { this.setVisible(false) }} />
        }
        {/* 底下四个tab标签  */}
        {
          !this.state.visible && <TabNavigation changeVisible={() => { this.setVisible(true) }} />
        }

      </>
    );
  }
}

export default App;

