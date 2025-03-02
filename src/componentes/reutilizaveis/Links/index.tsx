import { Link } from 'react-router-dom';
import styled from 'styled-components';

interface LinkStyledProps {
    tamanhoFonte: string;
    corFonte: string;
    fonteLargura: string;
}

export const LinksStyled = styled(Link)<LinkStyledProps>`
    font-family: "Montserrat", serif;
    font-optical-sizing: auto;
    font-weight: ${props => props.fonteLargura || '700'};
    font-size: ${props => props.tamanhoFonte || '16px'};
    text-decoration: none;
    color: ${props => props.corFonte || '#8ED9ED'};

    &:hover {
        color: #959db6; /* Altere para a cor desejada */
    }
`;

interface LinksBotaoStyledProps {
    tamanhoFonte: string;
    corFonte: string;
    corFundo: string;
    fonteLargura: string;
    padding: string;
}
  

export const LinksBotaoStyled = styled(Link)<LinksBotaoStyledProps>`
    font-family: "Montserrat", serif;
    font-optical-sizing: auto;
    font-weight: ${props => props.fonteLargura || '700'};
    font-size: ${props => props.tamanhoFonte || '12px'};
    text-decoration: none;
    background-color: ${props => props.corFundo || '#8ED9ED'};
    color: ${props => props.corFonte || '#454545'};
    padding: ${props => props.padding || '0.8rem 1.5rem'};
    border-radius: 0.5rem;

    &:hover {
        background-color: #a4b8bb; /* Altere para a cor desejada */
    }
`;