import { StyleSheet } from 'react-native';


const HomeStyles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fbcfef',  //fbcfef
    },
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: '#333333',
      paddingVertical: 10,
      paddingHorizontal: 20,
    },
    sup: {
      alignItems: 'center',
      width: '100%',
      // backgroundColor: 'white',
    },
    textOverImage: {
      alignItems: 'center',
      position: 'absolute',
      top: '30%', 
      width: 200,
      // textAlign: 'center',
      flexDirection: 'row',
      color: 'white',
      fontSize: 26,
      fontWeight: 'bold',
    },
    backgroundHome: {
      alignItems: 'center',
      width: '100%',
      height: 400,
      borderRadius: 10,
      // transform: [{ scale: 1.2 }],
    },
    logo: {
      width: 50,
      height: 50,
      marginRight: 10,
      borderRadius: 10,
      // marginLeft: 110,
    },
    headerTitle: {
      fontSize: 24,
      fontWeight: 'bold',
      color: 'white',
    },
    profileImage: {
      width: 50,
      height: 50,
      // marginLeft: 90,
    },
  
    destaquesContainer: {
      alignItems: 'center',
    },
  
    categoriesContainer: {
      alignItems: 'center',
      marginBottom: 20,
      marginTop: 30,
    },
    sectionTitle: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 30,
      color: 'black',
      // fontFamily: 'times-new-roman',
    },
    categories: {
      width: '100%',
      alignItems: 'center',
    },
    categoryItem: {
      alignItems: 'center',
      width: '75%',
      height: '27%',
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 5,
      marginBottom: 10,
    },
    backgroundImage: {
      width: '100%',
      height: '100%',
      borderRadius: 5,
      justifyContent: 'center',
      alignItems: 'center',
    },
    imageBorderRadius: {
      borderRadius: 10,
    },
    categoryText: {
      fontSize: 20,
      color: 'white',
    },
    productContainer: {
      alignItems: 'center', // Centraliza os produtos
    },
    productItem: {
      backgroundColor: '#ffffff',
      width: 300, // Ajuste a largura dos produtos conforme desejado
      height: 250,
      padding: 10,
      marginBottom: 10,
      borderRadius: 5,
    },
    productName: {
      fontSize: 16,
      fontWeight: 'bold',
    },
    productPrice: {
      fontSize: 14,
      color: '#007bff',
    },
  });

  export default HomeStyles;