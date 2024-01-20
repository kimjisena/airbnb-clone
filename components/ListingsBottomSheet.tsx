import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { Listing } from "@/interfaces/listing";
import BottomSheet from "@gorhom/bottom-sheet";
import Listings from "@/components/Listings";
import Colors from "@/constants/Colors";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";

interface ListingBottomSheetProps {
  listings: Listing[];
  category: string;
}
const ListingsBottomSheet = ({
  listings,
  category,
}: ListingBottomSheetProps) => {
  const bottomSheetRef = React.useRef<BottomSheet>(null);
  const snapPoints = React.useMemo(() => ["10%", "100%"], []);
  const showMap = () => {
    console.log(
      "🚀 ~ file: ListingsBottomSheet.tsx:23 ~ showMap ~ showMap:",
      showMap,
    );
  };
  return (
    <BottomSheet
      ref={bottomSheetRef}
      index={1}
      snapPoints={snapPoints}
      enablePanDownToClose={false}
      handleIndicatorStyle={{
        backgroundColor: Colors.grey,
      }}
    >
      <View style={{ flex: 1 }}>
        <Listings listings={listings} category={category} />
        <View style={styles.absoluteBtn}>
          <TouchableOpacity onPress={showMap} style={styles.btn}>
            <Text style={{ fontFamily: "mon-sb", color: "#fff" }}>Map</Text>
            <Ionicons name="map" size={20} color={"#fff"} />
          </TouchableOpacity>
        </View>
      </View>
    </BottomSheet>
  );
};

const styles = StyleSheet.create({
  absoluteBtn: {
    position: "absolute",
    bottom: 30,
    width: "100%",
    alignItems: "center",
  },
  btn: {
    backgroundColor: Colors.dark,
    padding: 16,
    height: 50,
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 30,
    gap: 8,
  },
});

export default ListingsBottomSheet;
