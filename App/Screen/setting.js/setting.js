import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';
import React from 'react';

const carBrands = [
  {
    id: 1,
    name: 'kolkata',
    price: 'RS:100',
    date: '31 Dec -10:54 pm',
  },
  {
    id: 2,
    name: 'mumbai',
    price: 'RS:200',
    date: '01 Jan -11:23 am',
  },
  {
    id: 3,
    name: 'kolkata',
    price: 'RS:100',
    date: '02 Jan -12:15 pm',
  },
  {
    id: 4,
    name: 'mumbai',
    price: 'RS:200',
    date: '03 Jan -01:30 pm',
  },
  {
    id: 5,
    name: 'kolkata',
    price: 'RS:100',
    date: '04 Jan -02:45 am',
  },
  {
    id: 6,
    name: 'mumbai',
    price: 'RS:200',
    date: '05 Jan -03:00 pm',
  },
  {
    id: 7,
    name: 'kolkata',
    price: 'RS:100',
    date: '05 Jan -03:00 pm',
  },
  {
    id: 8,
    name: 'mumbai',
    price: 'RS:200',
    date: '05 Jan -03:00 pm',
  },
  {
    id: 9,
    name: 'kolkata',
    price: 'RS:100',
    date: '05 Jan -03:00 pm',
  },
  {
    id: 10,
    name: 'mumbai',
    price: 'RS:200',
    date: '05 Jan -03:00 pm',
  },
];

const Setting = () => {
  const ListItem = ({item}) => {
    return (
      <View style={styles.cardlist}>
        <Image
          style={{height: 60, width: 50}}
          source={require('../../Assets/img/car.png')}
        />
        <View style={{flexDirection: 'column'}}>
          <Text style={styles.Name}>{item.name}</Text>
          <Text
            style={{...styles.Name, fontFamily: 'Roboto-Medium', fontSize: 15}}>
            {item.price}
          </Text>
          <Text>{item.date}</Text>
        </View>
        <TouchableOpacity
          style={{
            height: 25,
            width: 80,
            backgroundColor: 'white',
            borderRadius: 10,
            alignSelf: 'center',
          }}>
          <Text
            style={{
              textAlign: 'center',
              fontFamily: 'Roboto-Bold',
              fontSize: 20,
            }}>
            Send
          </Text>
        </TouchableOpacity>
      </View>
    );
  };
  return (
    <View>
      <FlatList
        data={carBrands}
        renderItem={ListItem}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default Setting;

const styles = StyleSheet.create({
  cardlist: {
    backgroundColor: '#ECF0F1',
    height: 100,
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 10,
    flexDirection: 'row',
    margin: 10,
  },
  Name: {
    fontFamily: 'Roboto-Bold',
    color: '#000',
    fontSize: 20,
  },
});
