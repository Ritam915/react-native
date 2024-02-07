import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import React from 'react';
// import {TextInput} from 'react-native-gesture-handler';

const Register = () => {
  return (
    <View style={{flex: 1, backgroundColor: '#FDFEFE'}}>
      <View style={{marginBottom: 20}}>
        <Text style={styles.headerText}>Create Account</Text>
        <Text style={{...styles.headerText, fontSize: 20}}>
          Fill your details below{' '}
        </Text>
      </View>
      <View style={styles.view}>
        <Text style={{alignSelf: 'flex-start', marginLeft: 40, fontSize: 15}}>
          name
        </Text>
        <TextInput style={styles.input} placeholder="ritam maity"></TextInput>
      </View>
      <View style={styles.view}>
        <Text style={{alignSelf: 'flex-start', marginLeft: 40, fontSize: 15}}>
          Phone Number
        </Text>
        <TextInput style={styles.input} placeholder="6496649411"></TextInput>
      </View>
      <View style={styles.view}>
        <Text style={{alignSelf: 'flex-start', marginLeft: 40, fontSize: 15}}>
          Email
        </Text>
        <TextInput
          style={styles.input}
          placeholder="example@gmail.com"></TextInput>
      </View>
      <View style={styles.view}>
        <Text style={{alignSelf: 'flex-start', marginLeft: 40, fontSize: 15}}>
          password
        </Text>
        <TextInput style={styles.input} placeholder="*****"></TextInput>
      </View>
      <View style={styles.view}>
        <TouchableOpacity
          style={{
            height: 40,
            width: '80%',
            // backgroundColor: '#48C9B0',
            borderRadius: 10,
            marginTop: 20,
          }}>
          <ImageBackground
            source={require('../../Assets/img/signup.jpg')}
            imageStyle={{
              height: 40,
              width: '100%',
              borderRadius: 15,
            }}></ImageBackground>
          <Text style={{alignSelf: 'center', paddingTop: 5, fontSize: 20}}>
            Sign Up
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Register;

const styles = StyleSheet.create({
  headerText: {
    fontSize: 35,
    color: '#000',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  input: {
    height: 40,
    width: '80%',
    borderColor: '#000',
    borderWidth: 0.8,
    borderRadius: 10,
    backgroundColor: 'white',
  },
  view: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
});
