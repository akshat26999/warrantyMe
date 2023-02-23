import AsyncStorage from '@react-native-async-storage/async-storage';
import React from 'react';
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
import FastImage from 'react-native-fast-image';
import { DataTable } from 'react-native-paper';
  

export default function Profile({navigation}) {
 
    const navigate = () => {
        navigation.navigate("HomePage");
    }

    const handleLogout = () =>{
        const removeUser = async ()=>{
            try{
                await AsyncStorage.removeItem("data");
                console.log("user removed");
                navigation.navigate("SplashScreen");
            }catch(error) {
                console.log(error);
            }
        }
        removeUser();
    }
    return(
  <View>
    <ScrollView style={{marginBottom : 50}}>
        <View style={{backgroundColor: '#FFFFFF'}}>
            <View style={[styles.innermainContainer]}>
                <FastImage style={{width: 30,height: 30}}
                     source={require("../images/spartan.png")}/>
                <Text style={{fontWeight: '500',fontFamily: 'Montserrat-Regular-Regular',color: '#727682',fontSize: 16}}>Profile</Text>    
                <FastImage style={{width: 20,height: 20}}
                     source={require("../images/msg.png")}/>
            </View>
            <View style={[styles.profileDetails]}>
                <FastImage style={{height: 75,width:75,borderRadius:50,marginBottom: 10}} source={require("../images/lady.png")}/>
                <Text style={{fontWeight: '700',fontFamily: 'Montserrat-Regular',color: '#727682',fontSize: 16,marginBottom: 10}}>Jina Simons</Text>
                <Text style={{fontWeight: '500',fontFamily: 'Montserrat-Regular',color: '#727682',fontSize: 12,marginBottom: 20}}>6000 Pts</Text>
                <Text style={{fontWeight: '500',fontFamily: 'Montserrat-Regular',color: '#727682',fontSize: 16}}>I’m a software developer that has been in the crypto space since 2012. And I’ve seen it grow and falter over a period of time. Really happy to be here!</Text>
                <TouchableOpacity onPress={handleLogout}style={[styles.logout]}>
                  <FastImage resizeMode='contain' style={{height: 15,width:18}} source={require("../images/logout.png")}/>
                  <Text style={{fontWeight: '700',fontFamily: 'Montserrat-Regular',color: '#727682',fontSize: 16,marginLeft: 8}}>Logout</Text>
                </TouchableOpacity>
            </View>
            <View style={[styles.nums]}> 
               
                <View >
                    <Text style={{fontWeight: '700',fontFamily: 'Montserrat-Regular',color: '#727682',fontSize: 16,marginBottom: 10}}>Under or Over</Text>
                    <View style={{flexDirection: 'row'}}>
                        <View style={{backgroundColor:'#e6ffe6',height: 32,width: 32,borderRadius:50,alignItems:'center',paddingTop :5,marginRight : 10}}>
                            <FastImage resizeMode='contain' style={{height: 20,width:18}} source={require("../images/greenArrow.png")}/>
                        </View>
                        <Text style={{color:'#4F4F4F',fontFamily: 'Montserrat-Regular',fontSize: 24,fontWeight: '700'}}>81%</Text>
                    </View>
                </View>
                <View style={[styles.star]}>
                <FastImage resizeMode='contain' style={{height: 20,width:18}} source={require("../images/star.png")}/>
               </View>
                <View style={{marginRight: 40}}>
                    <Text style={{fontWeight: '700',fontFamily: 'Montserrat-Regular',color: '#727682',fontSize: 16,marginBottom: 10}}>Top 5</Text>
                    <View style={{flexDirection: 'row'}}>
                        <View style={{backgroundColor:'#ffe6e6',height: 32,width: 32,borderRadius:50,alignItems:'center',paddingTop :5,marginRight : 10}}>
                            <FastImage resizeMode='contain' style={{height: 20,width:18}} source={require("../images/redArrow.png")}/>
                        </View>
                        <Text style={{color:'#4F4F4F',fontFamily: 'Montserrat-Regular',fontSize: 24,fontWeight: '700'}}>-51%</Text>
                    </View>
                </View>
            </View>
            <View style={[styles.gamelist]}>
                <View style={[styles.tab]}>
                    <View style={[styles.badge]}>
                        <Text style={{fontWeight: '700',fontFamily: 'Montserrat-Regular',color: '#727682',fontSize: 16,marginBottom: 10}}> Games Played</Text>
                    </View>
                    <View style={[styles.badge,{paddingLeft: 60,paddingRight:60,borderColor:'#ffbb33',borderBottomWidth:3}]}>
                        <Text style={{fontWeight: '800',fontFamily: 'Montserrat-Regular',color: '#ffbb33',fontSize: 16,marginBottom: 10}}> Badges</Text>
                    </View>
                </View>
                
            <View style={[styles.card]}>
                    
                    <View >
                        <FastImage style={{height: 80,width:80}} source={require("../images/lady.png")}/>
                    </View>
                    <View style={[styles.cardTextView]}>
                        <Text style={{fontWeight: '800',fontFamily: 'Montserrat-Regular',color: '#333333',fontSize: 16,marginBottom: 10}}>First Stripe Earned</Text>
                        <Text style={{fontWeight: '500',fontFamily: 'Montserrat-Regular',color: '#727682',fontSize: 14,marginBottom: 0}}>Top 10% of highest spending players in a month</Text>
                    </View>
                
            </View>
            <View style={[styles.card]}>
                
                    <View >
                        <FastImage style={{height: 80,width:80}} source={require("../images/lady.png")}/>
                    </View>
                    <View style={[styles.cardTextView]}>
                        <Text style={{fontWeight: '800',fontFamily: 'Montserrat-Regular',color: '#333333',fontSize: 16,marginBottom: 10}}>First Stripe Earned</Text>
                        <Text style={{fontWeight: '500',fontFamily: 'Montserrat-Regular',color: '#727682',fontSize: 14,marginBottom: 0}}>Top 10% of highest spending players in a month</Text>
                    </View>
                
            </View>
            <View style={[styles.card]}>
                
                    <View >
                        <FastImage style={{height: 80,width:80}} source={require("../images/lady.png")}/>
                    </View>
                    <View style={[styles.cardTextView]}>
                        <Text style={{fontWeight: '800',fontFamily: 'Montserrat-Regular',color: '#333333',fontSize: 16,marginBottom: 10}}>First Stripe Earned</Text>
                        <Text style={{fontWeight: '500',fontFamily: 'Montserrat-Regular',color: '#727682',fontSize: 14,marginBottom: 0}}>Top 10% of highest spending players in a month</Text>
                    </View>
                
            </View>
            <View style={[styles.card]}>
                
                    <View >
                        <FastImage style={{height: 80,width:80}} source={require("../images/lady.png")}/>
                    </View>
                    <View style={[styles.cardTextView]}>
                        <Text style={{fontWeight: '800',fontFamily: 'Montserrat-Regular',color: '#333333',fontSize: 16,marginBottom: 10}}>First Stripe Earned</Text>
                        <Text style={{fontWeight: '500',fontFamily: 'Montserrat-Regular',color: '#727682',fontSize: 14,marginBottom: 0}}>Top 10% of highest spending players in a month</Text>
                    </View>
                
            </View>
            <View style={[styles.card]}>
                
                    <View >
                        <FastImage style={{height: 80,width:80}} source={require("../images/lady.png")}/>
                    </View>
                    <View style={[styles.cardTextView]}>
                        <Text style={{fontWeight: '800',fontFamily: 'Montserrat-Regular',color: '#333333',fontSize: 16,marginBottom: 10}}>First Stripe Earned</Text>
                        <Text style={{fontWeight: '500',fontFamily: 'Montserrat-Regular',color: '#727682',fontSize: 14,marginBottom: 0}}>Top 10% of highest spending players in a month</Text>
                    </View>
                
            </View>
            
            
                
            </View>
        </View>
        </ScrollView>
        <View style={[styles.footer]}>
                <TouchableOpacity onPress={navigate} style={{justifyContent:'center',alignItems:'center'}}>
                   <FastImage resizeMode='contain' style={[styles.footerIcon]}  source={require("../images/homeIcon.png")}/>
                   <Text style={[styles.footerText]}>Home</Text>
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
                <TouchableOpacity style={{justifyContent:'center',alignItems:'center'}}>
                   <FastImage resizeMode='contain' style={[styles.footerIcon]}  source={require("../images/profileOrange.png")}/>
                   <Text style={[styles.footerText,{color: '#ffbb33',fontWeight: '800',opacity: 1}]}>Profile</Text>
                </TouchableOpacity>
              </View>
    </View>      
    )
}

const styles = StyleSheet.create({
    innermainContainer: {
        paddingHorizontal : 20,
        paddingVertical : 30,
        flexDirection: 'row',
        justifyContent: 'space-between'
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
    profileDetails: {
        alignItems : 'center',
        paddingHorizontal : 20,
    },
    logout: {
        marginTop: 20,
        flexDirection: 'row',
        
        alignItems: 'center'
    },
    nums : {
        borderWidth: 1,
        borderColor: '#EEEAF3',
        marginVertical: 30,
        marginHorizontal : 20,
        paddingHorizontal : 20,
        paddingVertical: 20,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    star: {
        backgroundColor: '#ffffb3',
        height: 35,
        width: 35,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 50,
        paddingBottom: 5,
        borderWidth: 5,
        borderColor: '#FFE200',
        marginTop : -40,
        marginLeft: 30
    },
    gamelist:{
        backgroundColor: '#ffe6b3',
        
    },
    tab: {
        backgroundColor: '#ffffff',
        marginTop: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingLeft: 40,
       // paddingRight: 60,
        // paddingVertical: 20,
    },
    badge :{
        
        paddingHorizontal: 20,
        paddingTop:20,
        paddingBottom: 10
        
    },
    card:{
        backgroundColor: '#ffffff',
         marginHorizontal: 16,
         marginVertical: 20,
         paddingHorizontal: 16,
         paddingVertical: 20,
        borderRadius : 5,
        // justifyContent : 'center',
        flexDirection : 'row',
        
    },
    cardTextView : {
        paddingHorizontal: 16,
        flex :1
    }
})