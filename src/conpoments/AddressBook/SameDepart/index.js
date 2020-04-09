import React, { Component } from 'react';
import { Text, View, FlatList, StyleSheet, ImageBackground, Button } from 'react-native';
import sameDepart from '../allJson/sameDepart.json'
class SameDepart extends Component {
  constructor(props) {
    super(props);
    this.state = {}

  }

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={sameDepart.body.personList}
          renderItem={({ item }) => <View style={styles.item}>
            <View style={{ justifyContent: 'center' }} >
              <ImageBackground source={require('../../../assets/image/icon_person.png')} style={styles.bgStyle}>
              </ImageBackground>
            </View>

            <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', marginLeft: 20 }}>
              <Text style={{ flex: 2, fontSize: 16 }} >{item.personName}</Text>
              <Text style={{ flex:5, fontSize: 16 }} >{item.personTitle}</Text>
            </View>
          </View>}
        />
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
  bgStyle: {
    width: 40,
    height: 40
  },
  item: {
    paddingLeft: 5,
    // paddingRight: 10,
    marginLeft:10,
    marginRight:10,
    height: 50,
    lineHeight: 50,
    borderBottomWidth: 1,
    borderColor: '#dddddd',
    flex: 1,
    flexDirection: "row"

  },
})
export default SameDepart;