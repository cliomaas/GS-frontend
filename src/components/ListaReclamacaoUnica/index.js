import React, { Component } from 'react';
import axios from 'axios'
import { Card, Alert } from 'react-bootstrap';


class ListaReclamacaoUnica extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: '',
            categoria: '',
            obs: ''
        }
    }



    componentDidMount() {
        axios.get('http://localhost:8080/api/reclamacoes/6')
            .then(response => {
                this.setState({
                    id: response.data.id,
                    categoria: response.data.categoria,
                    obs: response.data.obs
                })
            })
    }
    render() {
        const { id, categoria, obs } = this.state
        return (
            <div className="cardReclamacoes p-3" style={{ overflow: "auto" }}>
                {
                    <Card className="mb-4 w-100 text-center" key={id}>
                        <div>
                            <h6>{categoria}</h6>
                        </div>
                        <p>{obs}</p>
                        <Alert variant="success">Em andamento</Alert>
                    </Card>
                }
            </div>
        )
    }
}

export default ListaReclamacaoUnica