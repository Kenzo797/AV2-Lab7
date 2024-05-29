import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import { onAuthStateChanged, getAuth } from '@firebase/auth';
import LoginScreen from '../../src/screens/login';
import CadastroScreen from '../../src/screens/cadastro';
import HomeScreen from '../../src/screens/home';
import ListaPerfumesScreen from '../../src/screens/lista';
import DetalhesPerfumeScreen from '../../src/screens/detalhes'; 
import PerfilUsuarioScreen from '../../src/screens/perfil';
import CarrinhoScreen from '../../src/screens/carrinho';


export type StackParams = {
    login: undefined,
    home: undefined
    cadastro: undefined
    listaPerfume: undefined
    detalhesPerfume: undefined
    perfilUsuario: undefined
    carrinho: undefined
}

const Stack = createStackNavigator<StackParams>();

export function InicialScreen() {
    const navigation = useNavigation<any>();
    const auth = getAuth();
    onAuthStateChanged(auth, (usuario) => {
        //navigation.reset({index: 0, routes:[{name: (usuario ? 'home' : 'login')}]})
    })

    return (<></>);
}

export function NavegacaoPrincipal() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ title: '', headerTransparent: true, headerShown: false }}>
        <Stack.Screen name="login" component={LoginScreen} />
        <Stack.Screen name="cadastro" component={CadastroScreen} />
        <Stack.Screen name="home" component={HomeScreen} />
        <Stack.Screen name="listaPerfume" component={ListaPerfumesScreen} />
        <Stack.Screen name="detalhesPerfume" component={DetalhesPerfumeScreen} /> 
        <Stack.Screen name="perfilUsuario" component={PerfilUsuarioScreen} />
        <Stack.Screen name="carrinho" component={CarrinhoScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};