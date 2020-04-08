import React, { Component } from 'react';
import { Text, ART, View, StyleSheet, TextInput, Button, TouchableHighlight, ImageBackground } from 'react-native';

const { Surface, Shape, Path } = ART;
class StepConpment extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    const line = new Path();
    const circle = new Path();
    let circleColor = "red";
    let y = 60
    line.moveTo(12, 0)
      .lineTo(12, y).close();

    circle.moveTo(12, 60 * 0.25)
      .arc(0, 10, 5)
      .arc(0, -10, 5)
      .close();
    return (
      <View style={styles.baseStyle}>
        {/* <View style={styles.stepContain}>
          <View style={{flex:1}}><Text>123</Text></View>
          <View style={{flex:4,flexDirection:'row',backgroundColor:'blue'}}>
            <View style={{width:20,backgroundColor:'gray'}}>
              <View style={{height:30,backgroundColor:'red'}}><Text>2</Text></View>
              <View><Text>2</Text></View>
            </View>
            <View style={{flex:1,backgroundColor:'pink'}}><Text>213</Text></View>

          </View>

        </View> */}


        <ART.Surface width={80} height={80}>
          {/* {back} */}
          <ART.Shape style={{ zoom: 999, opacity: 0.1 }} d={new Path()
            .moveTo(12, 6)
            .arc(0, 30, 10)
            .arc(0, -30, 10)
            .close()} fill="#d3e2cf"></ART.Shape>
          <ART.Shape d={circle} fill={circleColor} stroke="blue" strokeWidth={4}></ART.Shape>
          <ART.Shape d={line} stroke="yellow" strokeWidth={1}></ART.Shape>
        </ART.Surface>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  baseStyle: {
    backgroundColor: "#f2ecec",
    height: 150,
    // flex:1,
    // flexDirection:'row'
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