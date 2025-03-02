import styled from 'styled-components';

interface ReutilizavelTituloH2Props {
  $larguraFonte?: string;
  $tamanhoFonte?: string;
  $corFonte?: string;
}

export const ReutilizavelTituloH2 = styled.h2<ReutilizavelTituloH2Props>`
  font-family: "Montserrat", serif;
  font-optical-sizing: auto;
  font-weight: ${props => props.$larguraFonte || '800'};
  font-size: ${props => props.$tamanhoFonte || '24px'};
  color: ${props => props.$corFonte || '#8ED9ED'}
`

interface ReutilizavelParagrafoProps {
  $larguraFonte?: string;
  $tamanhoFonte?: string;
  $corFonte?: string;
}

export const ReutilizavelParagrafo = styled.p<ReutilizavelParagrafoProps>`
  font-family: "Inter", sans-serif;
  font-optical-sizing: auto;
  font-weight: ${props => props.$larguraFonte || '400'};
  line-height: 30px;
  font-size: ${props => props.$tamanhoFonte || '20px'};
  color: ${props => props.$corFonte || '#8ED9ED'};
`