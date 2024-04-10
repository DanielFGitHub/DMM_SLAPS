import React, { useState } from 'react';
import { View, Text, TextInput, Pressable, Alert } from 'react-native';
import axios from 'axios';
import Styles from '../Estilos/Styles';

function LoginForm({ navigation }) {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    function handleSubmit() {
        if (email !== '' && pass !== '') {
            axios.post('http://localhost:8081/login', { email, pass })
                .then(res => {
                    const cargo = res.data.cargo;
                    //console.log("Cargo:", cargo);
                    if (cargo.toLowerCase() === 'usuario') {
                        navigation.navigate('Usuario');
                    } else if (cargo.toLowerCase() === 'administrador') {
                        navigation.navigate('Administrador');
                    } else {
                        Alert.alert("Error", "Contraseña y/o Correo incorrectos");
                    }
                    clearFormData();
                })
                .catch(err => console.error(err));
        } else {
            Alert.alert("Atención", "Todos los campos del formulario son requeridos");
        }
    }

    const clearFormData = () => {
        setEmail(''),
        setPass('')
    };

    return (
        <View style={Styles.body}>
            <View style={Styles.container}>
                <Text style={Styles.h1}>Bienvenido</Text>
                <TextInput
                    style={Styles.input}
                    placeholder='example@gmail.com'
                    value={email}
                    onChangeText={text => setEmail(text)}
                />
                <TextInput
                    style={Styles.input}
                    secureTextEntry={true}
                    placeholder='Contraseña'
                    value={pass}
                    onChangeText={text => setPass(text)}
                />
                <Pressable style={Styles.button} onPress={handleSubmit}>
                    <Text style={Styles.buttonText}>Iniciar Sesión</Text>
                </Pressable>
                {/* Puedes eliminar este Pressable si no es necesario */}
                <Pressable style={Styles.button} onPress={() => navigation.navigate('Registro')}>
                    <Text style={Styles.buttonText}>Registrarse</Text>
                </Pressable>
            </View>
        </View>
    );
}

export default LoginForm;
