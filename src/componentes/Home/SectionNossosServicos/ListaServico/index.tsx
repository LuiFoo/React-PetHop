import ImagemSaibaMais from '../../../../assets/saiba-mais.svg'
import styled from 'styled-components';
import { Link } from 'react-router-dom';

interface ArticleContainerProps {
    $corFundo?: string;
}

const ArticleContainer = styled.article<ArticleContainerProps>`
    display: flex;
    background-color: ${props => props.$corFundo || '#000'};
    border-radius: 10px;
    flex-direction: column;
    padding: 3.75rem 3.37rem 2rem 3.37rem;
    align-items: center;
    justify-content: center;
    gap: 20px;
`;

const ArticleLisItem = styled.li`
    display: flex;
    width: 20vw;
`;


const TituloLista = styled.h3`
    font-family: "Montserrat", serif;
    font-optical-sizing: auto;
    font-weight: 700;
    font-size: 24px;
    color: #FFFFFF;
`

const ParagrafoLista = styled.h3`
    font-family: "Montserrat", serif;
    font-optical-sizing: auto;
    font-weight: 400;
    font-size: 17px;
    color: #FFFFFF;
    text-align: center;
    margin: 1rem 0 2.7rem 0;
`

interface ListaServicoProps {
    coresFundo: string;
    imagem: string;
    titulo: string;
    paragrafo: string;
    url: string;
}

function ListaServico({ coresFundo, imagem, titulo, paragrafo, url }: ListaServicoProps) {
    return (
        <ArticleLisItem>
            <ArticleContainer
            $corFundo={coresFundo}
            >
                <figure>
                    <img src={imagem} alt="Ícone representando Graphic Design" />
                </figure>
                <TituloLista>{titulo}</TituloLista>
                <ParagrafoLista>{paragrafo}</ParagrafoLista>
                <Link to={url}>
                    <img src={ImagemSaibaMais} alt="Ícone Saiba Mais" />
                </Link>
            </ArticleContainer>
        </ArticleLisItem>
    );
}

export default ListaServico;
