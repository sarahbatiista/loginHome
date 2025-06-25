import { View, Text, TouchableOpacity } from "react-native";
import { styles } from '../styles/styles';

import { useNavigation } from '@react-navigation/native'

export default function Home() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text>Bem-vindo ao SnoopyApp!</Text>
      <TouchableOpacity title="login" onPress={() => navigation.navigate("login")} style={styles.botao}>
        <Text>Voltar</Text>
      </TouchableOpacity>
    </View>
  );
}
