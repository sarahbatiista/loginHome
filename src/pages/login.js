import {
  Text,
  TextInput,
  View,
  Image,
  ImageBackground,
  Button,
  TouchableOpacity,
} from 'react-native';
import Feather from "@expo/vector-icons/Feather";
import { useNavigation } from '@react-navigation/native';

import { styles } from '../styles/styles';
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { useState } from 'react';

export default function App() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const [visible, setVisible] = useState(false);

  function confirmaTudo() {
    console.log(email, senha)
    const emailConfirmado = "s@gmail.com";
    const senhaConfirmado = "123";
    if (email == emailConfirmado && senha == senhaConfirmado) {
      navigation.navigate("home");
    } else {
      setVisible(true);

      setTimeout(() => {
        setVisible(false)
      }, 2500);
    }
  }

  const navigation = useNavigation();

  return (
    <ImageBackground
      style={styles.container}
      source={require("../assets/images/ccd4ecad52d4a9345695b7b0f711e202.jpg")}
      resizeMode="cover"
    >
      <Image
        source={require("../assets/images/ICONE (1).png")}
        style={styles.image}
      />

      <Text style={styles.snoopyapp}>SnoopyApp</Text>

      <View style={styles.visao}>
        <TextInput
          style={styles.input}
          placeholder="Digite seu Email"
          secureTextEntry={true}
          placeholderTextColor="white"
          inputMode={"text"}
          autoCapitalize="characters"
          multiline={true}
          onChangeText={(value) => setEmail(value)}
        />

        <Feather name="user" size={24} color="white" />
      </View>

      <View style={styles.visao}>
        <TextInput
          style={styles.input}
          placeholder="Digite sua senha"
          secureTextEntry={true}
          placeholderTextColor="white"
          inputMode={"numeric"}
          autoCapitalize="characters"
          multiline={true}
          onChangeText={(value) => setSenha(value)}
        />
        <MaterialIcons name="password" size={24} color="white" />
      </View>

      {visible && <Text style={{ color: "red" }}>EMAIL E/OU SENHA ERRADO, TENTE NOVAMENTE!!!!!!</Text>}

      <TouchableOpacity title="login" style={styles.botao} onPress={confirmaTudo}>
        <Text>Entrar</Text>
      </TouchableOpacity>
    </ImageBackground>
  );
}
