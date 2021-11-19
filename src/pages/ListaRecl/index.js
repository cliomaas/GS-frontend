import NavBar from "../../components/NavBar"
import ListaReclamacoes from "../../components/ListaReclamacoes"
import Footer from "../../components/Footer"
import { Button, Container } from "react-bootstrap";
import AlteraReclamacao from "../../components/Alteracao";
import { useState } from "react";


export default function ListaRecl() {

    const [alteracao, setAlteração] = useState('');

    function handleClick() {
        setAlteração(<AlteraReclamacao />)
    }
    return (
        <>
            <NavBar></NavBar>
            <Container className="p-5" style={{ minHeight: '63.5vh' }}>
                <ListaReclamacoes></ListaReclamacoes>
                <div className="d-flex justify-content-center">
                    <Button onClick={() => handleClick()} className="w-50">Alterar Reclamação</Button>
                </div>
                <div>{alteracao}</div>
            </Container>
            <Footer></Footer>
        </>
    );

}