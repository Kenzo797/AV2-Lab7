import { ImageSourcePropType } from 'react-native';

export interface Perfume {
  id: number;
  nome: string;
  marca: string;
  preco: number;
  image: ImageSourcePropType;
  descricao: string;
}

export type RootStackParamList = {
  ListaPerfumes: undefined;
  DetalhesPerfume: { id: number }; // Defina os tipos de parâmetros corretamente
};
