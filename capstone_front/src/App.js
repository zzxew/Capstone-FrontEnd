import React from "react";
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";
import { useState } from "react";
import './App.css';
import Main from './component/page/MainPage';
import Loading from "./component/page/Loading";
import Listpage from "./component/page/ListPage";
import LogInPage from "./component/page/LogInPage";
import RegisterPage from "./component/page/RegisterPage";
import ProfilePage from "./component/page/ProfilePage";
import ExamplePage from "./component/page/ExamplePage";
import ResultPage from "./component/page/ResultPage";
import axios from "axios";

function App(props) {

  return (
    <BrowserRouter>
      <Routes>
          <Route index element={<Main />} />
          <Route path="loading" element={<Loading />} />
          <Route path="Listpage" element={<Listpage />} />
          <Route path="LogInPage" element={<LogInPage />} />
          <Route path="RegisterPage" element={<RegisterPage />} />
          <Route path="profile" element={<ProfilePage />} />
          <Route path="example" element={<ExamplePage />} />
          <Route path="result" element={<ResultPage />} />
      </Routes>
  </BrowserRouter>

  )}

export default App;
