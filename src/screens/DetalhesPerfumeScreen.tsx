import React from 'react';
import { StyleSheet, Text, View , Image, TouchableOpacity} from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import { Perfume } from '../types';
import DetailStyles from './styles/DetailStyles';
const DetalhesPerfumeScreen: React.FC = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const { id } = route.params as { id: number }; // Recebe o parâmetro id da navegação

  
  const perfumes: Perfume[] = [
    { id: 1, nome: 'Juliette Has A Gun', marca: 'JULIETTE HAS A GUN', preco: 670, image: require('../images/juliethasaguyn.jpg'), descricao: 'Juliette has a gun perfume is a captivating blend of elegance and sensuality.'  },
    { id: 2, nome: 'Bentley For Men Azure', marca: 'Bentley', preco: 470, image: require('../images/bentleyperfume.jpg'), descricao: 'Bentley For Men Azure is a sophisticated and invigorating fragrance that exudes elegance and charm.'  },
    { id: 3, nome: 'Ferrari Scuderia Red', marca: 'Ferrari', preco: 220, image: require('../images/ferrari.png'), descricao: 'Ferrari Red Perfume is like the myth of Ferrari in Italy. Its color became famous all over the world. A unique and unmatched red.'  },
  ];

  // Busca o produto com base no ID recebido
  const perfumeDetalhado = perfumes.find((perfume) => perfume.id === id);

  if (!perfumeDetalhado) {
    
    return (
      <View style={DetailStyles.container}>
        <Text style={DetailStyles.title}>Produto não encontrado</Text>
      </View>
    );
  }

  const handleAdicionarCarrinho = (perfume: Perfume) => {
    navigation.navigate('Carrinho', { id: perfume.id});
  };


  // Exibe os detalhes do produto encontrado
  return (
    <View style={DetailStyles.container}>
      <View style={DetailStyles.header}>
        <Image source={require('../images/perfil4.jpg')} style={DetailStyles.logo} />
        <Text style={DetailStyles.headerTitle}>ScentMail</Text>
      </View>
      {/* <Text style={styles.title}>Detalhes do Produto</Text> */}
      <View style={DetailStyles.titleContainer}>
        <Text style={DetailStyles.title}>{perfumeDetalhado.nome}</Text>
      </View>
      <View style={DetailStyles.imageContainer}>
        <Image source={perfumeDetalhado.image} style={DetailStyles.image} />
      </View>
      <View style={DetailStyles.infoContainer}>
        {/* <Text>{produtoDetalhado.marca}</Text> */}
        <View style={DetailStyles.infoDetail}>
          <Text style={DetailStyles.detailText}>{perfumeDetalhado.descricao}</Text>
        </View>
        <View style={DetailStyles.infoPrice}>
          <Text style={DetailStyles.priceText}>R$ {perfumeDetalhado.preco}</Text>
          <TouchableOpacity onPress={() => handleAdicionarCarrinho(perfumeDetalhado)} style={DetailStyles.button}>
            <Text>Adicionar ao Carrinho</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({

});

export default DetalhesPerfumeScreen;
