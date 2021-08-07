import React from "react";
import Provider from "./src/context/Provider";
import AppNavContainer from "./src/navigations";

export default function App() {
  return (
    <Provider>
      <AppNavContainer />
    </Provider>
  );
}
