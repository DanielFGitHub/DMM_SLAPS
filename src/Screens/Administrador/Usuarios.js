import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, ScrollView, Pressable, Alert } from 'react-native';
import {Picker} from '@react-native-picker/picker';
import axios from 'axios';
import Styles from '../../Estilos/Styles';

function Usuarios({navigation}) {
    const [registros, setRegistros] = useState([]);
    const [genero, setGenero] = useState();
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
        cargo: '',
        fecha_nacimiento: '',
        genero: '' 
    });

    useEffect(() => {
        fetchRegistros();
    }, []);

    const fetchRegistros = async () => {
        try {
            const response = await axios.get('http://localhost:8081/registros');
            setRegistros(response.data);
        } catch (error) {
            console.error('Error al obtener registros: ', error);
        }
    };

    // const handleSubmit2 = async () => {
    //     if (
    //         formData.appat === '' ||
    //         formData.apmat === '' ||
    //         formData.nombre === ''
    //     ) {
    //         Alert.alert('Datos de usuario requeridos');
    //     } else if (formData.calle === '' || formData.colonia === '') {
    //         Alert.alert('Error: Datos de domicilio requeridos');
    //     } else if (formData.email === '' || formData.pass === '') {
    //         Alert.alert('Error: Datos de acceso requeridos');
    //     } else {
    //         try {
    //             if(formData.id_usuario){

    //             }else{

    //             }
    //             await axios.post('http://localhost:8081/registrarUsuario', formData);
    //             Alert.alert('Registro exitoso');
    //             // Limpiar el formulario después de enviar los datos
    //             setFormData({
    //                 nombre: '',
    //                 appat: '',
    //                 apmat: '',
    //                 calle: '',
    //                 colonia: '',
    //                 municipio: '',
    //                 estado: '',
    //                 telefono: '',
    //                 email: '',
    //                 pass: '',
    //                 cargo: '',
    //                 fecha_nacimiento: ''
    //             });
    //         } catch (error) {
    //             console.error('Error al crear el registro', error);
    //             Alert.alert('Error', 'No se pudo completar el registro');
    //         }
    //     }
    // };
    const handleSubmit = async () => {
        if (
            formData.appat === '' ||
            formData.apmat === '' ||
            formData.nombre === ''
        ) {
            Alert.alert('Datos de usuario requeridos');
        } else if (formData.calle === '' || formData.colonia === '') {
            Alert.alert('Error: Datos de domicilio requeridos');
        } else if (formData.email === '' || formData.pass === '') {
            Alert.alert('Error: Datos de acceso requeridos');
        } else {
            try{
                if(formData.id_usuario){
                    await axios.put(`http://localhost:8081/editarUsuario/${formData.id_usuario}`, formData);
                    clearFormData();
                }else{
                    await axios.post(`http://localhost:8081/registrarUsuario`, formData); 
                }
                fetchRegistros();
                clearFormData();
            }catch{

            }
        }
    };

    const handleDelete = async (id_usuario) => {
        // try {
        //     Alert.alert(
        //         'Confirmar eliminación',
        //         '¿Estás seguro de que deseas eliminar este registro?',
        //         [
        //             {
        //                 text: 'Cancelar',
        //                 style: 'cancel',
        //             },
        //             {
        //                 text: 'Eliminar',
        //                 onPress: async () => {
        //                     try {
        //                         await axios.delete(`http://localhost:8081/eliminarUsuario/${id_usuario}`);
        //                         // Actualizar la lista de registros
        //                         fetchRegistros();
        //                         Alert.alert('Éxito', 'Se ha eliminado el registro');
        //                     } catch (error) {
        //                         console.error('Error al eliminar el registro: ', error);
        //                         Alert.alert('Error', 'No se pudo eliminar el registro');
        //                     }
        //                 },
        //             },
        //         ],
        //         { cancelable: true }
        //     );
        // } catch (error) {
        //     console.error('Error al mostrar el cuadro de diálogo: ', error);
        // }
        try {
            await axios.delete(`http://localhost:8081/eliminarUsuario/${id_usuario}`);
            // Actualizar la lista de registros
            fetchRegistros();
           // Alert.alert('Éxito', 'Se ha eliminado el registro');
        } catch (error) {
            console.error('Error al eliminar el registro: ', error);
           // Alert.alert('Error', 'No se pudo eliminar el registro');
        }
    };

    const handleEdit = (registro) => {
        setFormData(registro);
    };

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
            cargo: '',
            fecha_nacimiento: '',
            genero: ''        
        });
    };

    return (
        <View style={Styles.body}>
        <ScrollView contentContainerStyle={Styles.container}>
            
                <Text style={Styles.h1}>Registrar / Editar Usuarios</Text>
                <Text style={Styles.h3}>Información Personal</Text>
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
                    style={[Styles.input]}
                    placeholder="Password"
                    secureTextEntry={true}
                    value={formData.pass}
                    onChangeText={text => setFormData({ ...formData, pass: text })}
                />
                <TextInput
                    style={Styles.input}
                    placeholder="Fecha de Nacimiento"
                    value={formData.fecha_nacimiento}
                    onChangeText={text => setFormData({ ...formData, fecha_nacimiento: date })}
                />
                <Text style={Styles.text}>Genero</Text>
                <View style={Styles.input}>
                    <Picker
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

                <Pressable onPress={handleSubmit} style={Styles.Boton3}>
                    <Text style={Styles.buttonText}>{formData.id_usuario ? 'Editar Registro' : 'Agregar Registro'}</Text>
                </Pressable>

                <Text style={Styles.h1}>Lista de usuarios:</Text>
                {registros.map((registro) => (
                    <View key={registro.id_usuario} style={[Styles.lista, Styles.fondo]}>
                        <Text style={Styles.text2}>Nombre: {registro.nombre} {registro.appat} {registro.apmat}</Text>
                        <Text style={Styles.text2}>Domicilio: {registro.calle}, {registro.colonia}</Text>
                        <Text style={Styles.text2}>Correo: {registro.email}</Text>
                        <Text style={Styles.text2}>Genero: {registro.genero} </Text>
                        <Pressable onPress={() => handleEdit(registro)} style={Styles.BotonAceptar}>
                            <Text style={Styles.buttonText}>Editar</Text>
                        </Pressable>
                        <Pressable onPress={() => handleDelete(registro.id_usuario)} style={Styles.BotonEliminar}>
                            <Text style={Styles.buttonText}>Eliminar</Text>
                        </Pressable>
                    </View>
                ))}
                <View style={Styles.buttonsContainer} >
                    <Pressable  onPress={()=>navigation.navigate('Administrador')} style={Styles.Boton1}>
                        <Text style={Styles.buttonText}>Regresar</Text>
                    </Pressable>
                </View>
            
        </ScrollView>
        </View>
    );
}

export default Usuarios;
