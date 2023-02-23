import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { CharacterItem } from "./components/CharacterItem";
import { Characters } from "./Page/Characters";
import { SearchValueContext } from "./Context/SearchValueContext";
import { Layout } from "./Layout";
import { Episodes } from "./Page/Episodes";
import { Episode } from "./Page/Episode";

const App = () => {
  const [searchValue, setSearchValue] = useState("");

  return (
    <div className="App">
      <SearchValueContext.Provider value={{ searchValue, setSearchValue }}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Characters />} />
            <Route path="/character/:id" element={<CharacterItem />} />
            <Route path="/episodes" element={<Episodes />} />
            <Route path="/episode/:id" element={<Episode />} />
          </Route>
        </Routes>
      </SearchValueContext.Provider>
    </div>
  );
};

export default App;
