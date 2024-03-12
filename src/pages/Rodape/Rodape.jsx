import { Col, Row } from "react-bootstrap";
import '../Rodape/Rodape.Module.css'
import gmail from '../../assets/icons/gmail.svg';
import linkedin from '../../assets/icons/linkedin.svg';
import github from '../../assets/icons/github.svg';
import whatsapp from '../../assets/icons/whatsapp.svg';

export default function Rodape() {
    return (
        <Row className="rodape">
            <Col>
                <a href="https://criarmeulink.com.br/u/1710277022" target="_blank"><img className="logosContato" src={gmail} /></a>
                <a href="https://www.linkedin.com/in/joao-sim%C3%A3o/" target="_blank"><img className="logosContato" src={linkedin} /></a>
                <a href="https://github.com/lled16" target="_blank"><img className="logosContato" src={github} /></a>
                <a href="https://api.whatsapp.com/send?phone=5531993846152&text=Ol%C3%A1,%20%0A%0AVi%20seu%20portif%C3%B3lio%20e%20gostaria%20de%20bater%20um%20papo%20!%20" target="_blank"><img className="logosContato" src={whatsapp} /></a>

            </Col>
        </Row>
    )
}