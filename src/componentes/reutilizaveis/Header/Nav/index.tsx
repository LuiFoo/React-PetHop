import styled from "styled-components";
import { LinksBotaoStyled, LinksStyled } from "../../Links";

const NavegacaoLinks = styled.nav`
    display: flex;
    align-items: center;
    gap: 3rem
`

function NavegacaoHeader() {
    return (
        <NavegacaoLinks>
            <LinksStyled to='/chame-um-hop'>Chame um HOP</LinksStyled>
            <LinksStyled to='/'>Seja um HOP</LinksStyled>
            <LinksStyled to='/'>Sobre nós</LinksStyled>
            <LinksStyled to='/'>Serviços</LinksStyled>
            <LinksStyled to='/'>FAQ</LinksStyled>

            <LinksBotaoStyled to='/'>Entre / Cadastre-se</LinksBotaoStyled>

        </NavegacaoLinks>
    )
}

export default NavegacaoHeader;