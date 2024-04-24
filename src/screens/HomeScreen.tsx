import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, ImageBackground, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Importe useNavigation
import HomeStyles from './styles/HomeStyles';

const HomeScreen: React.FC = () => {
  const navigation = useNavigation(); // Obtenha o objeto de navegação

  const handleCategoryPress = (category: string) => {
    navigation.navigate('ListaProdutos', { category: category });
  };

  const handleProfilePress = () => {
    navigation.navigate('PerfilUsuario'); // Navegue para a tela de perfil de usuário
  };

  return (
    <ScrollView style={HomeStyles.container}>
      <View style={HomeStyles.header}>
        <Image source={require('../images/perfil4.jpg')} style={HomeStyles.logo} />
        <Text style={HomeStyles.headerTitle}>ScentMail</Text>


        <TouchableOpacity onPress={handleProfilePress}>
          <Image source={require('../images/paineg.png')} style={HomeStyles.profileImage} />
        </TouchableOpacity>

      </View>

      <View style={HomeStyles.sup}>
        <Image source={require('../images/backgroundhome.png')} style={HomeStyles.backgroundHome} />
        <Text style={HomeStyles.textOverImage}>Find the Perfect fragance for you</Text>
      </View>

      <View style={HomeStyles.categoriesContainer}>
        <Text style={HomeStyles.sectionTitle}>Categorias</Text>
        <View style={HomeStyles.categories}>
          <TouchableOpacity style={HomeStyles.categoryItem} onPress={() => handleCategoryPress('Perfumes')}>
            <ImageBackground style={HomeStyles.backgroundImage} source={require('../images/perfumes.jpg')} imageStyle={HomeStyles.imageBorderRadius}>
              <Text style={HomeStyles.categoryText}>Perfumes</Text>
            </ImageBackground>
          </TouchableOpacity>
          <TouchableOpacity style={HomeStyles.categoryItem} onPress={() => handleCategoryPress('Colonias')}>
            <ImageBackground style={HomeStyles.backgroundImage} source={require('../images/colonias.jpg')} imageStyle={HomeStyles.imageBorderRadius}>
              <Text style={HomeStyles.categoryText}>Colônias</Text>
            </ImageBackground>
          </TouchableOpacity>
          <TouchableOpacity style={HomeStyles.categoryItem} onPress={() => handleCategoryPress('Presentes')}>
            <ImageBackground style={HomeStyles.backgroundImage} source={require('../images/presentes.jpg')} imageStyle={HomeStyles.imageBorderRadius}>
              <Text style={HomeStyles.categoryText}>Presentes</Text>
            </ImageBackground>
          </TouchableOpacity>
        </View>
      </View>

      <View style={HomeStyles.destaquesContainer}>
        <Text style={HomeStyles.sectionTitle}>Destaques</Text>
        <View style={HomeStyles.productContainer}>
          <TouchableOpacity style={HomeStyles.productItem}>
            <Text style={HomeStyles.productName}>Camisa Polo</Text>
            <Text style={HomeStyles.productPrice}>R$ 59,99</Text>
          </TouchableOpacity>
          <TouchableOpacity style={HomeStyles.productItem}>
            <Text style={HomeStyles.productName}>Tênis Esportivo</Text>
            <Text style={HomeStyles.productPrice}>R$ 129,99</Text>
          </TouchableOpacity>
          <TouchableOpacity style={HomeStyles.productItem}>
            <Text style={HomeStyles.productName}>Bolsa Feminina</Text>
            <Text style={HomeStyles.productPrice}>R$ 79,99</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({

});

export default HomeScreen;
