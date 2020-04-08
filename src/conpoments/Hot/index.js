/**
 * Created by hmlk on 2018/7/19 14:15
 */
import React, {Component} from 'react'
import {
    SafeAreaView,
    View,
    Text,
    Image,
    FlatList,
    ScrollView,
    TextInput,
    StyleSheet,
    TouchableOpacity,
    TouchableWithoutFeedback
} from 'react-native'

export default class PhoneList extends Component {

    constructor(props) {
        super(props)
        this.state = {
            contacts: [
                {id: 101, name: '阿菊'},
                {id: 102, name: '爱莲'},
                {id: 103, name: '昂立拉克'},
                {id: 104, name: '冰冰'},
                {id: 105, name: '贝贝'},
                {id: 106, name: '陈伟'},
                {id: 107, name: '程浩'},
                {id: 108, name: '点啥'},
                {id: 109, name: '到啥'},
                {id: 108, name: '鄂啥'},
                {id: 108, name: '峨啥'},
                {id: 108, name: '方啥'},
                {id: 108, name: '付啥'},
                {id: 108, name: '丰啥'},
                {id: 108, name: '关啥'},
                {id: 108, name: '高啥'},
                {id: 108, name: '黄啥'},
                {id: 108, name: '解啥'},
            ],
            labels: [],
        }
    }

    componentWillMount() {

    }

    componentDidMount() {
        this._dataConvert(this._pySegSort(this.state.contacts, 'name'))
    }

    // 排序并添加首字母
    _pySegSort(arr, key) {
        const letters = "abcdefghjklmnopqrstwxyz".split('')
        const zh = "阿八嚓哒妸发旮哈讥咔垃痳拏噢妑七呥扨它穵夕丫帀".split('')
        let segs = []
        let curr
        letters.map((l, i) => {
            curr = {label: l.toUpperCase(), data: []}
            arr.map((a) => {
                if (a[key].localeCompare(zh[i], 'zh') >= 0 && ( i === letters.length - 1 || a[key].localeCompare(zh[i + 1], 'zh') < 0)) {
                    curr.data.push(a)
                }
            })
            if (curr.data.length) {
                segs.push(curr)
                curr.data.sort(function (a, b) {
                    return a[key].localeCompare(b[key], 'zh')
                })
            }
        })
        console.log("=== segs ===", JSON.stringify(segs))
        return segs
    }

    // 转换成 FlatList 需要的数据
    _dataConvert(names) {
        if (!names || names.length === 0) {
            return
        }
        let contacts = []
        let labels = []
        let index = 0
        let labelItem = {}
        names.map((item) => {
            labelItem = {
                index: index,
                label: item.label
            }
            contacts.push(labelItem)
            labels.push(labelItem)
            index++
            if (item.data && item.data.length > 0) {
                item.data.map((nameItem) => {
                    contacts.push({index: index, ...nameItem})
                    index++
                })
            }
        })
        this.setState({
            contacts: contacts,
            labels: labels
        })
    }

    render() {
        const {contacts, labels} = this.state
        const scollTo = (item) => {
            // 当viewPosition 为 0 时将它滚动到屏幕顶部，为 1 时将它滚动到屏幕底部，为 0.5 时将它滚动到屏幕中央。
            this._flatList.scrollToIndex({viewPosition: 0, index: item.index})
        }
        const renderItem = ({item}) => {
            const onPress = () => {
                alert(JSON.stringify(item))
            }
            return (
                item.id ?
                    <TouchableOpacity style={styles.listItem} onPress={onPress}>
                        <Text style={styles.itemName}>{`${item.name}`}</Text>
                    </TouchableOpacity> :
                    <View style={styles.labelItem}>
                        <Text style={styles.itemLabel}>{`${item.label}`}</Text>
                    </View>
            )
        }
        return (
            <SafeAreaView style={styles.container}>
                <FlatList data={contacts}
                          keyExtractor={(item, index) => index + ''}
                          ref={(flatList)=>this._flatList = flatList}
                          showsVerticalScrollIndicator={false}
                          renderItem={renderItem}/>
                <View style={styles.slideCtn}>
                    {labels.map((item) =>
                        <TouchableOpacity
                            key={item.label}
                            style={styles.labelCtn}
                            onPress={()=> scollTo(item)}>
                            <Text style={styles.slideLabel}>{item.label}</Text>
                        </TouchableOpacity>
                    )}
                </View>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    listItem: {
        height: 45,
        justifyContent: 'center'
    },
    labelItem: {
        height: 28,
        justifyContent: 'center',
        backgroundColor: '#E9ECF5',
    },
    itemLabel: {
        fontSize: 17,
        color: '#4C5361',
        marginLeft: 10,
        fontWeight: 'bold'
    },
    itemName: {
        fontSize: 16,
        color: '#4C5361',
        marginLeft: 10
    },
    slideCtn: {
        top: 80,
        right: 0,
        position: 'absolute',
        backgroundColor: 'transparent',
        alignItems: 'center',
    },
    labelCtn: {
        paddingLeft: 2,
        paddingRight: 2
    },
    slideLabel: {
        color: 'rgb(32,130,255)',
        fontSize: 10,
    },
})