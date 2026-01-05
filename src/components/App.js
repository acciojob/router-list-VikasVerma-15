import React from "react";
import { Routes, Route } from "react-router-dom";
import ItemList from "./ItemList";
import ItemDetail from "./ItemDetail";
import "./../styles/App.css";

const App = () => {
  return (
    <div id="main">
      {/* Do not remove the main div */}
      <Routes>
        <Route path="/" element={<ItemList />} />
        <Route path="/items/:id" element={<ItemDetail />} />
      </Routes>
    </div>
  );
};

export default App;

