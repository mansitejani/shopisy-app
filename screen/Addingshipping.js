import React from "react";
import { View, Text, StyleSheet, Image, TextInput, Button, TouchableOpacity } from 'react-native';
import icon from '../assets/left-arrow.png';

const Addingshipping = () => {
    return (
        <View style={{ backgroundColor: '#F9F9F9' }}>
            <View style={{ backgroundColor: '#ffffff', }}>
                <Image
                    source={icon}
                    style={{ width: 18, height: 18, marginLeft: 10, marginTop: 50 }}
                />
                <Text style={styles.header}>Adding Shipping Address</Text>
            </View>
            <View>
                <TextInput
                    placeholder="Full Name"
                    style={styles.textinput}
                />
                <TextInput
                    placeholder="Address"
                    style={styles.textinput}
                />
                <TextInput
                    placeholder="City"
                    style={styles.textinput}
                />
                <TextInput
                    placeholder="State/Region"
                    style={styles.textinput}
                />
                <TextInput
                    placeholder="Zip code/Portal code"
                    style={styles.textinput}
                />
                <TextInput
                    placeholder="Country"
                    style={styles.textinput}
                />
            </View>
            <View style={{ marginTop: 30, width: 300, height: 200, marginLeft: 25, }} >
                {/* <Button
                    title="save address"
                    color={'#285F71'}
                /> */}
                <TouchableOpacity style={styles.btn}>
                    <Text style={styles.btn1}> Submit </Text>
                </TouchableOpacity>
            </View>
        </View>
    )

}
export default Addingshipping;

const styles = StyleSheet.create({
    btn: {
        height: 50,
        width: 280,
        backgroundColor: '#285F71',
        marginLeft: 15,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center'
    },
    btn1: {
        fontSize: 18,
        fontWeight: '700',
    },
    header: {
        marginLeft: 70,
        fontSize: 20,
        fontWeight: '700',
        color: '#285F71',
        marginTop: -20,
        paddingBottom: 20,
    },
    textinput: {
        // borderWidth: 1,
        padding: 0,
        height: 60,
        width: 335,
        borderRadius: 5,
        marginLeft: 10,
        marginTop: 20,
        paddingLeft: 10,
        backgroundColor: '#ffffff',
    }
})
