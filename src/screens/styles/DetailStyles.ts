import { StyleSheet } from 'react-native';

const DetailStyles = StyleSheet.create({

    header: {
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: '#333333',
      paddingVertical: 10,
      paddingHorizontal: 20,
      position: 'absolute',
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
  
    container: {
      flex: 1,
      // justifyContent: 'center',
      alignItems: 'center',
      // padding: 20,
      backgroundColor: '#fbcfef',
    },
    title: {
      // marginTop: 200,
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 40,
      color: 'black',
    },

    profileImage: {
      width: 50,
      height: 50,
      // marginLeft: 90,
    },
  
    titleContainer: {
      marginTop: 150,
    },
  
    imageContainer: {
      marginBottom: 30,
    },
  
    image: {
      width: 400,
      height: 400,
      borderRadius: 10,
    },
  
    infoContainer: {
      // backgroundColor: 'grey',
      width: 390
    },
  
    infoDetail: {
      // backgroundColor: 'grey',
      // marginBottom: 20,
    },
  
    infoPrice: {
      marginTop: 50,
      flexDirection: 'row',
      // backgroundColor: 'grey',
    },
    button: {
      marginLeft: 30,
      backgroundColor: '#4a0638',
      paddingHorizontal: 20,
      paddingVertical: 10,
      borderRadius: 5,
    },

    buttonText: {
      color: 'white'
    },
  
    priceText: {
      color: 'black',
      fontSize: 30,
    },
  
    detailText: {
      color: '#4a0638',
      fontSize: 20,
    },
  
  
  });




export default DetailStyles;