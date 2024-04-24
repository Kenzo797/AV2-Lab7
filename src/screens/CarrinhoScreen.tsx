import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const CarrinhoScreen: React.FC = () => {
  const navigation = useNavigation();

  // Método para adicionar o produto ao carrinho
  const handleAddToCart = (productId: number) => {
    navigation.navigate('Carrinho', { productId });
  };

  return (
    <View style={styles.container}>
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
    backgroundColor: '#4a0638',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 130,
    color: 'white',
  },
  alertContainter:{
    justifyContent: 'center',
    alignItems: 'center',
    height: '50%',
    width: '60%',
    backgroundColor: 'grey',
    borderRadius: 10,
  },
  alertText:{
    fontSize: 22,

  },

});

export default CarrinhoScreen;
