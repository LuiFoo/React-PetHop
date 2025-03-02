import styled from 'styled-components';
import imgConhecaMais from '../../../assets/imgConhecaMais.png'
import { ReutilizavelParagrafo, ReutilizavelTituloH2 } from '../../reutilizaveis/Texto';
import { LinksBotaoStyled } from '../../reutilizaveis/Links';

const SectionSobreEmpresa = styled.section`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 5.25rem 5.625rem;
    gap: 9.5rem;
`

const AsideTextBotao = styled.aside`
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
`

const ImgFigure = styled.img`
    height: 25rem;
`


function SectionConhecaMais() {
    return(
        <SectionSobreEmpresa>
            <AsideTextBotao>

                <ReutilizavelTituloH2
                tamanhoFonte = '35px'
                corFonte = '#2B7799'
                larguraFonte = '800'
                >
                    Conheça mais a PETHOP.
                </ReutilizavelTituloH2>

                <ReutilizavelParagrafo
                tamanhoFonte = '22px'
                corFonte = '#454545'
                larguraFonte = '800'
                >
                    Priorizar o bem-estar e o conforto dos animais transportados, assegurando que cada viagem seja feita com cuidado e atenção às necessidades específicas de cada animal.
                </ReutilizavelParagrafo>
                
                <div>
                    <LinksBotaoStyled 
                    to='/'
                    tamanhoFonte = '16px'
                    corFonte = '#FEF2EC'
                    corFundo = '#454545'
                    fonteLargura = '500'
                    >
                        Saiba mais!
                    </LinksBotaoStyled>
                </div>

            </AsideTextBotao>

            <figure>
                <ImgFigure src={imgConhecaMais} alt="" />
            </figure>

    </SectionSobreEmpresa>
    )
}

export default SectionConhecaMais;