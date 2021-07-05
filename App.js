import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { useFonts, Poppins_300Light, Poppins_500Medium} from '@expo-google-fonts/poppins';
import ChipForms from './Components/ChipForms'
import ChipStack from './Components/ChipStack'


const Home = () => {
  /* Calculating and rendering the user's total chip balance. */
  // Loading Google fonts.
  let [fontsLoaded] = useFonts({
    Poppins_500Medium,
    Poppins_300Light,
  })
  var [balance, setBalance] = useState(0);
  const [chips, setChips] = useState(ChipStack);

  useEffect(() => {
    /* Iterating through the chip stack, calculating total balance of the user's
    chips upoin an update to the stack. */
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
    fontFamily: "Poppins_500Medium",
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
