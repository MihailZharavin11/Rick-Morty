import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Characters } from "./components/Characters";
import { Layout } from "./Layout";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Characters />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
