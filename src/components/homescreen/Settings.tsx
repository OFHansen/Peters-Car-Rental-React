import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View, Alert } from 'react-native';
import { GlobalStyles } from '../../constants/GlobalStyles';


export default function Settings() {
    return (
      <View style={GlobalStyles.container}>

        <Text style={{fontWeight: 'bold', fontSize: 40}}>Settings</Text>

      </View>
    );
  }

