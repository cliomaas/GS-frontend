import Paisagem from "../../assets/img/paisagem.png"
import { Button, DropdownButton, Dropdown, Row, Col } from "react-bootstrap"
import { Link } from "react-router-dom";
import Grupo from "../../assets/img/grupo.png"

export default function HomeComponent() {
    return (
        <div>
            <div className="header">
                <div className="texto d-flex pt-5 w-50 align-items-center flex-column">
                    <h1>Construa a cidade que</h1>
                    <h1>você merece!</h1>
                </div>
                <div className="d-flex pt-5 w-50 align-items-center flex-column">
                    <DropdownButton className="my-2 w-50 botaodropdown" title="Quero me cadastrar!">
                        <Dropdown.Item as={Link} to="/registro-pf">Pessoa Física</Dropdown.Item>
                        <Dropdown.Item as={Link} to="/registro-pj">Pessoa Jurídica</Dropdown.Item>
                    </DropdownButton>
                    <Button className="w-50">Já possuo cadastro.</Button>
                </div>
            </div>
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
        </div>
    );
}