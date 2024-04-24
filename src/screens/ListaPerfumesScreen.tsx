import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Image } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack'; 
import { RootStackParamList } from '../types'; 
import { Perfume } from '../types';
interface ListaPerfumesProps {
  navigation: StackNavigationProp<RootStackParamList, 'ListaProdutos'>; 
}

const ListaPerfumesScreen: React.FC<ListaPerfumesProps> = ({ navigation }) => {
  const [perfumes, setPerfumes] = useState<Perfume[]>([
    { id: 1, nome: 'Juliette Has Gun', marca: 'Juliette Has Gun', preco: 670, image: require('../images/juliethasaguyn.jpg'), descricao: 'Descrição do produto...'  },
    { id: 2, nome: 'Bentley For Men Azure', marca: 'Bentley', preco: 470, image: require('../images/bentleyperfume.jpg'), descricao: 'Descrição do produto...'  },
    { id: 3, nome: 'Ferrari Scuderia Red', marca: 'Ferrari', preco: 220, image: require('../images/ferrari.png'), descricao: 'Descrição do produto...'  },
  ]);

  const handlePerfumePress = (perfume: Perfume) => {
    navigation.navigate('DetalhesProduto', { id: perfume.id});
  };
                //DAR UMA OLHADA PQ EU FIQUEI DEI UNS CNTRL Z SEM QUERER
  return (

    <View style={styles.container}>

      <View style={styles.header}>
        <Image source={require('../images/perfil4.jpg')} style={styles.logo} />
        <Text style={styles.headerTitle}>ScentMail</Text>
      </View>
      <View style={styles.sup}>
        <Text style={styles.title}>Perfumes</Text>
      </View>
      <FlatList
        data={perfumes}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => handlePerfumePress(item)} style={styles.perfumeItem}>
            <Image source={item.image} style={styles.perfumeImage} />
            <View style={styles.perfumeInfo}>
              <Text style={styles.perfumeName}>{item.nome}</Text>
              {/* <Text style={styles.perfumeMarca}>{item.marca}</Text> */}
              <Text style={styles.perfumePreco}>R$ {item.preco}</Text>
            </View>
          </TouchableOpacity>
        )}
        contentContainerStyle={styles.list}
      />
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

  sup: {
    marginTop: 100,
    marginBottom: 20,
  },

  container: {
    // width: '100%',
    flex: 1,
    // paddingHorizontal: 20,
    // paddingTop: 20,
    backgroundColor: '#4a0638',
  },
  title: {
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'white',
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

export default ListaPerfumesScreen;
