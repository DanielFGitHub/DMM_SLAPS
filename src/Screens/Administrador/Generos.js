import React, { useEffect, useState } from 'react';
import { View, Text, Pressable } from 'react-native';
import axios from 'axios';
import Styles from '../../Estilos/Styles'
//import { PieChart } from 'react-native-svg-charts';
import { PieChart, Pie, Tooltip, ResponsiveContainer, Cell, Legend } from 'recharts';

// const data = [
//     { genero: 'Masculino', cantidad_personas: 23 },
//     { genero: 'Femenino', cantidad_personas: 22 },
//     { genero: 'Otro', cantidad_personas: 23 },
//   ];

function Generos({navigation}) {
    const [registros, setRegistros] = useState([]);

    useEffect(() => {
        fetchRegistros();
    }, []);

    const fetchRegistros = async () => {
        try {
            const response = await axios.get('http://localhost:8081/generos');
            setRegistros(response.data);
        } catch (error) {
            console.error('Error al obtener registros: ', error);
        }
    };

    // Colores asignados para cada valor
    const colors = ['#FF69B4', '#64b5f6', '#FFA500']; // Rosa, Azul, Naranja

    return (
        <View style={Styles.body}>
            <View style={Styles.container}>
                <Text style={Styles.h1}>Gráfica de Generos</Text>
                <View style={{ width: '90%', height: 200, backgroundColor: 'lightgray', padding: 5 }}>
                    <ResponsiveContainer width="90%" aspect={1.8}>
                        <PieChart >
                            <Pie
                                dataKey="cantidad_personas"
                                isAnimationActive={false}
                                data={registros}
                                cx="50%"
                                cy="60%"
                                outerRadius={50}
                                label
                            >
                                {
                                    registros.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={colors[index]} />
                                    ))
                                }
                            </Pie>
                            <Tooltip />
                        </PieChart>
                    </ResponsiveContainer>
                </View>
                
                <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 20 }}>
                    {registros.map((entry, index) => (
                        <View key={index} style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <View style={{ width: 10, height: 10, backgroundColor: colors[index], marginRight: 5 }}></View>
                            <Text style={{ color: colors[index] }}>{entry.genero}</Text>
                        </View>
                    ))}
                </View>
                <View>
                    <Pressable style={Styles.button} onPress={() => navigation.navigate('Administrador')}>
                        <Text style={Styles.buttonText}>Regresar</Text>
                    </Pressable>
                </View>
            </View>
        </View>
    );
}

export default Generos;
