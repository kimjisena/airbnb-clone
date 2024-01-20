import { View, Text } from "react-native";
import React from "react";
import MapView from "react-native-maps";

interface ListingsMapProps {
  listings: any;
}
const ListingsMap = ({ listings }: ListingsMapProps) => {
  return (
    <View>
      <Text>ListingsMap</Text>
    </View>
  );
};

export default ListingsMap;
