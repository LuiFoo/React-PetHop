import styled from "styled-components";

const SectionStyled = styled.section`
    display: flex;
    justify-content: center;
    margin: 4rem 0 7rem 0;
    gap: 8rem;

`

const ArticleStyled = styled.article`
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
    width: 340px;

    h4 {
        font-family: "Montserrat", sans-serif;
        font-weight: 700;
        font-size: 21px;
        color: #BCEB6B;
    }

    p {
        font-family: "Montserrat", sans-serif;
        font-weight: 400;
        font-size: 17px;
        color: #454545;
        line-height: 29px;
    }
`

function SectionComoFunciona() {
    return(
        <SectionStyled>
            <ArticleStyled>
                <header>
                    <h4>Escolha seu serviço</h4>
                </header>
                <p>Selecione o serviço que você deseja dentre as opções do filtro. Exemplo: Transporte de pet, Consulta veterinária, etc.</p>
            </ArticleStyled>
            <ArticleStyled>
                <header>
                    <h4>Coloque as informações</h4>
                </header>
                <p>Preencha as informações com o endereço do local, origem e destino, caso necessário. E data e horário do agendamento.</p>
            </ArticleStyled>
            <ArticleStyled>
                <header>
                    <h4>Procure o HOP</h4>
                </header>
                <p>Você consegue filtrar o tipo de profissional que deseja e o tipo do seu pedido, para que encontre o HOP que melhor pode atendê-lo!</p>
            </ArticleStyled>
        </SectionStyled>
    )
}

export default SectionComoFunciona;