import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const KullaniciSecim = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Üstte logo */}
      <Image
        source={require('../../assets/medilogo.png')}
        style={styles.logo}
        resizeMode="contain"
      />

      {/* Alt kutu */}
      <View style={styles.contentBox}>
        <Text style={styles.title}>HOŞ GELDİNİZ</Text>

        {/* Kullanıcı Girişi (Hasta) */}
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('girisHasta')}
        >
          <Text style={styles.buttonText}>Kullanıcı Girişi</Text>
        </TouchableOpacity>

        {/* Doktor Girişi */}
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('girisDr')}
        >
          <Text style={styles.buttonText}>Doktor Girişi</Text>
        </TouchableOpacity>
      </View>
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
    width: 90,
    height: 90,
    marginTop: 70,
    marginBottom: 20,
  },
  contentBox: {
    marginTop: 100,
    width: '80%',
    alignItems: 'center',
  },
  title: {
    fontSize: 22,
    color: 'white',
    fontWeight: '600',
    marginBottom: 40,
    letterSpacing: 1,
  },
  button: {
    width: '100%',
    paddingVertical: 16,
    backgroundColor: '#1642BB',
    borderRadius: 30,
    borderWidth: 2,
    borderColor: 'white',
    alignItems: 'center',
    marginBottom: 25,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '500',
  },
});

export default KullaniciSecim;
