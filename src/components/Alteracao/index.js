import React, { Component } from "react";
import axios from "axios";
import { FormLabel, FormControl, FormSelect, Form, Button, Container, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import withRouter from "../../HOC";

class AlteraReclamacao extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: '',
            categoria: '',
            data: '',
            obs: '',
            cep: ''
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        axios.put('http://localhost:8080/api/reclamacoes', this.state)
            .then(response => {
                console.log(response)
            })
    }

    render() {
        const { id, categoria, obs, cep, data } = this.state
        return (
            <div>
                <Container >
                    <div className="row">
                        <h3 className="text-center">Atualizar informações da sua reclamação</h3>
                        <Card>
                            <div className="card-body">
                                <Form onSubmit={this.handleSubmit}>
                                    <div className="form-group">
                                        <FormLabel htmlFor="id">Qual o id da reclamação que você deseja alterar?</FormLabel>
                                        <FormControl type="number" name="id" onChange={this.handleChange} value={id} />
                                        <FormLabel htmlFor="data">Quer alterar a data?</FormLabel>
                                        <FormControl type="date" name="data" onChange={this.handleChange} value={data} />
                                        <FormLabel htmlFor="categoria">Categoria: </FormLabel>
                                        <FormSelect name="categoria" onChange={this.handleChange} value={categoria} required>
                                            <option disabled selected value="">Escolha uma opção:</option>
                                            <option value="Construcao">Contrução irregular</option>
                                            <option value="Poluicao">Poluição</option>
                                            <option value="Energia">Energia Elétrica</option>
                                            <option value="Perigo">Perigo</option>
                                        </FormSelect>
                                    </div>
                                    <div className="form-group">
                                        <FormLabel htmlFor="obs"> Observação: </FormLabel>
                                        <FormControl placeholder="Observação" name="obs" className="form-control"
                                            value={obs} onChange={this.handleChange} />
                                    </div>
                                    <div className="form-group">
                                        <FormLabel> CEP: </FormLabel>
                                        <FormControl placeholder="CEP" name="cep" className="form-control"
                                            value={cep} onChange={this.handleChange} />
                                    </div>
                                    <div className="pt-4">

                                        <Button className="btn btn-success" type="submit">Salvar</Button>
                                        <Button as={Link} to="/lista" className="btn btn-danger" style={{ marginLeft: "10px" }}>Cancel</Button>
                                    </div>
                                </Form>
                            </div>
                        </Card>
                    </div>
                </Container>
            </div>
        )
    }
}

AlteraReclamacao = withRouter(AlteraReclamacao)
export default AlteraReclamacao