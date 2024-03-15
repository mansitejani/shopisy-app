import React from "react";
import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';
import icon from '../assets/search.png'
import icon1 from '../assets/right-arrow.png'
import profile from '../assets/profile.png'


const Profile = () => {
    return (
        <View style={{ backgroundColor: '#F9F9F9' }}>
            <Image
                source={icon}
                style={{ marginTop: 50, marginLeft: 300, height: 25, width: 25 }}
            />
            <Text style={styles.Header}>My Profile</Text>
            <View>
                <Image source={profile} style={{ height: 100, width: 100, marginLeft: 10 }} />
                {/* <Text style={styles.round}>
                    
                </Text> */}
                <Text style={styles.user}> Name</Text>
                <Text style={styles.email}>namelastname2gmail.com</Text>
            </View>
            <View>
                <View style={styles.box}>


                    <View style={{ flexDirection: 'row' }}>
                        <Text style={{ marginLeft: 10, fontSize: 18, fontWeight: '700', marginTop: 10 }}>My Order</Text>
                        <Image
                            source={icon1}
                            style={{ marginLeft: 210 ,marginTop:10 }}
                        />
                    </View>
                    <Text style={{ marginLeft: 10 }}>Already have 12 Order</Text>
                </View>
                

            </View>


            {/* <View>
                <View style={styles.box1}>
                    <Image
                        source={icon1}
                        style={styles.icons}
                    />
                    <Text style={styles.order}>Shipping Addresses</Text>
                    <Text style={styles.data}>3 Addresses</Text></View>
            </View> */}
            {/*<View>
                <Text style={styles.box1}></Text>
                <Text style={styles.order}>Payment Methods</Text>
                <Text style={styles.data}>Visa ***34</Text>
            </View>
            <View>
                <Text style={styles.box1}></Text>
                <Text style={styles.order}>My Reviews</Text>
                <Text style={styles.data}>Reviews for 4 items</Text>
            </View>
            <View>
                <Text style={styles.box1}></Text>
                <Text style={styles.order}>Settings</Text>
                <Text style={styles.data}>Notifications , Passwords</Text>
            </View> */}
        
        </View>
    )
}
export default Profile;

const styles = StyleSheet.create({
    Header: {
        marginLeft: 20,
        fontSize: 25,
        fontWeight: '700',
        color: '#285F71',
        paddingBottom: 20,
    },
    round: {
        height: 80,
        width: 80,
        borderRadius: 50,
        marginLeft: 10,
        backgroundColor: '#ffffff',
    },
    user: {
        marginLeft: 118,
        marginTop: -70,
        fontSize: 16,
        fontWeight: '500'
    },
    email: {
        marginLeft: 120,
        fontSize: 14,
    },
    box: {
        height: 80,
        backgroundColor: '#ffffff',
        width: 335,
        marginTop: 30,
        borderRadius: 10,
        marginLeft: 10,

    },
    icons: {
        marginLeft: 280,
        marginTop: 90,
        // flexDirection: 'row'
    },
    order: {
        fontWeight: '700',
        fontSize: 18,
        marginTop: 32,
        paddingLeft: 15,
        marginLeft: 10,
        // flexDirection: 'row'
    },
    data: {
        marginLeft: 25,
        marginTop: 5,
    },
    box: {
        height: 80,
        backgroundColor: '#ffffff',
        width: 335,
        marginTop: 50,
        borderRadius: 10,
        marginLeft: 10,

    },
    icons: {
        marginLeft: 280,
        marginTop: -50,
        flexDirection: 'row'
    },
    order1: {
        fontWeight: '700',
        fontSize: 18,
        marginTop: -70,
        paddingLeft: 15,
        marginLeft: 10,
        flexDirection: 'row'
    },
    data1: {
        marginLeft: 25,
        marginTop: 5,
        flexDirection: 'row'
    },
    box1: {
        height: 80,
        backgroundColor: '#ffffff',
        width: 335,
        marginTop: 30,
        borderRadius: 10,
        marginLeft: 10
    }
})