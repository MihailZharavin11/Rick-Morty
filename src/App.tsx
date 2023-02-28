import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { CharacterItem } from "./Page/CharacterItem";
import { Characters } from "./Page/Characters";
import { Layout } from "./Layout";
import { Episodes } from "./Page/Episodes";
import { Episode } from "./Page/Episode";
import { NotFound } from "./components/NotFound";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Characters />} />
          <Route path="/character/:id" element={<CharacterItem />} />
          <Route path="/episodes" element={<Episodes />} />
          <Route path="/episode/:id" element={<Episode />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
