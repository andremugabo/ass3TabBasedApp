import React from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";

function NotificationScreen() {
  return (
    <View style={styles.container}>
      <Text>Notifications page</Text>
    </View>
  );
}

export default NotificationScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    marginTop: StatusBar.currentHeight + 1,
    paddingHorizontal: 20,
  },
});
