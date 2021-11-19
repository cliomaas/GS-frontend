import { Card, ProgressBar } from "react-bootstrap";
import Estrela from "../../assets/img/estrela.svg"

export default function CardStatusBairro() {
    return (
        <Card className="d-flex align-items-center cardDashboard justify-content-around">
            <Card.Title>Avaliação do bairro</Card.Title>
            <div>
                <div className="d-flex flex-row">
                    <img src={Estrela} alt="estrela de avaliacao"></img>
                    <div className="d-flex flex-column">
                        <h5>Ótimo</h5>
                        <div className="d-flex flex-column">
                            <p className="mb-0"><b>8.0</b> de 10</p>
                            <p className="m-0" style={{ fontSize: '8px' }}>01/06/2021 a 31/12/2021</p>
                        </div>
                    </div>
                </div>
                <div>
                    <div>
                        <p>Reclamações</p>
                        <div className="d-flex align-items-center">
                            <i className="fas fa-fire"></i>
                            <p className="icones-dashboard mb-0">4.600</p>
                        </div>
                    </div>
                </div>
                <div>
                    <p>Solucionadas</p>
                    <div className="d-flex align-items-center">
                        <i className="fas fa-check-square mr-2"></i>
                        <p className="icones-dashboard mb-0">2.123</p>
                    </div>
                </div>
                <div>
                    <p className="mb-0">Resolvidas</p>
                    <ProgressBar className="barra-progresso" animated now={90} />

                </div>
            </div>
        </Card >
    );

}