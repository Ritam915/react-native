import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {StatusBar, Icon, Card} from 'react-native-basic-elements';
import Header from '../../Component/Header/Header';

const Homeheader = () => {
  return (
    <View>
      {/* <Header /> */}
      <Text
        style={{
          fontFamily: 'Roboto-Bold',
          fontSize: 30,
          color: '#000',
          margin: 10,
        }}>
        Input Services
      </Text>
      <View style={{flexDirection: 'row'}}>
        <Card style={styles.cardstyl}>
          <Image
            source={{
              uri: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQP89Dv_A3txXbHLcFp0MnE1gqdDyqmV0tR1x4__baGy_NVUo3C',
            }}
            style={styles.icnstyle}></Image>
          <Text>Student Attendance</Text>
        </Card>
        <Card style={styles.cardstyl}>
          <Image
            source={{
              uri: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSOpg3L4z-590ifBpyOGTTmL8A_GjnCyvMOp4tqr6suxO0dSJD9',
            }}
            style={styles.icnstyle}></Image>
          <Text>Employee Attendance</Text>
        </Card>
      </View>
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <Card style={styles.cardstyl}>
          <Image
            source={{
              uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzq5byqecSEg9KW7Xf2qiFWRDzZMRFtTKtAbUsccLoW_Q9Qktg',
            }}
            style={styles.icnstyle}></Image>
          <Text>Leave Management</Text>
        </Card>
      </View>
    </View>
  );
};

export default Homeheader;

const styles = StyleSheet.create({
  cardstyl: {
    height: 160,
    width: '45%',
    backgroundColor: '#fff',
    marginLeft: 10,
    marginRight: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
    marginTop: 5,
    elevation: 10,
  },
  icnstyle: {
    height: 50,
    width: 50,
  },
});
