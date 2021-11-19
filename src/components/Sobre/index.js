import { Col, Container, Row, Card } from "react-bootstrap";
import Reginaldo from '../../assets/img/reginaldo.png'
import Carol from '../../assets/img/carol.png'
import Joao from '../../assets/img/joao.png'
import Clio from '../../assets/img/clio.jpg'

export default function Sobre() {

    return (
        <Container className="containerSobre">
            <h1>A equipe idealizadora do projeto!</h1>
            <Row style={{ height: '100vh', overflow: 'scroll' }} className="align-items-center row-sobre">
                <Col lg={true} className="d-flex justify-content-center">
                    <Card style={{ width: '18rem' }} className="mb-3 card-sobre">
                        <Card.Img variant="top" src={Carol} className="img-sobre card-sobre" />
                        <Card.Body>
                            <Card.Title>Ana Carolina Ronqui</Card.Title>
                            <Card.Text>
                                Estagiária na
                                CERC Central de Recebíveis
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col lg={true} className="d-flex justify-content-center">
                    <Card style={{ width: '18rem' }} className="mb-3 card-sobre">
                        <Card.Img variant="top" src={Clio} className="img-sobre" />
                        <Card.Body>
                            <Card.Title>Clio Maas</Card.Title>
                            <Card.Text>
                                Estagiária de engenharia na Loggi
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col lg={true} className="d-flex justify-content-center">
                    <Card style={{ width: '18rem' }} className="mb-3 card-sobre">
                        <Card.Img variant="top" src={Joao} className="img-sobre" />
                        <Card.Body>
                            <Card.Title>João Victor Costa</Card.Title>
                            <Card.Text>
                                Estagiário de desenvolvimento na Sinqia
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col lg={true} className="d-flex justify-content-center">
                    <Card style={{ width: '18rem' }} className="mb-3 card-sobre">
                        <Card.Img variant="top" src={Reginaldo} className="img-sobre" />
                        <Card.Body>
                            <Card.Title>Reginaldo Rezende</Card.Title>
                            <Card.Text>
                                Estagiário em Middleware na
                                Engineering Brasil
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container >
    );

}