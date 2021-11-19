import React, { Component } from 'react';
import axios from 'axios'
import { Card } from 'react-bootstrap';

class ListaReclamacoesGeral extends Component {
    constructor(props) {
        super(props)

        this.state = {
            posts: []
        }
    }

    componentDidMount() {
        axios.get('http://localhost:8080/api/reclamacoes')
            .then(response => {
                this.setState({
                    posts: response.data
                })
            })
    }
    render() {
        const { posts } = this.state
        return (
            <div className="cardReclamacoes p-3" style={{ overflow: "auto" }}>
                {
                    posts.map(post =>
                        <Card className="mb-4 w-100 text-center " key={post.id}>
                            <h5 className="mb-0">{post.usuario}</h5>
                            <h6>{post.categoria}</h6>
                            <p>{post.obs}</p>
                        </Card>)
                }
            </div>
        )
    }
}

export default ListaReclamacoesGeral