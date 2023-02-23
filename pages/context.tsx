import React, { useContext, useState } from "react";

const ProgressContext = React.createContext({});

export default function ContextData(props: any) {
  const [activeTheme, setActiveTheme] = useState<string>("light");
  const inactiveTheme = activeTheme === "light" ? "dark" : "light";
  return (
    <ProgressContext.Provider
      value={{ activeTheme, setActiveTheme, inactiveTheme }}
    >
      {props.children}
    </ProgressContext.Provider>
  );
}

export const ThemeButton = () => {
  const context = useContext(ProgressContext);
  return context;
};
