import { Col, Row } from "react-bootstrap";
import '../Sobre/Sobre.Module.css'

export default function Sobre() {
    return (
        <Row>
            <Col className="colSobre">
                <p className="sobre">Olá, Meu nome é João Vitor !
                    Sou extremamente apaixonado pela área de tecnologia, principalmente programação!
                    Tive meu primeiro contato com o desenvolvimento aos 17 anos e desde então sigo em
                    busca de melhorar a cada dia ! Além de programação, tenho um bom conhecimento de
                    manutenção de computadores e redes.
                </p>
            </Col>
        </Row>
    )
}