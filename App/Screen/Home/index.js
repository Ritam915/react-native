// import React, {Component} from 'react';
// import {View, Text, StyleSheet, FlatList, ScrollView} from 'react-native';
// import Homeheader from '../../Component/Header/Homeheader';
// import ChatCard from '../../Component/Chat/ChatCard';
// import Menu from '../../Component/Header/menu';

// const Arr = [
//   {
//     name: 'sunny',
//     Message: 'heybro',
//     time: '1 hr ago',
//   },
//   {
//     name: 'vicky',
//     Message: 'heybro',
//     time: '10 min ago',
//   },
//   {
//     name: 'Raju',
//     Message: 'heybro',
//     time: '11 hr ago',
//   },
//   {
//     name: 'Tiger',
//     Message: 'heybro',
//     time: '15 hr ago',
//   },
//   {
//     name: 'Tanmoy',
//     Message: 'heybro',
//     time: '21 hr ago',
//   },
//   {
//     name: 'carry',
//     Message: 'heybro',
//     time: '3hr  ago',
//   },
//   {
//     name: 'priya',
//     Message: 'heybro',
//     time: '1hr 5 min  ago',
//   },
//   {
//     name: 'prity',
//     Message: 'heybro',
//     time: '1 hr ago',
//   },
//   {
//     name: 'Riya',
//     Message: 'hey',
//     time: ' 50 min ago',
//   },
//   {
//     name: 'Ritam',
//     Message: 'heybro',
//     time: '1 day ago',
//   },
//   {
//     name: 'Raju',
//     Message: 'hello',
//     time: ' 5 hr ago',
//   },
//   {
//     name: 'Rani',
//     Message: 'hi',
//     time: '2 hr ago',
//   },
// ];
// const Home = () => {
//   return (
//     <View style={styles.container}>
//       <Homeheader />
//       < Menu />
//       {
//         <FlatList
//           data={Arr}
//           renderItem={({item}) => <ChatCard userdata={item} />}
//           keyExtractor={(item, index) => index}
//         />
//       }
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#000',
//   },
// });

// export default Home;

// import {StyleSheet, Text, View} from 'react-native';
// import React from 'react';
// import Homeheader from '../../Component/Header/Homeheader';
// import Menu from '../../Component/Header/menu';
// import ChatCard from '../../Component/Chat/ChatCard';

// const index = () => {
//   return (
//     <View style={styles.indexStyle}>
//       <Homeheader />
//       <ChatCard />
//       <Menu />
//     </View>
//   );
// };

// export default index;

// const styles = StyleSheet.create({
//   indexStyle: {
//     backgroundColor: '#eaebeb',
//     flex: 1,
//   },
// });

// import {StyleSheet, Text, View} from 'react-native';
// import React from 'react';
// import Homeheader from '../../Component/Header/Homeheader';
// import ChatCard from '../../Component/Chat/ChatCard';
// import Menu from '../../Component/Header/menu';

// const index = ({navigation}) => {
//   return (
//     <View style={styles.container}>
//       <Homeheader />

//       <Menu />
//     </View>
//   );
// };

// export default index;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#27ADEB',
//   },
// });
