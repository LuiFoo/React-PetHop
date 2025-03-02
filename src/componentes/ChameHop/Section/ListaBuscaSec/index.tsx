import styled from "styled-components";
import ItensNaLista from "./items";

const ListaStyled = styled.ul`
    display: flex;
    justify-content: center;
    gap: 1.5rem;
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