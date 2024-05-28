import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput, Button } from 'react-native';

const PerfilUsuarioScreen: React.FC = () => {
  const [nome, setNome] = useState('Arthur Kenzo');
  const [email, setEmail] = useState('arthur@hotmail.com');
  const [foto, setFoto] = useState('../images/perfil4.jpg');

  const handleUploadFoto = () => {
    // Lógica para lidar com o upload da foto
    alert('Implemente a lógica para upload da foto aqui.');
  };

  return (
    <View style={styles.container}>
        
        <View style={styles.header}>
            <Image source={require('../images/perfil4.jpg')} style={styles.logo} />
            <TouchableOpacity>
                <Text style={styles.headerTitle}>ScentMail</Text>
            </TouchableOpacity>
        </View>

      <Text style={styles.title}>Perfil do Usuário</Text>
      <Image source={require('../images/paineg.png')} style={styles.foto} />
      <TextInput
        style={styles.input}
        placeholder="Nome"
        value={nome}
        onChangeText={(text) => setNome(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="E-mail"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <TouchableOpacity onPress={handleUploadFoto} style={styles.uploadButton}>
        <Text style={styles.buttonText}>Upload de Foto</Text>
      </TouchableOpacity>
      {/* <Image source={{ uri: foto }} style={styles.image} /> */}
      <View style={styles.containerSalvar}>
        <Button title="Salvar Alterações" onPress={() => alert('Salvar alterações')} color="#595858"/>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({

    header: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#333333',
        paddingVertical: 10,
        paddingHorizontal: 20,
        position: 'absolute',
        top: 0,
    },

    headerTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white',
    },

    logo: {
        width: 50,
        height: 50,
        marginRight: 10,
        borderRadius: 10,
    },
    foto: 
    {
        width: 100,
        height: 100,
        marginBottom: 20,
    },

    sup: {
        marginTop: 100,
        marginBottom: 20,
    },


    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        // paddingHorizontal: 20,
        backgroundColor: '#fbcfef',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        color: 'black',
    },
    input: {
        width: '50%',
        height: 40,
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 5,
        paddingHorizontal: 10,
        marginBottom: 10,
        color: 'black',
    },
    uploadButton: {
        backgroundColor: '#595858',
        padding: 10,
        borderRadius: 5,
        marginTop: 20,
        marginBottom: 20,
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
    },
    image: {
        width: 150,
        height: 150,
        borderRadius: 75,
        marginBottom: 20,
    },
    containerSalvar:{
        // backgroundColor: 'white',
        // width: 600,

    },
});

export default PerfilUsuarioScreen;
