"use client";
import { createContext, useContext, useState } from "react";

type Mode = "professional" | "academic";

const PortfolioModeContext = createContext<{
  mode: Mode;
  toggle: () => void;
}>({
  mode: "academic",
  toggle: () => {},
});

export function PortfolioModeProvider({ children }: { children: React.ReactNode }) {
  const [mode, setMode] = useState<Mode>("academic");

  const toggle = () => {
    setMode((prev) => (prev === "professional" ? "academic" : "professional"));
  };

  return (
    <PortfolioModeContext.Provider value={{ mode, toggle }}>
      {children}
    </PortfolioModeContext.Provider>
  );
}

export function usePortfolioMode() {
  return useContext(PortfolioModeContext);
}