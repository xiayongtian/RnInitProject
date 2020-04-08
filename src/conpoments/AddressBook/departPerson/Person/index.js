import React, { Component } from 'react';
import { Text, View, FlatList, StyleSheet, ImageBackground, Button } from 'react-native';
import depart from '../../allJson/person.json'
class Person extends Component {
  constructor(props) {
    super(props);
    this.state = {}
    console.log(depart)
  }
  stepPersonDetail = () => {
    this.props.navigation.navigate('PersonDetail')
  }
  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={depart.body.personList}
          renderItem={({ item }) => <View style={styles.item}>
            <View style={{ justifyContent: 'center' }} >
              <ImageBackground source={require('../../../../assets/image/icon_person.png')} style={styles.bgStyle}>
              </ImageBackground>
            </View>

            <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', marginLeft: 20 }}>
              <Text style={{ flex: 2, fontSize: 16 }} onPress={this.stepPersonDetail}>{item.personName}</Text>
              <Text style={{ flex:5, fontSize: 16 }} onPress={this.stepPersonDetail}>{item.personTitle}</Text>
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
    paddingLeft: 15,
    paddingRight: 10,
    height: 50,
    lineHeight: 50,
    borderTopWidth: 1,
    borderColor: '#dddddd',
    flex: 1,
    flexDirection: "row"

  },
})
export default Person;