import styled from "styled-components";
import ListaServico from "./ListaServico";
import { ReutilizavelParagrafo, ReutilizavelTituloH2 } from "../../reutilizaveis/Texto";
import ImagemGraphicDesign from '../../../assets/graphic-design.svg';
import ImagemWebDevelopment from '../../../assets/web-development.svg';
import ImagemContentWriting from '../../../assets/content-writing.svg';

const ListaStyled = styled.ul`
    display: flex;
    flex-direction: row;
    gap: 2rem;
    margin-bottom: 7rem;
`;

const SectionServicosStyled = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5rem;
`

const HeaderStyled = styled.header`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    width: 37rem;
    text-align: center;
`

function SectionNossosServicos() {
    return (
        <SectionServicosStyled>
            <HeaderStyled>
                <ReutilizavelTituloH2
                larguraFonte = '700'
                tamanhoFonte = '22px'
                corFonte = '#FE4B59'
                >
                    Nossos Serviços</ReutilizavelTituloH2>

                <ReutilizavelParagrafo
                larguraFonte = '800'
                tamanhoFonte = '30px'
                corFonte = '#454545'
                >
                    Nós oferecemos diversos serviços de acordo com a sua necessidade!</ReutilizavelParagrafo>
            </HeaderStyled>
            
            <ListaStyled>

                <ListaServico
                coresFundo='#BCEB6B'
                imagem={ImagemGraphicDesign}
                titulo='Graphic Design'
                paragrafo='With lots of unique blocks, you can easily build a page without coding. Build your next landing page.'
                url="/a"
                />

                <ListaServico
                coresFundo='#8ED9ED'
                imagem={ImagemWebDevelopment}
                titulo='Web Development'
                paragrafo='With lots of unique blocks, you can easily build a page without coding. Build your next landing page.'
                url="/"
                />

                <ListaServico
                coresFundo='#FE4B59'
                imagem={ImagemContentWriting}
                titulo='Content Writing'
                paragrafo='With lots of unique blocks, you can easily build a page without coding. Build your next landing page.'
                url="/"
                />

            </ListaStyled>

        </SectionServicosStyled>
    );
}

export default SectionNossosServicos;
