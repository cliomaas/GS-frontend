import { Component } from "react";
import { Container, Form, FormControl, FormLabel, Button, Row, Col } from "react-bootstrap";
import PessoasMapa from "../../assets/img/pessoasmapa.svg"
import { Link } from "react-router-dom";
import withRouter from "../../HOC";

class LoginPJ extends Component {
    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);

    }


    handleClick() {
        if (document.getElementById("email").value !== "") { localStorage.usernamepj = document.getElementById("email").value }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.navigate('/dashboard-pj');
    }

    render() {
        return (
            <Container className="my-5 containerLogin w-75">
                <Row className="align-items-center">
                    <Col lg={true}>
                        <h1 className="text-center">Login</h1>
                        <Button as={Link} to="/registro-pj" className="my-2 w-100" variant="light">Ainda não é cliente?
                        </Button>
                        <Form className="form" onSubmit={this.handleSubmit}>
                            <FormLabel htmlFor="email" >Email: </FormLabel>
                            <FormControl type="email" name="email" id="email" />
                            <FormLabel htmlFor="senha">Senha: </FormLabel>
                            <FormControl type="password" name="senha" id="senha" />
                            <Button className="my-4 justify-content-center" onClick={this.handleClick} type="submit">Entrar</Button>
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


LoginPJ = withRouter(LoginPJ)
export default LoginPJ