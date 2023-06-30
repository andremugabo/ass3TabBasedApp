import React from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";

function SettingsScreen() {
  return (
    <View style={styles.container}>
      <Text>Settings page</Text>
    </View>
  );
}

export default SettingsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    marginTop: StatusBar.currentHeight + 1,
    paddingHorizontal: 20,
  },
});
