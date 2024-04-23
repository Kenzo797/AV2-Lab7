import { StyleSheet } from 'react-native';

const AppStyles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
        backgroundColor: '#4a0638',
      },
      title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        color: 'white',
      },
      input: {
        width: '70%',
        height: 40,
        borderColor: 'white',
        borderWidth: 1,
        marginBottom: 20,
        paddingHorizontal: 10,
        borderRadius: 5,
        
      },
      buttonContainer: {
        // flexDirection: 'row',
        justifyContent: 'center', // Centraliza os botões horizontalmente
        alignItems: 'center', // Centraliza os botões verticalmente
      },
      button: {
        width: 120, // Largura do botão
        height: 40, // Altura do botão
        borderRadius: 5, // Borda arredondada
      },
      separator: {
        width: 10, // Largura do espaçamento entre os botões
        height: 10,
      },
});

export default AppStyles;