import React, { Component } from 'react';
import Swiper from 'react-native-swiper';
import ApplyManage from "../../../AddressBook/TreasureBox/ApplyManage"
// E:\AllProject\RnInitProject\src\conpoments\AddressBook\TreasureBox
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity, AsyncStorage } from 'react-native'
import baibao from "../../TreasureBox/baibao"
import TitleBar from '../../../TitleBar'
/**
 * 首页头部轮播图
 */
class HomeSwiper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recentVisitList: [],
    }
  }
  componentDidMount() {
    AsyncStorage.getItem(
      'recentList', (error, result) => {
        console.log(result)
        this.setState({
          recentVisitList: JSON.parse(result)
        })
      })

    if (this.state.editApply) {
      this.setState({
        touchOpacity: 1
      })
    }

  }

  saveApply = () => {
    const { navigation } = this.props;
    this.refs.applyManage.saveApply();
    navigation.navigate('Home', {
      itemId: 86,
      otherParam: 'anything you want here',
    });
  }

  test = () => {
    alert('12')
  }
  render() {
    const { navigation } = this.props;
    return (
      <View style={{ flex: 1 }}>

        <TitleBar title={"编辑首页应用"} right={'保存'} pressRight={this.saveApply} titleColor='#fff' navigation={navigation} />
        
        <ApplyManage ref="applyManage" saveApply={this.props.saveApply} />
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
export default HomeSwiper;