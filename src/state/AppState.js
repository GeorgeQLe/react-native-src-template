import { createContext, useState } from "react";
import { ColorProvider } from "./ColorState";
import retrieveContextFromStorage from "../functions/storage/retrieveContextFromStorage";

const AppContext = createContext({});

export const AppProvider = ({children}) => {
  const [loggedIn, setLoggedIn] = useState(false);

  const AppProviderFunctions = {
    setLoggedIn: (value) => setLoggedIn(value),
    
    setValuesFromStorage: async () => {
      const context = await retrieveContextFromStorage("app");
      if (context.loggedIn !== undefined) {
        console.log("Setting loggedIn from storage:", context.loggedIn);
        setLoggedIn(context.loggedIn);
      }
    },
  };

  const AppProviderStorageFunctions = {
    setAppValuesFromStorage: async () => {
      const context = await retrieveContextFromStorage("app");
      if (context.loggedIn !== undefined) {
        console.log("Setting loggedIn from storage:", context.loggedIn);
        setLoggedIn(context.loggedIn);
      }
    },
    storeLoggedIn: (value) => {
      console.log("Storing loggedIn:", value);
      storeContextInStorage({loggedIn: value}, "app");
      setLoggedIn(value);
    }
  };

  return (
    <AppContext.Provider value={{
      loggedIn,
      ...AppProviderFunctions,
      ...AppProviderStorageFunctions,
    }}>
      <ColorProvider>
        {children}
      </ColorProvider>
    </AppContext.Provider>
  )
};

export default AppContext;