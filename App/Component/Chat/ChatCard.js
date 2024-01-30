// import {
//   StyleSheet,
//   Text,
//   View,
//   Image,
//   ScrollView,
//   ImageBackground,
//   Pressable,
// } from 'react-native';
// import React from 'react';
// import {Icon, Card} from 'react-native-basic-elements';

// const ChatCard = props => {
//   return (
//     <View
//       style={{
//         flex: 1,
//         borderTopRightRadius: 20,
//         borderTopLeftRadius: 20,
//         backgroundColor: '#EAEDED',
//       }}>
//       <Pressable onPress={() => props.navigation.navigate('Account')}>
//         <View style={styles.container}>
//           <Text style={styles.text1}>Keep Calm</Text>
//           <Text style={{...styles.text1, fontSize: 30, fontWeight: 'bold'}}>
//             And Start Yoga
//           </Text>
//           <Text style={{...styles.text1, fontSize: 15, fontWeight: '700'}}>
//             Ready to start yout first yoga session .
//           </Text>
//           <View
//             style={{
//               flexDirection: 'row',
//               marginTop: 10,
//             }}>
//             <View
//               style={{
//                 backgroundColor: 'white',
//                 height: 25,
//                 width: 25,
//                 borderRadius: 25,
//               }}>
//               <Icon
//                 name="play"
//                 type="AntDesign"
//                 style={{color: 'orange', fontSize: 25}}></Icon>
//             </View>
//             <Text style={{color: 'white', fontSize: 20, paddingLeft: 5}}>
//               10 Minutes
//             </Text>
//           </View>
//         </View>
//       </Pressable>
//       <View>
//         <Text
//           style={{
//             fontSize: 25,
//             fontFamily: 'Roboto-Bold',
//             color: '#000',
//             paddingTop: 6,
//             marginLeft: 30,
//           }}>
//           Yoga Kriya's
//         </Text>
//       </View>
//       <ScrollView horizontal showsHorizontalScrollIndicator={false}>
//         <Card style={styles.childBOX}>
//           <ImageBackground
//             borderRadius={20}
//             source={require('../../Assets/img/pose1.jpg')}
//             style={styles.imgstyle}></ImageBackground>
//         </Card>
//         <Card style={styles.childBOX}>
//           <ImageBackground
//             borderRadius={20}
//             source={require('../../Assets/img/pose2.jpg')}
//             style={styles.imgstyle}></ImageBackground>
//         </Card>
//         <Card style={styles.childBOX}></Card>
//       </ScrollView>
//     </View>
//   );
// };

// export default ChatCard;

// const styles = StyleSheet.create({
//   container: {
//     height: 180,
//     width: '80%',
//     backgroundColor: '#128feb',
//     borderRadius: 20,
//     marginLeft: 35,
//     marginTop: 15,
//     padding: 10,
//     elevation: 5,
//   },
//   text1: {
//     color: 'white',
//     fontSize: 25,
//   },

//   childBOX: {
//     height: 250,
//     width: 200,
//     backgroundColor: '#F26B23',
//     marginLeft: 35,
//     borderRadius: 20,
//     marginTop: 10,
//     padding: 0,
//   },
//   imgstyle: {
//     height: 250,
//     width: 200,
//   },
// });

// import {StyleSheet, Text, View} from 'react-native';
// import React from 'react';
// import {Icon} from 'react-native-basic-elements';

// const ChatCard = () => {
//   return (
//     <View style={styles.container}>
//       <View style={styles.flexbox}>
//         <View style={styles.childrenbox}>
//           <View
//             style={{
//               flexDirection: 'row',
//               justifyContent: 'space-around',
//             }}>
//             <Icon
//               name="house-user"
//               type="FontAwesome5"
//               style={{...styles.iconstyle, backgroundColor: '#8E44AD'}}
//             />
//             <Icon name="right" type="AntDesign" style={styles.icon2style} />
//           </View>
//           <View style={styles.textview2}>
//             <Text style={styles.textOne}>Visitors</Text>
//             <Text>Manage Guest Entities</Text>
//           </View>
//         </View>
//         <View style={styles.childrenbox}>
//           <View
//             style={{
//               flexDirection: 'row',
//               justifyContent: 'space-around',
//             }}>
//             <Icon
//               name="account-group-outline"
//               type="MaterialCommunityIcon"
//               style={{...styles.iconstyle, backgroundColor: '#F40E38'}}
//             />
//             <Icon name="right" type="AntDesign" style={styles.icon2style} />
//           </View>
//           <View style={styles.textview2}>
//             <Text style={styles.textOne}>MOM</Text>
//             <Text>View Details Of Recent Meetings</Text>
//           </View>
//         </View>
//       </View>
//       <View style={styles.flexbox}>
//         <View style={styles.childrenbox}>
//           <View
//             style={{
//               flexDirection: 'row',
//               justifyContent: 'space-around',
//             }}>
//             <Icon
//               name="laptop-house"
//               type="FontAwesome5"
//               style={{...styles.iconstyle, backgroundColor: '#0E96F4'}}
//             />
//             <Icon name="right" type="AntDesign" style={styles.icon2style} />
//           </View>
//           <View style={styles.textview2}>
//             <Text style={styles.textOne}>Recident Directory</Text>
//             <Text>Look Up Neibours</Text>
//           </View>
//         </View>

//         <View style={styles.childrenbox}>
//           <View
//             style={{
//               flexDirection: 'row',
//               justifyContent: 'space-around',
//             }}>
//             <Icon
//               name="warehouse"
//               type="FontAwesome5"
//               style={{...styles.iconstyle, backgroundColor: '#1BA552'}}
//             />
//             <Icon name="right" type="AntDesign" style={styles.icon2style} />
//           </View>
//           <View style={styles.textview2}>
//             <Text style={styles.textOne}>Amenities</Text>
//             <Text>View Building Amenities</Text>
//           </View>
//         </View>
//       </View>
//       <View style={styles.flexbox}>
//         <View style={styles.childrenbox}>
//           <View
//             style={{
//               flexDirection: 'row',
//               justifyContent: 'space-around',
//             }}>
//             <Icon
//               name="hands-helping"
//               type="FontAwesome5"
//               style={{...styles.iconstyle, backgroundColor: '#DA5C5C'}}
//             />
//             <Icon name="right" type="AntDesign" style={styles.icon2style} />
//           </View>
//           <View style={styles.textview2}>
//             <Text style={styles.textOne}>Local Services</Text>
//             <Text>Contacts for Home Help etc.</Text>
//           </View>
//         </View>
//         <View style={styles.childrenbox}>
//           <View
//             style={{
//               flexDirection: 'row',
//               justifyContent: 'space-around',
//             }}>
//             <Icon
//               name="help-circle"
//               type="Feather"
//               style={{
//                 ...styles.iconstyle,
//                 backgroundColor: '#E0EE0A',
//                 padding: 7,
//               }}
//             />
//             <Icon name="right" type="AntDesign" style={styles.icon2style} />
//           </View>
//           <View style={styles.textview2}>
//             <Text style={styles.textOne}>Help Desk</Text>
//             <Text>Raise Issues,Register Complaints</Text>
//           </View>
//         </View>
//       </View>
//     </View>
//   );
// };

// export default ChatCard;

// const styles = StyleSheet.create({
//   container: {
//     // height: '78%',
//     // backgroundColor: 'red',
//     // justifyContent: 'space-evenly',
//     flex: 1,
//   },
//   flexbox: {
//     flexDirection: 'row',
//     justifyContent: 'space-evenly',
//     marginTop: 20,
//   },
//   childrenbox: {
//     height: 170,
//     width: 170,
//     borderRadius: 3,
//     elevation: 3,
//     backgroundColor: 'white',
//     justifyContent: 'space-evenly',
//   },
//   iconstyle: {
//     fontSize: 25,
//     color: '#fff',
//     height: 40,
//     width: 40,
//     borderRadius: 40,
//     // backgroundColor: 'purple',
//     padding: 6,
//   },
//   icon2style: {
//     fontSize: 20,
//     color: '#AFB0A5',
//     paddingTop: 10,
//   },
//   textOne: {
//     fontSize: 21,
//     // fontWeight: '900',
//     color: '#000',
//     fontFamily: 'Roboto-Bold',
//   },
//   textview2: {
//     height: '50%',
//     // backgroundColor: 'pink',
//     // margin: 20,
//     padding: 20,
//   },
// });

//NEW PROJECT

// import {StyleSheet, Text, View, Image} from 'react-native';
// import React from 'react';
// import {Icon} from 'react-native-basic-elements';

// const ChatCard = ({userdata}) => {
//   return (
//     <View style={styles.container}>
//       <View style={{flexDirection: 'row'}}>
//         <Image
//           source={{
//             uri: 'https://w7.pngwing.com/pngs/140/492/png-transparent-user-avatar-playerunknown-s-battlegrounds-cryptocurrency-mixer-others-thumbnail.png',
//           }}
//           style={styles.imgstyle}
//         />
//         <View style={{justifyContent: 'flex-start'}}>
//           <Text style={{color: '#000', fontWeight: '800', fontSize: 20}}>
//             {userdata.name}
//           </Text>
//           <Text style={styles.msg}>{userdata.Message}</Text>
//         </View>
//       </View>
//       <Text
//         style={{
//           ...styles.msg,
//           position: 'absolute',
//           right: 10,
//           top: 10,
//           color: 'black',
//         }}>
//         {userdata.time}
//       </Text>
//       <View style={{height: 300, width: '100%'}}>
//         <Image
//           source={{
//             uri: 'https://www.looper.com/img/gallery/jujutsu-kaisen-what-rank-is-gojo-why-doesnt-it-matter/intro-1693282287.jpg',
//           }}
//           style={{height: 290, width: '100%'}}
//         />
//       </View>

//       <View
//         style={{
//           flexDirection: 'row',
//           justifyContent: 'space-between',
//           paddingHorizontal: 20,
//           paddingTop: 3,
//         }}>
//         <View>
//           <Icon name="like" type="Fontisto" />
//           <Text>Like</Text>
//         </View>
//         <View style={{justifyContent: 'center'}}>
//           <Icon
//             name="commenting"
//             type="FontAwesome"
//             style={{paddingLeft: 15}}
//           />
//           <Text>Comment</Text>
//         </View>
//         <View>
//           <Icon name="share" type="FontAwesome" style={{paddingLeft: 7}} />
//           <Text>Share</Text>
//         </View>
//       </View>
//     </View>
//   );
// };

// export default ChatCard;

// const styles = StyleSheet.create({
//   container: {
//     height: 400,
//     width: '100%',
//     backgroundColor: '#F2F4F4',
//     justifyContent: 'flex-start',
//     marginTop: 5,
//     paddingTop: 10,
//   },
//   imgstyle: {
//     height: 50,
//     width: 50,
//     borderRadius: 50,
//     marginHorizontal: 10,
//   },
//   msg: {
//     color: 'green',
//     fontSize: 12,
//     marginTop: 5,
//   },
//   iconstyle: {
//     width: '25%',
//     paddingTop: 10,
//     paddingLeft: 40,
//   },
// });

//NEW PROJECT

// import {StyleSheet, Text, View, Image} from 'react-native';
// import React from 'react';

// const ChatCard = ({name, msg}) => {
//   return (
//     <View style={styles.chatview}>
//       <View
//         style={{
//           alignSelf: 'flex-start',
//           paddingTop: 10,
//         }}>
//         <Image
//           source={{
//             uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFbDEYt3pc2nQmyoz3yt3ejW2IgDsHK7Vu73piQTSa3Q&s',
//           }}
//           style={styles.imagestyle}
//         />
//       </View>
//       <View
//         style={{
//           flexDirection: 'row',
//           justifyContent: 'space-between',
//           flex: 1,
//           paddingHorizontal: 10,

//           borderColor: '#000',
//           borderBottomWidth: 0.5,

//           // alignItems: 'center',
//         }}>
//         <View>
//           <Text
//             style={{
//               fontSize: 20,
//               color: '#000',
//               fontWeight: '900',
//               paddingBottom: 5,
//             }}>
//             {name}
//           </Text>
//           <Text>{msg}</Text>
//         </View>
//         <View style={{paddingTop: 40, width: 40}}>
//           <Text>2 am</Text>
//         </View>
//       </View>
//     </View>
//   );
// };

// export default ChatCard;

// const styles = StyleSheet.create({
//   chatview: {
//     height: 400,
//     width: '100%',
//     backgroundColor: 'skyblue',
//     flexDirection: 'row',
//     paddingHorizontal: 10,
//   },
//   imagestyle: {
//     height: 50,
//     width: 50,
//     borderRadius: 50,
//   },
// });
