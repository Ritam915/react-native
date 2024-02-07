import {
  StyleSheet,
  Text,
  View,
  TextInput,
  StatusBar,
  ImageBackground,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {Icon} from 'react-native-basic-elements';

const Signup = () => {
  const navigation = useNavigation();
  return (
    <View style={{backgroundColor: '#fff', flex: 1}}>
      <StatusBar backgroundColor={'#fff'} barStyle="dark-content" />
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          marginBottom: 20,
          // marginTop: 20,
          height: 100,
          width: '100%',
          // backgroundColor: 'black',
        }}>
        <Text style={styles.Text}>Login</Text>
        <Text style={{...styles.Text, fontSize: 15, color: 'black'}}>
          Hi! Welcome back,you've been missed
        </Text>
      </View>

      <View>
        {/* <Text>Email or Number</Text> */}

        {/* <Icon name="email" type="Fontisto"></Icon> */}
        <TextInput
          placeholder="Email OR Number"
          style={styles.textinput}></TextInput>
        <TextInput
          placeholder="PASSWORD"
          secureTextEntry
          style={styles.textinput}></TextInput>
        <View
          style={{
            width: '85%',
            // backgroundColor: 'red',
            // justifyContent: 'flex-end',
            alignItems: 'flex-end',
            marginTop: 10,
            marginBottom: 5,
          }}>
          <TouchableOpacity style={{height: 25, borderBottomWidth: 0.5}}>
            <Text
              style={{
                color: '#634cb4',
                fontSize: 20,
                // fontWeight: 'bold',
                fontFamily: 'Roboto-Regular',
              }}>
              Forgot password?
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity
        style={styles.log}
        onPress={() => navigation.navigate('mainscreen')}>
        <ImageBackground
          source={require('../../Assets/img/login.jpg')}
          style={{}}
          imageStyle={{borderRadius: 20, height: 40, width: '100%'}}>
          <Text
            style={{
              fontSize: 25,
              color: '#fff',
              // alignItems: 'center',
              textAlign: 'center',
              paddingTop: 3,
              fontFamily: 'Roboto-Bold',
            }}>
            LOGIN
          </Text>
        </ImageBackground>
      </TouchableOpacity>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          marginHorizontal: '10%',
          marginTop: 20,
        }}>
        <View>
          <TouchableOpacity onPress={() => navigation.navigate('register')}>
            <Text
              style={{
                color: '#634cb4',
                fontSize: 23,
                fontFamily: 'Roboto-Medium',
              }}>
              Sign Up
            </Text>
          </TouchableOpacity>
          {/* <TouchableOpacity>
            <Text style={{color: '#634cb4', fontSize: 20, fontWeight: 'bold'}}>
              privacy policy
            </Text>
          </TouchableOpacity> */}
        </View>
      </View>
    </View>
  );
};

export default Signup;

const styles = StyleSheet.create({
  textinput: {
    // backgroundColor: '',
    width: '70%',
    // borderRadius: 15,
    textAlign: 'left',
    marginTop: 10,
    marginHorizontal: '15%',
    borderBottomWidth: 0.5,
  },
  log: {
    height: 40,
    width: '70%',
    borderRadius: 15,
    // backgroundColor: '#48C9B0',
    marginTop: 10,
    marginHorizontal: '15%',
  },
  Text: {
    fontSize: 35,
    color: '#000',
    textAlign: 'center',
    // fontWeight: 'bold',
    fontFamily: 'Roboto-Bold',
  },
});
