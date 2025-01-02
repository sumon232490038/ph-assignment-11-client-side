import { createContext, useState } from "react";

export const GlobalContext = createContext(null);

const Contexts = ({ children }) => {
  const [theme, setTheme] = useState(true);
  const [text, setText] = useState("");
  const contextInfo = {
    theme,
    setTheme,
    text,
    setText,
  };
  return (
    <GlobalContext.Provider value={contextInfo}>
      {children}
    </GlobalContext.Provider>
  );
};

export default Contexts;
