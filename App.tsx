import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View, Alert } from 'react-native';
import SplashScreen from './src/components/SplashScreen';
import TabNav from './src/navigation/TabNavigator';




export default function App() {
  return (
    TabNav()
  )
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#808080',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});