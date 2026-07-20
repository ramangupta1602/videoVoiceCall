import { Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

const Home = () => {
  const navigation = useNavigation()
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Pressable
      onPress={()=>navigation.navigate('VideoCallScreen')}
      style={styles.btnStyle}>
        <Text style={styles.text}>Calling</Text>
      </Pressable>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  btnStyle: {
    height: 54,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    width: 200,
    borderWidth: 1,
  },
  text: {
    fontSize: 20,
    fontWeight: 'semibold',
  },
});
