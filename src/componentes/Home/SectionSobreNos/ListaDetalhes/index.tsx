import styled from "styled-components";

const DetalhesUl = styled.ul`
    display: flex;
    gap: 4rem;
    justify-content: center;
`

const ListaItens = styled.li`
    width: 19.5rem;

    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 1rem;

    h3 {
        font-family: "Montserrat", serif;
        font-weight: 700;
        font-size: 48px;
        color: #161C2D;
    }

    p {
        font-family: "Montserrat", serif;
        font-weight: 400;
        font-size: 19px;
        color: #161C2D;
        line-height: 32px;
    }
`

function ListaDetalhes() {
    return(
        <DetalhesUl>
            <ListaItens>
                <h3>1.500+</h3>
                <p>De novos usuários todo mês.</p>
            </ListaItens>

            <ListaItens>
                <h3>92%</h3>
                <p>A taxa de satisfação vem dos nossos incríveis clientes.</p>
            </ListaItens>

            <ListaItens>
                <h3>4.9/5.0</h3>
                <p>Classificações médias dos clientes que recebemos em toda a internet.</p>
            </ListaItens>
        </DetalhesUl>
    )
}

export default ListaDetalhes;