import { Component } from "react";
import { Container, Form, FormControl, FormLabel, Button } from "react-bootstrap";

class LoginPF extends Component {
    render() {
        return (
            <Container className="my-5">
                <Form className="form pe-5">
                    <FormLabel htmlFor="email" >Email: </FormLabel>
                    <FormControl type="email" name="email" />
                    <FormLabel htmlFor="senha">Senha: </FormLabel>
                    <FormControl type="password" name="senha" id="senha" />
                    <Button className="my-4 justify-content-center" type="submit">Entrar</Button>
                </Form>
            </Container>
        );
    }
}

export default LoginPF