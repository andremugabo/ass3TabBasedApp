import React from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";

function SearchScreen() {
  return (
    <View style={styles.container}>
      <Text>Search page</Text>
    </View>
  );
}

export default SearchScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    marginTop: StatusBar.currentHeight + 1,
    paddingHorizontal: 20,
  },
});
