import { StyleSheet } from 'react-native';

const ListaPerfumeStyles = StyleSheet.create({

    header: {
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: '#333333',
      paddingVertical: 10,
      paddingHorizontal: 20,
      // position: 'absolute',
      top: 0,
    },
  
    headerTitle: {
      fontSize: 24,
      fontWeight: 'bold',
      color: 'white',
    },
  
    logo: {
      width: 50,
      height: 50,
      marginRight: 10,
      borderRadius: 10,
    },

    profileImage: {
      width: 50,
      height: 50,
      // marginLeft: 90,
    },
  
    sup: {
      marginTop: 70,
      marginBottom: 30,
    },
  
    container: {
      // width: '100%',
      flex: 1,
      // paddingHorizontal: 20,
      // paddingTop: 20,
      backgroundColor: '#fbcfef',
    },
    title: {
      textAlign: 'center',
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 20,
      color: 'black',
    },
    list: {
      paddingBottom: 20,
    },
    perfumeItem: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 10,
      backgroundColor: '#f0f0f0',
      padding: 10,
      borderRadius: 5,
      marginLeft: 30,
      marginRight: 30,
      // marginTop: 10,
    },
    perfumeImage: {
      width: 80,
      height: 80,
      marginRight: 10,
      borderRadius: 5,
    },
    perfumeInfo: {
      flex: 1,
    },
    perfumeName: {
      fontSize: 16,
      fontWeight: 'bold',
    },
    perfumeMarca: {
      fontSize: 14,
    },
    perfumePreco: {
      fontSize: 14,
    },
  });

  export default ListaPerfumeStyles;