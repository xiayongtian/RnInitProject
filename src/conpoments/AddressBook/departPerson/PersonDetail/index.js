import React, { Component } from 'react';
import { Text, View, FlatList, StyleSheet, ImageBackground, Button } from 'react-native';
import personDetail from '../../allJson/personDetail.json'
class PersonDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {}

  }
  render() {
    return (
      <View style={styles.container}>

        <View style={[styles.detailItem, { textAlign: 'center', flexDirection: 'row', alignItems: "center" }]}>
          <View style={{ flex: 1, alignItems: 'flex-end', justifyContent: 'center', paddingRight: 40 }}><Text style={{ fontSize: 18, color: '#333333', }}>{personDetail.body.personName}</Text></View>

          <View style={{ flex: 1, alignItems: 'flex-start' }}>
            <ImageBackground source={require('../../../../assets/image/collect.png')} style={styles.bgStyle}>
            </ImageBackground>
          </View>

        </View>
        <View><Text style={styles.detailItem}><Text>所属公司：</Text><Text>{personDetail.body.companyName}</Text></Text></View>
        <View><Text style={styles.detailItem}><Text>部        们：</Text>{personDetail.body.orgName}</Text></View>
        <View><Text style={styles.detailItem}><Text>职        务：</Text>{personDetail.body.personTitle}</Text></View>
        <View><Text style={styles.detailItem}><Text>办公地点：</Text>{personDetail.body.address}</Text></View>
        <View><Text style={styles.detailItem}><Text>手        机：</Text>{personDetail.body.mobile1}</Text></View>
        <View><Text style={styles.detailItem}><Text>办公电话：</Text>{personDetail.body.telephone1}</Text></View>



      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
    //  paddingTop: 22
  },
  detailItem: {
    // flex:1,
    // flexDirection:'row',
    // height: 50,
    // lineHeight: 50,
    paddingTop: 15,
    paddingBottom: 15,
    borderBottomWidth: 1,
    borderColor: '#dddddd',
    fontSize: 18,
    color: '#333333',
    paddingLeft: 20,


  },
  bgStyle: {
    width: 40,
    height: 40
  },
  item: {
    paddingLeft: 15,
    paddingRight: 10,
    height: 44,
    lineHeight: 44,
    borderTopWidth: 1,
    borderColor: '#dddddd',
    flex: 1,
    flexDirection: "row"

  },
})
export default PersonDetail;