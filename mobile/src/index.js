import React from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";

export default function App() {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#7159c1" />
      <View style={styles.container}>
        <Text style={styles.title}>GoStack | React Native</Text>
        <Text style={styles.title}>Bruno Goldoni</Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#7159c1",
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
  },

  title: {
    color: "#FFF",
    fontSize: 20,
    fontWeight: "bold",
  },
});
