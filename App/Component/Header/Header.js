import {StyleSheet, Text, View, StatusBar} from 'react-native';
import React from 'react';
import Icon from 'react-native-basic-elements/lib/Components/Icon';

const Setting = () => {
  return (
    <View>
      <View style={{flexDirection: 'row'}}>
        <View style={styles.header}>
          <StatusBar backgroundColor={'#634cb4'} barStyle="light-content" />
          <Text style={{fontSize: 26, color: '#fff', fontWeight: 'bold'}}>
            School Attendance
          </Text>
        </View>
        <View style={styles.view2}>
          <Icon
            name="email"
            type="ZocialIcon"
            style={{...styles.Icon, color: 'yellow'}}
          />
          <Icon
            name="dots-three-vertical"
            type="Entypo"
            style={{paddingTop: 6, paddingRight: 10}}
          />
        </View>
      </View>
      <View style={{height: 30, backgroundColor: '#fff'}}></View>
    </View>
  );
};

export default Setting;

const styles = StyleSheet.create({
  header: {
    height: 50,
    width: '80%',
    backgroundColor: '#634cb4',
    paddingLeft: 10,
  },
  Icon: {
    fontSize: 30,
  },
  view2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 50,
    width: '20%',
    backgroundColor: '#634cb4',
  },
});
