import {View,Text, FlatList, Pressable} from 'react-native';
import React, {useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import Styles from './style';
import routes from '../../common/routes';
const USERS_URL = 'https://jsonplaceholder.typicode.com/users';
const Users = () => {
    const [users, setUsers] = useState([]);

    fetch(USERS_URL).then(data => data.json()).then(jsonData => {
        setUsers(jsonData)
    })
    const { navigate } = useNavigation();
    return (
        <FlatList
            data={users}
            renderItem={({ item }) =>
                <View style={Styles.containerStyle}>
                    <Pressable onPress={() => navigate(routes.details, { user: item })}>
                        <Text style={Styles.containerStyle_1}>myName  : <Text style={Styles.containerStyle_3}>{item.name}</Text> </Text> 
                        <Text style={Styles.containerStyle_1}>myEmail : <Text style={Styles.containerStyle_3}> {item.email}</Text></Text> 
                        <Text style={Styles.containerStyle_2}>Details</Text>
                    </Pressable>
                </View>
            }
        >
        </FlatList>

    )
}
    export default Users ;


