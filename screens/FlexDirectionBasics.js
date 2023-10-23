import React, { useState } from "react";
import { View, Text } from "@gluestack-ui/themed"
import { styled } from "@gluestack-style/react"
import { TouchableOpacity} from "react-native";

const FlexDirectionBasics = () => {
  const [flexDirection, setflexDirection] = useState("column");

  return (
    <PreviewLayout
      label="flexDirection"
      values={["column", "row", "row-reverse", "column-reverse"]}
      selectedValue={flexDirection}
      setSelectedValue={setflexDirection}
    >
      <View style={[box, { backgroundColor: "powderblue" }]} />
      <View style={[box, { backgroundColor: "skyblue" }]} />
      <View style={[box, { backgroundColor: "steelblue" }]} />
    </PreviewLayout>
  );
};

const PreviewLayout = ({
  label,
  children,
  values,
  selectedValue,
  setSelectedValue,
}) => (
  <View style={{ padding: 10, flex: 1 }}>
    <Text style={label}>{label}</Text>
    <View style={row}>
      {values.map((value) => (
        <TouchableOpacity
          key={value}
          onPress={() => setSelectedValue(value)}
          style={[button, selectedValue === value && selected]}
        >
          <Text
            style={[
              buttonLabel,
              selectedValue === value && selectedLabel,
            ]}
          >
            {value}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
    <View style={[container, { [label]: selectedValue }]}>
      {children}
    </View>
  </View>
);

const container = {
    flex: 1,
    marginTop: 8,
    backgroundColor: "aliceblue",
  };
const box= {
    width: 50,
    height: 50,
  };
const row= {
    flexDirection: "row",
    flexWrap: "wrap",
  };
const button= {
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderRadius: 4,
    backgroundColor: "oldlace",
    alignSelf: "flex-start",
    marginHorizontal: "1%",
    marginBottom: 6,
    minWidth: "48%",
    textAlign: "center",
  };
const selected= {
    backgroundColor: "coral",
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

export default FlexDirectionBasics;