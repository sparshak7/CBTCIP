import { Outlet } from "react-router-dom";
import Layout from "./components/Layout";
import { createContext, useState } from "react";
import { ContextProps } from "./utils/types";

export const Context = createContext<ContextProps | undefined>(undefined);

const App = () => {
  const [query, setQuery] = useState("Kolkata");
  return (
    <Context.Provider value={{ query, setQuery }}>
      <Layout>
        <Outlet />
      </Layout>
    </Context.Provider>
  );
};

export default App;
