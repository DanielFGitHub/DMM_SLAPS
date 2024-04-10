const Styles = {
  body: {
    backgroundColor: '#3e64ff', // Utilizando solo el primer color del gradiente lineal para el fondo
    flex: 1, // Ajuste necesario para que el gradiente funcione en toda la pantalla
    justifyContent: 'center', // Ajuste necesario para que el gradiente funcione en toda la pantalla
    alignItems: 'center', // Ajuste necesario para que el gradiente funcione en toda la pantalla
  },
  container: {
    backgroundColor: 'rgba(51, 36, 154, 0.7)',
    padding: 50,
    borderRadius: 10,
    marginBottom: 20,
  },
  container2: {
    textAling: 'center' ,
    alignItems: 'center', 
    backgroundColor: 'rgba(112, 93, 232, 0.7)',
    padding: 50,
    borderRadius: 10,
    marginBottom: 20,
  },
  container3: {
    backgroundColor: 'rgba(255, 173, 10, 0.7)',
    padding: 50,
    borderRadius: 10,
    marginBottom: 20,
  },
  fondo: {
    backgroundColor: 'rgba(51, 36, 154, 0.7)',
  },
  fondo2: {
    backgroundColor: 'rgba(112, 93, 232, 0.7)',
  },
  fondo3: {
    backgroundColor: 'rgba(143, 173, 89, 0.7)',
  },
  // h1: {
  //   fontSize: 48,
  //   marginBottom: 30,
  //   textAlign: 'center',
  //   color: '#ffffff',
  // },
  p: {
    fontSize: 24,
    marginBottom: 40,
    textAlign: 'center',
    color: '#ffffff',
  },
  flex: {
    alignItems: 'center',
  },
  Boton1: {
    fontSize: 24,
    borderRadius: 10,
    paddingVertical: 15,
    paddingHorizontal: 30,
    marginBottom: 20,
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
    backgroundColor: 'rgba(62, 100, 255, 0.7)',
    color: '#ffffff',
  },
  Boton2: {
    fontSize: 24,
    borderRadius: 10,
    paddingVertical: 15,
    paddingHorizontal: 30,
    marginBottom: 20,
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
    backgroundColor: 'rgba(56, 227, 174, 0.7)',
    color: '#120b0b',
  },
  Boton3: {
    fontSize: 24,
    borderRadius: 10,
    paddingVertical: 15,
    paddingHorizontal: 30,
    marginBottom: 20,
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
    backgroundColor: 'rgba(255, 173, 10, 0.7)',
    color: '#181414',
  },
  Boton4: {
    fontSize: 24,
    borderRadius: 10,
    paddingVertical: 15,
    paddingHorizontal: 30,
    marginBottom: 20,
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
    backgroundColor: '#f759ab',
    color: '#110d0d',
  },
  Boton5: {
    fontSize: 24,
    borderRadius: 10,
    paddingVertical: 15,
    paddingHorizontal: 30,
    marginBottom: 20,
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
    backgroundColor: 'rgba(51, 36, 154, 0.7) ',
    color: '#ffffff',
  },
  BotonEliminar: {
    fontSize: 24,
    borderRadius: 10,
    paddingVertical: 15,
    paddingHorizontal: 30,
    marginBottom: 20,
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
    backgroundColor: '#900020',
    color: '#800000',
  },
  BotonAceptar: {
    fontSize: 24,
    borderRadius: 10,
    paddingVertical: 15,
    paddingHorizontal: 30,
    marginBottom: 20,
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
    backgroundColor: 'rgba(56, 227, 174, 0.7)',
    color: 'black',
  },
  h1: {
    fontSize: 32, // Tamaño similar al h1 de HTML
    fontWeight: 'bold', // Opcional: ajusta el peso de la fuente según tus preferencias
    marginBottom: 10, // Espacio adicional al final del h1
    color: '#ffffff'
  },
  h2: {
    fontSize: 24, // Tamaño similar al h2 de HTML
    fontWeight: 'bold', // Opcional: ajusta el peso de la fuente según tus preferencias
    marginBottom: 8, // Espacio adicional al final del h2
    color: '#ffffff'
  },
  h3: {
    fontSize: 20, // Tamaño similar al h3 de HTML
    fontWeight: 'bold', // Opcional: ajusta el peso de la fuente según tus preferencias
    marginBottom: 6, // Espacio adicional al final del h3
    color: '#ffffff'
  },
  input: {
    marginBottom: 10, // Espacio adicional entre los componentes
    fontSize: 18, // Tamaño de fuente más grande
    paddingHorizontal: 10, // Espacio horizontal dentro del componente
    paddingVertical: 12, // Espacio vertical dentro del componente
    borderWidth: 1, // Grosor del borde
    borderColor: '#ccc', // Color del borde
    borderRadius: 8, // Radio de borde
    color: '#ffffff'
  },
  text: {
    marginBottom: 10, // Espacio adicional entre los componentes
    fontSize: 18, // Tamaño de fuente más grande
    fontWeight: 'bold', // Peso de la fuente en negrita
    color: '#ffffff'
  },
  text2: {
    marginBottom: 10, // Espacio adicional entre los componentes
    fontSize: 18, // Tamaño de fuente más grande
    color: '#ffffff',
    textAlign: 'center'
  },
  button: {
    marginTop: 20, // Espacio adicional por encima del botón
    paddingVertical: 15, // Espacio vertical dentro del botón
    paddingHorizontal: 30, // Espacio horizontal dentro del botón
    backgroundColor: '#3e64ff', // Color de fondo del botón
    borderRadius: 8, // Radio de borde del botón
  },
  buttonText: {
    color: '#fff', // Color del texto del botón
    fontSize: 18, // Tamaño de fuente del texto del botón
    textAlign: 'center', // Alineación del texto del botón al centro
  },
  picker: {
    backGroundColor: '#3e64ff',
    width: '100%',
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 10,
    color: '#3e64ff', // Color del texto blanco
  },
  buttonsContainer: {
    marginTop: 20,
  },
  lista:{ borderWidth: 1, 
    borderColor: 'gray', 
    padding: 10, 
    marginVertical: 5, 
  },

  row: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingVertical: 10,
  },
  cell: {
    flex: 1,
    textAlign: 'center',
    color: 'white'
  },
};
export default Styles;
  