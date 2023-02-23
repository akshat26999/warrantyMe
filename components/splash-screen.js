import React, { useRef, useNavigation,useState,useEffect } from 'react';
import FastImage from 'react-native-fast-image';
import {DataTable, Modal} from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native';
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

export default function SplashScreen ({navigation}) {
    
    const dispatch = useDispatch();
    const [isUser,setIsUser] = useState(false);
    const checkIsUser = (user)=>{
        console.log("inside checkIsUser function");
       if(user) {
        console.log("setIsUser will set isUSer true");
         setIsUser(true);
         
        }
       else {
        console.log("setIsUser will set isUSer false");
        setIsUser(false);
       
        }
    }
    // useEffect(()=>{
    //     const check = async () =>{
    //         try{
    //             myData = await AsyncStorage.getItem("data");
    //             const user = JSON.parse(myData);
    //             console.log(user);
    //             //dispatch(getUser({name : user.result.firstName,email: user.result.email, retailerId: user.retailerId, lastName: user.result.lastName}));
    //             if(user) checkIsUser(user);
    //             console.log("isUSer "+isUser);
    //         }catch(error){
    //             console.log(error.message);
    //         }
    //     }
    //     check();
        
    // },[isUser])


    useFocusEffect(()=>{
        console.log("inside useFocusEffect")
        const check = async () =>{
            try{
                myData = await AsyncStorage.getItem("data");
                const user = JSON.parse(myData);
                console.log(user);
                //dispatch(getUser({name : user.result.firstName,email: user.result.email, retailerId: user.retailerId, lastName: user.result.lastName}));
                checkIsUser(user);
                console.log("isUSer "+isUser);
            }catch(error){
                console.log(error.message);
            }
        }
        check();
    })

    
    const navigate = () => {
        if(isUser){
            navigation.navigate("HomePage");
        }else {
            navigation.navigate("Login");
        }
    }
    
    return(

        <View style={[styles.parentContainer]}>
            
                <FastImage style={[styles.logo]} source={require("../images/loginImage.jpg")}/>
                {
                    isUser ? 
                    (
                      <TouchableOpacity onPress={navigate}style={[styles.splashButton]}>
                        <Text style={[styles.buttonText]}>HOME</Text>
                       </TouchableOpacity>
                    )
                     : 
                    (
                      <TouchableOpacity onPress={navigate} style={[styles.splashButton]}>
                        <Text style={[styles.buttonText]}>LOGIN</Text>
                       </TouchableOpacity>
                    )
                }
        
        </View>
    );
}

const styles = StyleSheet.create({
    parentContainer:{
        backgroundColor : "#ffe6b3",
        flex : 1,
        justifyContent: 'center',
        alignItems : 'center'
    },
    parentSubContainer : {
        paddingTop: 50,
        paddingBottom: 80,
        paddingHorizontal: 10,
        justifyContent: 'center',
        alignItems : 'center',
        borderWidth : 2,
        borderColor : 'black'
    },
    logo :{
        height : 150,
        width: 150,
        borderRadius : 10
    },
    splashButton : {
        marginTop : 100,
        width : 250,
        height: 50,
        backgroundColor : "#cce6ff",
        opacity : 0.5,
        elevation: 20,
        shadowColor: '#52006A',
        borderRadius : 20,
        justifyContent : 'center',
        alignItems : 'center'
        
    },
    buttonText:{
        fontFamily : 'Montserrat-Regular',
        color : 'black',
        fontWeight: '900',
        fontSize : 20,
    },
   
  });