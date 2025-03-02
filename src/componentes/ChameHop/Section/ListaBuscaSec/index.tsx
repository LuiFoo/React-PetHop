import styled from "styled-components";
import ItensNaLista from "./items";

const ListaStyled = styled.ul`
    display: flex;
    gap: 1vw; /* Espaçamento entre os itens */
    justify-content: center; /* Centraliza o grid */
`

function ListaDetalhesSec() {
    return (
        <ListaStyled>
            <ItensNaLista />
            <ItensNaLista />
            <ItensNaLista />
            <ItensNaLista />
        </ListaStyled>
    )
}

export default ListaDetalhesSec;