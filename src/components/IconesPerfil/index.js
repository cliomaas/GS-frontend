import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import FotoPerfil from "../../assets/img/foto perfil.svg"




export default function IconesPerfil() {
    let nomeum = localStorage.username;
    let nome = nomeum.substring(0, nomeum.indexOf('@'))
    return (
        <Card className="card-dashboard p-4 justify-content-around">
            <div className="d-flex flex-column align-items-center">
                <img src={FotoPerfil} alt="foto de perfil"></img>
                <p style={{ color: 'black' }}>Bem vindo, {nome}</p>
            </div>
            <div className="d-flex align-items-center">
                <i className="fas fa-eye mb-3"></i>
                <p className="icones-dashboard">Visão Geral</p>
            </div>
            <div className="d-flex align-items-center">
                <i className="fas fa-book-open mb-3"></i>
                <p className="icones-dashboard">Minhas Reclamações</p>
            </div>
            <div className="d-flex align-items-center">
                <i className="fas fa-camera mb-3"></i>
                <p className="icones-dashboard">Registrar Reclamação</p>
            </div>
            <div className="d-flex align-items-center">
                <i class="fas fa-arrow-left mb-0"></i>
                <Button variant="light" as={Link} to="/" className="icones-dashboard">Sair</Button>
            </div>
        </Card>
    );
}