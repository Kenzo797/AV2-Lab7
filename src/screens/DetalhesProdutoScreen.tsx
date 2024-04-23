import React from 'react';
import { StyleSheet, Text, View , Image} from 'react-native';
import { useRoute } from '@react-navigation/native';
import { Perfume } from '../types'; // Importe o tipo Perfume

const DetalhesProdutoScreen: React.FC = () => {
  const route = useRoute();
  const { id } = route.params as { id: number }; // Recebe o parâmetro id da navegação

  // Lista de produtos (simulando a lista que você tem na tela anterior)
  const perfumes: Perfume[] = [
    { id: 1, nome: 'Juliette Has A Gun', marca: 'JULIETTE HAS A GUN', preco: 670, image: require('../images/juliethasaguyn.jpg'), descricao: 'Juliette has a gun perfume is a captivating blend of elegance and sensuality.'  },
    { id: 2, nome: 'Bentley For Men Azure', marca: 'Bentley', preco: 470, image: require('../images/bentleyperfume.jpg'), descricao: 'Bentley For Men Azure is a sophisticated and invigorating fragrance that exudes elegance and charm.'  },
    { id: 3, nome: 'Ferrari Scuderia Red', marca: 'Ferrari', preco: 220, image: require('../images/ferrari.png'), descricao: 'Ferrari Red Perfume is like the myth of Ferrari in Italy. Its color became famous all over the world. A unique and unmatched red.'  },
  ];

  // Busca o produto com base no ID recebido
  const produtoDetalhado = perfumes.find((produto) => produto.id === id);

  if (!produtoDetalhado) {
    // Trate o caso em que o produto não é encontrado
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Produto não encontrado</Text>
      </View>
    );
  }

  // Exibe os detalhes do produto encontrado
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require('../images/perfil4.jpg')} style={styles.logo} />
        <Text style={styles.headerTitle}>ScentMail</Text>
      </View>
      {/* <Text style={styles.title}>Detalhes do Produto</Text> */}
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{produtoDetalhado.nome}</Text>
      </View>
      <View style={styles.imageContainer}>
        <Image source={produtoDetalhado.image} style={styles.image} />
      </View>
      <View style={styles.infoContainer}>
        {/* <Text>{produtoDetalhado.marca}</Text> */}
        <View style={styles.infoDetail}>
          <Text style={styles.detailText}>{produtoDetalhado.descricao}</Text>
        </View>
        <View style={styles.infoPrice}>
          <Text style={styles.priceText}>R$ {produtoDetalhado.preco}</Text>

        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({

  header: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
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
    backgroundColor: '#4a0638',
  },
  title: {
    // marginTop: 200,
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 40,
    color: 'white',
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
    // backgroundColor: 'grey',
  },

  priceText: {
    color: 'white',
    fontSize: 30,
  },

  detailText: {
    color: 'white',
    fontSize: 20,
  },


});

export default DetalhesProdutoScreen;
