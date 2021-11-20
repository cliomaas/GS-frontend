import { Component } from "react";
import { Container, Form, FormControl, FormLabel, Button, Row, Col } from "react-bootstrap";
import mulherPredio from "../../assets/img/mulherpredio.svg"
import { Link } from "react-router-dom";
import withRouter from "../../HOC";
class LoginPF extends Component {

    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);

    }


    handleClick() {
        if (document.getElementById("email").value !== "") { localStorage.username = document.getElementById("email").value }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.navigate('/dashboard-pf');
    }

    render() {
        return (
            <Container className="my-5 containerLogin w-75">
                <Row className="align-items-center">
                    <Col lg={true}>
                        <h1 className="text-center">Login</h1>
                        <Button as={Link} to="/registro-pf" className="my-2 w-100" variant="light">Ainda não é cliente?
                        </Button>
                        <Form className="form" onSubmit={this.handleSubmit}>
                            <FormLabel htmlFor="email" >Email: </FormLabel>
                            <FormControl type="email" name="email" id="email" required />
                            <FormLabel htmlFor="senha">Senha: </FormLabel>
                            <FormControl type="password" name="senha" id="senha" required />
                            <Button /*as={Link} to="/dashboard-pf"*/ onClick={this.handleClick} className="my-4 justify-content-center" type="submit">Entrar</Button>
                        </Form>
                    </Col>
                    <Col lg={true}>
                        <img className="mulher-predio" src={mulherPredio} alt="mulher em predio"></img>
                    </Col>
                </Row>
            </Container >
        );
    }
}

LoginPF = withRouter(LoginPF)
export default LoginPF


