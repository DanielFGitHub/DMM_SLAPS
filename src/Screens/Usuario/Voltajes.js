import React, { useEffect, useState } from 'react';
import { View, Text,Pressable } from 'react-native';
import axios from 'axios';
import Styles from '../../Estilos/Styles'
//import { BarChart, Grid } from 'react-native-svg-charts';
import { Bar, Tooltip, BarChart, CartesianGrid, Legend, ResponsiveContainer, XAxis, YAxis } from 'recharts';


function Voltajes({navigation}) {
    const [registros, setRegistros ] = useState([]);

    useEffect(() => {
        fetchRegistros();
    }, []);

    const fetchRegistros = async () => {
        try {
            const response = await axios.get('http://localhost:8081/voltajes2');
            setRegistros(response.data);
        } catch (error) {
            console.error('Error al obtener registros: ', error.message);
        }
    };

    // Verificar si los registros están vacíos o no
    if (registros.length === 0) {
        return <View><Text>Cargando...</Text></View>;
    }

    const data = registros.map(item => ({ fecha: item.fecha_medida, voltaje: item.voltajeMedido }));

    return (
        <View style={Styles.body}>
            <Text style={Styles.text}>Gráfica del voltaje del panel</Text>
            <View style={{ width: '90%', height: 250, backgroundColor: 'lightblue', padding: 10 }}>
                <ResponsiveContainer width="90%" aspect={1.5} >
                    <BarChart  data={registros}
                        margin={{ top: 5, right: 30, left: 10, bottom: 5 }}>
                        <CartesianGrid strokeDasharray="4 1 3" />
                        <XAxis dataKey="fecha_medida" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="voltajeMedido" fill="#8AB6D6" />
                    </BarChart>
                </ResponsiveContainer>
            </View>
            <View style={Styles.buttonsContainer}>
                <Pressable onPress={() => navigation.navigate('Usuario')} style={Styles.Boton5}>
                    <Text style={Styles.buttonText}>Regresar</Text>
                </Pressable>
            </View>
            
        </View>
    );
};

export default Voltajes;
