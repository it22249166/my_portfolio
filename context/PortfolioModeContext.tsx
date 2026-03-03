"use client";
import { createContext, useContext, useState } from "react";

type Mode = "professional" | "academic";

const PortfolioModeContext = createContext<{
  mode: Mode;
  toggle: () => void;
}>({
  mode: "professional",
  toggle: () => {},
});

export function PortfolioModeProvider({ children }: { children: React.ReactNode }) {
  const [mode, setMode] = useState<Mode>("professional");

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