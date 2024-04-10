import React, { useState } from 'react';
import { View, Text, TextInput, Pressable, Alert, ScrollView } from 'react-native';
import axios from 'axios';
import Styles from '../Estilos/Styles';
import {Picker} from '@react-native-picker/picker';
const Registro = ({ navigation }) => {
    //const [cargo, setCargo] = useState('');
    const [formData, setFormData] = useState({
        id_usuario: null,
        nombre: '',
        appat: '',
        apmat: '',
        calle: '',
        colonia: '',
        municipio: '',
        estado: '',
        telefono: '',
        email: '',
        pass: '',
        fecha_nacimiento: '',
        cargo: 'Usuario',
        genero: ''
    });

    const clearFormData = () => {
        setFormData({
            nombre: '',
            appat: '',
            apmat: '',
            calle: '',
            colonia: '',
            municipio: '',
            estado: '',
            telefono: '',
            email: '',
            pass: '',
            fecha_nacimiento: '',
            cargo: 'Usuario',
            genero: ''
        });
    };

    const handleSubmit = () => {
        // if (formData.nombre === '' || formData.appat === '' || formData.apmat === '') {
        //     Alert.alert("Error", "Datos personales requeridos");
        // } else if (formData.calle === '' || formData.colonia === '') {
        //     Alert.alert("Error", "Datos de domicilio requeridos");
        // } else if (formData.email === '' || formData.pass === '') {
        //     Alert.alert("Error", "Datos de acceso requeridos");
        // } else {
            axios.post('http://localhost:8081/registrarUsuario', formData)
                .then(res => {
                    console.log(res);
                    //Alert.alert("Éxito", "Registro exitoso");
                    clearFormData();
                    navigation.navigate("LoginForm");
                })
                .catch(err => console.error(err));
        //}
    }

    return (
        <View style={Styles.body}>

       
        <ScrollView contentContainerStyle={Styles.container}>
            <Text style={Styles.h1}>Registrarse</Text>
            <Text style={Styles.text}>Información Personal</Text>
            <TextInput
                 style={Styles.input}
                placeholder="Nombre"
                value={formData.nombre}
                onChangeText={text => setFormData({ ...formData, nombre: text })}
            />
            <TextInput
                 style={Styles.input}
                placeholder="Apellido Paterno"
                value={formData.appat}
                onChangeText={text => setFormData({ ...formData, appat: text })}
            />
            <TextInput
                 style={Styles.input}
                placeholder="Apellido Materno"
                value={formData.apmat}
                onChangeText={text => setFormData({ ...formData, apmat: text })}
            />
            <Text style={Styles.text}>Información de domicilio</Text>
            <TextInput
                 style={Styles.input}
                placeholder="Calle"
                value={formData.calle}
                onChangeText={text => setFormData({ ...formData, calle: text })}
            />
            <TextInput
                 style={Styles.input}
                placeholder="Colonia"
                value={formData.colonia}
                onChangeText={text => setFormData({ ...formData, colonia: text })}
            />
            <TextInput
                 style={Styles.input}
                placeholder="Municipio"
                value={formData.municipio}
                onChangeText={text => setFormData({ ...formData, municipio: text })}
            />
            <TextInput
                 style={Styles.input}
                placeholder="Estado"
                value={formData.estado}
                onChangeText={text => setFormData({ ...formData, estado: text })}
            />
            <TextInput
                 style={Styles.input}
                placeholder="Telefono"
                value={formData.telefono}
                onChangeText={text => setFormData({ ...formData, telefono: text })}
            />
            <Text style={Styles.text}>Información de acceso</Text>
            <TextInput
                 style={Styles.input}
                placeholder="Email"
                value={formData.email}
                onChangeText={text => setFormData({ ...formData, email: text })}
            />
            <TextInput
                 style={Styles.input}
                placeholder="Password"
                secureTextEntry={true}
                value={formData.pass}
                onChangeText={text => setFormData({ ...formData, pass: text })}
            />
            <Text style={Styles.text}>Fecha de Nacimiento</Text>
            <TextInput
                style={Styles.input}
                placeholder="(Año-Mes-Dia)"
                value={formData.fecha_nacimiento}
                onChangeText={text => setFormData({ ...formData, fecha_nacimiento: text })}
            />
            <Text style={Styles.text}>Genero</Text>
            <View style={Styles.input}>
                <Picker
                style={Styles.picker}
                    selectedValue={formData.genero}
                    onValueChange={(itemValue, itemIndex) =>
                        setFormData({...formData, genero: itemValue})
                    }>
                    <Picker.Item label="Seleccione una opción" value="" />
                    <Picker.Item label="Masculino" value="Masculino" />
                    <Picker.Item label="Femenino" value="Femenino" />
                    <Picker.Item label="Otro" value="Otro" />
                </Picker>
            </View>

            <Pressable style={Styles.Boton5} onPress={handleSubmit}>
                <Text style={Styles.buttonText}>Registrarme</Text>
            </Pressable>

            <Pressable style={Styles.button} onPress={() => navigation.navigate('LoginForm')}>
                <Text style={Styles.buttonText}>Regresar</Text>
            </Pressable>
        </ScrollView>
    </View>    
    );
}

export default Registro;
