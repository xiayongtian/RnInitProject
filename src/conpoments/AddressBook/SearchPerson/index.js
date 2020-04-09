import React, { Component } from 'react';
import { Text, View, FlatList,TextInput, StyleSheet, ImageBackground, Button,TouchableHighlight } from 'react-native';
import searchList from '../allJson/searchList.json'
class SearchPerson extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bgColor: "#fff"
    }
  }
  onChangeText = (Text) => {
    console.log(Text)
  }
  render() {
    return (
      <View style={{ flex: 1, flexDirection: 'column' ,backgroundColor:"#fff"}}>
        {/* 搜索框 */}
        <View style={{height:50,marginBottom:20, backgroundColor: this.state.bgColor }}>
          <View style={{ flex: 1, height: 60, flexDirection: 'row', marginLeft: 10, paddingTop: 10, marginRight: 10 }}>
            <TextInput
              style={{ flex: 5, height: 40, marginRight: 20, paddingLeft: 10, borderRadius: 5, borderColor: '#dddddd', backgroundColor: '#fff', borderWidth: 1 }}
              onChangeText={text => this.onChangeText(text)}
              inlineImageLeft="search"
              inlineImagePadding={20}
              autoFocus={true}
            // defaultValue='输入您要查找的联系人'
            />
            <View style={{ flex: 1 }}>
              <TouchableHighlight
                style={{ backgroundColor: '#f6f6f6', height: 40, borderRadius: 5 }}
              >
                <Text style={{ color: '#333333', textAlign: "center", lineHeight: 40, fontSize: 17, fontWeight: '700' }}> 搜索 </Text>
              </TouchableHighlight>
            </View>
          </View>

        </View>
        <View style={{backgroundColor:'#fff'}}>
        <FlatList
          data={searchList.body}
          renderItem={({ item,index }) => <View style={[styles.item,{borderTopWidth : index==0 ? 1 : 0,borderColor : index==0 ? '#dddddd' : "#dddddd"}]}>
            <View style={{ justifyContent: 'center' }} >
              <ImageBackground source={require('../../../assets/image/icon_person.png')} style={styles.bgStyle}>
              </ImageBackground>
            </View>

            <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', marginLeft: 20 }}>
              <Text style={{ flex: 2, fontSize: 16 }} >{item.personName}</Text>
              <Text style={{ flex: 5, fontSize: 16 }} >{item.companyName}</Text>
            </View>
          </View>}
        />

        </View>
        
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

    height: 60,
    lineHeight: 60,
    borderBottomWidth: 1,
    borderColor: '#dddddd',
    flex: 1,
    flexDirection: "row"

  },
});
export default SearchPerson;