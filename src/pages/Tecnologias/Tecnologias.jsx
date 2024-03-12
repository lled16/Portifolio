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
                    <img className="logosTecnologias" src={reactjsLogo} />
                    <img className="logosTecnologias" src={csharpLogo} />
                    <img className="logosTecnologias" src={bootstrapLogo} />
                    <img className="logosTecnologias" src={rabbitmqLogo} />
                    <img className="logosTecnologias" src={dotnetLogo} />
                    <img className="logosTecnologias" src={mysqlLogo} />
                    <img className="logosTecnologias" src={dockerLogo} />
                    <img className="logosTecnologias" src={oracleLogo} />
                    <img className="logosTecnologias" src={javascriptLogo} />
                </Col>
            </Row>
        </>
    )
}