
import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useEffect } from 'react';
import {View,Text} from 'react-native';
import styles from './style';
const USERS_URL = 'https://jsonplaceholder.typicode.com/users';

export default function  details(){
const { params: { user } } = useRoute();
const { setOptions } = useNavigation();
useEffect(() => {
    setOptions({ user })
}, [setOptions, user])
    return (
        <View style={[styles.mainClass]}>

            <Text style={styles.nameClass}>Hi {user.name}</Text>
            <View>
                <Text style={styles.nameClass_1}>User name:<Text style={styles.nameClass_2} > {user.username}</Text></Text> 
                <Text style={styles.nameClass_1}>Email : <Text style={styles.nameClass_2}> {user.email}</Text> </Text>
                <Text style={styles.nameClass_1}>Address :<Text style={styles.nameClass_2}> {user.address.city}</Text></Text>
                <Text style={styles.nameClass_1}>Phone : <Text style={styles.nameClass_2}> {user.phone}</Text></Text>
                <Text style={styles.nameClass_1}>Website :<Text style={styles.nameClass_2}> {user.website}</Text> </Text>
                <Text style={styles.nameClass_1}>Company : <Text style={styles.nameClass_2}> {user.company.name}</Text></Text>
            </View>
        </View >
    )
}





