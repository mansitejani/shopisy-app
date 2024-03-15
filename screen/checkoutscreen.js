import react from "react";
import { View, Text, StyleSheet, Image, Button, TouchableOpacity } from 'react-native';
import icon from '../assets/left-arrow.png';
import fedex from '../assets/fedex.png';
import usps from '../assets/usps.png';
import dhl from '../assets/dhl.png';


const Checkout = () => {


    return (
        <View style={{ backgroundColor: '#F9F9F9' }}>

            <View style={{ backgroundColor: '#ffffff' }}>
                <Image
                    source={icon}
                    style={{ width: 18, height: 18, marginLeft: 10, marginTop: 50 }}
                />
                <Text style={styles.check}>Checkout</Text>
            </View>

            <Text style={styles.address}>Shipping Adress</Text>
            <View style={styles.fbox}>
                <Text style={styles.add}>Add Adress</Text>
                <Text style={styles.change}>Change</Text>
            </View>

            <Text style={styles.payments}>Payment</Text>
            <View style={styles.fbox}>
                <Text style={styles.add}>Add Card</Text>
                <Text style={styles.change}>Change</Text>
            </View>

            <Text style={styles.payments}>Delivery Method</Text>

            <View style={styles.box}>
                <Image
                    source={fedex}
                    style={{ height: 20, width: 80, marginTop: 30, marginLeft: 15 }}
                />
                <Text style={{ marginTop: 60, marginLeft: -70 }}>2-3 days</Text>
            </View>

            <View style={styles.box1}>
                <Image
                    source={usps}
                    style={{ height: 18, width: 100, marginTop: 30, marginLeft: 3 }}
                />
                <Text style={{ marginTop: 60, marginLeft: -75 }}>2-3 days</Text>
            </View>

            <View style={styles.box2}>
                <Image
                    source={dhl}
                    style={{ height: 20, width: 80, marginTop: 30, marginLeft: 12 }}
                />
                <Text style={{ marginTop: 60, marginLeft: -70 }}>2-3 days</Text>
            </View>

            <Text style={styles.text1}>Order :</Text>
            <Text style={styles.price1}>112$</Text>
            <Text style={styles.text2}>Delivery :</Text>
            <Text style={styles.price2}>15$</Text>
            <Text style={styles.text3}>Summary :</Text>
            <Text style={styles.price3}>127$</Text>
            <View style={{ marginTop: 30, width: 300, marginLeft: 25 }}>
                {/* <Button title="submit order"
                    color={'#285F71'}
                    style={{ borderRadius: 50 }}
                /> */}
                <TouchableOpacity style={styles.btn}>
                    <Text style={styles.btn1}> CHECK OUT </Text>
                </TouchableOpacity>
            </View>

        </View>
    );
};
export default Checkout

const styles = StyleSheet.create({
    btn: {
        height: 45,
        borderRadius: 50,
        width: 280,
        backgroundColor: '#285F71',
        marginLeft: 18,
        alignItems: 'center',
        justifyContent: 'center'
    },
    btn1: {
        color: '#ffffff',
        fontSize: 16,
        fontWeight: '700'
        //   marginLeft:50
    },

    check: {
        marginLeft: 120,
        fontSize: 20,
        fontWeight: '700',
        color: '#285F71',
        marginTop: -20,
        paddingBottom: 20,
    },
    address: {
        fontWeight: '700',
        fontSize: 16,
        marginLeft: 10,
        marginTop: 20,
        color: '#285F71'
    },
    fbox: {
        backgroundColor: '#ffffff',
        height: 100,
        width: 335,
        marginTop: 10,
        borderRadius: 10,
        marginLeft: 10,
    },
    add: {
        marginTop: 5,
        marginLeft: 10,
        paddingLeft: 15,
        paddingTop: 15,
    },
    change: {
        paddingTop: 15,
        marginLeft: 270,
        marginTop: -40,
        color: '#DB3022'
    },
    payments: {
        fontWeight: '700',
        fontSize: 16,
        color: '#285F71',
        marginTop: 15,
        marginLeft: 10,
    },
    box: {
        marginLeft: 10,
        borderRadius: 10,
        backgroundColor: '#ffffff',
        width: 105,
        height: 100,
        flexDirection: 'row',
        marginTop: 11
    },
    box1: {
        backgroundColor: '#ffffff',
        borderRadius: 10,
        width: 105,
        height: 100,
        marginLeft: 125,
        marginTop: -100,
        flexDirection: 'row',
    },
    box2: {
        backgroundColor: '#ffffff',
        borderRadius: 10,
        width: 105,
        height: 100,
        marginLeft: 240,
        marginTop: -100,
        flexDirection: 'row'
    },
    text1: {
        marginLeft: 10,
        marginTop: 20,
        fontSize: 18,
        color: '#9B9B9B'
    },
    price1: {
        marginLeft: 280,
        fontWeight: '700',
        fontSize: 15,
        marginTop: -25,
        color: '#285F71'
    },
    text2: {
        marginLeft: 10,
        marginTop: 20,
        fontSize: 14,
        color: '#9B9B9B'
    },
    price2: {
        marginLeft: 285,
        fontWeight: '700',
        fontSize: 15,
        marginTop: -20,
        color: '#285F71'
    },
    text3: {
        marginLeft: 10,
        marginTop: 20,
        fontSize: 14,
        color: '#9B9B9B'
    },
    price3: {
        marginLeft: 280,
        fontWeight: '700',
        fontSize: 15,
        marginTop: -20,
        color: '#285F71'
    },



})