import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';

const Splashscreen = () => {
  return (
    <View
      style={{
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#000',
        flex: 1,
        // justifyContent:''
      }}>
      <View></View>

      <Image
        source={require('../../Assets/img/ritam.jpeg')}
        style={styles.imgstyl}
      />

      <View>
        <Text style={styles.txt}>Students give ur Attendance pls 👨‍🎓</Text>
        <Text style={{...styles.txt, textAlign: 'center'}}>
          Made in india💕
        </Text>
      </View>
    </View>
  );
};

export default Splashscreen;

const styles = StyleSheet.create({
  imgstyl: {
    height: 200,
    width: 200,
    borderRadius: 100,
  },
  txt: {fontSize: 20, color: '#fff'},
});
