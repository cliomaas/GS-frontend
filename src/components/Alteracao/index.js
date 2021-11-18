import React, { Component } from "react";
import axios from "axios";
import { FormLabel, FormControl, FormSelect } from "react-bootstrap";

class AlteraReclamacao extends Component {


    constructor(props) {
        super(props)

        this.state = {
            id: '10',
            categoria: '',
            obs: '',
            cep: ''
        }
        this.alterarCategoriaHandler = this.alterarCategoriaHandler.bind(this);
        this.alterarObservacaoHandler = this.alterarObservacaoHandler.bind(this);
        this.updateReclamacao = this.updateReclamacao.bind(this);

    }

    getReclamacaoById(idrecl) {
        return axios.get("http://localhost:8080/api/reclamacoes/" + idrecl);
    }

    updateReclamacao(reclamacao, idrecl) {
        return axios.put("http://localhost:8080/api/reclamacao-" + idrecl, reclamacao);
    }
    // step 3
    componentDidMount() {
        this.getReclamacaoById(this.state.id).then((res) => {
            let reclamacao = res.data;
            this.setState({
                categoria: reclamacao.categoria,
                obs: reclamacao.obs,
                cep: reclamacao.cep
            });
        });
    }

    updateReclamacao = (e) => {
        let reclamacao = { categoria: this.state.categoria, obs: this.state.obs, cep: this.state.cep };
        console.log('reclamacao => ' + JSON.stringify(reclamacao));
        this.updateReclamacao(reclamacao, this.state.id).then(res => {
            this.props.history.push('/lista');
        });
    }


    alterarCategoriaHandler = (event) => {
        this.setState({ categoria: event.target.value });
    }

    alterarObservacaoHandler = (event) => {
        this.setState({ obs: event.target.value });
    }

    alterarCepHandler = (event) => {
        this.setState({ cep: event.target.value });
    }

    cancel() {
        this.props.history.push('/');
    }

    render() {
        return (
            <div>
                <br></br>
                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            <h3>Atualizar informações da sua reclamação</h3>
                            <div className="card-body">
                                <form>
                                    <div className="form-group">
                                        <FormLabel htmlFor="categoria">Categoria: </FormLabel>
                                        <FormSelect name="categoria" onChange={this.alterarCategoriaHandler} value={this.state.categoria} required>
                                            <option disabled selected value="">Escolha uma opção:</option>
                                            <option value="ambiental">Ambiental</option>
                                            <option value="eletricidade">Eletricidade</option>
                                            <option value="alerta">Alerta</option>
                                            <option value="construcao">Construção</option>
                                        </FormSelect>
                                    </div>
                                    <div className="form-group">
                                        <FormLabel htmlFor="obs"> Observação: </FormLabel>
                                        <FormControl placeholder="Observação" name="obs" className="form-control"
                                            value={this.state.obs} onChange={this.alterarObservacaoHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label> CEP: </label>
                                        <input placeholder="CEP" name="cep" className="form-control"
                                            value={this.state.cep} onChange={this.alterarCepHandler} />
                                    </div>

                                    <button className="btn btn-success" onClick={this.updateReclamacao}>Save</button>
                                    <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{ marginLeft: "10px" }}>Cancel</button>
                                </form>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default AlteraReclamacao