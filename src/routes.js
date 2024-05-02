import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Repository from "./pages/Repository";
import Main from "./pages/Main";

export default function RoutesComponent() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact Component={Main} />
        <Route path="/repository/:repository" exact Component={Repository} />
      </Routes>
    </BrowserRouter>
  );
}
