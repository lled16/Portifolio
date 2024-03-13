import { Chrono } from "react-chrono";
import { Col, Row } from "react-bootstrap";
import '../Timeline/Timeline.Module.css'


const items =
    [
        {
            title: "DEZ 2022 - ATUAL",
            cardTitle: "BRUNSKER",
            cardSubtitle: "Desenvolvedor .NET",
            cardDetailedText: <p>
                Desenvolvedor Backend .NET

                - Principal responsável por manter, documentar e implementar novas funcionalidades em alguns dos principais projetos, envolvendo manipulação de notas fiscais juntamente ao webservice da Sefaz via requisições SOAP. <br />
                - Principal responsável pelo versionamento/deploy de aplicações em Docker <br />
                - Desenvolvimento de APIs REST <br />
                - Desenvolvimento de Integrações .Net <br />
                - Criação, edição e utilização de procedures utilizando PLSQL - Oracle <br />
                - Correções e aprimoramentos em diversos projetos utilizando C# / .Net <br />
                - Code Review <br />
                - Azure DevOps <br />
                - DataDog para gravação e visualização de logs <br />
                - RabbitMQ <br />
            </p>,
        },
        {
            title: "DEZ 2022 - PAUSADO",
            cardTitle: "AMPLI - PITÁGORAS",
            cardSubtitle: "Análise e Desenvolvimento de Sistemas",
            cardDetailedText: <p>
                Estudando Análise e Desenvolvimento de Sistemas na Ampli.
            </p>,
        },
        {
            title: "MAI 2022 - DEZ 2022",
            cardTitle: "Capys IT Solutions",
            cardSubtitle: "Desenvolvedor Full Stack",
            cardDetailedText: <p>Desenvolvedor C#, .NET, Angular, Ionic. <br />

                - Correções de bugs e aprimoramentos de back-end em C# .NET<br />
                - Correções de bugs e melhorias no frontend em Angular<br />
                - Responsável pelo versionamento e deploy de aplicativos IOS e Android nas respectivas lojas<br />
                - Correções e aprimoramentos para aplicativos Ionic<br />
                - Banco: MySQL<br />
                - Instalação de WebServices<br />
                - Criação de contas Whatsapp: TwilioDesenvolvedor C#, .NET, Angular, Ionic. <br />

                - Correções de bugs e aprimoramentos de back-end em C# .NET<br />
                - Correções de bugs e melhorias no frontend em Angular<br />
                - Responsável pelo versionamento e deploy de aplicativos IOS e Android nas respectivas lojas<br />
                - Correções e aprimoramentos para aplicativos Ionic<br />
                - Banco: MySQL<br />
                - Instalação de WebServices<br />
                - Criação de contas Whatsapp: Twilio</p>,
        },
        {
            title: "OUT 2021 - ABR 2022",
            cardTitle: "Capys IT Solutions",
            cardSubtitle: "Analista de suporte técnico",
            cardDetailedText: <p>
                - Analisar solicitações de clientes <br />
                - Realizar a abertura de chamados de acordo com as regras de negócio <br />
                - Testes sistêmicos e correções no suporte nível 1 <br />
                - Consultas SQL <br />
                - Instruir o cliente no uso da ferramenta.
            </p>,
        },
        {
            title: "JAN 2017 - OUT 2018",
            cardTitle: "SENAI - CETEM",
            cardSubtitle: "Técnico em informática",
            cardDetailedText: <p>
                - Manutenção de Computadores <br />
                - Desenvolvimento WEB (Java, JS, PHP, Bootstrap, Materialize, HTML 5 e CSS3) <br />
                - Desenvolvimento Mobile (Java) <br />
                - Desenvolvimento Desktop (Java) <br />
                - Programação Orientada a Objetos <br />
                - Documentação <br />
            </p>,
        },

    ];

export default function Timeline() {
    return (
        <>
            <Row>
                <Col className="linhaExp">
                    <h1 className="experiencias">EXPERIÊNCIAS</h1>
                    <h1 className="experiencias traco"> & </h1>
                    <h1 className="experiencias">FORMAÇÕES</h1>
                </Col>
            </Row>
            <Row className="linhaTime">
                <Col>
                    <Chrono items={items} disableToolbar="false" useReadMore="false" className="cards" mode="VERTICAL_ALTERNATING" theme={{
                        primary: 'yellow',
                        secondary: 'white',
                        cardBgColor: 'white',
                        titleColor: 'white',
                        titleColorActive: 'black',
                        cardTitle: 'black'
                    }} />
                </Col>
            </Row>
        </>
    )
}