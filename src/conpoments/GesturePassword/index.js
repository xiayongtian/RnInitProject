import * as React from 'react';
import { ToastAndroid } from 'react-native';
import PasswordGesture from 'react-native-gesture-password';

var Password1 = '';
class GesturePassword extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: '请输入你的密码',
      status: 'normal'
    }
  }

  onEnd(password) {
    if (this.props.fromBackStage == true) {
      Password1 = '';
      this.props.changeVisible()
      return
    }

    if (Password1 === '') {
      // The first password
      Password1 = password;
      this.setState({
        status: 'normal',
        message: '请再次输入你的密码'
      });

    } else {

      // The second password
      if (password === Password1) {
        this.setState({
          status: 'right',
          message: '你的密码为：' + password
        }, () => {
          this.props.changeVisible()
          ToastAndroid.showWithGravityAndOffset(
            "手势密码设置成功!",
            ToastAndroid.LONG,
            ToastAndroid.CENTER,
            25,
            50
          );
        });

        Password1 = '';
        // your codes to close this view
      } else {
        this.setState({
          status: 'wrong',
          message: '两次密码不一致, 再试一次.'
        });
      }
    }
  }

  onStart() {
    if (Password1 === '') {
      this.setState({
        message: '请输入你的密码.'
      });
    } else {
      this.setState({
        message: '请再次输入你的密码.'
      });
    }
  }

  render() {
    return (
      <PasswordGesture
        ref='pg'
        status={this.state.status}
        message={this.state.message}
        onStart={() => this.onStart()}
        onEnd={(password) => this.onEnd(password)}
        innerCircle={true}
        outerCircle={true}
        interval = {1000}
      />
    );
  }
}
export default GesturePassword;