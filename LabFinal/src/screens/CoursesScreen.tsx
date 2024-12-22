import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import supabase from '../supabaseClient';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface Course {
  id: string;
  title: string;
  description: string;
}

const CoursesScreen = () => {
  const [courses, setCourses] = useState<Course[]>([]);

  // Fetch courses from Supabase or AsyncStorage
  const fetchCourses = async () => {
    try {
      const localCourses = await AsyncStorage.getItem('courses');
      if (localCourses) {
        setCourses(JSON.parse(localCourses));
      } else {
        const { data, error } = await supabase.from('courses').select('*');
  
        if (error) {
          console.error('Error fetching courses:', error);
        } else {
          console.log('Courses fetched from Supabase:', data);
  
          if (Array.isArray(data)) {
            setCourses(data);
            await AsyncStorage.setItem('courses', JSON.stringify(data));
          } else {
            console.error('Fetched data is not an array:', data);
          }
        }
      }
    } catch (err) {
      console.error('Unexpected error:', err);
    }
  };
  

  useEffect(() => {
    fetchCourses();
  }, []);

  // Render each course item
  const renderItem = ({ item }: { item: Course }) => (
    <View style={styles.item}>
      <Text style={styles.title}>{item.title || 'No title available'}</Text>
      <Text style={styles.description}>{item.description || 'No description available'}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Courses</Text>
      {courses.length === 0 ? (
        <Text>No courses available</Text>
      ) : (
        <FlatList
          data={courses}
          keyExtractor={(item) => item.id || item.title || 'defaultKey'}
          renderItem={renderItem}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'green', // Green color for the heading
    marginBottom: 16,
  },
  item: {
    marginBottom: 16,
    padding: 16,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    backgroundColor: '#f9f9f9',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 14,
    color: '#555',
  },
});

export default CoursesScreen;
