import React, { createContext, useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { CharacterItem } from "./components/CharacterItem";
import { Characters } from "./components/Characters";
import { Layout } from "./Layout";

const App = () => {
  const [searchValue, setSearchValue] = useState("");

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Characters />} />
          <Route path="/character/:id" element={<CharacterItem />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
