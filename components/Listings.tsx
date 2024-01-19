import { View, Text } from "react-native";
import React from "react";

interface ListingsProps {
  listings: any[];
  category: string;
}
const Listings = ({ listings, category }: ListingsProps) => {
  React.useEffect(() => {
    console.log("RELOAD LISTINGS FOR_", listings.length);
  }, [category]);

  return (
    <View>
      <Text>Listings</Text>
    </View>
  );
};

export default Listings;
