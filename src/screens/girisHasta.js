// KEVSER - GirisHasta
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

const GirisHasta = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* LOGO */}
      <Image
        source={require('../../assets/medilogo.png')}
        style={styles.logo}
        resizeMode="contain"
      />

      {/* BAŞLIK */}
      <Text style={styles.title}>Giriş Yap</Text>

      {/* BEYAZ KUTU */}
      <View style={styles.box}>
        <TextInput
          placeholder="E-posta"
          placeholderTextColor="#888"
          style={styles.input}
        />

        <TextInput
          placeholder="Şifre"
          placeholderTextColor="#888"
          secureTextEntry
          style={styles.input}
        />

        {/* KAYDOL LİNKİ */}
        <TouchableOpacity
          onPress={() => navigation.navigate('kayitHasta')}
          activeOpacity={0.7}
        >
          <Text style={styles.kaydolText}>Hesabın yok mu? Kaydol</Text>
        </TouchableOpacity>

        {/* ŞİFREMİ UNUTTUM LİNKİ */}
        <TouchableOpacity
          onPress={() => navigation.navigate('sifremiUnuttum')}
          activeOpacity={0.7}
        >
          <Text style={styles.sifreUnuttumText}>Şifremi unuttum</Text>
        </TouchableOpacity>

        {/* BUTON */}
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Giriş Yap</Text>
        </TouchableOpacity>
      </View>

      {/* ALTTA TEK GERİ OKU → Kullanıcı seçime */}
      <NavigationFooter onBack={() => navigation.navigate('kullaniciSecim')} />
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
  kaydolText: {
    color: '#1642BB',
    fontSize: 13,
    marginBottom: 5,
  },
  sifreUnuttumText: {
    color: '#1642BB',
    fontSize: 13,
    marginBottom: 20,
  },
  button: {
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

export default GirisHasta;
