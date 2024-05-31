import { Button, StyleSheet, Text, TextInput, View, Alert } from "react-native";
import { Formik } from "formik";
import * as Yup from 'yup';
import { useNavigation } from "@react-navigation/native";
import { getAuth, createUserWithEmailAndPassword } from '@firebase/auth';
import { getFirestore, setDoc, doc } from '@firebase/firestore';


export default function CadastroScreen() {

  const auth = getAuth();
  const db = getFirestore();
  const navigation = useNavigation();



  //Função do cadastro de usuário
  const handleCadastro = async({email, senha, nome}:any) => {
      await createUserWithEmailAndPassword(auth, email, senha)
          .then((usuario) => {

              setDoc(doc(db, 'usuarios', usuario.user.uid), {
                  email, nome
              })

              // navigation.goBack()
          })
          .catch(erro => Alert.alert('Erro', 'Não foi possivel criar o usuário, tente novamente'))
  }


  return (
      <View style={styles.container}>
          <Text style={{fontSize: 20}}>Crie sua conta</Text>
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
                  <View style={{marginTop: 20}}>
                      {/* NOME */}
                      <Text>Nome: </Text>
                      <TextInput onChangeText={handleChange('nome')} onBlur={handleBlur('nome')} style={styles.input}/>
                      {touched.nome && errors.nome && <Text style={styles.erro}>{errors.nome}</Text>}
                      {/* EMAIL */}
                      <Text>Email: </Text>
                      <TextInput onChangeText={handleChange('email')} onBlur={handleBlur('email')} keyboardType="email-address" style={styles.input}/>
                      {touched.email && errors.email && <Text style={styles.erro}>{errors.email}</Text>}


                      {/* Senha */}
                      <Text>Senha: </Text>
                      <TextInput onChangeText={handleChange('senha')} onBlur={handleBlur('senha')} secureTextEntry style={styles.input}/>
                      {touched.senha && errors.senha && <Text style={styles.erro}>{errors.senha}</Text>}

                      {/* CADASTRAR */}
                      <Button title="Cadastrar" onPress={() => handleSubmit()} disabled={isSubmitting} />
                  </View>
              )}
          </Formik>
      </View>
  )
}

const styles = StyleSheet.create({
  container: {
      padding: 30
  }, 
  input: {
      backgroundColor: 'white',
      padding: 5
  },
  erro: {
      color: 'red',
      textAlign: 'right'
  }
});

// export default CadastroScreen;