import React from "react";
import { View } from '@gluestack-ui/themed';
import { styled } from "@gluestack-style/react"

const FlexBasic = () => {
  return (
    <View style={[container, { flexDirection: "column" }]}>
      <View style={{ flex: 1, backgroundColor: "red" }} />
      <View style={{ flex: 2, backgroundColor: "darkorange" }} />
      <View style={{ flex: 3, backgroundColor: "green" }} />
    </View>
  );
};

const container = {
    flex: 1,
    padding: 20,
  };

export default FlexBasic;