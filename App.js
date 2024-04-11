import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import CustomInputBox from './src/component/CustomInputBox';

const App = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <CustomInputBox />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({});
