import IconesPerfilPJ from "../../../components/IconesPerfil/PJ";
import Footer from "../../../components/Footer";
import NavBar from "../../../components/NavBar";
import CardStatusBairro from "../../../components/CardStatusBairro"
import { Col, Container, Row } from "react-bootstrap";
import ListaReclamacaoUnica from "../../../components/ListaReclamacaoUnica";

export default function DashBoardPJ() {

    return (
        <>
            <NavBar></NavBar>

            <Container className="mt-4 container-dashboard p-2">
                <h1 className="text-center">Nossas missões:</h1>
                <Row className="row-dashboard">
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
                </div>
            </Container>
            <Footer></Footer>
        </>

    );

}