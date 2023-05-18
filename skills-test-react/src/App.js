import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import AccountMenu from "./AccountMenu";
import BasicForm from "./Pages/BasicFormPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";

export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <AccountMenu />
        <div className="content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/todo" element={<BasicForm />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}
