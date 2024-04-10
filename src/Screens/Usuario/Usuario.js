import React from 'react';
import { View, Text, Pressable } from 'react-native';
import Styles from '../../Estilos/Styles';
//import { useNavigation } from '@react-navigation/native';

const UserDashboard = ({navigation}) => {
  //const navigation = useNavigation();

  const handleLogout = () => {
    // Lógica para cerrar sesión
    //navigation.navigate('Login'); // Suponiendo que 'Home' es la pantalla de inicio de sesión
  };

  return (
    <View style={Styles.body}>
      <View style={Styles.container}>
        <Text style={Styles.h1}>Panel de Usuario</Text>
        <Text style={Styles.h3}>Hola, Bienvenido</Text>
        <Text style={Styles.text}>¿Qué desea hacer hoy?</Text>
        <View style={Styles.buttonsContainer}>
          <Pressable onPress={() => navigation.navigate('Limpiezas')} style={Styles.button}>
            <Text style={Styles.buttonText}>Limpiezas</Text>
          </Pressable>
          <Pressable onPress={() => navigation.navigate('Voltajes')} style={Styles.button}>
            <Text style={Styles.buttonText}>Voltaje</Text>
          </Pressable>
          <Pressable onPress={() => navigation.navigate('LoginForm')} style={[Styles.button, Styles.logoutButton]}>
            <Text style={Styles.buttonText}>Cerrar Sesión</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

// const Styles = Stylesheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#3e64ff',
//   },
//   content: {
//     alignItems: 'center',
//   },
//   title: {
//     fontSize: 28,
//     fontWeight: 'bold',
//     color: '#ffffff',
//     marginBottom: 10,
//   },
//   subtitle: {
//     fontSize: 18,
//     color: '#ffffff',
//     marginBottom: 10,
//   },
//   buttonsContainer: {
//     marginTop: 20,
//   },
//   button: {
//     backgroundColor: '#39e3b5',
//     paddingVertical: 15,
//     paddingHorizontal: 30,
//     borderRadius: 8,
//     marginBottom: 10,
//   },
//   buttonText: {
//     color: '#ffffff',
//     fontSize: 18,
//     fontWeight: 'bold',
//     textAlign: 'center',
//   },
//   logoutButton: {
//     backgroundColor: '#ff4500', // Cambiar el color del botón de cierre de sesión si es necesario
//   },
// });

export default UserDashboard;