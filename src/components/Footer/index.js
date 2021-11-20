import { Col, Container, Row } from "react-bootstrap";

export default function Footer() {
    return (
        <>
            <footer>
                <Container>
                    <Row className="p-5">
                        <Col>
                            <div>
                                <h5>Cuida Sampa</h5>
                                <p>2021 Cuida Sampa</p>
                                <p>Todos os direitos reservados</p>
                            </div>
                        </Col>
                        <Col>
                            <div className="linha m-2"></div>
                        </Col>
                        <Col>
                            <div className="contatos">
                                <h6>Quem somos nós?</h6>
                                <p>Contate-nos:</p>
                                <div className="d-flex align-items-center">
                                    <i className="fas fa-phone-alt mb-3"></i>
                                    <p>11 9826528190</p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </footer>
        </>
    );
}

