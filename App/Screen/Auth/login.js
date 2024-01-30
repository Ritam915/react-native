import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Homeheader from '../../Component/Header/Homeheader';
const Login = () => {
  return (
    <View style={styles.container}>
      <Homeheader />
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: 'lightgrey'},
});
