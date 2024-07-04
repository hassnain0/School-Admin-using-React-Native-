
import React, { useState } from 'react';
import {Alert, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';
import {RNCamera} from 'react-native-camera';

function App(): React.JSX.Element {
  const [data,setData]=useState('scan something');
  return (
    <SafeAreaView>
      <QRCodeScanner
        onRead={({data}) => Alert.alert(data)}
        flashMode={RNCamera.Constants.FlashMode.torch}
        reactivate={true}
        reactivateTimeout={5}
        showMarker={true}
       
      />
    </SafeAreaView>
  );
}
export default App;
