import React, {useEffect, useState} from 'react';
import {Text, StyleSheet, View, ScrollView, Image, ImageBackground, Alert, TouchableOpacity} from 'react-native';
import { Button, Card, TextInput} from 'react-native-paper';
import {CheckBox } from '@react-native-community/checkbox'
import { createStackNavigator } from '@react-navigation/stack';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer, useNavigation, useNavigationContainerRef } from '@react-navigation/native';
import 'react-native-gesture-handler';
import * as Animatable from 'react-native-animatable';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import { Input} from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';

const FirstPageScreen = () => {
    const navigation = useNavigation();

    return (
        <View style = {styles.container}>
            <LinearGradient colors={['#34a4eb', '#4aaeed', '#edfcf7', '#edfcf7', '#edfcf7', '#FFF']}>

            <Animatable.Image
                animation = "bounceIn"
                delay={1000}
                
                source={{ uri: 'https://st4.depositphotos.com/16030310/25209/v/1600/depositphotos_252091868-stock-illustration-vector-illustration-golden-letters.jpg' }}
                style={{ width: '50%', height: '30%', alignSelf: 'center', marginTop: '15%' }}
             
             />

                <TouchableOpacity onPress={() => navigation.navigate('HomeScreen')}>
                    <Card style = {styles.Card}>
                        <Animatable.Text
                            style = {styles.Header} animation = "fadeInLeft" delay={500}>Start your Test
                        </Animatable.Text>
                    </Card>
                </TouchableOpacity>


            </LinearGradient>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
     
    },
    Header: {
        fontSize: 50,
        fontWeight: 'bold',
        color: '#0362fc',
        fontStyle: 'italic',
        textAlign: 'center'
    },
    Card:{
        height: '15%',
        alignSelf: 'center',
        borderRadius: 40,
        marginTop: '45%',
        width: '100%',
        padding: 10,
        marginBottom: '70%',
        backgroundColor: '#f79cdf'
    }
});
export default FirstPageScreen;
