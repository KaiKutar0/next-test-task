import React, { createContext, useContext, useEffect, useState } from "react";

interface CounterContextProps {
  counter: number;
  incrementCounter: () => void;
}

const CounterContext = createContext<CounterContextProps | undefined>(
  undefined
);

export const CounterProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [counter, setCounter] = useState(0);

  const incrementCounter = () => {
    setCounter((prev) => prev + 1);
  };

  return (
    <CounterContext.Provider value={{ counter, incrementCounter }}>
      {children}
    </CounterContext.Provider>
  );
};

export const useCounter = () => {
  const context = useContext(CounterContext);
  if (!context) {
    throw new Error("useCounter must be used within a CounterProvider");
  }
  return context;
};
