import { Col, Row } from "react-bootstrap";
import '../Tecnologias/Tecnologias.Module.css'
import bootstrapLogo from '../../assets/icons/bootstrap.svg';
import csharpLogo from '../../assets/icons/csharp.svg';
import dockerLogo from '../../assets/icons/docker.svg';
import dotnetLogo from '../../assets/icons/dotnet.svg';
import reactjsLogo from '../../assets/icons/reactjs.svg';
import mysqlLogo from '../../assets/icons/mysql.svg';
import javascriptLogo from '../../assets/icons/javascript.svg';
import rabbitmqLogo from '../../assets/icons/rabbitmq.svg';
import oracleLogo from '../../assets/icons/oracle.svg';

export default function Tecnologias() {
    return (
        <>
            <Row>
                <Col className="tituloTecnologias">
                    <h1 className="tecnologiasTitulo">TECNOLOGIAS</h1>
                </Col>
            </Row>
            <Row>
                <Col className="colImagensTecnologias">
                    <div className="icon-field">
                        <img className="logosTecnologias" src={reactjsLogo} />
                        <p className="nomeTecnologia">React</p>
                    </div>
                    <div className="icon-field">
                        <img className="logosTecnologias" src={csharpLogo} />
                        <p className="nomeTecnologia">C#</p>
                    </div>
                    <div className="icon-field">
                        <img className="logosTecnologias" src={bootstrapLogo} />
                        <p className="nomeTecnologia">Bootstrap</p>
                    </div>
                    <div className="icon-field">
                        <img className="logosTecnologias" src={rabbitmqLogo} />
                        <p className="nomeTecnologia">RabbitMQ</p>
                    </div>
                    <div className="icon-field">
                        <img className="logosTecnologias" src={dotnetLogo} />
                        <p className="nomeTecnologia">.NET</p>
                    </div>
                    <div className="icon-field">
                        <img className="logosTecnologias" src={mysqlLogo} />
                        <p className="nomeTecnologia">MySQL</p>
                    </div>
                    <div className="icon-field">
                        <img className="logosTecnologias" src={dockerLogo} />
                        <p className="nomeTecnologia">Docker</p>
                    </div>
                    <div className="icon-field">
                        <img className="logosTecnologias" src={oracleLogo} />
                        <p className="nomeTecnologia">PLSQL</p>
                    </div>
                    <div className="icon-field">
                        <img className="logosTecnologias" src={javascriptLogo} />
                        <p className="nomeTecnologia">JavaScript</p>
                    </div>
                </Col>
            </Row >
        </>
    )
}