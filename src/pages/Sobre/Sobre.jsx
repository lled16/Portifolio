import { Col, Row } from "react-bootstrap";
import '../Sobre/Sobre.Module.css'

export default function Sobre() {
    return (
        <Row>
            <Col className="colSobre">
                <p className="sobre">Olá, Meu nome é João Vitor !
                    Sou extremamente apaixonado pela área de tecnologia, principalmente programação!
                    Iniciei meus estudos em 2015, onde através de um curso realizado na unidade do SENAI, obtive conhecimentos
                    de manutenção de redes e computadores.
                    Tive meu primeiro contato com o desenvolvimento em 2017 aos 17 anos, onde passei por linguagens como 
                    <b> JAVA</b> e <b>PHP</b>, mas em 2022 tive meus primeiros contatos com <b>C#</b> e desde então sigo em
                    busca de melhorar a cada dia ! Atualmente, além do <b>Backend</b> e <b>Banco de dados </b>
                    estou estudando <b>Frontend </b> utilizando <b>ReactJS</b> e esta página foi construída no intuido de praticar um pouco.
                    Confira abaixo algumas das tecnologias que já trabalhei e trabalho.
                </p>
            </Col>
        </Row>
    )
}