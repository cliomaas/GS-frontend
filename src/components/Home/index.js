import { Button, Row, Col, Container } from "react-bootstrap"
import { Link } from "react-router-dom";
import Grupo from "../../assets/img/grupo.png"

export default function HomeComponent() {
    return (

        <div>
            <div className="header">
                <div className="texto d-flex pt-5 w-50 align-items-center flex-column">
                    <h1 className="text-center">Construa a cidade que</h1>
                    <h1>você merece!</h1>
                    <p className="text-center">Como você quer ajudar São Paulo hoje?</p>
                </div>
                <div className="d-flex pt-2 w-50 align-items-center flex-column">
                    <Button as={Link} to="/login-reclamacao" className="botaoReclamacaoHome">Registrar reclamação</Button>
                </div>
            </div>
            <Container>
                <div className="section">
                    <Row>
                        <Col lg={true}>
                            <div>
                                <h3>O projeto</h3>
                                <p>Já sabemos que gerar menos lixo é uma demanda urgente.Além disso, o consumidor está cada vez mais alinhado às práticas de sustentabilidade, exigindo essa postura.Hoje, as emissões de dióxido de carbono (CO2) aumentaram, plásticos e outros resíduos estão poluindo cada vez mais os oceanos, áreas vegetais estão sendo exploradas e desmatadas ilegalmente e o preço do petróleo dispara.Ainda assim, é possível pensar em uma abordagem diferente, com foco na preservação da natureza
                                    Por isso, convidamos todos para embarcarem conosco nessa jornada e na construção de um futuro melhor e com mais possibilidades para todos!</p>
                            </div>
                        </Col>
                        <Col lg={true}>
                            <div>
                                <h3>Nossa Missão</h3>
                                <p>O nosso papel é transformar os incentivar os moradores locais para que eles se tornem parte e protagonistas dessa grande trasnformação , criando pontes entre eles e parceiros externos, que os apoiando conseguirá entregar segurança, conforto e satifação de poder caminhar em um ambiente saudavél.
                                    sses moradores, podemos ampliar o acesso à oportunidades e à melhoria da qualidade de vida, provocando grandes transformações e podendo desfrutar de um futuro melhor!
                                </p>
                            </div>
                        </Col>
                    </Row>
                    <Row className="justify-content-center py-5">
                        <img src={Grupo} alt="explicacao processo"></img>
                    </Row>
                </div>
            </Container>
            <Row className="p-5 my-5 div-incentivo">
                <h5>Cada um de nós tem o poder da transformação e juntos somos mais fortes!
                    Acreditamos em uma sociedade unida e ativa na transformação social. Venha conosco construir um Brasil e um futuro melhor.</h5>
            </Row>
        </div>
    );
}
