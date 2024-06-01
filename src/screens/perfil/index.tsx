import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput, Button , Alert} from 'react-native';
import { getAuth, updateEmail, updatePassword } from '@firebase/auth';
import { getFirestore, updateDoc, doc, getDoc } from '@firebase/firestore';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from "@react-navigation/stack";
import { StackParams } from "../../navigation";
import { Formik } from "formik";
import * as Yup from 'yup';

type Usuario = {
  email: string,
  senha: string,
  nome: string,
}


export default function  PerfilUsuarioScreen() {
  // const [nome, setNome] = useState('Arthur Kenzo');
  // const [email, setEmail] = useState('arthur@hotmail.com');
  // const [foto, setFoto] = useState('../../images/perfil4.jpg');

  const auth = getAuth();
  const navigation = useNavigation<StackNavigationProp<StackParams, "perfilUsuario">>();
  const db = getFirestore();
  const [ usuario, setUsuario ] = useState<Usuario>({email: '', senha: '', nome: ''});
  useEffect(() => {
    if (auth.currentUser) {
        getDoc(doc(db, 'usuarios', auth.currentUser.uid))
            .then(dados => setUsuario(dados.data()))
    }
  }, [])

  const handleAtualizacaoCadastral = async({email, senha, nome}:any) => {

    try {
        if (auth.currentUser) {
            //Atualiza o email
            if(auth.currentUser?.email != email) 
                await updateEmail(auth.currentUser, email);
            
            //Atualiza a senha
            if (senha != '')
                await updatePassword(auth.currentUser, senha)

            //Atualizando dados
            updateDoc(doc(db, 'usuarios', auth.currentUser.uid), {email, nome})
        }

        Alert.alert('Sucesso', 'Dados atualizados');
    } catch(erro) {
        Alert.alert('Erro', 'Não foi possivel completar a operação. Motivo: ' + erro);

    }
  }



  return (
    <View style={styles.container}>
        
        <View style={styles.header}>
            <Image source={require('../../images/perfil4.jpg')} style={styles.logo} />
            <TouchableOpacity>
                <Text style={styles.headerTitle}>ScentMail</Text>
            </TouchableOpacity>
        </View>


        <Formik
            initialValues={usuario}
            enableReinitialize
            onSubmit={handleAtualizacaoCadastral}
            validationSchema={Yup.object({
                email: Yup.string().required('O campo email precisa existir').email('O campo precisa ser um email'),
                nome: Yup.string().required('O campo nome precisa existir'),
                senha: Yup.string().min(6, 'O campo senha precisa ter no mínimo 6 caracteres')
            })}>
            {({handleChange, values, errors, touched, handleBlur, isSubmitting, handleSubmit}) => (
                <View style={{marginTop: 20}}>
                    {/* NOME */}
                    <Text>Nome: </Text>
                    <TextInput value={values.nome} onChangeText={handleChange('nome')} onBlur={handleBlur('nome')} style={styles.input}/>
                    {touched.nome && errors.nome && <Text style={styles.erro}>{errors.nome}</Text>}
                    
                    {/* EMAIL */}
                    <Text>Email: </Text>
                    <TextInput  value={values.email} onChangeText={handleChange('email')} onBlur={handleBlur('email')} keyboardType="email-address" style={styles.input}/>
                    {touched.email && errors.email && <Text style={styles.erro}>{errors.email}</Text>}

                    {/* Senha */}
                    <Text>Senha: </Text>
                    <TextInput onChangeText={handleChange('senha')} onBlur={handleBlur('senha')} secureTextEntry style={styles.input}/>
                    {touched.senha && errors.senha && <Text style={styles.erro}>{errors.senha}</Text>}

                    {/* CADASTRAR */}
                    <Button title="Atualizar" onPress={() => handleSubmit()} disabled={isSubmitting} />
                    
                    <Button title="Sair" color="tomato" onPress={() => {
                        auth.signOut();
                        //navigation.reset({index: 0, routes: [{name: 'login'}]})
                    }}/>
                </View>
            )}
        </Formik>
      
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
        // borderRadius: 5,
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
        borderRadius: 15,
        top: 10,

    },
});

// export default PerfilUsuarioScreen;
