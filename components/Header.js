import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Constants from "expo-constants";

const styles = {
  header: {
    flex: 1,
    marginBottom: 70
  },
  text: {
    fontSize: 25,
    textAlign: "center",
    backgroundColor: "#282c34",
    padding: 15,
    color: "white"
  }
};

export default () => (
  <View style={styles.header}>
    <Text style={styles.text}>ContentZone</Text>
  </View>
);
