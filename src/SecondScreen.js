import React, {useEffect, useState} from 'react';
import {Text, StyleSheet, View, ScrollView, Image, ImageBackground, Alert, TouchableOpacity} from 'react-native';
import { Button, Card, DataTable, TextInput} from 'react-native-paper';
import CheckBox  from '@react-native-community/checkbox';
import { createStackNavigator } from '@react-navigation/stack';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer, useNavigation, useNavigationContainerRef } from '@react-navigation/native';
import 'react-native-gesture-handler';
import * as Animatable from 'react-native-animatable';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import { Input} from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';

const SecondScreen = () => {
    const navigation = useNavigation();
    const [toggleCheckBox, setToggleCheckBox] = useState(false)
    return (
        <View style = {styles.container}>
            <LinearGradient colors={['#34a4eb', '#4aaeed', '#edfcf7', '#edfcf7', '#edfcf7', '#FFF']}>
            <Text style = {styles.Header}>Quiz</Text>

            <Card style = {styles.Card}>
                <Text style = {styles.Questions}>Q.2. Who among the following was the first Indian who won the Nobel Prize?</Text>
                <View style = {{flexDirection: 'row', marginTop: '5%'}}>
                        <CheckBox
                            disabled={false}
                            value={toggleCheckBox}
                            onValueChange={(newValue) => setToggleCheckBox(newValue)}
                        />
                        <Text style = {styles.Options}>A. Ravindranath Tagore</Text>
                        </View>

                        <View style = {{flexDirection: 'row', marginTop: '5%'}}>
                        <CheckBox
                            disabled={false}
                            value={toggleCheckBox}
                            onValueChange={(newValue) => setToggleCheckBox(newValue)}
                        />
                        <Text style = {styles.Options}>B. Pt. Jawahar Lal Nehru</Text>
                        </View>
                        
                        <View style = {{flexDirection: 'row', marginTop: '5%'}}>
                        <CheckBox
                            disabled={false}
                            value={toggleCheckBox}
                            onValueChange={(newValue) => setToggleCheckBox(newValue)}
                        />
                        <Text style = {styles.Options}>C. Dr. Zakir Hussain</Text>
                        </View>

                        <View style = {{flexDirection: 'row', marginTop: '5%'}}>
                        <CheckBox
                            disabled={false}
                            value={toggleCheckBox}
                            onValueChange={(newValue) => setToggleCheckBox(newValue)}
                        />
                        <Text style = {styles.Options}>D. C. Rajagopalchari</Text>
                        </View>
                    
                    <Card style = {styles.Button}>
                        <TouchableOpacity onPress={() => navigation.navigate('ThirdScreen')}>
                            <Text style ={{ fontSize: 18, fontWeight: 'bold', textAlign: 'center', color: 'black'}}>Next</Text>
                        </TouchableOpacity>
                    </Card>
            </Card>

            </LinearGradient>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
     
    },
    Header: {
        fontSize: 55,
        fontWeight: 'bold',
        color: '#f54272',
        fontStyle: 'italic',
        marginTop: '10%',
        textAlign: 'center'
    },
    Card: {
        alignSelf: 'center',
        padding: 10,
        height: '48%',
        marginTop: '40%',
        marginBottom: '30%',
        width: '100%'
    },
    Questions: {
        fontSize: 22,
        fontWeight:'bold',
        color: 'black'
    },
    Options: {
        fontSize: 18,
        
    },
    
    Button: {
        height: '12%',
        width: '30%',
        backgroundColor: '#42f5b6',
        alignSelf: 'center',
        marginTop: '6%',
        marginBottom: '2%',
        borderRadius: 15,
        padding: 8
     }
});
export default SecondScreen;
