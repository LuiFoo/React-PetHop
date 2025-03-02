import styled from "styled-components";
import ArticleFeedBack from "./ArticleFeedBack";
import ListaDetalhes from "./ListaDetalhes";

const SectionSobreStyled = styled.section`
    display: flex;
    gap: 5.5rem;
    flex-direction: column;
`

function SectionSobreNos() {
    return (
        <SectionSobreStyled>
            <ArticleFeedBack />
            <ListaDetalhes />
        </SectionSobreStyled>
    )
}

export default SectionSobreNos;