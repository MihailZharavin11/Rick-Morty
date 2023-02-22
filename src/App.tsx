import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { CharacterItem } from "./components/CharacterItem";
import { Characters } from "./components/Characters";
import { SearchValueContext } from "./Context/SearchValueContext";
import { Layout } from "./Layout";

const App = () => {
  const [searchValue, setSearchValue] = useState("");

  return (
    <div className="App">
      <SearchValueContext.Provider value={{ searchValue, setSearchValue }}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Characters />} />
            <Route path="/character/:id" element={<CharacterItem />} />
          </Route>
        </Routes>
      </SearchValueContext.Provider>
    </div>
  );
};

export default App;
