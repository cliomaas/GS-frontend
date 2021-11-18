import React, { Component } from "react";
import axios from "axios";
import { Form, FormControl, FormLabel, Button } from "react-bootstrap";

class ListaReclamacoes extends Component {

    constructor(props) {
        super(props);

        this.myRef = React.createRef();
        this.state = {
            posts: [],
        }
    }

    // updateId(e) {
    //     this.setState({
    //         id: e.target.value
    //     })
    // }

    handleSubmit = () => {
        this.componentDidMount();
    }

    componentDidMount() {
        let id = this.myRef.current.value;
        let url = 'http://localhost:8080/api/usuarios/' + id + '/reclamacoes';
        axios.get(url)
            .then(response => {
                this.setState({
                    posts: response.data
                })
                console.log(response.data)
            })
    }

    render() {

        const { posts } = this.state
        return (
            <>
                <div>
                    <Form>
                        <FormLabel htmlFor="id">Digite o id do usuário para visualizar as reclamações</FormLabel>
                        <FormControl type="number" id="id" name="id" ref={this.myRef} onBlur={this.handleSubmit} />
                    </Form>
                </div>
                <div className="table-responsive">
                    <table className="table table-sm">
                        <thead>
                            <tr>
                                <th>Data</th>
                                <th>Categoria</th>
                                <th>CEP</th>
                                <th>Comentário</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {posts.map(post => (
                                <tr key={post.id}>
                                    <td>{post.data}</td>
                                    <td>{post.categoria}</td>
                                    <td>{post.cep}</td>
                                    <td>{post.obs}</td>
                                    <td><Button onClick={this.handleClick()}>Deletar</Button></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </>
        )
    }
}

export default ListaReclamacoes;