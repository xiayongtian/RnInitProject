import React, { Component } from 'react';
import { Dimensions, Modal, Linking, Alert, StyleSheet, Text, TouchableOpacity, ImageBackground, View } from 'react-native';
import CallPhone from '../../../../CallPhone'
const { width } = Dimensions.get('window');
export default class CustomAlertDialog extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isVisible: this.props.show,
        };
        this.entityList = this.props.entityList;
    }

    /**
      *  拨打电话
      * @param {string} phone 版本号
      * @example
      * call('18888888888')
      */
    call = phone => {
        const url = `tel:${phone}`;
        Linking.canOpenURL(url)
            .then(supported => {
                if (!supported) {
                    return Alert.alert('提示', `您的设备不支持该功能，请手动拨打 ${phone}`, [
                        { text: '确定' }
                    ]);
                }
                return Linking.openURL(url);
            })
            .catch(err => Toast.info(`出错了：${err}`, 1.5));
    };

    callMerchant = () => {
        this.call(this.props.mobile1);
    };

    componentWillReceiveProps(nextProps) {
        this.setState({ isVisible: nextProps.show });
    }

    closeModal() {
        this.setState({
            isVisible: false
        });
        this.props.closeModal(false);
    }

    renderItem(item, i) {
        let bg;
        if (i == 0) {

            bg = <ImageBackground source={require('../../../../../../assets/image/icon_msg.png')} style={styles.bgStyle}>
            </ImageBackground>
        } else {
            bg = <ImageBackground source={require('../../../../../../assets/image/icon_tel.png')} style={styles.bgStyle}>
            </ImageBackground>

        }
        return (

            <TouchableOpacity onPress={this.callMerchant} style={styles.item}>
                <View>
                    {bg}
                </View>
                <Text style={{ marginLeft: 5,color:'#1b90f7',fontWeight:'800' }}>{item}</Text>
            </TouchableOpacity>
        );
    }

    choose(i) {
        if (this.state.isVisible) {
            this.props.callback(i);
            this.closeModal();
        }
    }

    renderDialog() {
        return (
            <View style={styles.modalStyle}>
                <View style={styles.optArea}>
                    {
                        this.entityList.map((item, i) => this.renderItem(item, i))
                    }
                </View>
            </View>
        )
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <Modal
                    transparent={true}
                    visible={this.state.isVisible}
                    animationType={'fade'}
                    onRequestClose={() => this.closeModal()}>
                    <TouchableOpacity style={styles.container} activeOpacity={1}
                        onPress={() => this.closeModal()}>
                        {this.renderDialog()}
                    </TouchableOpacity>
                </Modal>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    bgStyle: {
        width: 22,
        height: 22
    },
    container: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalStyle: {
        position: "absolute",
        left: 0,
        bottom: 0,
        width: width,
        flex: 1,
        flexDirection: "column",
        backgroundColor: '#ffffff',
    },
    optArea: {
        flex: 1,

        flexDirection: 'column',
        marginTop: 12,
        marginBottom: 12,
    },
    item: {
        width: width,
        height: 40,
        paddingLeft: 20,
        paddingRight: 20,
        alignItems: 'center',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#dddddd'

    },
    itemText: {
        fontSize: 16,
        marginLeft: 10
    },
    cancel: {
        width: width,
        height: 30,
        marginTop: 12,
        alignItems: 'center',
        backgroundColor: '#ffffff'
    },
});