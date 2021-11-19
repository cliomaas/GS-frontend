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
        }
    }

    handleChange = (e) => {
        console.log(this.state)
        this.setState({
            [e.target.name]: e.target.value
        })
    }



    handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8080/api/reclamacoes', this.state)
            .then(response => {
                alert('Reclamação submetida com sucesso!')
            })

    }

    render() {
        const { categoria, data, cep, obs } = this.state;
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
                                    <option value="Construcao">Contrução irregular</option>
                                    <option value="Poluicao">Poluição</option>
                                    <option value="Energia">Energia Elétrica</option>
                                    <option value="Perigo">Perigo</option>
                                </FormSelect>
                            </div>
                            <FormLabel htmlFor="data" >Data do fato informado: </FormLabel>
                            <FormControl type="date" name="data" id="data" value={data} onChange={this.handleChange} required />

                            <FormLabel htmlFor="cep">CEP onde o fato ocorreu: </FormLabel>
                            <FormControl type="text" name="cep" value={cep} onChange={this.handleChange} pattern="\d{5}-?\d{3}" required />

                            <FormLabel htmlFor="email">Observações sobre o fato informado: </FormLabel>
                            <FormControl type="text" name="obs" value={obs} onChange={this.handleChange} />
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