import React, { useState, useEffect } from "react";
import { View, Text, FlatList, Pressable } from "react-native";
import axios from "axios";
import Styles from '../../Estilos/Styles';

const Limpiezas = ({navigation}) => {
  //const navigation = useNavigation();
  const [registros, setRegistros] = useState([]);

  useEffect(() => {
    fetchRegistros();
  }, []);

  const fetchRegistros = async () => {
    try {
      const response = await axios.get('http://localhost:8081/limpiezas');
      setRegistros(response.data);
    } catch (error) {
      console.error('Error al obtener registros: ', error);
    }
  };

  const renderRow = ({ item }) => (
    <View style={Styles.row}>
      <Text style={Styles.cell}>{item.fecha_limpieza}</Text>
      <Text style={Styles.cell}>{item.hora_limpieza}</Text>
    </View>
  );

  return (

    <View style={Styles.body}>
        <View style={Styles.container}>
        <Text style={Styles.h2}>Historial de Limpiezas</Text>
        <FlatList
          data={registros}
          keyExtractor={(item) => item.id_limpieza.toString()}
          renderItem={renderRow}
        />
        <View>
          <Pressable style={Styles.Boton2}>
            <Text style={Styles.buttonText}>Limpieza de emergencia</Text>
          </Pressable>

          <Pressable style={Styles.Boton3} onPress={() => navigation.goBack()}>
            <Text style={Styles.buttonText}>Regresar</Text>
          </Pressable>
        </View>
       
      </View>
    </View>
  );
};

// const Styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     backgroundColor: "#3e64ff",
//     paddingHorizontal: 20,
//   },
//   title: {
//     fontSize: 28,
//     fontWeight: "bold",
//     color: "#ffffff",
//     marginBottom: 20,
//   },
//   registroContainer: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     alignItems: "center",
//     paddingHorizontal: 20,
//     marginBottom: 10,
//   },
//   registroText: {
//     fontSize: 18,
//     color: "#ffffff",
//   },
// });

export default Limpiezas;



