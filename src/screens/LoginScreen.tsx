import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, Image } from 'react-native';
import { NavigationProp } from '@react-navigation/native';
import AppStyles from './styles/AppStyles'; // Importe os estilos globais

interface LoginProps {
  navigation: NavigationProp<any>;
}

const LoginScreen: React.FC<LoginProps> = ({ navigation }) => {
  const handleLogin = () => {
    // Lógica de login aqui...
    // Você pode implementar a lógica para autenticar o usuário.

    navigation.navigate('Home'); // Exemplo de redirecionamento para a tela Home após o login.
  };

  const handleCadastro = () => {
    navigation.navigate('Cadastro');
  };

  return (
    <View style={AppStyles.container}>
      <View style={styles.logoContainer}>
        <Image source={require('../images/perfil4.jpg')} style={styles.logo} />
        <Text style={styles.logoText}>ScentMail</Text>
      </View>
      <TextInput
        style={AppStyles.input}
        placeholder="Digite seu email"
        placeholderTextColor="#ffffff"
      />
      <TextInput
        style={AppStyles.input}
        placeholder="Digite sua senha"
        placeholderTextColor="#ffffff"
        secureTextEntry
      />
      <View style={AppStyles.buttonContainer}>
        <Button title="Entrar" onPress={handleLogin} color="#595858" />
        <View style={AppStyles.separator} />
        <Button title="Cadastre-se" onPress={handleCadastro} color="#595858" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  logoContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  logo: {
    width: 100,
    height: 100,
  },
  logoText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ffffff',
    marginTop: 10,
  },
});

export default LoginScreen;
