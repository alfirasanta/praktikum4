import React from "react";
import { View } from '@gluestack-ui/themed';
import { styled } from "@gluestack-style/react"

const FlexDimensionsBasics = () => {
  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1, backgroundColor: "powderblue" }} />
      <View style={{ flex: 2, backgroundColor: "skyblue" }} />
      <View style={{ flex: 3, backgroundColor: "steelblue" }} />
    </View>
  );
};

export default FlexDimensionsBasics;