import { Component } from "react";
import { Container, Form, FormControl, FormLabel, Button, Row, Col } from "react-bootstrap";
import MulherPredio from "../../assets/img/mulherpredio.svg"
import { Link } from "react-router-dom";

class LoginPF extends Component {


    handleClick() {
        if (document.getElementById("email").value !== "") { localStorage.username = document.getElementById("email").value }
    }

    render() {
        return (
            <Container className="my-5 containerLogin w-75">
                <Row className="align-items-center">
                    <Col lg={true}>
                        <h1 className="text-center">Login</h1>
                        <Button as={Link} to="/registro-pf" className="my-2 w-100" variant="light">Ainda não é cliente?
                        </Button>
                        <Form className="form">
                            <FormLabel htmlFor="email" >Email: </FormLabel>
                            <FormControl type="email" name="email" id="email" />
                            <FormLabel htmlFor="senha">Senha: </FormLabel>
                            <FormControl type="password" name="senha" id="senha" />
                            <Button as={Link} to="/dashboard-pf" onClick={this.handleClick} className="my-4 justify-content-center" type="submit">Entrar</Button>
                        </Form>
                    </Col>
                    <Col lg={true}>
                        <img className="mulherPredio" src={MulherPredio} alt="mulher em predio"></img>
                    </Col>
                </Row>
            </Container >
        );
    }
}

export default LoginPF


