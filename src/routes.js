import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import RegistroPessoaFisica from "./pages/RegistroPF";
import RegistroPessoaJuridica from "./pages/RegistroPJ";
import LoginPagePF from "./pages/Login/PF";
import LoginPagePJ from "./pages/Login/PJ";
import ListaRecl from "./pages/ListaRecl"
import LoginReclamacao from "./pages/LoginReclamacao"
import DashBoardPF from "./pages/Dashboard/PF";
import RegistroReclamacao from "./pages/NovaReclamacao";
import SobrePage from "./pages/Sobre";


const RoutesSchema = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Home />} path="/" exact />
                <Route element={<RegistroPessoaFisica />} path="/registro-pf" />
                <Route element={<RegistroPessoaJuridica />} path="/registro-pj" />
                <Route element={<LoginPagePF />} path="/login-pf" />
                <Route element={<LoginPagePJ />} path="/login-pj" />
                <Route element={<ListaRecl />} path="/lista" />
                <Route element={<LoginReclamacao />} path="/login-reclamacao" />
                <Route element={<DashBoardPF />} path="/dashboard-pf" />
                <Route element={<RegistroReclamacao />} path="/nova-reclamacao" />
                <Route element={<SobrePage />} path="/sobre" />
            </Routes>
        </BrowserRouter>
    );
}

export default RoutesSchema;