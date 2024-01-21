import { View, Text } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import Colors from "@/constants/Colors";

const ModalHeaderText = () => {
  const [active, setActive] = React.useState(0);
  return (
    <View
      style={{
        justifyContent: "center",
        gap: 10,
        flexDirection: "row",
      }}
    >
      <TouchableOpacity onPress={() => setActive(0)}>
        <Text
          style={{
            fontFamily: "mon-sb",
            fontSize: 18,
            color: active === 0 ? "#000" : Colors.grey,
            textDecorationLine: active === 0 ? "underline" : "none",
          }}
        >
          Stays
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setActive(1)}>
        <Text
          style={{
            fontFamily: "mon-sb",
            fontSize: 18,
            color: active === 1 ? "#000" : Colors.grey,
            textDecorationLine: active === 1 ? "underline" : "none",
          }}
        >
          Experiences
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default ModalHeaderText;
