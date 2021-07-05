import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, Label, View } from 'react-native';
import { useFonts, Poppins_300Light, Poppins_500Medium, Poppins_600SemiBold} from '@expo-google-fonts/poppins';


const ChipForms = (props) => {
  /*
  Renders forms to update chip amounts.

  props
    chips: obj
      All of the users chips and their respective balances.
    setChips:
      Hook to update chips.
  */
  let [fontsLoaded] = useFonts({
    "Poppins-SemiBold": Poppins_600SemiBold,
    "Poppins-Medium": Poppins_500Medium,
    "Poppins-Light":  Poppins_300Light,
  })

  const chips = [
    {
      color: 'white',
      value: 0.01,
    },
    {
      color: 'red',
      value: 0.05,
    },
    {
      color: 'green',
      value: 0.25,
    },
    {
      color: 'blue',
      value: 0.5,
    },
    {
      color: 'black',
      value: 1,
    },
  ]

  const updateChips = (event, chip) => {
    /*
    Determining the value of the user's chip stack upon update of chip amount.

    parameters
      event: obj
        Event from the chip form.
      chip: obj
        Data on the chip updated.
    */
    var chipAmount = parseInt(event.nativeEvent.text)
    // Ensuring chipAmount is not NaN (backspace)
    if (chipAmount) {
      var currentChipStack = {...props.chips}
      var chipValue = chipAmount*chip.value
      currentChipStack[chip.color].balance = chipValue
      props.setChips(currentChipStack)
    }

    // If the chip amount is reset, we set the chip balance back to 0.
    if (event.nativeEvent.text == '') {
      var currentChipStack = {...props.chips}
      currentChipStack[chip.color].balance = 0
      props.setChips(currentChipStack)
    }
  }
  return (
    <View style={styles.container}>
      {chips.map((chip, index) => (
        <View style={styles.container} key={index}>
          <Text style={styles.label}> {chip.color}</Text>
          <TextInput
            style={styles.chipAmntForm}
            placeholder="chip amount"
            placeholderTextColor="#FFFFFF"
            type="number"
            onChange={(event) => updateChips(event, chip)}
            >
          </TextInput>
        </View>
      ))}
    </View>
  );
}

const styles = {
  container: {
    alignItems: 'flex-start',
    justifyContent: 'center',
    marginBottom: 5,
  },
  chipAmntForm: {
    paddingLeft: 10,
    fontFamily: "Poppins-Light",
    width: 312,
    height: 40,
    backgroundColor: '#181818',
    color: 'white',
    borderRadius: 5,
  },
  label: {
    fontSize: 12,
    fontFamily:"Poppins-Medium",
  },

};

export default ChipForms;
