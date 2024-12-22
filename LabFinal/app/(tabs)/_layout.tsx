import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CoursesScreen from '../../src/screens/CoursesScreen';
import QuizzesScreen from '../../src/screens/QuizzesScreen';  // Correct relative import
import ProgressScreen from '../../src/screens/ProgressScreen';  // Correct relative import

const Tab = createBottomTabNavigator();

const TabsLayout = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Courses" component={CoursesScreen} />
      <Tab.Screen name="Quizzes" component={QuizzesScreen} />
      <Tab.Screen name="Progress" component={ProgressScreen} />
    </Tab.Navigator>
  );
};

export default TabsLayout;
