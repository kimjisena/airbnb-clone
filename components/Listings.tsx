import { View, Text, FlatList, ListRenderItem } from "react-native";
import React from "react";
import { Link } from "expo-router";
import { defaultStyles } from "@/constants/Styles";

interface ListingsProps {
  listings: any[];
  category: string;
}
const Listings = ({ listings: items, category }: ListingsProps) => {
  const [loading, setLoading] = React.useState(false);
  const listRef = React.useRef<FlatList>(null);
  React.useEffect(() => {
    console.log("RELOAD LISTINGS FOR_", items.length);
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 200);
  }, [category]);

  const renderRow: ListRenderItem<any> = ({ item }) => {
    return <Link href={`/listing/${item.id}`}>Go there</Link>;
  };

  return (
    <View style={defaultStyles.container}>
      <FlatList
        renderItem={renderRow}
        ref={listRef}
        data={loading ? [] : items}
      />
    </View>
  );
};

export default Listings;
