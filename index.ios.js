import React, { Component } from 'react';
import {
  AppRegistry,
} from 'react-native';

import StartingPoint from './build/index-root';

AppRegistry.registerComponent('MyProject', () => StartingPoint);

// import React, { Component } from 'react';
// import {
//   AppRegistry,
//   StyleSheet,
//   Text,
//   View,
//   Animated,
//   TouchableOpacity,
//   ScrollView,
//   DatePickerIOS,
//   Dimensions,
//   TabBarIOS,
//   Image,
//   TextInput,
//   AppState,
// } from 'react-native';

// import Icon from 'react-native-vector-icons/Ionicons';

// // gets the dimensions of your window
// const windowSize = Dimensions.get("window");
// const pages = {
//   home: {
//     pageName: 'home',
//     backgroundColor: 'red',
//   },
//   feed: {
//     pageName: 'feed',
//     backgroundColor: 'blue',
//   },
//   settings: {
//     pageName: 'settings',
//     backgroundColor: 'green',
//   },
//   profile: {
//     pageName: 'profile',
//     backgroundColor: 'purple',
//   }
// };

// // Object.keys(pages)[0]; // => ['home', 'feed', 'settings'];

// class MyProject extends Component {

//   constructor(props) {
//     super(props);
//     this.state = {
//       // infoText: "HELLO",
//       // ballOffset: new Animated.Value(0)
//       // selectedTab: "First",
//       selectedTab: "home",
//       scrollX: new Animated.Value(0),
//     }

//     this.scrollView = null;
//     setTimeout(() => {
//       console.log("hello");
//     }, 5000)
//   }

//   // render () {
//   //   return (
//   //     <TabBarIOS
//   //     unselectedTintColor="white"
//   //     tintColor="yellow"
//   //     barTintColor="#272822"
//   //     style={{ flex: 1, backgroundColor: "black"}}>
//   //       { /* First tab */ }
//   //       <TabBarIOS.Item
//   //         title={ "First Tab" }
//   //         selected={this.state.selectedTab === "First"}
//   //         onPress={() => {
//   //           this.setState({
//   //             selectedTab: "First"
//   //           })
//   //         }}>
//   //         <View style={{ flex: 1, backgroundColor: "blue" }}>
//   //           <ScrollView style={styles.scrollView}>
//   //             <Image
//   //               style={{ height: 300 }}
//   //               source={require("./img/Pokemon.gif")}
//   //               >
//   //             </Image>
//   //             <TextInput
//   //               style={{ height: 50, backgroundColor: 'green' }}
//   //               onChange={(event) => {
//   //                 console.log(event.nativeEvent.text);
//   //               }}>
//   //             </TextInput>
//   //           </ScrollView>
//   //         </View>
//   //       </TabBarIOS.Item>
//   //     {  Second tab  }
//   //       <TabBarIOS.Item
//   //         title={ "Second Tab" }
//   //         selected={this.state.selectedTab === "Second"}
//   //         onPress={() => {
//   //           this.setState({
//   //             selectedTab: "Second"
//   //           })
//   //         }}>
//   //         <View style={{ flex:1, backgroundColor: "white" }}>
//   //           <View style={[styles.container, { backgroundColor: "purple" }]}>
//   //           </View>
//   //           <View style={[styles.container, { backgroundColor: "green" }]}>
//   //           </View>
//   //           <View style={[styles.container, { backgroundColor: "blue" }]}>
//   //           </View>
//   //         </View>
//   //       </TabBarIOS.Item>
//   //     { /* Third tab */ }
//   //       <TabBarIOS.Item
//   //         title={ "Third Tab" }
//   //         selected={this.state.selectedTab === "Third"}
//   //         onPress={() => {
//   //           this.setState({
//   //             selectedTab: "Third"
//   //           })
//   //         }}>
//   //         <View style={{ flex: 1, backgroundColor: "orange" }}>
//   //         </View>
//   //       </TabBarIOS.Item>
//   //     </TabBarIOS>
//   //   )
//   // }


//   getPages() {
//     var pageElements = [];
//     Object.keys(pages).forEach((key, index) => {
//       const page = pages[key];
//       var content = null;
//       if (key === "home") {
//         content = (
//           <View style={{ flex: 1, alignItems: "stretch" }}>
//             <ScrollView style={{ flex: 1, backgroundColor: "black" }}></ScrollView>
//             <View style={{ position: "absolute", alignItems: "center", backgroundColor: "transparent", width: windowSize.width, left: 0, bottom: 0 }}>
//               <View style={{ justifyContent: "center", alignItems: "center", height: 50, width: 100, backgroundColor: "blue", borderTopLeftRadius: 50, borderTopRightRadius: 50 }}>
//                 <Icon
//                   name={"ios-add"}
//                   color={"white"}
//                   size={44}
//                   style={{ top: 5 }}>
//                 </Icon>
//               </View>
//             </View>
//           </View>
//         );
//       }
//       pageElements.push(
//         <View
//           key={index}
//           style={{ flex: 1, width: windowSize.width, backgroundColor: page.backgroundColor }}>
//           { content }
//         </View>
//       );
//     });
//     return pageElements;
//   }

//   getTabs() {
//     var tabElements = [];
//     Object.keys(pages).forEach((key, index) => {
//       const tab = pages[key];
//       // const backgroundColor = key === this.state.selectedTab ? 'gray' : 'white';
//       const textColor = key === this.state.selectedTab ? 'blue' : 'black';
//       tabElements.push(
//         <TouchableOpacity
//           activeOpacity={1}
//           onPress={() => this.selectTab(key)}
//           key={index}
//           style={[styles.tab, { backgroundColor: 'white' }]}>
//           <Text style={{ color: textColor }}>{ tab.pageName.toUpperCase() }</Text>
//         </TouchableOpacity>
//       );
//     });
//     return tabElements;
//   }

//   selectTab(pageName) {
//     const pageIndex = Object.keys(pages).indexOf(pageName);
//     this.setState({
//       selectedTab: pageName,
//     });
//     this.scrollView.scrollTo({
//       x: pageIndex * windowSize.width,
//       y: 0,
//       animated: true,
//     });
//   }

//   onScrollMove(event) {
//     // const scrollViewOffsetX = event.nativeEvent.contentOffset.x;
//     // // console.log(scrollViewOffsetX);
//     // const pageList = Object.keys(pages);
//     // pageList.forEach((key, index) => {
//     //   // const pageIndex = pageList.indexOf(key);
//     //   const pageOffset = index * windowSize.width;
//     //   // console.log(pageOffset, scrollViewOffsetX);
//     //   if (pageOffset === scrollViewOffsetX) {
//     //     // Scroll view offset is equal to page offset
//     //     if (this.state.selectedTab !== key) {
//     //       this.setState({
//     //         selectedTab: key,
//     //       });
//     //     }
//     //   }
//     // });
//     // console.log(event.nativeEvent.contentOffset);
//   }

//   onMomentumScrollEnd(event) {
//     const scrollViewOffsetX = event.nativeEvent.contentOffset.x;
//     // console.log(scrollViewOffsetX);
//     const pageList = Object.keys(pages);
//     pageList.forEach((key, index) => {
//       // const pageIndex = pageList.indexOf(key);
//       const pageOffset = index * windowSize.width;
//       // console.log(pageOffset, scrollViewOffsetX);
//       if (pageOffset === scrollViewOffsetX) {
//         // Scroll view offset is equal to page offset
//         if (this.state.selectedTab !== key) {
//           this.setState({
//             selectedTab: key,
//           });
//         }
//       }
//     });
//   }

//   render() {
//     return (
//       <View style={{ flex: 1, alignItems: "stretch", backgroundColor: "black" }}>
//         <View style={ styles.tabBarContainer }>
//           { this.getTabs() }
//           <Animated.View style={[styles.tabBarSlider, { 
//             left: this.state.scrollX.interpolate({
//               inputRange: [0, windowSize.width * Object.keys(pages).length - 1],
//               outputRange: [0, (windowSize.width / Object.keys(pages).length) * Object.keys(pages).length - 1],
//             })
//           }]}>
//           </Animated.View>
//         </View>
//         <ScrollView
//           ref={(scrollView) => { 
//             this.scrollView = scrollView
//           }}
//           onMomentumScrollEnd={(event) => this.onMomentumScrollEnd(event)}
//           onScroll={
//             Animated.event([
//               { nativeEvent: { contentOffset: { x: this.state.scrollX } } }
//             ])
//           }
//           scrollEventThrottle={16}
//           horizontal={true}
//           pagingEnabled={true}
//           style={{ flex: 1, backgroundColor: "black" }}>
//           { this.getPages() }
//         </ScrollView>
//       </View>
//     )
//   }

// //   render() {
// //     console.log("wow!");
// //     return (
// //       <View style={styles.container}>
// //         <View style={styles.topContainer}>
// //           <View style={styles.infoBox}>
// //             <Animated.View style={[styles.ball, {
// //               transform: [
// //                 {
// //                   translateY: this.state.ballOffset,
// //                 }
// //               ]
// //             }]}>
// //             </Animated.View>
// //             <Text>
// //               { this.state.infoText }
// //             </Text>
// //           </View>
// //         </View>
// //         <View style={styles.bottomContainer}>
// //           <TouchableOpacity
// //             onPress={() => {
// //               console.log("hello world")
// //               this.setState({
// //                 infoText: "BUTTHOLE"
// //               })
// //               Animated.timing(this.state.ballOffset, {
// //                 toValue: 100,
// //                 useNativeDriver: true,
// //                 duration: 4000,
// //               }).start()
// //             }} 
// //             style={styles.button}>
// //           </TouchableOpacity>
// //         </View>
// //         { /*<DatePickerIOS
// //           date={new Date()}
// //           mode={"date"} 
// //           style={{ flex: 1 }}
// //           >
// //         </DatePickerIOS> */ }
// //         <ScrollView style={styles.scrollView}>
// //           <View style={{ height: 100, backgroundColor: "yellow", }}></View>
// //           <View style={{ height: 100, backgroundColor: "blue", }}></View>
// //           <View style={{ height: 100, backgroundColor: "purple", }}></View>
// //           <View style={{ height: 100, backgroundColor: "red", }}></View>
// //         </ScrollView>
// //       </View>
// //     );
// //   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     // justifyContent refers to how it will look vertically
//     justifyContent: 'center',
//     // alignItems refers to the children
//     alignItems: 'stretch',
//     // flexDirection: 'row',
//     backgroundColor: '#bac5eb',
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//   },
//   instructions: {
//     textAlign: 'center',
//     color: '#333333',
//     marginBottom: 5,
//   },
//   topContainer: {
//     flex: 1,
//     backgroundColor: "red",
//   },
//   bottomContainer: {
//     flex: 1,
//     backgroundColor: "blue",
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   infoBox: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     backgroundColor: "purple",
//     margin: 20,
//     borderRadius: 10,
//   },
//   button: {
//     width: 250,
//     height: 50,
//     backgroundColor: "green",
//     borderRadius: 25,
//   },
//   ball: {
//     height: 30,
//     width: 30,
//     borderRadius: 15,
//     backgroundColor: "orange",
//     position: "absolute",
//     left: 0,
//     top: 0,
//   },
//   scrollView: {
//     flex: 1,
//     // alignItems: "stretch",
//     backgroundColor: "black",
//   },
//   page: {
//     height: windowSize.height,
//     width: windowSize.width,
//   },
//   tabBarContainer: {
//     backgroundColor: "white",
//     flexDirection: "row",
//     paddingTop: 20,
//   },
//   tab: {
//     flex: 1,
//     height: 44,
//     alignItems: 'center',
//     justifyContent: "center",
//   },
//   tabBarSlider: {
//     position: 'absolute',
//     // left: 0,
//     bottom: 0,
//     backgroundColor: 'orange',
//     height: 4,
//     width: (windowSize.width) / 4,
//   }
// });

// // export default MyProject

// AppRegistry.registerComponent('MyProject', () => MyProject);
