import React, { Component } from 'react';
import { Text, View, StyleSheet, TextInput, Button, TouchableHighlight, ImageBackground ,BackHandler} from 'react-native';
// import StepConpment from "./StepConpment"
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import StepConpoment from "./StepConpoment"
const Stack = createStackNavigator();
class AddressBookScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bgColor: "#1b90f7"
    }
  }

 
  onChangeText = (Text) => {
    console.log(Text)
  }

  HomeScreen = ({ navigation }) => {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Button
          title="Go to Details"
          onPress={() => navigation.navigate('Details')}
        />
      </View>
    );
  }

  DetailsScreen = () => {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
      </View>
    );
  }



   // 控制标题栏是否显示隐藏
   setHeaderMode=()=>{
    this.setState({
      headerModeShow:"screen"
    })
  }
  // 跳转到部们页面
  stepDepart = () => {
   
    this.props.setHeaderVisible()
    this.props.navigation.navigate('Depart')
  }
  // 跳转到同部门页面
  stepSameDepart=()=>{
    this.props.setHeaderVisible()
    this.props.navigation.navigate('SameDepart')
  }
  // 跳转到收藏夹页面
  stepFavorite=()=>{
    this.props.setHeaderVisible()
    this.props.navigation.navigate('Favorite')
  }
  // 跳转到搜索页面
  stepSearchPerson=()=>{
    this.props.setHeaderVisible()
    this.props.navigation.navigate('SearchPerson')
  }
  render() {
    return (
      <View style={{ flex: 1, flexDirection: 'column' }}>
        {/* 搜索框 */}

        <View style={{ flex: 2, backgroundColor: this.state.bgColor }}>
          {/* 通讯录 */}

         <View style={{ alignItems: 'center', padding: 20, paddingBottom: 30 }}><Text style={{ fontSize: 20, color: "#fff", fontWeight: "700" }}>通讯录</Text></View>
           {/* 搜索联系人 */}

          <View style={{ flex: 1, height: 60, flexDirection: 'row', paddingLeft: 25, paddingRight: 25 }}>
            <TextInput
              style={{ flex: 3, height: 40,marginRight: 20, paddingLeft:10,borderRadius: 5, borderColor: '#3385ff', backgroundColor: '#fff', borderWidth: 1 }}
              onChangeText={text => this.onChangeText(text)}
              onFocus={this.stepSearchPerson}
              inlineImageLeft="search"
              inlineImagePadding={20}
              defaultValue='输入您要查找的联系人'
            />

            <View style={{ flex: 1 }}>
              <TouchableHighlight
                style={{ backgroundColor: '#f6f6f6', height: 40, borderRadius: 5 }}
              >
                <Text style={{ color: '#333333', textAlign: "center", lineHeight: 40 }}> 搜索 </Text>
              </TouchableHighlight>
            </View>
          </View>

        </View>

        {/* 公司，部们，收藏夹 */}
        <View style={{ backgroundColor: "#fff", flex: 2 }}>

          {/* 公司 */}
          <View style={{ flex: 3, flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' }}>
            {/* <Text  onPress={this.stepDepart}> */}
            <ImageBackground source={require('../../../assets/image/bengongsi.png')} imageStyle={{ borderRadius: 5 }} style={styles.threeItem}>
              <Text onPress={this.stepDepart} style={styles.threeItem}></Text>
            </ImageBackground>
            {/* </Text> */}

            <ImageBackground source={require('../../../assets/image/benbumen.png')} imageStyle={{ borderRadius: 5 }} style={styles.threeItem}>
              <Text onPress={this.stepSameDepart} style={styles.threeItem}></Text>

            </ImageBackground>
            <ImageBackground source={require('../../../assets/image/shoucang.png')} imageStyle={{ borderRadius: 5 }} style={styles.threeItem}>

              <Text onPress={this.stepFavorite} style={styles.threeItem}></Text>
            </ImageBackground>
          </View>

          {/* 最近访问，清空 */}
          <View style={styles.recentView}>
            <View style={styles.recentVisit}>
              <Text style={styles.clearFont}>最近访问</Text>
            </View>
            <View style={styles.clearContent}>
              <Text style={styles.clearFont}>清空</Text>
            </View>
          </View>
        </View>
        {/* 最近访问List */}
        <View style={{  flex: 5 }}>
          <StepConpoment/>

        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  threeItem: {
    width: 62,
    height: 62

  },
  recentVisit: {
    flex: 4,
    alignItems: 'flex-start',
    justifyContent: 'center',
    textAlignVertical: 'center',

  },
  clearContent: {
    // flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'center',
    textAlignVertical: 'center',
    // backgroundColor: 'pink'
  },
  clearFont: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1b90f7'
  },
  recentView: {
    flex: 1,
    backgroundColor: "#fff",
    borderTopWidth: 1,
    borderColor: '#1b90f7',
    paddingLeft: 20,
    paddingRight: 20,
    flexDirection: "row",
    fontSize: 17
  }
});
export default AddressBookScreen;