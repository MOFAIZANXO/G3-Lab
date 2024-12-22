// src/context/HeadingContext.tsx
import React, { createContext, useContext, useState, useMemo, ReactNode } from 'react';

// Define the shape of your context
interface HeadingContextType {
  heading: string;
  setHeading: (heading: string) => void;
}

// Create the context with an initial value
const HeadingContext = createContext<HeadingContextType | undefined>(undefined);

// Create a provider component
export const HeadingProvider = ({ children }: { children: ReactNode }) => {
  const [heading, setHeading] = useState<string>('Education App');  // Set default heading to "Education App"

  // Use useMemo to memoize the context value and prevent unnecessary re-renders
  const contextValue = useMemo(() => ({
    heading,
    setHeading
  }), [heading]);  // Recalculate only when `heading` changes

  return (
    <HeadingContext.Provider value={contextValue}>
      {children}
    </HeadingContext.Provider>
  );
};

// Create a custom hook to use the context
export const useHeading = () => {
  const context = useContext(HeadingContext);
  if (!context) {
    throw new Error('useHeading must be used within a HeadingProvider');
  }
  return context;
};
