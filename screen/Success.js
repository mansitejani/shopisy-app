import react from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import image from '../assets/bags.png'

const Success = () => {
    return (
        <View style={{ backgroundColor: '#F9F9F9', height: 800 }}>
            <Image
                source={image}
                style={{ marginLeft: 75, marginTop: 200 }}
            />
            <Text style={styles.success}>Success !</Text>
            <Text style={styles.text}>Your Order Will Be Delivered soon. Thank You for choosing  our App !</Text>
            
            <TouchableOpacity style={styles.btn}>
                <Text style={styles.btntext}>CONTINUE SHOPPING</Text>
            </TouchableOpacity>
        </View>
    )

}
export default Success;

const styles = StyleSheet.create({
    success: {
        fontSize: 26,
        fontWeight: '700',
        color: '#285F71',
        marginLeft: 120,
        marginTop: 20
    },
    text: {
        fontSize: 15,
        marginLeft: 55,
        marginRight: 50,
        marginTop: 10
    },
    btn: {
        height: 50,
        width: 280,
        backgroundColor: '#285F71',
        borderRadius: 50,
        marginLeft: 40,
        marginTop: 150,
        alignItems: 'center',
        justifyContent: 'center'

    },
    btntext: {
        fontSize: 16,
        color: '#ffffff',
        fontWeight: '700',

    }
})