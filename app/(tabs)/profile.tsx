import { View, Text, Button, StyleSheet, Image } from "react-native";
import React from "react";
import { useAuth, useUser } from "@clerk/clerk-expo";
import { Link } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native";
import { defaultStyles } from "@/constants/Styles";
import Colors from "@/constants/Colors";
import { TouchableOpacity } from "react-native-gesture-handler";

const Page = () => {
  const { signOut, isSignedIn } = useAuth();
  const { user } = useUser();
  const [fistName, setFirstName] = React.useState(user?.firstName);
  const [lastName, setLastName] = React.useState(user?.lastName);
  const [email, setEmail] = React.useState(
    user?.emailAddresses[0].emailAddress,
  );
  const [edit, setEdting] = React.useState(false);

  React.useEffect(() => {
    if (!user) return;
    setFirstName(user?.firstName);
    setLastName(user?.lastName);
    setEmail(user?.emailAddresses[0].emailAddress);
  }, [user]);

  const onSaveUser = async () => {};

  const onCaptureImage = async () => {};

  return (
    <SafeAreaView style={defaultStyles.container}>
      <View>
        <View style={styles.headerContainer}>
          <Text style={styles.header}>Profile</Text>
          <Ionicons name="notifications-outline" size={26} />
        </View>
        {user && (
          <View style={styles.card}>
            <TouchableOpacity onPress={onCaptureImage}>
              <Image source={{ uri: user?.imageUrl }} style={styles.avatar} />
            </TouchableOpacity>
            <View style={{ flexDirection: "row", gap: 6 }}>
              {edit ? (
                <Text>Edit</Text>
              ) : (
                <View style={styles.editRow}>
                  <Text style={{ fontFamily: "mon-b", fontSize: 22 }}>
                    {fistName} {lastName}
                  </Text>
                  <TouchableOpacity onPress={() => setEdting(true)}>
                    <Ionicons
                      name="create-outline"
                      size={24}
                      color={Colors.dark}
                    />
                  </TouchableOpacity>
                </View>
              )}
            </View>
          </View>
        )}
        {isSignedIn && (
          <Button
            title="Log out"
            color={Colors.dark}
            onPress={() => signOut()}
          />
        )}
        {!isSignedIn && (
          <Link href={"/(modals)/login"} asChild>
            <Button title="Log in" color={Colors.dark} />
          </Link>
        )}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    padding: 24,
    justifyContent: "space-between",
    alignItems: "center",
  },
  header: {
    fontFamily: "mon-sb",
    fontSize: 24,
  },
  card: {
    backgroundColor: "#fff",
    padding: 24,
    borderRadius: 16,
    marginHorizontal: 24,
    alignItems: "center",
    gap: 14,
    marginBottom: 24,
    marginTop: 24,
    elevation: 2,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 6,
    shadowOffset: {
      width: 1,
      height: 2,
    },
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: Colors.grey,
  },
  editRow: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
  },
});

export default Page;
