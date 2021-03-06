import React, { Component } from "react";
import axios from "axios";
import { Form, FormControl, FormLabel, Button, Container, Table } from "react-bootstrap";
import withRouter from "../../HOC";

class ListaReclamacoes extends Component {

    constructor(props) {
        super(props);

        this.myRef = React.createRef();
        this.state = {
            posts: [],
        }

        this.deletarReclamacao = this.deletarReclamacao.bind(this);
        this.editReclamacao = this.editReclamacao.bind(this);
    }



    editReclamacao(id) {
        this.props.navigate(`/alterar/`);
    }

    deletar(idrecl) {
        return axios.post("http://localhost:8080/api/reclamacoes/" + idrecl)
    }

    deletarReclamacao(id) {
        this.deletar(id).then(
            response => {
                this.setState({ posts: this.state.posts.filter(post => post.id !== id) });
            }
        );
    }

    handleClick = () => {

    }

    handleSubmit = () => {
        this.componentDidMount();
    }

    componentDidMount() {
        let cep = this.myRef.current.value;
        let url = 'http://localhost:8080/api/' + cep + '/reclamacoes';
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
                <Container className="containerLista">
                    <div>
                        <Form>
                            <FormLabel htmlFor="cep">Filtre as reclamações por CEP:</FormLabel>
                            <FormControl type="number" id="cep" name="cep" ref={this.myRef} />
                            <Button className="my-2" onClick={this.handleSubmit}>Buscar</Button>
                        </Form>
                    </div>
                    <div className="table-responsive">
                        <Table responsive hover>
                            <thead>
                                <tr>
                                    <th>Id</th>
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
                                        <td>{post.id}</td>
                                        <td>{post.data}</td>
                                        <td>{post.categoria}</td>
                                        <td>{post.cep}</td>
                                        <td>{post.obs}</td>
                                        <td><Button onClick={() => this.deletarReclamacao(post.id)}>Deletar</Button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    </div>
                </Container>
            </>
        )
    }
}

ListaReclamacoes = withRouter(ListaReclamacoes)
export default ListaReclamacoes;