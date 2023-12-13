import { createContext, useContext, useState } from "react";

const pagesContext = createContext();

const PagesProvider = ({ children }) => {
  const [aboutSectionPosition, setAboutSectionPosition] = useState(null);
  const [projectsSectionPosition, setProjetsSectionPosition] = useState(null);

  return (
    <pagesContext.Provider
      value={{
        aboutSectionPosition,
        setAboutSectionPosition,
        projectsSectionPosition,
        setProjetsSectionPosition,
      }}
    >
      {children}
    </pagesContext.Provider>
  );
};

const usePagesContext = () => {
  return useContext(pagesContext);
};

export { PagesProvider, usePagesContext };