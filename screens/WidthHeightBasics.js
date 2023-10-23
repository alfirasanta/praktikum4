import React, { useState } from "react";
import { View, Text } from "@gluestack-ui/themed"
import { TouchableOpacity, SafeAreaView } from "react-native";
import { styled } from "@gluestack-style/react"

const WidthHeightBasics = () => {
  const [widthType, setWidthType] = useState("auto");
  const [heightType, setHeightType] = useState("auto");

  return (
    <PreviewLayout
      widthType={widthType}
      heightType={heightType}
      widthValues={["auto", 200, "80%"]}
      heightValues={["auto", 200, "60%"]}
      setWidthType={setWidthType}
      setHeightType={setHeightType}
    >
      <View
        style={{
          alignSelf: "flex-start",
          backgroundColor: "aliceblue",
          height: heightType,
          width: widthType,
          padding: 15,
        }}
      >
        <View style={[box, { backgroundColor: "powderblue" }]} />
        <View style={[box, { backgroundColor: "skyblue" }]} />
        <View style={[box, { backgroundColor: "steelblue" }]} />
      </View>
    </PreviewLayout>
  );
};

const PreviewLayout = ({
  children,
  widthType,
  heightType,
  widthValues,
  heightValues,
  setWidthType,
  setHeightType,
}) => (
  <SafeAreaView style={{ flex: 1, padding: 10 }}>
    <View style={row}>
      <Text style={label}>width </Text>
      {widthValues.map((value) => (
        <TouchableOpacity
          key={value}
          onPress={() => setWidthType(value)}
          style={[button, widthType === value && selected]}
        >
          <Text
            style={[
              buttonLabel,
              widthType === value && selectedLabel,
            ]}
          >
            {value}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
    <View style={row}>
      <Text style={label}>height </Text>
      {heightValues.map((value) => (
        <TouchableOpacity
          key={value}
          onPress={() => setHeightType(value)}
          style={[button, heightType === value && selected]}
        >
          <Text
            style={[
              buttonLabel,
              heightType === value && selectedLabel,
            ]}
          >
            {value}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
    {children}
  </SafeAreaView>
);

const box= {
    width: 50,
    height: 50,
  };
const row= {
    flexDirection: "row",
    flexWrap: "wrap",
  };
const button= {
    padding: 8,
    borderRadius: 4,
    backgroundColor: "oldlace",
    alignSelf: "flex-start",
    marginRight: 10,
    marginBottom: 10,
  };
const selected= {
    backgroundColor: "coral",
    shadowOpacity: 0,
    borderWidth: 0,
  };
const buttonLabel= {
    fontSize: 12,
    fontWeight: "500",
    color: "coral",
  };
const selectedLabel= {
    color: "white",
  };
const label= {
    textAlign: "center",
    marginBottom: 10,
    fontSize: 24,
  };

export default WidthHeightBasics;