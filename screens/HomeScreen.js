import React from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";

function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text>Home page</Text>
    </View>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    marginTop: StatusBar.currentHeight + 1,
    paddingHorizontal: 20,
  },
});
