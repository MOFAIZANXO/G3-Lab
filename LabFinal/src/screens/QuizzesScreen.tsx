import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const QuizzesScreen = ({ navigation }: any) => {
  const startQuiz = () => {
    // Logic to start a quiz can be added here
    console.log("Quiz Started!");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Quizzes</Text>
      <Text style={styles.description}>Test your knowledge with interactive quizzes!</Text>
      <Button title="Start Quiz" onPress={startQuiz} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: 'center',
  },
});

export default QuizzesScreen;
