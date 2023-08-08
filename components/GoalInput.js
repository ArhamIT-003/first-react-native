import {
  StyleSheet,
  View,
  TextInput,
  Button,
  Modal,
  Image,
} from "react-native";
import { useState } from "react";

const GoalInput = (props) => {
  const [enterGoal, setEnterGoal] = useState("");

  function handleInput(enteredText) {
    setEnterGoal(enteredText);
  }

  function handleGoals() {
    props.onAdd(enterGoal);
    setEnterGoal("");
  }
  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image
          source={require("../assets/images/target.png")}
          style={styles.image}
        />
        <TextInput
          placeholder="You Course goals"
          style={styles.inputField}
          onChangeText={handleInput}
          value={enterGoal}
        />
        <View style={styles.buttonContainer}>
          <Button title="Add goal" onPress={handleGoals} color={"#5e0acc"} />
          <Button title="Cancel" onPress={props.onCancel} color={"#f31282"} />
        </View>
      </View>
    </Modal>
  );
};

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#311b6b",
    padding: 16,
  },
  image: {
    width: 150,
    height: 150,
    margin: 20,
  },
  inputField: {
    borderWidth: 1,
    borderColor: "#e4d0ff",
    backgroundColor: "#e4d0ff",
    color: "#120438",
    width: "70%",
    borderRadius: 6,
    marginBottom: 20,
    padding: 16,
  },
  buttonContainer: {
    flexDirection: "row",
    width: "30%",
    gap: 20,
    justifyContent: "center",
  },
});
