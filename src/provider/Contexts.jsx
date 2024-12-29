import { createContext, useState } from "react";

export const GlobalContext = createContext(null);

const Contexts = ({ children }) => {
  const [theme, setTheme] = useState(true);
  const contextInfo = {
    theme,
    setTheme,
  };
  return (
    <GlobalContext.Provider value={contextInfo}>
      {children}
    </GlobalContext.Provider>
  );
};

export default Contexts;
