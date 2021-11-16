import React, { Component } from "react";
import axios from "axios";

class ListaReclamacoes extends Component {

    constructor(props) {
        super(props);

        this.state = {
            posts: []
        }
    }

    // const randomId = 128398723
    // const url = `/post/${randomId}`;
    // getPost(url)
    // export const getPost = (funcParamURL) => {
    //     return axios.get(`${funcParamURL}`);
    // }
    // const randomId = 128398723
    // const url = `/post/${randomId}`;
    // getPost(url)
    // export const makeRequest = (funcParamURL) => {
    //     const newUrl = funcParamURL;
    //     return axios.get(newUrl);
    // }



    componentDidMount() {
        let id = 2;
        let url = `http://localhost:8080/api/usuarios/${id}/reclamacoes`;

        axios.get(url)
            .then(response => {
                this.setState({
                    posts: response.data
                })
                console.log(response.data)
            })
    }
    componentDidUpdate(prevProps, prevState) {
        let id = 2;
        let url = `http://localhost:8080/api/usuarios/${id}/reclamacoes`;

        if (prevState.posts !== this.state.posts) {
            axios.get(url)
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
                                <th>Categoria</th>
                                <th>CEP</th>
                                <th>Comentário</th>
                            </tr>
                        </thead>
                        <tbody>
                            {posts.map(post => (
                                <tr key={post.id}>
                                    <td>{post.data}</td>
                                    <td>{post.categoria}</td>
                                    <td>{post.cep}</td>
                                    <td>{post.obs}</td>
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