import React, { Component } from 'react';
import Swiper from 'react-native-swiper';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native'
/**
 * 首页头部轮播图
 */
class ToDoSwiper extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (
      <View style={{ height: '100%' }}>
        <Swiper style={styles.wrapper}
          //左右箭头
          showsButtons={false}
          autoplay={true}
          //轮播间隔
          autoplayTimeout={2}
          //下方原点
          // showsPagination={false} 	
          //   paginationStyle={{bottom: 10}}
          //   dot={<View style={{           //未选中的圆点样式
          //     backgroundColor: 'rgba(0,0,0,.2)',
          //     width: 18,
          //     height: 18,
          //     marginLeft:20
          // }}/>}
          //   activeDot={<View style={{ 

          //     backgroundColor: 'red',
          //     width: 18,
          //     height: 18,
          //     marginLeft:20,
          //     borderRadius:50
          //   }}/>}
          dotColor='red'
          activeDotColor='yellow'
        >

          {/* <ImageBackground source={require('../../../../assets/home/1.jpg')} imageStyle={styles.imageStyle} style={styles.swiperStyle}>
          </ImageBackground>
          <ImageBackground source={require('../../../../assets/home/2.jpg')} imageStyle={styles.imageStyle} style={styles.swiperStyle}>
          </ImageBackground>
          <ImageBackground source={require('../../../../assets/home/3.jpg')} imageStyle={styles.imageStyle} style={styles.swiperStyle}>
          </ImageBackground> */}

          <View>
            <View>
              <View style={{ marginBottom: 5, borderBottomColor: "#c1c1c1", borderBottomWidth: 1 }}>
                <View style={{ marginBottom: 5 }}>
                  <Text style={{ fontSize: 15, fontWeight: 'bold', }}><Text style={{ color: '#4b7ae3' }}>【TMS】</Text>请审批:销售订单DD45</Text>
                </View >
                <View style={{ marginBottom: 5, flexDirection: 'row', justifyContent: 'space-between', paddingLeft: 10, paddingRight: 10 }}>
                  <Text style={{ color: '#c1c1c1' }}>XXX</Text>
                  <Text style={{ alignItems: 'flex-end', color: '#c1c1c1' }}>04-10 16:20</Text>
                </View>
              </View>
              <View style={{ marginBottom: 5, borderBottomColor: "#c1c1c1", borderBottomWidth: 1 }}>
                <View style={{ marginBottom: 5 }}>
                  <Text style={{ fontSize: 15, fontWeight: 'bold', }}><Text style={{ color: '#4b7ae3' }}>【TMS】</Text>请审批:销售订单DD45</Text>
                </View >
                <View style={{ marginBottom: 5, flexDirection: 'row', justifyContent: 'space-between', paddingLeft: 10, paddingRight: 10 }}>
                  <Text style={{ color: '#c1c1c1' }}>XXX</Text>
                  <Text style={{ alignItems: 'flex-end', color: '#c1c1c1' }}>04-10 16:20</Text>
                </View>
              </View>
              <View style={{ marginBottom: 5, borderBottomColor: "#c1c1c1", borderBottomWidth: 1 }}>
                <View style={{ marginBottom: 5 }}>
                  <Text style={{ fontSize: 15, fontWeight: 'bold', }}><Text style={{ color: '#4b7ae3' }}>【TMS】</Text>请审批:销售订单DD45</Text>
                </View >
                <View style={{ marginBottom: 5, flexDirection: 'row', justifyContent: 'space-between', paddingLeft: 10, paddingRight: 10 }}>
                  <Text style={{ color: '#c1c1c1' }}>XXX</Text>
                  <Text style={{ alignItems: 'flex-end', color: '#c1c1c1' }}>04-10 16:20</Text>
                </View>
              </View>
            </View>

          </View>
          <View>
            <View>
              <View style={{ marginBottom: 5, borderBottomColor: "#c1c1c1", borderBottomWidth: 1 }}>
                <View style={{ marginBottom: 5 }}>
                  <Text style={{ fontSize: 15, fontWeight: 'bold', }}><Text style={{ color: '#4b7ae3' }}>【TMS】</Text>请审批:销售订单DD45</Text>
                </View >
                <View style={{ marginBottom: 5, flexDirection: 'row', justifyContent: 'space-between', paddingLeft: 10, paddingRight: 10 }}>
                  <Text style={{ color: '#c1c1c1' }}>XXX</Text>
                  <Text style={{ alignItems: 'flex-end', color: '#c1c1c1' }}>04-10 16:20</Text>
                </View>
              </View>
              <View style={{ marginBottom: 5, borderBottomColor: "#c1c1c1", borderBottomWidth: 1 }}>
                <View style={{ marginBottom: 5 }}>
                  <Text style={{ fontSize: 15, fontWeight: 'bold', }}><Text style={{ color: '#4b7ae3' }}>【TMS】</Text>请审批:销售订单DD45</Text>
                </View >
                <View style={{ marginBottom: 5, flexDirection: 'row', justifyContent: 'space-between', paddingLeft: 10, paddingRight: 10 }}>
                  <Text style={{ color: '#c1c1c1' }}>XXX</Text>
                  <Text style={{ alignItems: 'flex-end', color: '#c1c1c1' }}>04-10 16:20</Text>
                </View>
              </View>
              <View style={{ marginBottom: 5, borderBottomColor: "#c1c1c1", borderBottomWidth: 1 }}>
                <View style={{ marginBottom: 5 }}>
                  <Text style={{ fontSize: 15, fontWeight: 'bold', }}><Text style={{ color: '#4b7ae3' }}>【TMS】</Text>请审批:销售订单DD45</Text>
                </View >
                <View style={{ marginBottom: 5, flexDirection: 'row', justifyContent: 'space-between', paddingLeft: 10, paddingRight: 10 }}>
                  <Text style={{ color: '#c1c1c1' }}>XXX</Text>
                  <Text style={{ alignItems: 'flex-end', color: '#c1c1c1' }}>04-10 16:20</Text>
                </View>
              </View>
            </View>

          </View>
          <View>
            <View>
              <View style={{ marginBottom: 5, borderBottomColor: "#c1c1c1", borderBottomWidth: 1 }}>
                <View style={{ marginBottom: 5 }}>
                  <Text style={{ fontSize: 15, fontWeight: 'bold', }}><Text style={{ color: '#4b7ae3' }}>【TMS】</Text>请审批:销售订单DD45</Text>
                </View >
                <View style={{ marginBottom: 5, flexDirection: 'row', justifyContent: 'space-between', paddingLeft: 10, paddingRight: 10 }}>
                  <Text style={{ color: '#c1c1c1' }}>XXX</Text>
                  <Text style={{ alignItems: 'flex-end', color: '#c1c1c1' }}>04-10 16:20</Text>
                </View>
              </View>
              <View style={{ marginBottom: 5, borderBottomColor: "#c1c1c1", borderBottomWidth: 1 }}>
                <View style={{ marginBottom: 5 }}>
                  <Text style={{ fontSize: 15, fontWeight: 'bold', }}><Text style={{ color: '#4b7ae3' }}>【TMS】</Text>请审批:销售订单DD45</Text>
                </View >
                <View style={{ marginBottom: 5, flexDirection: 'row', justifyContent: 'space-between', paddingLeft: 10, paddingRight: 10 }}>
                  <Text style={{ color: '#c1c1c1' }}>XXX</Text>
                  <Text style={{ alignItems: 'flex-end', color: '#c1c1c1' }}>04-10 16:20</Text>
                </View>
              </View>
              <View style={{ marginBottom: 5, borderBottomColor: "#c1c1c1", borderBottomWidth: 1 }}>
                <View style={{ marginBottom: 5 }}>
                  <Text style={{ fontSize: 15, fontWeight: 'bold', }}><Text style={{ color: '#4b7ae3' }}>【TMS】</Text>请审批:销售订单DD45</Text>
                </View >
                <View style={{ marginBottom: 5, flexDirection: 'row', justifyContent: 'space-between', paddingLeft: 10, paddingRight: 10 }}>
                  <Text style={{ color: '#c1c1c1' }}>XXX</Text>
                  <Text style={{ alignItems: 'flex-end', color: '#c1c1c1' }}>04-10 16:20</Text>
                </View>
              </View>
            </View>

          </View>
        </Swiper>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  wrapper: {

  },
  imageStyle: {},
  swiperStyle: {
    width: '100%', height: '100%',

  },
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB',
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5',
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9',
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  }
})
export default ToDoSwiper;