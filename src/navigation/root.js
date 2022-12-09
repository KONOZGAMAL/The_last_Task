import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/Home";
import routes from "../common/routes";
import Users from "../screens/Users";
import Details from "../screens/Details";
const Stack =createNativeStackNavigator()

export default function Root(){
    return ( <Stack.Navigator>
 {/* <Stack.Screen name="MealDetailsScreen" component={MealDetailsScreen} /> */}
 
<Stack.Screen name ={routes.users} component={Users}/>
    <Stack.Screen name={routes.home}
     component={Home}
     options={{
        headerTitle:'Home',
        // headerStyle:{
        //  // backgroundColor:'yellow',
        // },
        // headerTintColor:'gre',
        headerTitleStyle:{
            fontSize:30,
        },
     }}/>
    <Stack.Screen name={routes.details} component={Details}/>

    </Stack.Navigator>
    )
}


