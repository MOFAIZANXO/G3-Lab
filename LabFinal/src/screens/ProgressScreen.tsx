import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ProgressScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Progress Screen</Text>
      <Text style={styles.description}>
        This is a placeholder for tracking user progress.
      </Text>
      <Text style={styles.note}>
        Future enhancements will include progress tracking features such as:
      </Text>
      <Text style={styles.listItem}>• Course Completion Rates</Text>
      <Text style={styles.listItem}>• Quiz Performance Analytics</Text>
      <Text style={styles.listItem}>• Goal-Setting and Milestones</Text>
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
  note: {
    fontSize: 14,
    marginBottom: 10,
    textAlign: 'center',
    color: '#666',
  },
  listItem: {
    fontSize: 14,
    color: '#333',
    marginVertical: 5,
  },
});

export default ProgressScreen;
