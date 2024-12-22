import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import supabase from '../supabaseClient';

interface Course {
  id: string;
  title: string;
  description: string;
}

const CoursesScreen = () => {
  const [courses, setCourses] = useState<Course[]>([]);

  // Fetch courses from Supabase
  const fetchCourses = async () => {
    try {
      const { data, error } = await supabase.from('courses').select('*');

      if (error) {
        console.error('Error fetching courses:', error);
      } else {
        console.log('Courses fetched:', data); // Log data to verify
        if (data && data.length > 0) {
          data.forEach((course) => console.log(course)); // Log each course for inspection
        }
        setCourses(data || []); // Ensure data is an array of Course objects
      }
    } catch (err) {
      console.error('Unexpected error:', err);
    }
  };

  useEffect(() => {
    fetchCourses();
  }, []);

  // Render each item
  const renderItem = ({ item }: { item: Course }) => (
    <View style={styles.item}>
      <Text style={styles.title}>{item.title || 'No title available'}</Text>
      <Text style={styles.description}>{item.description || 'No description available'}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      {courses.length === 0 ? (
        <Text>No courses available</Text>
      ) : (
        <FlatList
          data={courses}
          keyExtractor={(item) => item.id || item.title || 'defaultKey'} // Fallback if id is missing
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
  item: {
    marginBottom: 16,
    padding: 16,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    backgroundColor: '#f9f9f9', // Added background color to verify the item
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333', // Ensure the text is visible
  },
  description: {
    fontSize: 14,
    color: '#555',
  },
});

export default CoursesScreen;
