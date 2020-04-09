import React, { Component } from 'react';
import { Text, View, FlatList, StyleSheet, ImageBackground, Button ,BackHandler} from 'react-native';
import depart from '../../allJson/depart.json'
class Depart extends Component {
  constructor(props) {
    super(props);
    this.state = {}
    console.log(depart)
  }

 
  stepPerson=()=>{
    this.props.navigation.navigate('Person')
  }
  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={depart.body}
          renderItem={({ item }) => <View style={styles.item}>
            <View style={{justifyContent:'center'}}>
              <ImageBackground source={require('../../../../assets/image/icon_or.png')}  style={styles.bgStyle}>
           
              </ImageBackground>
            </View>
            
            <View style={{flex:1,justifyContent:"center",marginLeft:20}}><Text style={{fontSize:16}} onPress={this.stepPerson}>{item.orgName}</Text></View>
          </View>}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#fff'
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
    flex:1,
    flexDirection:"row"

  },
})
export default Depart;