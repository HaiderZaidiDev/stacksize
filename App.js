import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { useFonts, Poppins_300Light, Poppins_600SemiBold, Inter_600SemiBold} from '@expo-google-fonts/dev';
import ChipForms from './ChipForms'
import ChipStack from './ChipStack'


const Home = () => {
  // Loading Google fonts.
  let [fontsLoaded] = useFonts({
    Poppins_600SemiBold,
    Poppins_300Light,
    Inter_600SemiBold,
  })
  var [balance, setBalance] = useState(0);
  const [chips, setChips] = useState(ChipStack);
  useEffect(() => {
    var currentBalance = 0
    for (const [key, chip] of Object.entries(chips)) {
      currentBalance += chip.balance
      console.log(balance)
    }
    setBalance(currentBalance)
  }, [chips])

  return (
    <React.Fragment>
      <View style={styles.container}>
        <Text style={styles.title}>Calculate your stack size.</Text>
        <Text style={styles.balance}>${balance.toFixed(2)}</Text>
        <ChipForms chips={chips} setChips={setChips}/>
      </View>
    </React.Fragment>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F7F7',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  title: {
    fontFamily: "Inter_600SemiBold",
    marginTop: 75,
    marginLeft: 25,
    fontSize: 40,
    justifyContent: 'flex-start',
    lineHeight: 40,
    width: '85%',
  },
  balance: {
    fontFamily: "Poppins_300Light",
    marginTop: 75,
    marginBottom: 75,
    alignItems: 'flex-start',
    fontSize: 64,
  },
});

export default Home;
