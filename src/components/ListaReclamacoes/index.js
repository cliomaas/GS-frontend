import React, { Component } from "react";
import axios from "axios";

class ListaReclamacoes extends Component {

    constructor(props) {
        super(props);

        this.state = {
            posts: []
        }
    }

    componentDidMount() {
        axios.get('http://localhost:8080/api/usuarios/{id}/reclamacoes')
            .then(response => {
                this.setState({
                    posts: response.data
                })
                console.log(response.data)
            })
    }
    componentDidUpdate(prevProps, prevState) {
        if (prevState.posts !== this.state.posts) {
            axios.get('http://localhost:8080/usuarios/{id}/reclamacoes')
                .then(response => {
                    this.setState({
                        posts: response.data
                    })
                })
        }
    }

    render() {
        const { posts } = this.state
        return (
            <>
                <div className="table-responsive">
                    <table className="table table-sm">
                        <thead>
                            <tr>
                                <th>Data</th>
                                <th>Vendedor</th>
                                <th>Clientes visitados</th>
                                <th>Negócios fechados</th>
                                <th>Valor</th>
                            </tr>
                        </thead>
                        <tbody>
                            {posts.map(post => (
                                <tr key={post.id}>
                                    <td>{post.data}</td>
                                    <td>{post.nome}</td>

                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div>
                    <h1>Lista de clientes:</h1>
                    {
                        posts.map(post => <div key={post.codigo}><p>Cliente número <b>{post.codigo}</b>: Nome: <b><span style={{ textTransform: 'capitalize' }}>{post.nome}</span></b> Idade: <b>{post.idade}</b></p></div>)
                    }
                </div>

            </>
        )
    }
}

