import { useState,React, createContext } from "react";


export const githubContext = createContext();

const GithubProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <githubContext.Provider value={{ darkMode, setDarkMode }}>
      {children}
    </githubContext.Provider>
  );
};

export default GithubProvider;