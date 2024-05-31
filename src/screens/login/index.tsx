import React from 'react';
import { useState } from "react";
import { StyleSheet, Text, View, TextInput, Button, Image, Alert } from 'react-native';
import { NavigationProp } from '@react-navigation/native';
import AppStyles from '../styles/AppStyles'; // Importe os estilos globais
import { getAuth, signInWithEmailAndPassword } from '@firebase/auth';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { StackParams } from "../../navigation";
import { Formik } from "formik";

interface LoginProps {
  navigation: NavigationProp<any>;
}


export default function LoginScreen() {


  const navigation = useNavigation<StackNavigationProp<StackParams, "login">>();
  const auth = getAuth();
  const handleLogin = async ({email, senha} : any) => {
    
    await signInWithEmailAndPassword(auth, email, senha)
        .then(usuario => navigation.reset({index: 0, routes: [{name: 'home'}]}))
        .catch(erro => Alert.alert('Erro', 'Login ou senha incorreta!')); 
    // navigation.navigate('home'); // Exemplo de redirecionamento para a tela Home após o login.
  };

  const handleCadastro = () => {
    navigation.navigate('cadastro');
  };

  return (
    <View style={AppStyles.container}>
      <View style={styles.logoContainer}>
        <Image source={require('../../images/perfil4.jpg')} style={styles.logo} />
        <Text style={styles.logoText}>ScentMail</Text>
      </View>

      <Formik  initialValues={{email:'', senha:''}}
          onSubmit={handleLogin}>

            {({handleChange, handleSubmit, isSubmitting}) => (
                <>
                    <TextInput
                      onChangeText={handleChange('email')}
                      style={AppStyles.input}
                      placeholder="Digite seu email"
                      placeholderTextColor="#ffffff"
                    />
                    <TextInput
                      onChangeText={handleChange('senha')}
                      style={AppStyles.input}
                      placeholder="Digite sua senha"
                      placeholderTextColor="#ffffff"
                      secureTextEntry
                    />
                    <View style={AppStyles.buttonContainer}>
                      <Button title="Entrar" onPress={() => handleSubmit()} disabled={isSubmitting} color="#595858" />
                      <View style={AppStyles.separator} />
                      <Button title="Cadastre-se" onPress={handleCadastro} color="#595858" />
                    </View>
                </>
            )}



      </Formik>


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

// export default LoginScreen;
