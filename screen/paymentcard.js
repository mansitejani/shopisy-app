import react from "react";
import { View, Text, StyleSheet, Image } from 'react-native';
import icon from '../assets/right-arrow.png'
import card from '../assets/Card.png'
import CheckBox from "react-native-check-box";

const Paymentcard = () => {
    return (
        <View style={{ backgroundColor: '#F9F9F9', height: 800 }}>
            <View>
                <View style={styles.box}>
                    <Image
                        source={icon}
                        style={styles.icons}
                    />
                    <Text style={styles.header}>Payment Methods</Text>
                </View>
            </View>
            <Text style={{ color: '#285F71', fontSize: 17, fontWeight: '700', marginLeft: 15, marginTop: 15 }}>Your Payment Cards</Text>
            <Image source={card}
                style={{ width: 330, height: 220, marginLeft: 13 }}
            />
            <View style={{flexDirection:'row'}}>
                <CheckBox
                    style={{ marginLeft: 25, marginTop: 10 }}
                />
                <Text style={{marginTop:10,marginLeft:10}}>Use as default payment method</Text>
            </View>

        </View>
    )

}
export default Paymentcard


const styles = StyleSheet.create({
    box: {
        backgroundColor: '#ffffff',
        height: 100,
        width: 350,
        flexDirection: 'row'
    },
    header: {
        fontSize: 20,
        fontWeight: '700',
        color: '#285F71',
        marginLeft: 50,
        marginTop: 55,
        // flexDirection:'row'
    },
    icons: {
        marginTop: 55,
        marginLeft: 15,
        // flexDirection:'row'
    },

})