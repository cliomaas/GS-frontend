import React, { Component } from "react";
import axios from "axios";
import { Container, Form, FormControl, FormGroup, FormLabel, FormSelect, Button, Row } from "react-bootstrap";
class Reclamacao extends Component {
    constructor(props) {
        super(props);

        this.state = {
            categoria: '',
            data: '',
            cep: '',
            obs: '',
            usuario: { usuario_id: '' }
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8080/api/reclamacoes', this.state)
            .then(response => {
                console.log(response)
            })
    }

    render() {
        const { categoria, data, cep, obs, usuario_id } = this.state;
        return (
            <Container className="my-5">
                <Row>
                    <Form onSubmit={this.handleSubmit}>
                        <h1>Cadastro de nova reclamacao</h1>
                        <p>Preencha o formulário abaixo para a realização de nova reclamação</p>
                        <FormGroup>
                            <div>
                                <FormLabel htmlFor="categoria">Em qual categoria sua reclamação se encaixa melhor? </FormLabel>
                                <FormSelect name="categoria" onChange={this.handleChange} value={categoria} required>
                                    <option disabled selected value="">Escolha uma opção:</option>
                                    <option value="feminino">Contrução irregular</option>
                                    <option value="masculino">Poluição</option>
                                    <option value="outro">Energia Elétrica</option>
                                    <option value="naoinformado">Perigo</option>
                                </FormSelect>
                            </div>
                            <FormLabel htmlFor="data" >Data do fato informado: </FormLabel>
                            <FormControl type="date" name="data" id="data" value={data} onChange={this.handleChange} required />

                            <FormLabel htmlFor="cep">CEP onde o fato ocorreu: </FormLabel>
                            <FormControl type="text" name="cep" value={cep} onChange={this.handleChange} pattern="\d{5}-?\d{3}" required />

                            <FormLabel htmlFor="email">Observações sobre o fato informado: </FormLabel>
                            <FormControl type="text" name="obs" value={obs} onChange={this.handleChange} />

                            <FormLabel htmlFor="usuario_id">A qual id pertence a reclamação? </FormLabel>
                            <FormControl type="text" name="usuario_id" value={usuario_id} onChange={this.handleChange} />
                        </FormGroup>
                        <FormGroup>
                            <Button className="my-4" type="submit">Cadastrar</Button>
                        </FormGroup>
                    </Form>
                </Row>
            </Container >
        )
    }
}

export default Reclamacao