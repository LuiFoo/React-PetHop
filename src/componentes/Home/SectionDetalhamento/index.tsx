import GatoColo from '../../../assets/GatoColo.png';
import PintinhoColo from '../../../assets/PintinhiMao.png';
import CaoCarro from '../../../assets/CachorroCarro.png';

import styled from "styled-components";
import { LinksBotaoStyled } from '../../reutilizaveis/Links';

const SectionDetaStyled = styled.section`
    display: flex;
    justify-content: center;
    gap: 6.5rem;
    margin: 11.5rem 0 5.5rem 0;
`

const ArticleSecStyled = styled.article`
    width: 45rem;

    p {
        font-family: "Montserrat", serif;
        font-weight: 400;
        font-size: 20px;
        color: #454545;
        line-height: 29px;
        margin: 3rem 0 2rem 0;
    }
`

const ImagemCaoCarro = styled.img`
    margin-left: 2rem;
`

const FigureImagens = styled.figure`
    text-align: center;
`

const TituloDetalhes = styled.h3`
    text-align: center;
    font-family: "Montserrat", serif;
    font-weight: 700;
    font-size: 32px;
    width: 30vw;
    line-height: 48px;
    margin: 0 0 1rem 0;
    color: #FF5652;
`

function SectionDetalhamento() {
    return(
        <SectionDetaStyled>
            <article>
                <TituloDetalhes>Sabemos como é o transporte de pets e temos a solução para você!</TituloDetalhes>
                <figure>
                    <img src={GatoColo} alt="Imagem ilustrativa do transporte de pets" />
                </figure>
            </article>

            <ArticleSecStyled>
                <FigureImagens>
                    <img src={PintinhoColo} alt="Imagem 1 sobre os serviços da PetHop" />
                    <ImagemCaoCarro src={CaoCarro} alt="Imagem 2 sobre os serviços da PetHop" />
                </FigureImagens>
                <p>Na PetHop, não apenas transportamos pets, mas também nos dedicamos a fortalecer os laços entre tutores e seus amados animais de estimação. Nosso objetivo é tornar a cidade um lugar mais feliz e acolhedor para todos. Com serviços cuidadosos e atenciosos, garantimos que cada viagem seja uma experiência agradável e segura para os pets e seus donos.</p>
                <LinksBotaoStyled 
                to=''
                $tamanhoFonte='16px'
                $corFonte='#FEF2EC'
                $corFundo='#FE4B59'
                $fonteLargura='700'
                $padding='0.8rem 3rem'
                >
                    Saiba mais</LinksBotaoStyled>
            </ArticleSecStyled>
        </SectionDetaStyled>
    )
}

export default SectionDetalhamento;