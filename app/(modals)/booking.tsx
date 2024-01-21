import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { BlurView } from "expo-blur";

const Page = () => {
  return (
    <BlurView intensity={70} style={styles.container} tint="light">
      <Text>Booking</Text>
    </BlurView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 100,
  },
});

export default Page;
