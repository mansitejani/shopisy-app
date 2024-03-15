import React from 'react';
import { View } from 'react-native';
import Checkout from './screen/checkoutscreen';
import ShippingAdd from './screen/shippingAdd';
import Addingshipping from './screen/Addingshipping';
import Scan from './screen/Scan';
import Success from './screen/Success'
import Profile from './screen/profile'
import Payment from './screen/Payment'
import Paymentcard from './screen/paymentcard';

export default function App() {
  return (
    <View>
      {/* <Addingshipping/> */}
      {/* <ShippingAdd/> */}
      {/* <Checkout /> */}
      {/* <Profile /> */}
      {/* <Success/> */}
      {/* <Scan /> */}
      {/* <Payment/> */}
      <Paymentcard />
    </View>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
