import { Col, Container, Row } from "react-bootstrap";

export default function Sobre() {

    return (
        <Container>
            <h1>A equipe idealizadora do projeto!</h1>
            <Row>
                <Col>
                    <img></img>
                    <h6>Ana Carolina Ronqui</h6>
                    <p>Estagiária na
                        CERC Central de Recebíveis</p>
                </Col>
                <Col>
                    <img></img>
                    <h6>Clio Maas</h6>
                    <p>Estagiária de engenharia na Loggi</p>
                </Col>
                <Col>
                    <img></img>
                    <h6>João Victor Costa</h6>
                    <p>Estagiário de desenvolvimento na Sinqia</p>
                </Col>
                <Col>
                    <img></img>
                    <h6>Reginaldo Rezende</h6>
                    <p>Estagiário em Middleware na
                        Engineering Brasil
                    </p>
                </Col>
            </Row>

        </Container>
    );

}