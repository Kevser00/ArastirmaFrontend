//kullanıcı seçim ve giriş ekranlarında geri butonu içeren alt navigasyon bileşeni
import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const NavigationFooter = ({ onBack }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onBack}>
        <Ionicons name="arrow-back-circle" size={45} color="white" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    position: 'absolute',
    bottom: 40,
    alignItems: 'center',
  },
});

export default NavigationFooter;
