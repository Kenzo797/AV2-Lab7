import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Image } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack'; 
import { RootStackParamList } from '../../types'; 
import { Perfume } from '../../types';
import ListaPerfumeStyles from '../styles/ListaPerfumesStyles';
interface ListaPerfumesProps {
  navigation: StackNavigationProp<RootStackParamList, 'ListaPerfumes'>; 
}

const ListaPerfumesScreen: React.FC<ListaPerfumesProps> = ({ navigation }) => {
  const [perfumes, setPerfumes] = useState<Perfume[]>([
    { id: 1, nome: 'Juliette Has Gun', marca: '', preco: 670, image: require('../images/juliethasaguyn.jpg'), descricao: 'Descrição do produto...'  },
    { id: 2, nome: 'Bentley For Men Azure', marca: '', preco: 470, image: require('../images/bentleyperfume.jpg'), descricao: 'Descrição do produto...'  },
    { id: 3, nome: 'Ferrari Scuderia Red', marca: '', preco: 220, image: require('../images/ferrari.png'), descricao: 'Descrição do produto...'  },
    { id: 4, nome: 'Ducati 1926', marca: '', preco: 320, image: require('../images/ducati.jpg'), descricao: 'Descrição do produto...'  },
    { id: 5, nome: 'Bentley intense', marca: '', preco: 580, image: require('../images/bentleyperfume2.jpg'), descricao: 'Descrição do produto...'  },
    { id: 6, nome: 'I Dont Know What', marca: '', preco: 1400, image: require('../images/idkw.jpg'), descricao: 'Descrição do produto...'  },
    
  ]);

  const handlePerfumePress = (perfume: Perfume) => {
    navigation.navigate('DetalhesPerfume', { id: perfume.id});
  };

  const handleProfilePress = () => {
    navigation.navigate('PerfilUsuario'); 
  };

  const handleTitlePress = () => {
    navigation.navigate('Home');
  };


                //DAR UMA OLHADA PQ EU FIQUEI DEI UNS CNTRL Z SEM QUERER
  return (

    <View style={ListaPerfumeStyles.container}>
      <View style={ListaPerfumeStyles.header}>
        <Image source={require('../images/perfil4.jpg')} style={ListaPerfumeStyles.logo} />
        <TouchableOpacity onPress={handleTitlePress}>
          <Text style={ListaPerfumeStyles.headerTitle}>ScentMail</Text>

        </TouchableOpacity>


        <TouchableOpacity onPress={handleProfilePress}>
          <Image source={require('../images/paineg.png')} style={ListaPerfumeStyles.profileImage} />
        </TouchableOpacity>

      </View>


      {/* <View style={ListaPerfumeStyles.header}>
        <Image source={require('../images/perfil4.jpg')} style={ListaPerfumeStyles.logo} />
        <Text style={ListaPerfumeStyles.headerTitle}>ScentMail</Text>
      </View> */}
      <View style={ListaPerfumeStyles.sup}>
        <Text style={ListaPerfumeStyles.title}>Perfumes</Text>
      </View>
      <FlatList
        data={perfumes}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => handlePerfumePress(item)} style={ListaPerfumeStyles.perfumeItem}>
            <Image source={item.image} style={ListaPerfumeStyles.perfumeImage} />
            <View style={ListaPerfumeStyles.perfumeInfo}>
              <Text style={ListaPerfumeStyles.perfumeName}>{item.nome}</Text>
              {/* <Text style={styles.perfumeMarca}>{item.marca}</Text> */}
              <Text style={ListaPerfumeStyles.perfumePreco}>R$ {item.preco}</Text>
            </View>
          </TouchableOpacity>
        )}
        contentContainerStyle={ListaPerfumeStyles.list}
      />
    </View>
  );
};

const styles = StyleSheet.create({


});

export default ListaPerfumesScreen;
