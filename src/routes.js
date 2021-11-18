import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import RegistroPessoaFisica from "./pages/RegistroPF";
import RegistroPessoaJuridica from "./pages/RegistroPJ";
import LoginPagePF from "./pages/Login/PF";
import ListaReclamacoes from "./components/ListaReclamacoes";
import Alteracao from "./pages/Alteracao";



const RoutesSchema = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Home />} path="/" exact />
                <Route element={<RegistroPessoaFisica />} path="/registro-pf" />
                <Route element={<RegistroPessoaJuridica />} path="/registro-pj" />
                <Route element={<LoginPagePF />} path="/login-pf" />
                <Route element={<ListaReclamacoes />} path="/lista" />
                <Route path="/alterar" element={<Alteracao />}></Route >
            </Routes>
        </BrowserRouter>
    );
}

export default RoutesSchema;