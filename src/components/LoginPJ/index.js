import { Component } from "react";
import { Container, Form, FormControl, FormLabel, Button, Row, Col } from "react-bootstrap";
import PessoasMapa from "../../assets/img/pessoasmapa.svg"
import { Link } from "react-router-dom";

class LoginPJ extends Component {
    render() {
        return (
            <Container className="my-5 containerLogin w-75">
                <Row className="align-items-center">
                    <Col lg={true}>
                        <h1 className="text-center">Login</h1>
                        <Button as={Link} to="/registro-pj" className="my-2 w-100" variant="light">Ainda não é cliente?
                        </Button>
                        <Form className="form">
                            <FormLabel htmlFor="email" >Email: </FormLabel>
                            <FormControl type="email" name="email" />
                            <FormLabel htmlFor="senha">Senha: </FormLabel>
                            <FormControl type="password" name="senha" id="senha" />
                            <Button className="my-4 justify-content-center" type="submit">Entrar</Button>
                        </Form>
                    </Col>
                    <Col lg={true} className="d-flex justify-content-center align-items-center col-lg-7">
                        <img className="mulherPredio" src={PessoasMapa} alt="pessoas vendo mapa"></img>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default LoginPJ