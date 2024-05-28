import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './src/screens/login';
import CadastroScreen from './src/screens/cadastro';
import HomeScreen from './src/screens/home';
import ListaPerfumesScreen from './src/screens/lista';
import DetalhesPerfumeScreen from './src/screens/detalhes'; 
import PerfilUsuarioScreen from './src/screens/perfil';
import CarrinhoScreen from './src/screens/carrinho';

const Stack = createStackNavigator();

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Cadastro" component={CadastroScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="ListaPerfume" component={ListaPerfumesScreen} />
        <Stack.Screen name="DetalhesPerfume" component={DetalhesPerfumeScreen} /> 
        <Stack.Screen name="PerfilUsuario" component={PerfilUsuarioScreen} />
        <Stack.Screen name="Carrinho" component={CarrinhoScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
