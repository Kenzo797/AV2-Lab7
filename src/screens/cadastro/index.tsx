import { Button, StyleSheet, Text, TextInput, View, Alert } from "react-native";
import { Formik } from "formik";
import * as Yup from 'yup';
import { useNavigation } from "@react-navigation/native";
import { getAuth, createUserWithEmailAndPassword } from '@firebase/auth';
import { getFirestore, setDoc, doc } from '@firebase/firestore';
import { StackParams } from "../../navigation";
import { StackNavigationProp } from '@react-navigation/stack';

export default function CadastroScreen() {

  const auth = getAuth();
  const db = getFirestore();
  const navigation = useNavigation<StackNavigationProp<StackParams, 'cadastro'>>();

  const handleLogin = () => {
    navigation.navigate('login');
  };

  //Função do cadastro de usuário
  const handleCadastro = async({email, senha, nome}:any) => {
      await createUserWithEmailAndPassword(auth, email, senha)
          .then((usuario) => {

              setDoc(doc(db, 'usuarios', usuario.user.uid), {
                  email, nome
              })
              Alert.alert('Sucesso', 'Usuário criado');
              navigation.goBack()
          })
          .catch(erro => Alert.alert('Erro', 'Não foi possivel criar o usuário, tente novamente'))
  }


  return (
      <View style={styles.container}>
          <Text style={styles.titleContainer}>Crie sua conta</Text>
          <Formik
              initialValues={{email: '', senha: '', nome: ''}}
              onSubmit={handleCadastro}
              validationSchema={Yup.object({
                  email: Yup.string().required('Preencha o campo email').email('Preencha corretamente'),
                  nome: Yup.string().required('Preencha o campo nome'),
                  senha: Yup.string().required('Preencha o campo senha').min(6, 'A senha precisa ter no mínimo 6 caracteres')
              })}
          >
              {({handleChange, errors, touched, handleBlur, isSubmitting, handleSubmit}) => (
                  <View style={styles.inputsContainer}>
                      {/* NOME */}
                      {/* <Text>Nome: </Text> */}
                      <TextInput onChangeText={handleChange('nome')} 
                      onBlur={handleBlur('nome')} 
                      placeholder="Digite seu nome"
                      placeholderTextColor="#ffffff"
                      style={styles.input}/>
                      {touched.nome && errors.nome && <Text style={styles.erro}>{errors.nome}</Text>}
                      {/* EMAIL */}
                      {/* <Text>Email: </Text> */}
                      <TextInput 
                      onChangeText={handleChange('email')} 
                      onBlur={handleBlur('email')} 
                      placeholder="Digite seu email"
                      placeholderTextColor="#ffffff"
                      keyboardType="email-address" 
                      style={styles.input}/>
                      {touched.email && errors.email && <Text style={styles.erro}>{errors.email}</Text>}


                      {/* Senha */}
                      {/* <Text>Senha: </Text> */}
                      <TextInput onChangeText={handleChange('senha')} 
                      onBlur={handleBlur('senha')} 
                      placeholder="Digite sua senha"
                      placeholderTextColor="#ffffff"
                      secureTextEntry style={styles.input}/>
                      {touched.senha && errors.senha && <Text style={styles.erro}>{errors.senha}</Text>}

                      {/* CADASTRAR */}
                      <Button title="Cadastrar" onPress={() => handleSubmit()} disabled={isSubmitting} color="#595858"/>
                      <View style={styles.separator}></View>
                      <Button title="Voltar" onPress={handleLogin} color="#595858" />
                  </View>
              )}
          </Formik>
      </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 30,
    height: "100%",
    backgroundColor: '#4a0638',
    display: "flex",
    justifyContent: "center",

  }, 
  input: {
    width: '70%',
    height: 40,
    borderColor: 'white',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    borderRadius: 5,
    color: 'white',
  },
  erro: {
    color: 'red',
    textAlign: 'right'
  },
  titleContainer: {
    textAlign: "center",
    bottom: 20 ,
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },

  inputsContainer: {
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    marginTop:20,
    
  },

  separator: {
    width: 10, // Largura do espaçamento entre os botões
    height: 10,
  },

});

// export default CadastroScreen;