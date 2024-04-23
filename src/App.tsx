import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './src/screens/LoginScreen';
import CadastroScreen from './src/screens/CadastroScreen';
import HomeScreen from './src/screens/HomeScreen';
import ListaPerfumesScreen from './src/screens/ListaPerfumesScreen';
import DetalhesProdutoScreen from './src/screens/DetalhesProdutoScreen'; 

const Stack = createStackNavigator();

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Cadastro" component={CadastroScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="ListaProdutos" component={ListaPerfumesScreen} />
        <Stack.Screen name="DetalhesProduto" component={DetalhesProdutoScreen} /> 
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
