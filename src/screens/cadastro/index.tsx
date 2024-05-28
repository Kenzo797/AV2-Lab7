import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert } from 'react-native';
import { NavigationProp } from '@react-navigation/native';
import AppStyles from '../styles/AppStyles';

interface CadastroProps {
  navigation: NavigationProp<any>;
}

const CadastroScreen: React.FC<CadastroProps> = ({ navigation }) => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleCadastro = () => {
    // Lógica de cadastro aqui...
    // Você pode implementar a lógica para enviar os dados do formulário para um backend ou banco de dados.

    Alert.alert('Sucesso', 'Cadastro realizado com sucesso!');
    navigation.navigate('Login');
  };

  return (
    <View style={AppStyles.container}>
      <Text style={AppStyles.title}>Cadastre-se</Text>
      <TextInput
        style={AppStyles.input}
        placeholder="Informe seu nome"
        placeholderTextColor="#ffffff"
        value={nome}
        onChangeText={(text) => setNome(text)}
      />
      <TextInput
        style={AppStyles.input}
        placeholder="Informe seu email"
        placeholderTextColor="#ffffff"
        value={email}
        onChangeText={(text) => setEmail(text)}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        style={AppStyles.input}
        placeholder="Informe sua senha"
        placeholderTextColor="#ffffff"
        value={senha}
        onChangeText={(text) => setSenha(text)}
        secureTextEntry
      />
      <Button title="Cadastrar" onPress={handleCadastro} color="#595858"/>
    </View>
  );
};

const styles = StyleSheet.create({
 
});

export default CadastroScreen;