import React, { Component } from 'react';
import { Text, ScrollView, ART, View, StyleSheet, TextInput, Button, TouchableHighlight, ImageBackground } from 'react-native';
import recentVisitList from '../../allJson/recentVisit'
const { Surface, Shape, Path } = ART;
class StepConpment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rowHeight: 160,
    }
  }
  render() {
    const line = new Path();
    const circle = new Path();
    let circleColor = "#59c93b";
    line.moveTo(12, 27).lineTo(12, this.state.rowHeight).close();
    circle.moveTo(12, 9)
      .arc(0, 14, 7)
      .arc(0, -14, 7)
      .close();
    circleColor = "#1b90f7";
    return (
      <View style={styles.baseStyle}>
        <ScrollView style={{marginTop:30}}>
          {recentVisitList.body &&
            recentVisitList.body.map((item, i) => {
              let sockDiv = (
                <View style={{ flex: 1, flexDirection: 'row'}}>
                  <View style={{ marginLeft: 15 ,marginTop:-5}}>
                    <ART.Surface width={24} height={this.state.rowHeight}>
                      {/* {back} */}
                      <ART.Shape style={{ zoom: 999, }} d={new Path()
                        .moveTo(12, 6)
                        .arc(0, 20, 10)
                        .arc(0, -20, 10)
                        .close()} fill="#e3d8d8"></ART.Shape>
                      <ART.Shape d={circle} fill={circleColor} stroke="#fff" strokeWidth={2}></ART.Shape>
                      <ART.Shape d={line} stroke="#e6e6e6" strokeWidth={2}></ART.Shape>
                    </ART.Surface>

                  </View>

                  <View style={{ width: '78%', height: 120, marginTop:3, marginLeft: 15, backgroundColor: '#fff', paddingLeft: 20, borderRadius: 10 }}>
                    <View style={{ flex: 1, height: 30, flexDirection: 'row', alignItems: 'center'  }}>
                      <Text style={{ fontSize: 17 }}>{item.personName}</Text>
                      <Text style={{ fontSize: 14, color: '#1b90f7', marginLeft: 30 }}>{item.personTitle}</Text>
                    </View>
                    <View style={{ flex: 1, height: 30, flexDirection: 'row', alignItems: 'center' }}>
                      <Text style={{ fontSize: 14 }}>{item.deptName} | {item.orgName}</Text>
                      {/* <Text style={{ fontSize: 13 }}></Text> */}
                    </View>
                    <View style={{ flex: 1, height: 30, flexDirection: 'row', alignItems: 'center' }}>
                      {item.telephone1 && <ImageBackground source={require('../../../../assets/image/icon_tel.png')} style={styles.bgStyle}>
                      </ImageBackground>}
                      {item.telephone1 && <Text style={{ fontSize: 14, width: 120, color: '#1b90f7' }}>{item.telephone1}</Text>}

                      {item.mobile1 && <ImageBackground source={require('../../../../assets/image/icon_tel.png')} style={styles.bgStyle}>
                      </ImageBackground>}
                      {item.mobile1 && <Text style={{ fontSize: 14, color: '#1b90f7', }}>{item.mobile1}</Text>}
                    </View>
                  </View>
                </View>
              );
              return sockDiv;
            })}

        </ScrollView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  baseStyle: {
    backgroundColor: "#f2ecec",
    height: 150,
    flex: 1,
    // flexDirection:'row'
  },
  bgStyle: {
    width: 15,
    height: 15,
    marginRight:5
  },
  stepContain: {
    flex: 1,
    width: "90%",
    // height:"80%",
    alignSelf: 'center',
    borderLeftWidth: 1,
    borderColor: "yellow",
    // backgroundColor:'pink'
  }
});
export default StepConpment;