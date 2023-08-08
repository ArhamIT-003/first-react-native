import React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";

const GoalItems = (props) => {
  return (
    <View style={styles.goalContainer}>
      <Pressable
        android_ripple={{ color: "#210644" }}
        onPress={props.onDeleteItems.bind(this, props.id)}
        style={({ pressed }) => pressed && styles.pressedItems}
      >
        <Text style={styles.inputText}>{props.text}</Text>
      </Pressable>
    </View>
  );
};

export default GoalItems;

const styles = StyleSheet.create({
  goalContainer: {
    backgroundColor: "#5e0acc",
    color: "white",
    marginVertical: 8,
    borderRadius: 5,
  },
  pressedItems: {
    color: "#210644",
  },
  inputText: {
    color: "white",
    fontSize: 16,
    padding: 10,
  },
});
