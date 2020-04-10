import React, { PureComponent } from 'react';
import { Text, TouchableOpacity, Linking, Alert } from 'react-native';
import { Toast } from 'react-native';
 
class CallPhone extends PureComponent {
  /**
   *  拨打电话
   * @param {string} phone 版本号
   * @example
   * call('18888888888')
   */
  call = phone => {
    const url = `tel:${phone}`;
    Linking.canOpenURL(url)
      .then(supported => {
        if (!supported) {
          return Alert.alert('提示', `您的设备不支持该功能，请手动拨打 ${phone}`, [
            { text: '确定' }
          ]);
        }
        return Linking.openURL(url);
      })
      .catch(err => Toast.info(`出错了：${err}`, 1.5));
  };
 
  callMerchant = () => {
    this.call(this.props.mobile1);
  };
 
  render() {
    return (
      <TouchableOpacity onPress={this.callMerchant} style={{backgroundColor:'pink'}}>
        <Text style={{marginLeft:5}}>{this.props.callType}</Text>
      </TouchableOpacity>
    );
  }
}
 
export default CallPhone;