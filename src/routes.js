import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import RegistroPessoaFisica from "./pages/RegistroPF";
import RegistroPessoaJuridica from "./pages/RegistroPJ";
import LoginPage from "./pages/Login";

const RoutesSchema = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Home />} path="/" exact />
                <Route element={<RegistroPessoaFisica />} path="/registro-pf" />
                <Route element={<RegistroPessoaJuridica />} path="/registro-pj" />
                <Route element={<LoginPage />} path="/login" />
            </Routes>
        </BrowserRouter>
    );
}

export default RoutesSchema;