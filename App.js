import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Image, Text, View } from 'react-native';
import icon from  './assets/icon.png';

export default function App() {
  return (
    <View style={styles.container}>     
    <Image source={icon} style={{
      width:100,
      height:100
    }}/>
      <Text>MI DOGIS PRIMERIZO :3</Text>
      <StatusBar style="auto" />
       <Text>MI DOGIS PRIMERIZO :3</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#09f',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
