import React from 'react';
import { View, Text, Pressable } from 'react-native';
import Styles from '../../Estilos/Styles'; // Asumo que estilos está correctamente definido

function AdminDashboard({ navigation }) {
  // Función para manejar el clic en el botón Ver Usuarios
  const handleVerUsuarios = () => {
    navigation.navigate('Usuarios');
  };

  // Función para manejar el clic en el botón Ver Gráfica de Usuarios
  const handleVerGraficaUsuarios = () => {
    navigation.navigate('GraficaUsuarios');
  };

  // Función para manejar el clic en el botón Ver Gráfica de Paneles
  const handleGeneros = () => {
    // Aquí puedes agregar la lógica para mostrar la gráfica de paneles
    navigation.navigate('Generos');
  };

  // Función para manejar el clic en el botón Cerrar Sesión
  const handleLogout = () => {
    navigation.navigate('LoginForm');
  };

  return (
    <View style={Styles.body}>
      <View style={Styles.container}>
        <Text style={Styles.text}>Dashboard de Administrador</Text>
        <View>
          <Pressable onPress={handleVerUsuarios} style={Styles.button}>
            <Text style={Styles.buttonText}>Ver Usuarios</Text>
          </Pressable>
          <Pressable onPress={handleVerGraficaUsuarios} style={Styles.button}>
            <Text style={Styles.buttonText}>Ver Gráfica de Usuarios</Text>
          </Pressable>
          <Pressable onPress={()=> navigation.navigate('Generos')} style={Styles.button}>
            <Text style={Styles.buttonText}>Ver Gráfica de Generos</Text>
          </Pressable>
          <Pressable onPress={handleLogout} style={[Styles.button, Styles.logoutButton]}>
            <Text style={Styles.buttonText}>Cerrar Sesión</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default AdminDashboard;
