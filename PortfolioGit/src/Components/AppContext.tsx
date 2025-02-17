import React, { createContext, useContext, ReactNode } from 'react';

// Define your interfaces
interface ListDetails {
  emoji: string;
  value: string;
  description: string;
}

interface AccordionProps {
  AccordData: ListDetails[];
}

// Define the context type
interface AppContextType {
  AccordionProps: AccordionProps;
}

// Create the context
const AppContext = createContext<AppContextType | undefined>(undefined);

// Create a provider component
interface AppProviderProps {
  children: ReactNode;
  value: AppContextType;
}

export const AppProvider: React.FC<AppProviderProps> = ({ children, value }) => {
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

// Custom hook to use the context
export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};