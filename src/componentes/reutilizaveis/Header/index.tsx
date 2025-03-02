import styled from 'styled-components';
import NavegacaoHeader from './Nav';
import { ReutilizavelTituloH2 } from '../Texto';
import { Link } from 'react-router-dom';

const HeaderPadrao = styled.header`
    background-color: #454545;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1.7rem 5rem;
`

function Header() {
    return (
        <HeaderPadrao>
            <Link to='/'>
                <ReutilizavelTituloH2
                larguraFonte='800'
                tamanhoFonte='24px'
                corFonte='#8ED9ED'
            >
                PETHOP.</ReutilizavelTituloH2>
            </Link>
            <NavegacaoHeader />
        </HeaderPadrao>
    );
}

export default Header;
