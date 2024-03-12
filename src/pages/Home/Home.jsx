import "./Home.Module.css"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import Cabecalho from '../Cabecalho/Cabecalho'
import Sobre from '../Sobre/Sobre'
import Tecnologias from "../Tecnologias/Tecnologias";
import Timeline from "../Timeline/Timeline";
import Rodape from "../Rodape/Rodape";

export default function Home() {
    return (
        <Container className='principalContainer'>

            <Cabecalho />

            <Row className='linhaTitulo'>
                <Col className='colCabecalho'>
                    <h1 className='titulo'>
                        Desenvolvedor FullStack C# .NET • React
                    </h1>
                </Col>
            </Row>

            <Sobre />

            <Tecnologias />

            <Timeline />

            <Rodape />
        </Container>
    )
}