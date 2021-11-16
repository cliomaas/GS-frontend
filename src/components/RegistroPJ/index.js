import React, { Component } from "react";
import axios from "axios";
import { Container, Form, Row, Col, FormLabel, FormControl, FormSelect, FormGroup, Button } from "react-bootstrap";
import Menino from "../../assets/img/menino.png"

class RegistroPJ extends Component {
    constructor(props) {
        super(props);

        this.state = {
            nome: '',
            cnpj: '',
            email: '',
            site: '',
            numeroFuncionarios: '',
            telefone: '',
            cep: '',
            cidade: '',
            estado: ''
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8080/api/empresas', this.state)
            .then(response => {
                console.log(response)
            })
    }

    render() {
        const { nome, cnpj, email, site, numeroFuncionarios, telefone, cep, cidade, estado } = this.state;
        return (
            <Container className="my-5">
                <h1>Cadastro</h1>
                <p>Preencha o formulário abaixo para a realização do cadastro</p>
                <Row>
                    <Col lg={true}>
                        <Form onSubmit={this.handleSubmit}>
                            <div>
                                <FormLabel htmlFor="nome">Nome da Empresa:</FormLabel>
                                <FormControl type="text" name="nome" id="nome" value={nome} onChange={this.handleChange} maxlength="30" required />
                            </div>
                            <div>
                                <FormLabel htmlFor="cnpj">Cnpj:</FormLabel>
                                <FormControl type="text" name="cnpj" value={cnpj} onChange={this.handleChange} pattern="(\d{3}\.?\d{3}\.?\d{3}-?\d{2})|(\d{2}\.?\d{3}\.?\d{3}/?\d{4}-?\d{2})" title="Digite seu CNPJ no formato 'XXXXXXXXXXX'" required />
                            </div>
                            <div>
                                <FormLabel htmlFor="email">Email do responsável:</FormLabel>
                                <FormControl type="email" name="email" value={email} onChange={this.handleChange} />
                            </div>
                            <div>
                                <FormLabel htmlFor="site">Site:</FormLabel>
                                <FormControl type="text" name="site" value={site} onChange={this.handleChange} />
                            </div>
                            <div>
                                <FormLabel htmlFor="numeroFuncionarios">Número de funcionários:</FormLabel>
                                <FormControl type="number" name="numeroFuncionarios" value={numeroFuncionarios} onChange={this.handleChange} />
                            </div>
                            <div>
                                <FormLabel htmlFor="telefone">Telefone:</FormLabel>
                                <FormControl type="text" name="telefone" value={telefone} onChange={this.handleChange} pattern="^[1-9]{2}[0-9]{4,5}[0-9]{4}$"
                                    required title="Telefone deve ser no formato '11999999999'" />
                            </div>
                        </Form>
                    </Col>
                    <Col lg={true}>
                        <Form>
                            <div>
                                <FormLabel htmlFor="cep">CEP: </FormLabel>
                                <FormControl type="text" name="cep" value={cep} onChange={this.handleChange} required pattern="\d{5}-?\d{3}" />
                            </div>
                            <div>
                                <FormLabel htmlFor="cidade">Cidade: </FormLabel>
                                <FormControl type="text" name="cidade" value={cidade} onChange={this.handleChange} required />
                            </div>
                            <div>
                                <FormLabel htmlFor="estado">Estado: </FormLabel>
                                <FormSelect name="estado" onChange={this.handleChange} value={estado} required>
                                    <option disabled selected value="">Escolha uma opção:</option>
                                    <option value="AC">Acre</option>
                                    <option value="AL">Alagoas</option>
                                    <option value="AP">Amapá</option>
                                    <option value="AM">Amazonas</option>
                                    <option value="BA">Bahia</option>
                                    <option value="CE">Ceará</option>
                                    <option value="DF">Distrito Federal</option>
                                    <option value="ES">Espírito Santo</option>
                                    <option value="GO">Goiás</option>
                                    <option value="MA">Maranhão</option>
                                    <option value="MT">Mato Grosso</option>
                                    <option value="MS">Mato Grosso do Sul</option>
                                    <option value="MG">Minas Gerais</option>
                                    <option value="PA">Pará</option>
                                    <option value="PB">Paraíba</option>
                                    <option value="PR">Paraná</option>
                                    <option value="PE">Pernambuco</option>
                                    <option value="PI">Piauí</option>
                                    <option value="RJ">Rio de Janeiro</option>
                                    <option value="RN">Rio Grande do Norte</option>
                                    <option value="RS">Rio Grande do Sul</option>
                                    <option value="RO">Rondônia</option>
                                    <option value="RR">Roraima</option>
                                    <option value="SC">Santa Catarina</option>
                                    <option value="SP">São Paulo</option>
                                    <option value="SE">Sergipe</option>
                                    <option value="TO">Tocantins</option>
                                </FormSelect>
                            </div>
                            <FormGroup>
                                <Button className="my-4" type="submit">Cadastrar</Button>
                            </FormGroup>
                        </Form>
                    </Col>
                    <Col lg={7} className="d-flex justify-content-center align-items-center">
                        <img className="menino" src={Menino} alt="menino e mapa" ></img>
                    </Col>
                </Row>
            </Container >
        )
    }
}
export default RegistroPJ