import React from "react";
import "./App.css";

import { TopBar } from "./components/TopBar";
import { Items } from "./components/Items";
import { InputForm } from "./components/InputForm";

import { StoreProvider } from "./helpers/stores";

function App() {
  return (
    <StoreProvider>
      <div className="App">
        <TopBar />
        <Items />
        <InputForm />
      </div>
    </StoreProvider>
  );
}

export default App;
