import "./App.css";

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import { LinkRoomPage } from "./pages/LinkRoomPage.jsx";
import { LinkFormPage } from "./pages/LinkFormPage.jsx";
import { Toaster } from "react-hot-toast";
import { Header } from "./components/Header.jsx";

import {ROUTES} from "./routes.js";

function App() {
  return (
    <BrowserRouter>
      <Header/>

      <Routes>
        <Route path="/" element={<Navigate to={ROUTES.HOME} />} />
        <Route path={ROUTES.HOME} element={<LinkRoomPage/>} />
        <Route path={ROUTES.CREATE_LINK} element={<LinkFormPage />} />
        <Route path={ROUTES.EDIT_LINK} element={<LinkFormPage />} />
      </Routes>

      <Toaster />
    </BrowserRouter>
  );
}

export default App;
