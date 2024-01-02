import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HOME, NOT_FOUND, LOGIN, BOARD } from "../constants/pageRoutes";
import NotFound from "../pages/NotFound";
import Login from "../pages/Login";
import Home from "../pages/Home";
import Board from "../pages/Board";

const AppRouter = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path={LOGIN} element={<Login />} />
          <Route path={HOME} element={<Home />} />
          <Route path={BOARD} element={<Board />} />
          <Route path={NOT_FOUND} element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default AppRouter;
