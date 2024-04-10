import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { BarChart, Grid, XAxis, YAxis } from 'react-native-svg-charts';
import { Tooltip } from 'react-native-svg';
import { Link } from 'react-router-dom';

const data = [
    { fecha: '01-03-2024', usuariosN: 2 },
    { fecha: '02-03-2024', usuariosN: 3 },
    { fecha: '03-03-2024', usuariosN: 4 },
    { fecha: '04-03-2024', usuariosN: 5 },
    { fecha: '05-03-2024', usuariosN: 6 },
    { fecha: '06-03-2024', usuariosN: 4 },
    { fecha: '07-03-2024', usuariosN: 7 },
    { fecha: '08-03-2024', usuariosN: 6 },
    { fecha: '09-03-2024', usuariosN: 10 },
];

function GraficaUsuarios() {
    const axesSvg = { fontSize: 10, fill: 'grey' };
    const verticalContentInset = { top: 10, bottom: 10 };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Gráfica de Usuarios</Text>
            <View style={styles.chart}>
                <BarChart
                    style={{ flex: 1 }}
                    data={data}
                    gridMin={0}
                    svg={{ fill: 'rgba(62, 100, 255, 0.8)' }}
                    yAccessor={({ item }) => item.usuariosN}
                    contentInset={verticalContentInset}
                >
                    <Grid />
                    <Tooltip />
                </BarChart>
                <XAxis
                    style={{ marginHorizontal: -10 }}
                    data={data}
                    formatLabel={(value, index) => data[index].fecha}
                    contentInset={{ left: 10, right: 10 }}
                    svg={axesSvg}
                />
                <YAxis
                    style={{ marginBottom: -10 }}
                    data={data}
                    contentInset={verticalContentInset}
                    svg={axesSvg}
                />
            </View>
            <Link to="/Administrador">
                <button style={styles.button}>Regresar</button>
            </Link>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black',
    },
    title: {
        fontSize: 20,
        color: 'white',
        marginBottom: 20,
    },
    chart: {
        height: 300,
        flexDirection: 'row',
    },
    button: {
        marginTop: 20,
        backgroundColor: '#3e64ff',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
    },
});

export default GraficaUsuarios;
