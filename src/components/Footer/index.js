import { Col, Container, Row } from "react-bootstrap";

export default function Footer() {
    return (
        <>
            <footer>
                <Container>
                    <Row className="p-5 align-items-center">
                        <Col>
                            <div className="termos-footer">
                                <h5>Cuida Sampa</h5>
                                <p>2021 Cuida Sampa</p>
                                <p>Todos os direitos reservados</p>
                            </div>
                        </Col>
                        <Col>
                            <div className="contatos d-flex flex-column align-items-center">
                                <h6>Quem somos nós?</h6>
                                <p>Contate-nos:</p>
                                <div className="d-flex align-items-center">
                                    <i className="fas fa-phone-alt mb-3"></i>
                                    <p className="mx-2">11 9826528190</p>
                                </div>
                                <div className="d-flex align-items-center">
                                    <i class="fas fa-at mb-3"></i>
                                    <p className="mx-2">ceo@g6group.com</p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </footer>
        </>
    );
}

