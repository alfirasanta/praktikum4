import React from "react";
// import { StyleSheet, Text, View } from "react-native";
import { View, Text } from '@gluestack-ui/themed';
import { styled } from "@gluestack-style/react"

const LotsOfStyles = () => {
  return (
    <View>
      <Text style={red}>just red</Text>
      <Text style={bigBlue}>just bigBlue</Text>
      <Text style={[bigBlue, red]}>bigBlue, then red</Text>
      <Text style={[red, bigBlue]}>red, then bigBlue</Text>
    </View>
  );
};

const bigBlue = {
    color: "blue",
    fontWeight: "bold",
    fontSize: 30,
}
const red = {
  color: "red"
}
export default LotsOfStyles;