import IconesPerfilPJ from "../../../components/IconesPerfil/PJ";
import Footer from "../../../components/Footer";
import NavBar from "../../../components/NavBar";
import CardStatusBairro from "../../../components/CardStatusBairro"
import { Col, Container, Row, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import ListaReclamacaoUnica from "../../../components/ListaReclamacaoUnica";

export default function DashBoardPJ() {

    return (
        <>
            <NavBar></NavBar>
            <Container className="mt-4 containerDashboard p-2">
                <Row className="rowDashboard">
                    <Col lg={true} className="mb-2">
                        <IconesPerfilPJ></IconesPerfilPJ>
                    </Col>
                    <Col lg={5} className="mb-2">
                        <ListaReclamacaoUnica></ListaReclamacaoUnica>
                    </Col>
                    <Col lg={true}>
                        <CardStatusBairro></CardStatusBairro>
                    </Col>
                </Row>
                <div className="d-flex flex-column p-5 align-items-center">
                    <Button as={Link} to="/nova-reclamacao" className="mb-2 botoesDash">Fazer nova reclamação</Button>
                    <Button as={Link} to="/lista" className="botoesDash">Gerenciar reclamações existentes</Button>
                </div>
            </Container>
            <Footer></Footer>
        </>

    );

}