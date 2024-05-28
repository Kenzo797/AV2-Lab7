import React from 'react';
import { StyleSheet, Text, View, Button, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const CarrinhoScreen: React.FC = () => {
  const navigation = useNavigation();

  // Método para adicionar o produto ao carrinho
  const handleAddToCart = (productId: number) => {
    navigation.navigate('Carrinho', { productId });
  };

  const handleProfilePress = () => {
    navigation.navigate('PerfilUsuario'); // Navegue para a tela de perfil de usuário
  };


  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require('../images/perfil4.jpg')} style={styles.logo} />
        <Text style={styles.headerTitle}>ScentMail</Text>


        <TouchableOpacity onPress={handleProfilePress}>
          <Image source={require('../images/paineg.png')} style={styles.profileImage} />
        </TouchableOpacity>

      </View>



        <Text style={styles.title}>Carrinho</Text>
      <View style={styles.alertContainter}>
        <Text style={styles.alertText}>Seu carrinho encontra-se vazio :/</Text>
      </View>
      {/* Aqui você pode adicionar a lógica para exibir os produtos adicionados ao carrinho */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fbcfef',    ////fbcfef
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 110,
    color: '#4a0638',
  },
  alertContainter:{
    justifyContent: 'center',
    alignItems: 'center',
    height: '65%',
    width: '80%',
    backgroundColor: 'white',
    borderRadius: 10,
  },
  alertText:{
    fontSize: 22,

  },

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

  profileImage: {
    width: 50,
    height: 50,
    // marginLeft: 90,
  },


});

export default CarrinhoScreen;
