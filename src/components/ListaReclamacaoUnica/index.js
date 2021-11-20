import React, { Component } from 'react';
import axios from 'axios'
import { Card, Alert, Row, Col } from 'react-bootstrap';


class ListaReclamacaoUnica extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: '',
            categoria: '',
            obs: '',
            data: ''
        }
    }



    componentDidMount() {
        axios.get('http://localhost:8080/api/reclamacoes/6')
            .then(response => {
                this.setState({
                    id: response.data.id,
                    categoria: response.data.categoria,
                    obs: response.data.obs,
                    data: response.data.data
                })
            })
    }
    render() {
        const { id, categoria, obs, data } = this.state
        return (
            <div className="cardReclamacoes p-3" style={{ overflow: "auto" }}>
                {
                    <Card className="mb-4 w-100 text-center" key={id}>
                        <Row className="justify-content-center">
                            <Col>
                                <div>
                                    <h6>{categoria}</h6>
                                    <p>{data}</p>
                                </div>
                            </Col>
                            <p>{obs}</p>
                            <Alert style={{ width: '30vw' }} variant="success">Em andamento</Alert>
                        </Row>
                    </Card>
                }
            </div>
        )
    }
}

export default ListaReclamacaoUnica