import React, { useRef, useNavigation } from 'react';
import FastImage from 'react-native-fast-image';
import {DataTable} from 'react-native-paper';


import {
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  FlatList,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import RBSheet from 'react-native-raw-bottom-sheet';
// import { FlatList } from 'react-native/Libraries/Lists/FlatList';

// This file/component is not the part of the project
export default function TodaysGame ({navigation}) {
    const myRef = useRef();
    
    const handleClick = () =>{
      myRef.current.open();
    };
    const navigate = () => {
      navigation.navigate("Profile");
    }
    
    return(
        <View >
        <View
            style={{
              backgroundColor: Colors.white,
              
            }}>
           
            <View style={{marginHorizontal: 20}}>
              <View style={[styles.statBox]}>
                <View style={[styles.stats]}>
                  <Text style={[styles.under,{fontWeight: 'bold'}]}>
                    UNDER OR OVER
                  </Text>
                  <FastImage
                     style={{width: 14,height: 14,marginLeft:10,marginTop: 3}}
                     source={require("../images/clock.png")}
                  />
                  <Text style={[styles.under,{marginLeft: 50,color:'#D2BAF5'}]}>
                    Starting in
                  </Text>
                  <FastImage
                     style={{width: 14,height: 14,marginLeft:10,marginTop: 3}}
                     source={require("../images/clock.png")}
                  />
                  <Text style={[styles.under,{marginLeft: 5}]}>
                    03:23:12
                  </Text>
  
                  
                </View>
               
                  <Text style={[styles.under,{marginTop: 30,color:'#D2BAF5'}]}>
                  Bitcoin  price  will  be  under
                  </Text>
                  <Text style={[styles.under,{marginTop: 0,color:'#FFFFFF',fontWeight:'bold'}]}>
                  $24,524 at 7 a ET on 22nd Jan’21
                  </Text>
              
              </View>
              <View style={{borderLeftColor: "#727682",borderRightColor: '#727682',borderLeftWidth: 0.2,borderRightWidth: 0.2}}>
                <DataTable>
                  <DataTable.Header style={[styles.dtHeader,{borderBottomWidth: 0}]}>
                    <DataTable.Title><Text style={[styles.dtTitle]}>PRIZE POOL</Text></DataTable.Title>
                    <DataTable.Title><Text style={[styles.dtTitle]}>UNDER</Text></DataTable.Title>
                    <DataTable.Title><Text style={[styles.dtTitle]}>OVER</Text></DataTable.Title>
                    <DataTable.Title><Text style={[styles.dtTitle]}>ENTRY FEES</Text></DataTable.Title>
                  </DataTable.Header>
                  <DataTable.Row style={{borderTopWidth:0,borderBottomWidth: 0,marginTop: -20}}>
                    <DataTable.Cell><Text style={[styles.dtCellText]}>$12,000</Text></DataTable.Cell>
                    <DataTable.Cell><Text style={[styles.dtCellText]}>3.25x</Text></DataTable.Cell>
                    <DataTable.Cell><Text style={[styles.dtCellText]}>1.25x</Text></DataTable.Cell>
                    <DataTable.Cell style={{justifyContent: 'center'}}><Text style={[styles.dtCellText]}>5   </Text><View style={[styles.coin]}></View></DataTable.Cell>
                  </DataTable.Row>
                  <DataTable.Header style={{borderTopWidth:0,borderBottomWidth: 0}}>
                  <Text style={[styles.predictionText]}>
                     What's your prediction?
                  </Text>
                  </DataTable.Header>
                  <DataTable.Header style={{borderTopWidth:0,borderBottomWidth: 0}}>
                    <DataTable.Title>
                      <TouchableOpacity style={[styles.underButton]}>
                        
                        <FastImage resizeMode='contain' style={[styles.arrow]} source={require("../images/arrowDown.png")}></FastImage>
                        <Text style={{alignSelf: 'center',fontWeight: 'bold',color: '#FFFFFF'}}>Under</Text>
                        
                      </TouchableOpacity>
                    </DataTable.Title>
                    <DataTable.Title>
                      <TouchableOpacity  onPress={handleClick} style={[styles.overButton]}>
                        
                        <FastImage  resizeMode='contain' style={[styles.arrow]}  source={require("../images/arrowUp.png")}></FastImage>
                        <Text style={{alignSelf: 'center',fontWeight: 'bold',color: '#FFFFFF'}}>Over</Text>
                        
                      </TouchableOpacity>
                    </DataTable.Title>
                  </DataTable.Header>
                </DataTable>
                
                
              </View>
              <View style={[styles.chart]}>
                <DataTable.Header style={{borderTopWidth:0,borderBottomWidth: 0}}>
                  <DataTable.Title>
                    <FastImage resizeMode='contain' style={[styles.man]}  source={require("../images/man.png")}/>
                    <Text style={{color:'#727682',fontFamily: 'Montserrat',fontSize: 16,fontWeight:'bold'}}>   355 Players</Text>
                  </DataTable.Title>
                  <DataTable.Title style={{justifyContent: 'center',marginRight: -10}}>
                    <FastImage resizeMode='contain' style={[styles.chartIcon]}  source={require("../images/chart.png")}/>
                    <Text style={{color:'#727682',fontFamily: 'Montserrat-Regular',fontSize: 16,fontWeight:'bold'}}>  View Chart</Text>
                  </DataTable.Title>
                </DataTable.Header>
                <View style={[styles.bar]}>
                  <View style={[styles.pinkBar]}></View>
                  <View style={[styles.greenBar]}></View>
                </View>
                <DataTable.Header style={{borderTopWidth:0,borderBottomWidth: 0}}>
                  <DataTable.Title>
                    
                    <Text style={{color:'#B5C0C8',fontFamily: 'Montserrat-Regular',fontSize: 12,fontWeight:'bold'}}>232 predicted under</Text>
                  </DataTable.Title>
                  <DataTable.Title style={{justifyContent: 'center',marginRight: -20}}>
                    
                    <Text style={{color:'#B5C0C8',fontFamily: 'Montserrat-Regular',fontSize: 12,fontWeight:'bold'}}>123 predicted over</Text>
                  </DataTable.Title>
                </DataTable.Header>
               
              </View>
              <View style={{backgroundColor: '#fffff',height: 1000}}>
              
              <View style={[styles.footer]}>
                <TouchableOpacity style={{justifyContent:'center',alignItems:'center'}}>
                   <FastImage resizeMode='contain' style={[styles.footerIcon]}  source={require("../images/homeIconPurple.png")}/>
                   <Text style={[styles.footerText,{color: '#6231AD',opacity: 1}]}>Home</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{justifyContent:'center',alignItems:'center'}}>
                   <FastImage resizeMode='contain' style={[styles.footerIcon]}  source={require("../images/trophy.png")}/>
                   <Text style={[styles.footerText]}>Leagues</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{justifyContent:'center',alignItems:'center'}}>
                   <FastImage resizeMode='contain' style={[styles.footerIcon]}  source={require("../images/lens.png")}/>
                   <Text style={[styles.footerText]}>Research</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{justifyContent:'center',alignItems:'center'}}>
                   <FastImage resizeMode='contain' style={[styles.footerIcon]}  source={require("../images/stats.png")}/>
                   <Text style={[styles.footerText]}>Leaderboard</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={navigate} style={{justifyContent:'center',alignItems:'center'}}>
                   <FastImage resizeMode='contain' style={[styles.footerIcon]}  source={require("../images/profileIcon.png")}/>
                   <Text style={[styles.footerText]}>Profile</Text>
                </TouchableOpacity>
              </View>
              </View>
              
              
            
            </View>
            
          </View>
          <RBSheet 
          style={[styles.rbSheet]}
          height = {500}
          closeOnDragDown={true}
          closeOnPressMask={true}
          customStyles={{
             draggableIcon: {
              backgroundColor: "#000"
             },
             container : {
              borderTopLeftRadius : 20,
              borderTopRightRadius : 20

             }
          }}
          ref={myRef}>
                <View style={[styles.rbInnerContainer]} >
                    {/* <View style={[styles.nozzleTop]}>

                    </View> */}
                    
                     <Text style={{color: '#333333',fontWeight: '700',fontSize: 18,fontFamily : 'Montserrat-Regular'}}>
                        Your Prediction is Under
                     </Text>
                     
                     <Text style={{color: '#727682',fontWeight: '700',fontSize: 15,fontFamily : 'Montserrat-Regular',opacity:0.5,marginTop: 25}}>
                        ENTRY TICKETS
                     </Text>
                    <View style={[styles.numList]}>
                      <Text style={{color: '#333333',fontWeight: '600',fontSize: 15,fontFamily : 'Montserrat-Regular',marginTop: 25,opacity:0.2}}>11</Text>
                      <Text style={{color: '#333333',fontWeight: '700',fontSize: 18,fontFamily : 'Montserrat-Regular',marginTop: 5,opacity: 0.4}}>12</Text>
                      <Text style={{color: '#333333',fontWeight: '700',fontSize: 22,fontFamily : 'Montserrat-Regular',marginTop: 5,opacity: 0.7}}>13</Text>
                      <View style={{backgroundColor : '#f7f0ff',width: 372,alignItems: 'center'}}>
                         <Text style={{color: '#333333',fontWeight: '800',fontSize: 25,fontFamily : 'Montserrat-Regular',marginTop: 5}}>14</Text>
                      </View>
                      <Text style={{color: '#727682',fontWeight: '700',fontSize: 22,fontFamily : 'Montserrat-Regular',marginTop: 5,opacity:0.7}}>15</Text>
                      <Text style={{color: '#727682',fontWeight: '700',fontSize: 18,fontFamily : 'Montserrat-Regular',marginTop: 5,opacity:0.4}}>16</Text>
                      <Text style={{color: '#727682',fontWeight: '600',fontSize: 15,fontFamily : 'Montserrat-Regular',marginTop: 5,opacity:0.2}}>17</Text>
                    </View>
                    <View style={[styles.buttonTop]}>
                      <View>
                        <Text style={{color: '#B5C0C8',fontWeight: '500',fontSize: 14,fontFamily : 'Montserrat-Regular'}}>You can win</Text>
                        <Text style={{color: '#03A67F',fontWeight: '700',fontSize: 16,fontFamily : 'Montserrat-Regular'}}>$2000</Text>
                      </View>
                      <View style={{flexDirection: 'row',justifyContent: 'space-between',width : 80,alignItems: 'baseline'}}>
                        <Text style={{color: '#B5C0C8',fontWeight: '700',fontSize: 14,fontFamily : 'Montserrat-Regular'}}>Total</Text>
                        <View style={[styles.coin,{alignSelf: 'baseline'}]}></View>
                        <Text style={{color: '#333333',fontWeight: '700',fontSize: 16,fontFamily : 'Montserrat-Regular'}}>5</Text>
                      </View>
                    </View>
                     <TouchableOpacity style={[styles.drawerButton]}>
                        <Text onPress={navigate} style={{color: '#ffffff',fontWeight: '600',fontSize: 16,fontFamily : 'Montserrat-Regular'}}>Submit my prediction</Text>
                     </TouchableOpacity>
                </View>

              </RBSheet>
      </View>
      
    );
}

const styles = StyleSheet.create({
    texthead: {
      fontWeight: 'bold',
      color: 'black',
      fontSize: 18,
      fontFamily: 'Cochin'
    },
    headTextContainer: {
      // backgroundColor: Colors.darker,
      marginTop: 15,
      marginLeft: 20,

    },
    footer :{
      
      width: '100%',
      height: 50,
      backgroundColor: '#ffffff',
      justifyContent: 'space-between',
      flexDirection : 'row',
      alignItems: 'center',
      marginTop: 260,
      // position: 'absolute',
      bottom: 0, 
      
    },
    footerIcon: {
      height :20,
      width: 20,

    },
    footerText : {
      fontFamily : 'Montserrat-Regular',
      fontSize : 16,
      color : '#333333',
      fontWeight : 500,
      opacity: 0.4
    },
    statBox:{
      backgroundColor: '#6231AD',
     // backgroundColor:'',
      height: 131,
      borderTopLeftRadius: 5 ,
      borderTopRightRadius: 5,
      // marginHorizontal: 20,
      marginTop : 20,
      //fontColor: 'white',
       paddingVertical: 25,
      paddingHorizontal: 20,
      
    },
    stats:{
      flexDirection: 'row',
    },
    
    under: {
      fontFamily: 'Montserrat-Regular',
      
    },
    dtHeader: {
     // borderColor: '#333333',
     // borderLeftColor: '#333333',
      // borderRightColor : '#333333'
    },
    dtTitle: {
      fontSize: 12,
      color: '#B5C0C8',
    },
    dtCellText: {
      fontWeight: 'bold',
      fontSize: 12,
    },
    coin: {
      height: 14,
      width: 14,
      backgroundColor: '#FFD600',
      borderRadius: 50,
      marginTop: 20,
      textAlign: 'center'
    },
    predictionText: {
      color: '#727682',
      fontFamily: 'Montserrat-Regular',
      fontSize: 16,
      fontStyle: 'normal',
      fontWeight: 'bold',
    },
    underButton:{
      backgroundColor: '#452C55',
      width: 150,
      height: 40,
      borderRadius: 30,
      flexDirection :'row',
      justifyContent: 'center',
    
    },
    overButton:{
      backgroundColor: '#6231AD',
      width: 150,
      height: 40,
      borderRadius: 30,
      flexDirection :'row',
      justifyContent: 'center',
    },
    arrow:{
      height: 12,
      width: 14,
      alignSelf: 'center',
      marginRight: 4,
    },
    man: {
      height: 14,
      width: 14,
     
    },
    chartIcon:{
      height: 16,
      width: 30,
      alignSelf: 'baseline'
    },
    chart: {
      backgroundColor: '#F6F3FA',
      paddingBottom: 30,
      borderBottomLeftRadius: 10,
      borderBottomRightRadius: 10,
    },
    bar: {
      paddingHorizontal: 15,
      flexDirection: 'row'
      
    },
    pinkBar: {
      backgroundColor : '#FE4190',
      borderTopLeftRadius : 10,
      borderBottomLeftRadius : 10,
      width: 223,
      height: 10
    },
    greenBar: {
      backgroundColor : '#2DABAD',
      borderTopRightRadius : 10,
      borderBottomRightRadius : 10,
      width: 105,
      height: 10,
      marginStart: -2
    },
    rbSheet: {
      borderTopLeftRadius : 10,
      borderTopRightRadius : 10,
      
    },
    nozzleTop : {
      alignSelf : 'center',width: 50,height: 8, backgroundColor: '#B5C0C8',marginTop: 10,marginBottom: 30,borderRadius : 20
    },
    rbInnerContainer: {
      paddingHorizontal : 20,
      marginVertical : 10,
    },
    numList: {
      flexDirection : 'column',
      alignItems : 'center'
    },
    buttonTop : {
       marginTop : 20,
       flexDirection: 'row',
       
       justifyContent : 'space-between'
    },
    drawerButton:{
      backgroundColor : '#6231AD',
      borderRadius : 20,
      alignItems : 'center',
      marginVertical : 20,
      paddingVertical : 10,

    },
    
    
  });