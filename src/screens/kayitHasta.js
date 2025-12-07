//MERYEM ama bağlantılı olduğu için KEVSER yaptı
// KEVSER - Kayıt Hasta Ekranı (M-kayitHasta.js tasarımı)

import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import NavigationFooter from '../components/NavigationFooter';

const KayitHasta = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* LOGO */}
      <Image
        source={require('../../assets/medilogo.png')}
        style={styles.logo}
        resizeMode="contain"
      />

      {/* BAŞLIK */}
      <Text style={styles.title}>Kayıt Ol</Text>

      {/* BEYAZ KUTU */}
      <View style={styles.box}>
        <TextInput
          placeholder="Ad"
          placeholderTextColor="#888"
          style={styles.input}
        />

        <TextInput
          placeholder="Soyad"
          placeholderTextColor="#888"
          style={styles.input}
        />

        <TextInput
          placeholder="E-posta"
          placeholderTextColor="#888"
          keyboardType="email-address"
          style={styles.input}
        />

        <TextInput
          placeholder="Şifre"
          placeholderTextColor="#888"
          secureTextEntry
          style={styles.input}
        />

        {/* KAYIT OL BUTONU */}
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Kayıt Ol</Text>
        </TouchableOpacity>
      </View>

      {/* ALTTA GERİ OKU → Hasta giriş ekranına dön */}
      <NavigationFooter onBack={() => navigation.goBack()} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1483C7',
    alignItems: 'center',
  },
  logo: {
    width: 80,
    height: 80,
    marginTop: 60,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    color: 'white',
    marginBottom: 20,
  },
  box: {
    marginTop: 10,
    width: '80%',
    backgroundColor: 'white',
    borderRadius: 25,
    paddingVertical: 30,
    paddingHorizontal: 20,
    elevation: 6,
  },
  input: {
    width: '100%',
    backgroundColor: '#EAEAEA',
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 10,
    fontSize: 16,
    marginBottom: 15,
  },
  button: {
    marginTop: 10,
    backgroundColor: '#1642BB',
    paddingVertical: 12,
    borderRadius: 25,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 17,
    fontWeight: '600',
  },
});

export default KayitHasta;
