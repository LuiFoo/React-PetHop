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
            <LinksStyled
            to='/chame-um-hop'
            $tamanhoFonte=''
            $corFonte=''
            $fonteLargura=''
            >
                Chame um HOP</LinksStyled>
                
            <LinksStyled
            to='/'
            $tamanhoFonte=''
            $corFonte=''
            $fonteLargura=''
            >
                Seja um HOP</LinksStyled>

            <LinksStyled
            to='/'
            $tamanhoFonte=''
            $corFonte=''
            $fonteLargura=''
            >
                
                Sobre nós</LinksStyled>

            <LinksStyled
            to='/'
            $tamanhoFonte=''
            $corFonte=''
            $fonteLargura=''
            >
            
                Serviços</LinksStyled>

            <LinksStyled
            to='/'
            $tamanhoFonte=''
            $corFonte=''
            $fonteLargura=''
            >
                FAQ</LinksStyled>

            <LinksBotaoStyled
            to='/'
            $tamanhoFonte=''
            $corFonte=''
            $corFundo=''
            $fonteLargura=''
            $padding=''
            >
                Entre / Cadastre-se</LinksBotaoStyled>

        </NavegacaoLinks>
    )
}

export default NavegacaoHeader;