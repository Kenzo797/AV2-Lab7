import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { Perfume } from '../types'; // Importe a interface Perfume

interface PerfumeItemProps {
  perfume: Perfume;
  onPress: () => void;
}

const PerfumeItem: React.FC<PerfumeItemProps> = ({ perfume, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={perfume.image} style={styles.image} />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.perfumeName}>{perfume.nome}</Text>
        <Text style={styles.perfumeMarca}>{perfume.marca}</Text>
        <Text style={styles.perfumePreco}>R$ {perfume.preco}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
    backgroundColor: '#f0f0f0',
    padding: 10,
    borderRadius: 5,
  },
  imageContainer: {
    marginRight: 10,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  textContainer: {
    flex: 1,
  },
  perfumeName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  perfumeMarca: {
    fontSize: 14,
  },
  perfumePreco: {
    fontSize: 14,
  },
});

export default PerfumeItem;