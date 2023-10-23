import React, { useState } from "react";
import { View, Text } from "@gluestack-ui/themed"
import { TouchableOpacity, SafeAreaView } from "react-native";
import { styled } from "@gluestack-style/react"

const PositionLayout = () => {
  const [position, setPosition] = useState("relative");

  return (
    <PreviewLayout
      label="position"
      selectedValue={position}
      values={["relative", "absolute"]}
      setSelectedValue={setPosition}
    >
      <View
        style={[
          box,
          {
            top: 25,
            left: 25,
            position,
            backgroundColor: "powderblue",
          },
        ]}
      />
      <View
        style={[box,
          {
            top: 50,
            left: 50,
            position,
            backgroundColor: "skyblue",
          },
        ]}
      />
      <View
        style={[box,
          {
            top: 75,
            left: 75,
            position,
            backgroundColor: "steelblue",
          },
        ]}
      />
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
    <View style={container}>{children}</View>
  </View>
);

const container= {
    flex: 1,
    marginTop: 8,
    backgroundColor: "aliceblue",
    minHeight: 200,
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
  }
export default PositionLayout;