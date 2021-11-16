import React, { Component } from "react";
import axios from "axios";
import { Container, Form, FormControl, FormGroup, FormLabel, FormSelect, Button, Row, Col } from "react-bootstrap";
import Menina from "../../assets/img/menina.png"
import "./registropf.css"

class RegistroPF extends Component {
    constructor(props) {
        super(props);

        this.state = {
            nome: '',
            sobrenome: '',
            cpf: '',
            email: '',
            genero: '',
            cep: '',
            senha: ''
        }
    }

    confSenha() {
        var senha = document.getElementById("senha").value
        var confSenha = document.getElementById("confSenha").value
        if (senha != confSenha) {
            alert('Senhas não coincidem! Por favor verifique');
            return false;
        }
        return true;
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8080/api/usuarios', this.state)
            .then(response => {
                console.log(response)
            })
        this.props.history.push('/home')
    }

    render() {
        const { nome, sobrenome, cpf, email, genero, cep, senha } = this.state;
        return (
            <Container className="my-5">
                <Row>
                    <Col lg={true}>
                        <Form onSubmit={this.handleSubmit}>
                            <h1>Cadastro</h1>
                            <p>Preencha o formulário abaixo para a realização do cadastro</p>
                            <FormGroup>
                                <Row>
                                    <Col>
                                        <FormLabel htmlFor="nome" >Nome: </FormLabel>
                                        <FormControl type="text" name="nome" id="nome" value={nome} onChange={this.handleChange} pattern="[A-Za-z]{1,30}" required />
                                    </Col>
                                    <Col>
                                        <FormLabel htmlFor="sobrenome">Sobrenome: </FormLabel>
                                        <FormControl type="text" name="sobrenome" value={sobrenome} onChange={this.handleChange} pattern="[A-Za-z]{1,30}" required />
                                    </Col>
                                </Row>
                                <div>
                                    <FormLabel htmlFor="cpf">CPF: </FormLabel>
                                    <FormControl type="text" name="cpf" value={cpf} onChange={this.handleChange} pattern="\d{3}\.?\d{3}\.?\d{3}-?\d{2}" title="Digite seu CPF no formato 'XXXXXXXXXXX'" required />
                                </div>
                                <div>
                                    <FormLabel htmlFor="email">Email: </FormLabel>
                                    <FormControl type="email" name="email" value={email} onChange={this.handleChange} required />
                                </div>
                                <div>
                                    <FormLabel htmlFor="genero">Gênero: </FormLabel>
                                    <FormSelect name="genero" onChange={this.handleChange} value={genero} required>
                                        <option disabled selected value="">Escolha uma opção:</option>
                                        <option value="feminino">Feminino</option>
                                        <option value="masculino">Masculino</option>
                                        <option value="outro">Outro</option>
                                        <option value="naoinformado">Prefiro não informar</option>
                                    </FormSelect>
                                </div>
                                <div>
                                    <FormLabel htmlFor="cep">CEP: </FormLabel>
                                    <FormControl type="text" name="cep" value={cep} onChange={this.handleChange} pattern="\d{5}-?\d{3}" required />
                                </div>
                                <div>
                                    <FormLabel htmlFor="senha">Senha: </FormLabel>
                                    <FormControl type="password" name="senha" id="senha" value={senha} onChange={this.handleChange} required />
                                </div>
                                <div>
                                    <FormLabel htmlFor="senha">Confirme sua senha: </FormLabel>
                                    <FormControl type="password" name="confSenha" id="confSenha" onChange={this.handleChange} onBlur={this.confSenha} required />
                                </div>

                            </FormGroup>
                            <FormGroup>
                                <Button className="my-4" type="submit">Cadastrar</Button>
                            </FormGroup>
                        </Form>
                    </Col>
                    <Col lg={true} className="d-flex justify-content-center align-items-center">
                        <img className="menina" src={Menina} alt="menina e mapa" ></img>
                    </Col>
                </Row>
            </Container >
        )
    }
}
export default RegistroPF
