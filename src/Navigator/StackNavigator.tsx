import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import LoginForm from "../Screens/Login";
import Registro from "../Screens/Registro";
import UserDashboard from "../Screens/Usuario/Usuario";
import AdminDashboard from "../Screens/Administrador/Administrador";
import Limpiezas from "../Screens/Usuario/Limpiezas";
import Voltajes from "../Screens/Usuario/Voltajes";
import Generos from "../Screens/Administrador/Generos";
import Usuarios from "../Screens/Administrador/Usuarios";

const Stack=createStackNavigator();
export const StackNavigator=()=>{
    return(
        
        <Stack.Navigator
            screenOptions={{
                headerStyle: {
                backgroundColor: 'rgba(51, 36, 154, 0.7)',
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                fontWeight: 'bold',
                },
            }}
            initialRouteName='LoginForm'
        >
            <Stack.Screen name='LoginForm' component={LoginForm} />
            <Stack.Screen name='Registro' component={Registro} />
            <Stack.Screen name='Usuario' component={UserDashboard} />
            <Stack.Screen name='Limpiezas' component={Limpiezas} />
            <Stack.Screen name='Administrador' component={AdminDashboard} />
            <Stack.Screen name='Voltajes' component={Voltajes} />
            <Stack.Screen name='Generos' component={Generos} />
            <Stack.Screen name='Usuarios' component={Usuarios} />
        </Stack.Navigator>
    
    );

}

