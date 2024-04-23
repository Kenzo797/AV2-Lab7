import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, ImageBackground, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Importe useNavigation

const HomeScreen: React.FC = () => {
  const navigation = useNavigation(); // Obtenha o objeto de navegação

  const handleCategoryPress = (category: string) => {
    navigation.navigate('ListaProdutos', { category: category });
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Image source={require('../images/perfil4.jpg')} style={styles.logo} />
        <Text style={styles.headerTitle}>ScentMail</Text>
      </View>

      <View style={styles.sup}>
        <Image source={require('../images/backgroundhome.png')} style={styles.backgroundHome} />
        <Text style={styles.textOverImage}>Find the Perfect fragance for you</Text>
      </View>

      <View style={styles.categoriesContainer}>
        <Text style={styles.sectionTitle}>Categorias</Text>
        <View style={styles.categories}>
          <TouchableOpacity style={styles.categoryItem} onPress={() => handleCategoryPress('Perfumes')}>
            <ImageBackground style={styles.backgroundImage} source={require('../images/perfumes.jpg')} imageStyle={styles.imageBorderRadius}>
              <Text style={styles.categoryText}>Perfumes</Text>
            </ImageBackground>
          </TouchableOpacity>
          <TouchableOpacity style={styles.categoryItem} onPress={() => handleCategoryPress('Colônias')}>
            <ImageBackground style={styles.backgroundImage} source={require('../images/colonias.jpg')} imageStyle={styles.imageBorderRadius}>
              <Text style={styles.categoryText}>Colônias</Text>
            </ImageBackground>
          </TouchableOpacity>
          <TouchableOpacity style={styles.categoryItem} onPress={() => handleCategoryPress('Presentes')}>
            <ImageBackground style={styles.backgroundImage} source={require('../images/presentes.jpg')} imageStyle={styles.imageBorderRadius}>
              <Text style={styles.categoryText}>Presentes</Text>
            </ImageBackground>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.destaquesContainer}>
        <Text style={styles.sectionTitle}>Destaques</Text>
        <View style={styles.productContainer}>
          <TouchableOpacity style={styles.productItem}>
            <Text style={styles.productName}>Camisa Polo</Text>
            <Text style={styles.productPrice}>R$ 59,99</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.productItem}>
            <Text style={styles.productName}>Tênis Esportivo</Text>
            <Text style={styles.productPrice}>R$ 129,99</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.productItem}>
            <Text style={styles.productName}>Bolsa Feminina</Text>
            <Text style={styles.productPrice}>R$ 79,99</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1b1e1f',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
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
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
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
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 30,
    color: 'white',
  },
  categories: {
    width: '100%',
    alignItems: 'center',
  },
  categoryItem: {
    alignItems: 'center',
    width: '70%',
    height: 250,
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

export default HomeScreen;
