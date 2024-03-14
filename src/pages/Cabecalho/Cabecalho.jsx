import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import profileImage from '../../assets/perfil.jpg';
import '../Cabecalho/Cabecalho.Module.css'
import SeletorLinguagem from '../SeletorLinguagem/SeletorLinguagem'

export default function Cabecalho() {
    return (
        <Row className='cabecalho'>
            <Col className='colCabecalho'>
                <img src={profileImage} className='profileImage' />
            </Col>
            <Col className='colCabecalho cabNome'>
                <h1 className='nome'>João Simão</h1>
            </Col>
            <Col className='colCabecalho'>
                {/* <Menu /> */}
                <SeletorLinguagem/>
            </Col>
        </Row>
    )
}