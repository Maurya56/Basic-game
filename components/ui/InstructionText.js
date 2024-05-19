import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Colors from '../../constants/colors'
 function InstructionText({children,style}) {
  return (
    <Text style={[styles.text,style]}>{children}</Text>
  )
}

export default InstructionText

const styles=StyleSheet.create({
 
    text:{
        color:Colors.accent500,
        fontSize:24,
        fontFamily:'open-sans-regular'
    },
})