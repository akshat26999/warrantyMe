import React, { useRef, useNavigation,useState,useEffect } from 'react';
import FastImage from 'react-native-fast-image';
import {DataTable, Modal} from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';

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
  TextInput,
  Alert,
  
} from 'react-native';



import RBSheet from 'react-native-raw-bottom-sheet';
import { useSelector } from 'react-redux';
// import { FlatList } from 'react-native/Libraries/Lists/FlatList';

export default function HomePage ({navigation}) {
    const myRef = useRef();
    const [product,setProduct] = useState(null);
    const [address,setAddress] = useState(null);
    const user = useSelector((state) => state);
    const [pEmail,setpEmail] = useState(user.user.user.email);
    
    const handleProfilePress = ()=>{
        navigation.navigate("Profile");
    }
    console.log(user);
    
    
    
    return(

        <View style={[styles.parentContainer]}>
            <View style={[styles.parentSubContainer]}>
                    <Text style={[styles.title]}>Dashboard</Text>
                    
                    <Text style={[styles.welcome]}>WELCOME {user.user.user.name}</Text>
                    <TextInput
                     style={styles.textInput}
                     value={product}
                     onChangeText={(input)=>{setProduct(input)}}
                    />
                    <Text style={[styles.inputText]}>Product</Text>
                    <TextInput
                     style={styles.textInput}
                     value={pEmail}
                     onChangeText={(input)=>{setpEmail(input)}}
                    />
                    <Text style={[styles.inputText]}>Purchase email</Text>
                    
                    <Text style={[styles.retailerId]}>Retailer ID: {user.user.user.retailerId}</Text>

                    <TouchableOpacity onPress={handleProfilePress}style={[styles.card]}>
                        <FastImage resizeMode='contain' style={[styles.profile]} source={require("../images/lady.png")}/>
                        <View style={{marginLeft : 40}}>
                            <Text style={[styles.profileText]}>First Name: {user.user.user.name}</Text>
                            <Text style={[styles.profileText]}>Last Name: {user.user.user.lastName}</Text>
                            <Text style={[styles.profileText,{fontSize : 16,color: 'blue',marginTop: 30}]}>CLick to go to Profile Page</Text>    

                        </View>
                    </TouchableOpacity>

            </View>
            <View style={[styles.footer]}>
                <TouchableOpacity style={[styles.footerTouchable]}>
                   <FastImage resizeMode='contain' style={[styles.footerIcon]}  source={require("../images/homeIconOrange.png")}/>
                   <Text style={[styles.footerText,{color: '#ffa64d',fontWeight: '600',opacity: 1}]}>Home</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.footerTouchable]}>
                   <FastImage resizeMode='contain' style={[styles.footerIcon]}  source={require("../images/trophy.png")}/>
                   <Text style={[styles.footerText]}>Leagues</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.footerTouchable]}>
                   <FastImage resizeMode='contain' style={[styles.footerIcon]}  source={require("../images/lens.png")}/>
                   <Text style={[styles.footerText]}>Research</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.footerTouchable]}>
                   <FastImage resizeMode='contain' style={[styles.footerIcon]}  source={require("../images/stats.png")}/>
                   <Text style={[styles.footerText]}>Leaderboard</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={handleProfilePress} style={[styles.footerTouchable]}>
                   <FastImage  resizeMode='contain' style={[styles.footerIcon]}  source={require("../images/man.png")}/>
                   <Text style={[styles.footerText]}>Profile</Text>
                </TouchableOpacity>
              </View>
        </View>
    );
}

const styles = StyleSheet.create({
    parentContainer:{
        backgroundColor : "#ffe6b3",
        flex : 1,
        // justifyContent: 'center',
        // alignItems : 'center',
       
       
    },
    parentSubContainer : {
        paddingTop: 30,
        paddingBottom: 80,
        paddingHorizontal: 25,
        // justifyContent: 'center',
       alignItems : 'center',
        
        
        
    },
    title:{
        fontSize : 25,
        fontWeight : "900",
        color : 'black',
        alignSelf : 'center',
        marginBottom : 70
    },
    retailerId : {
        fontSize : 18,
        fontWeight : "900",
        color : 'red',
        alignSelf : 'flex-start',
        marginBottom : 10,
    },
    welcome:{
        fontSize : 25,
        fontWeight : "800",
        color : '#9966ff',
        alignSelf : 'flex-start',
        marginBottom : 40,
        fontFamily: 'Montserrat-Regular'
    },
    
    textInput : {
        height: 50,
        width: 300,
        borderWidth : 0.5,
        borderColor : 'grey',
        borderRadius : 10,
        paddingHorizontal : 15,
        paddingVertical : 12,
        fontSize : 18,
        fontFamily : "Montserrat",
        color : 'black',
        marginTop : 10,
        alignSelf : 'flex-start'
       
    },
    inputText : {
        color: 'black',
        fontWeight : '500',
        opacity : 0.5,
        marginTop : 10,
        marginBottom : 30,
        alignSelf : 'flex-start'
    },
    loginButton : {
        height: 50,
        width: 350,
        borderWidth : 2,
        borderColor : 'black',
        borderRadius : 15,
        paddingHorizontal : 35,
        paddingVertical : 12,
        backgroundColor: '#ffcc99',
    },
    buttonText:{
        color: 'black',
        fontWeight : '800',
        fontSize : 18,
        alignSelf : 'center',
        fontFamily : 'Montserrat',
    },
    card:{
        height : 150,
        width : '100%',
        borderColor : 'black',
        borderWidth : 4,
        backgroundColor : '#ffcc66',
        flexDirection : 'row',
        paddingHorizontal : 10,
        paddingVertical: 20,
        borderRadius : 20,
        marginTop : 40 ,
        elevation : 2
    },
    profile : {
        height : 80,
        width : 80,
        borderRadius : 40
    },
    profileText: {
        color : 'black',
        fontFamily : 'Montserrat-Regular',
        fontSize : 16,
        fontWeight : '800'
    },
    footer :{
      
        width: '100%',
        height: 50,
        backgroundColor: '#ffffff',
        justifyContent: 'space-between',
        flexDirection : 'row',
        alignItems: 'center',
        marginTop: 260,
        position: 'absolute',
        bottom: 0, 
        paddingHorizontal: 12,
       
        
      },
      footerIcon: {
        height :20,
        width: 20,
  
      },
      footerText : {
        fontFamily : 'Montserrat-Regular',
        fontSize : 14,
        color : '#333333',
        fontWeight : 500,
        opacity: 0.4
      },
      footerTouchable : {
        justifyContent : 'center',
        alignItems : 'center'
      }
  });