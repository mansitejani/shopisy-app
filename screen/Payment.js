import react, { useState } from "react";
import { View, Text, StyleSheet, Image } from 'react-native';
import icon from '../assets/right-arrow.png'
import card from '../assets/Card.png'
import CheckBox from "react-native-check-box";
import google from '../assets/google.png'
import cash from '../assets/cash on delivery.png'

const Payment = () => {
    const [isSelected, setSelection] = useState(false);

    // setSelection({
    //     useState(true);
    // })

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
            <View style={{ flexDirection: 'row' }}>
                <CheckBox
                    value={isSelected}
                    onValueChange={setSelection}
                    style={{ marginLeft: 25 }}
                />
                <Text style={{ marginLeft: 25, marginTop: 2 }}>Use a default payment method</Text>
            </View>
            <View style={styles.box1}>
                <Image source={google} style={{height:45,width:45 ,marginTop:20,marginLeft:15}}/>
                <Text style={styles.text}>Google Payment</Text>

            </View>
            <View style={styles.box1}>
                <Image source={cash} style={{height:45,width:45,marginTop:20,marginLeft:15}}/>
                <Text style={styles.text}> Cash on Delivery</Text>

            </View>
        </View>
    )

}
export default Payment

const styles = StyleSheet.create({
    box: {
        backgroundColor: '#ffffff',
        height: 100,
        width: 350,
        flexDirection: 'row'

        // alignItems:'center',
        // justifyContent:'center'
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
    box1:{
        marginTop:10,
        marginLeft:12,
        backgroundColor:'#ffffff',
        height:80,
        width:330,
        borderRadius:10,
        flexDirection:'row'

    },
    text:{
        marginTop:30,
        marginLeft:20,
        fontSize:16,
        fontWeight:'500',
        color:'#285F71'
    }
})