import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import Header from '../../Component/Header/Header';
import {Card, Icon} from 'react-native-basic-elements';

const Setting = () => {
  return (
    <View style={styles.container}>
      <Header />
      <Text
        style={{
          fontFamily: 'Roboto-Bold',
          fontSize: 30,
          color: '#000',
          margin: 10,
        }}>
        Reports
      </Text>
      <View style={{flexDirection: 'row', marginTop: 10}}>
        <Card style={styles.cards}>
          <Image
            source={require('../../Assets/img/Screenshot.jpg')}
            style={{height: 60, width: 60}}
          />
          <Text>Students Attendance Reports</Text>
        </Card>
        <Card style={styles.cards}>
          <Image
            source={require('../../Assets/img/Screenshot.jpg')}
            style={{height: 60, width: 60}}
          />
          <Text> Self Attendance Report</Text>
        </Card>
      </View>
    </View>
  );
};

export default Setting;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgrey',
  },
  cards: {
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
