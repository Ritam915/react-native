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
      <Header />
      <Text
        style={{
          fontSize: 30,
          fontFamily: 'Roboto-Bold',
          color: '#000',
          marginHorizontal: 10,
          marginVertical: 5,
        }}>
        General Services
      </Text>
      <View style={{flexDirection: 'row', marginTop: 10}}>
        <Card style={styles.card}>
          <Image
            source={require('../../Assets/img/changePassword.png')}
            style={{height: 50, width: 50}}
          />
          <Text>Change Password</Text>
        </Card>
        <Card style={styles.card}>
          <Icon name="person" type="Ionicon" style={{fontSize: 45}} />
          <Text>My Profile</Text>
        </Card>
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgrey',
  },
  card: {
    height: 160,
    width: '45%',
    backgroundColor: '#fff',
    marginLeft: 10,
    marginRight: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
    elevation: 10,
  },
});
