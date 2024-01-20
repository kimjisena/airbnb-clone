import { View } from "react-native";
import React from "react";
import { Stack } from "expo-router";
import ExploreHeader from "@/components/ExploreHeader";
import listingsData from "@/assets/data/airbnb-listings.json";
import ListingsMap from "@/components/ListingsMap";
import listingsDataGeo from "@/assets/data/airbnb-listings.geo.json";
import ListingsBottomSheet from "@/components/ListingsBottomSheet";

const Page = () => {
  const [category, setCategory] = React.useState("Tiny Homes");
  const items = React.useMemo(() => listingsData as any, []);
  const itemsGeo = React.useMemo(() => listingsDataGeo as any, []);
  const onDataChanged = (category: string) => {
    setCategory(category);
  };
  return (
    <View style={{ flex: 1, marginTop: 80 }}>
      <Stack.Screen
        options={{
          header: () => <ExploreHeader onCategoryChanged={onDataChanged} />,
        }}
      />
      <ListingsMap listings={itemsGeo} />
      <ListingsBottomSheet listings={items} category={category} />
    </View>
  );
};

export default Page;
