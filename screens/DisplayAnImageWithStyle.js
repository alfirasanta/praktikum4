import React from "react";
import { View, Text, Image, ScrollView } from '@gluestack-ui/themed';
import { styled } from "@gluestack-style/react"
// import { View, Image, Text, StyleSheet, ScrollView } from "react-native";
import { Separator } from "../components";

const DisplayAnImageWithStyle = () => {
  return (
    <ScrollView>
      <View style={container}>
        <View>
          <Image
            style={{
              resizeMode: "cover",
              ...image,
            }}
            source={require("../assets/js.png")}
          />
          <Text>resizeMode : cover</Text>
        </View>

        <Separator height={30} />

        <View>
          <Image
            style={{
              resizeMode: "contain",
              ...image,
            }}
            source={require("../assets/js.png")}
          />
          <Text>resizeMode : contain</Text>
        </View>

        <Separator height={30} />

        <View>
          <Image
            style={{
              resizeMode: "stretch",
              ...image,
            }}
            source={require("../assets/js.png")}
          />
          <Text>resizeMode : stretch</Text>
        </View>

        <Separator height={30} />

        <View>
          <Image
            style={{
              resizeMode: "repeat",
              ...image,
            }}
            source={require("../assets/js.png")}
          />
          <Text>resizeMode : repeat</Text>
        </View>

        <Separator height={30} />

        <View>
          <Image
            style={{
              resizeMode: "center",
              ...image,
            }}
            source={require("../assets/js.png")}
          />
          <Text>resizeMode : center</Text>
        </View>
      </View>
    </ScrollView>
  );
};

const container= {
    justifyContent: "center",
    alignItems: "center",
    padding: 30,
  };
const image= {
    height: 100,
    width: 200,
    backgroundColor: "grey",
  };

export default DisplayAnImageWithStyle;