import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TextInput,
  View,
  Image,
} from 'react-native';
import React from 'react';
import Header from '../../Component/Header/Header';

import {useNavigation} from '@react-navigation/native';
import {} from 'react-native-gesture-handler';
import {ImageBackground} from 'react-native';
import {Card, Icon} from 'react-native-basic-elements';
import MyIcon from 'react-native-vector-icons/Ionicons';
const Profile = () => {
  const Navigation = useNavigation();
  return (
    <View style={styles.container}>
      {/* <Header /> */}
      <Text
        style={{
          fontSize: 30,
          fontFamily: 'Roboto-Bold',
          color: '#000',
          marginHorizontal: 10,
          marginVertical: 5,
        }}>
        Ritam Maity
      </Text>

      <View style={{marginLeft: 10}}>
        <TouchableOpacity style={styles.card}>
          <Image
            source={require('../../Assets/img/changePassword.png')}
            style={{height: 35, width: 35}}
          />

          <Text style={{...styles.Text, marginLeft: 15}}>Change Password</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.card}>
          <Icon name="person" type="Ionicon" style={{fontSize: 30}} />
          <Text style={styles.Text}>My Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.card}>
          {/* <Image
              source={require('../../Assets/img/settings.png')}
              style={{height: 20, width: 20}}></Image> */}
          <Icon name="settings-sharp" type="Ionicon" style={{fontSize: 30}} />
          <Text style={styles.Text}>settings</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => Navigation.navigate('Privacy-Policy')}
          style={styles.card}>
          <Icon name="privacy-tip" type="MaterialIcon" style={{fontSize: 29}} />
          <Text style={styles.Text}>privacy policy</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.card}
          onPress={() => Navigation.navigate('Terms')}>
          <Icon
            name="psychology-alt"
            type="MaterialIcon"
            style={{fontSize: 35}}
          />
          <Text style={{...styles.Text, marginLeft: 13}}>
            Terms & conditions
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.card}>
          <Icon
            name="log-out"
            type="Entypo"
            style={{fontSize: 25, paddingLeft: 7}}
          />
          <Text style={{...styles.Text, marginLeft: 18}}>Log out</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
  card: {
    flexDirection: 'row',
    height: 50,
    marginTop: 20,
    borderBottomWidth: 0.3,
  },
  Text: {
    fontSize: 15,
    marginLeft: 20,

    color: '#000',
    fontFamily: 'Roboto-Bold',
  },
});
