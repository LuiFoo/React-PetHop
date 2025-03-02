import styled from 'styled-components';
import ImagemSthefanie from '../../../../assets/sthefanieImagem.svg'
import { ReutilizavelTituloH2 } from '../../../reutilizaveis/Texto';

const FeedBackDiv = styled.div`
    display: flex;
    gap: 1rem;
    flex-direction: column;
    align-items: center;
`

const ArticleFeedBackStyled = styled.article`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #2B7799;
    padding: 8rem 0 6rem 0;
    gap: 3rem;
`

const FigureUsuario = styled.figure`
    font-family: "Montserrat", serif;   
    font-weight: 400;
    text-align: center;
    color: #FFFFFF;
    font-size: 15px;

    figcaption {
        margin-top: 10px; /* Ajuste o valor conforme necessário */
        font-weight: 700;
        font-size: 17px;
    }
    
    p {
        margin-top: 5px;
    }
`

const ParagrafoLista = styled.p`
    line-height: 44px;
    font-family: "Montserrat", serif;
    text-align: center;
    font-optical-sizing: auto;
    font-weight: 700;
    font-size: 30px;
    color: #FFFFFF;
    width: 65vw;
`

function ArticleFeedBack() {
    return (
        <ArticleFeedBackStyled>
            <FeedBackDiv>

                <ReutilizavelTituloH2
                $larguraFonte='700'
                $tamanhoFonte='20px'
                $corFonte='#FEF2EC'
                >
                    Feedback</ReutilizavelTituloH2>

                <ParagrafoLista>"A PetHop superou minhas expectativas! Usei o serviço para levar meu gato Felix ao veterinário e foi excelente. Adorei acompanhar o trajeto pelo app. Recomendo a todos os donos de pets!"</ParagrafoLista>
            </FeedBackDiv>
            <FigureUsuario>
                <img src={ImagemSthefanie} alt="Foto do usuário" />
                <figcaption>Stephanie</figcaption>
                <p>Estudante de Direito</p>
            </FigureUsuario>
        </ArticleFeedBackStyled>
    )
}

export default ArticleFeedBack;