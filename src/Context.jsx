import { createContext, useState } from "react";

// Menu Context------------------------------------
export const MenuContext = createContext();

export const MenuContextProvider = ({ children }) => {
  const [isMenuActive, setStatus] = useState(false);

  const updateMenuStatus = (newStatus) => {
    setStatus(newStatus);
  };

  return (
    <MenuContext.Provider value={{ isMenuActive, updateMenuStatus }}>
      {children}
    </MenuContext.Provider>
  );
};
