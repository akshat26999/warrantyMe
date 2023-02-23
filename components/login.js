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
import { useDispatch } from 'react-redux';
import { getUser } from '../redux/user/data-slice';




// import { FlatList } from 'react-native/Libraries/Lists/FlatList';

export default function Login ({navigation}) {
    const myRef = useRef();
    const [number,setNumber] = useState(null);
    const [password,setPassword] = useState(null);
    const dispatch = useDispatch();
    // useEffect(()=>{
    //     const check = async () =>{
    //         try{
    //             myData = await AsyncStorage.getItem("data");
    //             const user = JSON.parse(myData);
    //             dispatch(getUser({name : user.result.firstName,email: user.result.email, retailerId: user.retailerId, lastName: user.result.lastName}));
    //             if(user.token !=null){
    //                 // directly navigate
    //                 setNumber(user.result.mobile);
    //                 navigation.navigate("HomePage");

    //             }
    
    //         }catch(error){
    //             console.log(error.message);
    //         }
    //     }
    //     check();
        
    // },[])

    const passwordReset = () =>{
        
            
            Alert.alert("Wrong Credentials!!","Retry",[ {text: 'OK', onPress: () => console.log('OK Pressed')}])
        
    }
    
    const handleLogin = async () =>{
        // console.log(`${number} ${password}`);
        let response = await fetch(`https://wme-staging-backend.herokuapp.com/api/v1/executives/getExecutiveLogin?mobile=${number}&password=${password}`,{
            method : 'GET',
            
        });      
        const responseJSON = await response.json();
        console.log(response.status);
        if(response.status === 200){
            try{
                const data = JSON.stringify(responseJSON);
                await AsyncStorage.setItem("data",data);
                const user = JSON.parse(data);
                dispatch(getUser({name : user.result.firstName,email: user.result.email, retailerId: user.retailerId, lastName: user.result.lastName}));
                navigation.navigate("HomePage");
            }catch(e){
                console.log("error in asyncstorage");
            }
        }else{
            setNumber(null);
            setPassword("");
            passwordReset();
        }
        
        // try{
        //     const myData = await JSON.parse(AsyncStorage.getItem("data"));
        //     console.log(myData.token);

        // }catch{
        //     console.log("Caanot read from asyncstorage");
        // }
        
        // const myData = JSON.parse(AsyncStorage.getItem("data"));
    }
    
    return(

        <View style={[styles.parentContainer]}>
            <View style={[styles.parentSubContainer]}>
                <FastImage style={[styles.loginImage]}source={require("../images/loginImage.jpg")}/>
            <TextInput
            style={styles.textInput}
            keyboardType="numeric"
            value={number}
            onChangeText={(input)=>{setNumber(input)}}
           />
           <Text style={[styles.inputText]}>Contact Number</Text>
           <TextInput
            style={styles.textInput}
            value={password}
            onChangeText={(input)=>{setPassword(input)}}
            autoCapitalize='none'
            secureTextEntry={true}
           />
           <Text style={[styles.inputText]}>Password</Text>
           <TouchableOpacity onPress={handleLogin} style={[styles.loginButton]}>
                <Text style={[styles.buttonText]}>LOGIN</Text>
           </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    parentContainer:{
        backgroundColor : "#ffffff",
        flex : 1,
        justifyContent: 'center',
        alignItems : 'center'
    },
    parentSubContainer : {
        paddingTop: 50,
        paddingBottom: 80,
        paddingHorizontal: 10,
        justifyContent: 'center',
        alignItems : 'center'
    },
    loginImage:{
        height: 175,
        width: 175,
        marginBottom: 80,
        borderRadius: 20,
    },
    textInput : {
        height: 50,
        width: 300,
        borderWidth : 2,
        borderColor : 'grey',
        borderRadius : 10,
        paddingHorizontal : 25,
        paddingVertical : 12,
        fontSize : 18,
        fontFamily : "Montserrat",
        color : 'black',
       
       
    },
    inputText : {
        color: 'black',
        fontWeight : '500',
        opacity : 0.5,
        marginTop : 10,
        marginBottom : 50,
        marginLeft : 30,
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
    }
  });