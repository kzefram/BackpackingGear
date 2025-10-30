import React, { createContext, useContext, useEffect, useState } from "react";

const SettingsContext = createContext(null);

export function SettingsProvider({ children }) {
  const [units, setUnits] = useState("metric"); // 'metric' or 'imperial'
  const [category, setCategory] = useState("backpacking");

  useEffect(() => {
    try {
      const raw = localStorage.getItem("app_settings");
      if (raw) {
        const parsed = JSON.parse(raw);
        if (parsed.units) setUnits(parsed.units);
        if (parsed.category) setCategory(parsed.category);
      }
    } catch (err) {
      // non-fatal; continue with defaults
      console.warn("Failed to read app_settings from localStorage", err);
    }
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem("app_settings", JSON.stringify({ units, category }));
    } catch (err) {
      console.warn("Failed to write app_settings to localStorage", err);
    }
  }, [units, category]);

  return (
    <SettingsContext.Provider
      value={{ units, setUnits, category, setCategory }}
    >
      {children}
    </SettingsContext.Provider>
  );
}

export function useSettings() {
  return useContext(SettingsContext);
}

// default export is the provider component to keep this file focused on React components
export default SettingsProvider;
