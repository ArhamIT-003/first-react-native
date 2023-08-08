import { StyleSheet, View, FlatList, Button } from "react-native";
import { useState } from "react";
import GoalInput from "./components/GoalInput";
import GoalItems from "./components/GoalItems";
import { StatusBar } from "expo-status-bar";

export default function App() {
  const [goals, setGoals] = useState([]);
  const [modalIsVisible, setModalIsVisible] = useState(false);

  function onCancel() {
    setModalIsVisible(false);
  }

  function handleClick(enterGoal) {
    setGoals((prev) => [
      ...prev,
      { text: enterGoal, key: Math.random().toString() },
    ]);
    setModalIsVisible(false);
  }

  const handleDelete = (id) => {
    setGoals((prev) => {
      return prev.filter((goal) => goal.key !== id);
    });
  };

  function modalClick() {
    setModalIsVisible(true);
  }
  return (
    <>
      <StatusBar style="light" />
      <View style={styles.container}>
        <Button title="Add new goals" color="#5e0acc" onPress={modalClick} />
        {modalIsVisible && (
          <GoalInput
            onAdd={handleClick}
            visible={modalIsVisible}
            onCancel={onCancel}
          />
        )}
        <View style={styles.goalsContainer}>
          <FlatList
            data={goals}
            renderItem={(itemData) => {
              return (
                <GoalItems
                  text={itemData.item.text}
                  id={itemData.item.key}
                  onDeleteItems={handleDelete}
                />
              );
            }}
            keyExtractor={(item, index) => {
              return item.key;
            }}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },

  goalsContainer: {
    flex: 5,
  },
});
