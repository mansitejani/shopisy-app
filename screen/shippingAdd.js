import React, { useState } from "react";
import { Text, StyleSheet, View, Button, Image } from 'react-native';
import CheckBox from "react-native-check-box";
import icon from '../assets/left-arrow.png';
import plus from '../assets/plus.png'

const ShippingAdd = () => {

    const [isSelected, setSelection] = useState(false);

    return (
        <View style={{ backgroundColor: '#F9F9F9', height: 800 }}>
            <View style={{ backgroundColor: '#ffffff' }}>
                <Image
                    source={icon}
                    style={{ width: 18, height: 18, marginLeft: 10, marginTop: 50 }}
                />
                <Text style={styles.add}>Shipping Addresses</Text>
            </View>
            <View style={styles.box}>
                <Text style={styles.text1}>Jane Doe</Text>
                <Text style={styles.Edit1}>Edit</Text>
                <Text style={styles.new}>3,NewBridge court Chinno Hills, CA 91709 United States.. </Text>
                <View style={{ flexDirection: 'row' }}>
                    <CheckBox
                        value={isSelected}
                        onValueChange={setSelection}
                        style={{ marginTop: 15 }}
                    />
                    <Text style={styles.new1}>Use as the shipping address </Text>
                </View>
            </View>

            <View style={styles.box}>
                <Text style={styles.text1}>Jane Doe</Text>
                <Text style={styles.Edit1}>Edit</Text>
                <Text style={styles.new}>3,NewBridge court Chinno Hills, CA 91709 United States.. </Text>
                <View style={{ flexDirection: 'row' }}>
                    <CheckBox
                        value={isSelected}
                        onValueChange={setSelection}
                        style={{ marginTop: 15 }}
                    />
                    <Text style={styles.new1}>Use as the shipping address </Text>
                </View>
            </View>

            <View style={styles.box}>
                <Text style={styles.text1}>Jane Doe</Text>
                <Text style={styles.Edit1}>Edit</Text>
                <Text style={styles.new}>51,River view, CA 91709 United States.. </Text>
                <View style={{ flexDirection: 'row' }}>
                    <CheckBox
                        value={isSelected}
                        onValueChange={setSelection}
                        style={{ marginTop: 15 }}
                    />
                    <Text style={styles.new1}>Use as the shipping address </Text>
                </View>
            </View>


            <View>
                <Text style={styles.btn}></Text>
                <Image
                    source={plus}
                    style={{ width: 18, height: 18, marginLeft: 306, marginTop: -33 }}
                />
            </View>

        </View>
    )

}
export default ShippingAdd;

const styles = StyleSheet.create({
    add: {
        marginLeft: 80,
        fontSize: 20,
        fontWeight: '700',
        color: '#285F71',
        marginTop: -20,
        paddingBottom: 20,
    },
    box: {
        // borderWidth: 1,
        backgroundColor: '#ffffff',
        height: 150,
        marginTop: 20,
        width: 335,
        marginLeft: 10,
        borderRadius: 10,
        paddingLeft: 20,
        paddingTop: 15,

    },
    text1: {
        fontWeight: '700',
    },
    Edit1: {
        color: '#DB3022',
        marginLeft: 255,
        marginTop: -18
    },
    new: {
        marginRight: 80,
        marginTop: 10,

    },
    new1: {
        marginTop: 17,
        marginLeft: 20

    },
    btn: {
        // borderWidth:1,
        height: 50,
        width: 50,
        marginLeft: 290,
        marginTop: 20,
        borderRadius: 50,
        backgroundColor: '#285F71'

    },
    checkbox: {

    }
})