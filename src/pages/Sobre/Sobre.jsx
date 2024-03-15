import { Col, Row } from "react-bootstrap";
import '../Sobre/Sobre.Module.css'
import '../../i18nify'
import { useTranslation } from "react-i18next";

export default function Sobre() {
    const {t} = useTranslation();
    return (
        <Row>
            <Col className="colSobre">
                <p className="sobre">
                {t("sobreMim.sobre")}
                </p>
            </Col>
        </Row>
    )
}