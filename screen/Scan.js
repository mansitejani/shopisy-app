import react from "react";
import { View, Text, Image, StyleSheet } from 'react-native';
import scaner from '../assets/scanner.png'
import icon from '../assets/right-arrow.png'

const Scan = () => {
    return (
        <View style={{ backgroundColor: '#F9F9F9', height: 800 }}>
            <View>
                <View style={styles.box}>
                    <Image
                        source={icon}
                        style={styles.icons}
                    />
                    <Text style={styles.header}>Payment Scanner</Text>
                </View>
            </View>
            <View style={styles.box1}>
                <Image
                    source={scaner}
                    style={{ height: 300, width: 350 }}
                />
            </View>
            <Text style={styles.text}>Scan to pay with any API app</Text>
        </View>
    )

}
export default Scan

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
    text: {
        color: '#285F71',
        fontSize: 16,
        marginLeft: 70

    },
    box1: {
        height: 300,
        width: 300,
        backgroundColor: '#ffffff',
        marginTop: 100,
        marginLeft: 30,
        alignItems: 'center'
    }

})