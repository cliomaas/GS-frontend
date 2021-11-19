import { Container, Button, Row, Col, DropdownButton, Dropdown } from "react-bootstrap"
import { Link } from "react-router-dom";
import PessoasPredio from "../../assets/img/pessoaspredio.svg"

export default function LoginRecl() {
    return (
        <>
            <Container className="containerLoginReclamacao my-3">
                <Row className="align-items-center">
                    <Col lg={true}>
                        <h3 className="text-center">Opa! Para efetuar uma reclamação você precisa estar logado!</h3>
                        <div className="d-flex flex-column">
                            <Button className="my-2" as={Link} to="/login-pf">Sou pessoa física</Button>
                            <Button as={Link} to="">Sou empresa parceira</Button>
                        </div>
                        <DropdownButton className="my-2" variant="light" title="Ainda não é cliente?">
                            <Dropdown.Item>Sou cidadão</Dropdown.Item>
                            <Dropdown.Item>Sou empresa</Dropdown.Item>
                        </DropdownButton>
                    </Col>
                    <Col lg={true} className="d-flex justify-content-center align-items-center">
                        <img src={PessoasPredio} className="pessoasPredio" alt="pessoas em predio"></img>
                    </Col>
                </Row>
            </Container>
        </>
    );

}