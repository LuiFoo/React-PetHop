import { Link } from "react-router-dom";
import styled from "styled-components";
import logoHorizontal from '../../../assets/logoHorizontal.svg'
import FooterLink from "./LinkClicaveis";

import ImagemFacebook from '../../../assets/redes/facebook.svg'
import ImagemLinkedin from '../../../assets/redes/linkedin.svg'
import ImagemYoutube from '../../../assets/redes/youtube.svg'
import ImagemInstagram from '../../../assets/redes/instagram.svg'

const FooterStyled = styled.footer`
    display: flex;
    justify-content: space-between;
    background-color: #454545;
    padding: 3rem 5rem;
`

const AsideContainer = styled.aside`
    display: flex;
    gap: 3.5rem;
`
const NavLinks = styled.nav`
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
`

const TituloNav = styled.h3`
    font-family: "Montserrat", serif;
    font-optical-sizing: auto;
    font-weight: '700';
    font-size: '16px';
    text-decoration: none;
    color: #BCEB6B;
`

const ArticleFooter = styled.article`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`

const ArticleDivStyled = styled.div`
    display: flex;
    gap: 0.5rem;
`

function Footer() {
    return (
        <FooterStyled>
            <ArticleFooter>
                <figure>
                    <img src={logoHorizontal} alt="Logo da empresa" />
                </figure>
                <ArticleDivStyled>
                    <Link to='/'>
                        <img src={ImagemFacebook} alt="Ícone Facebook" />
                    </Link>
                    <Link to='/'>
                        <img src={ImagemLinkedin} alt="Ícone Linkedin" />
                    </Link>
                    <Link to='/'>
                        <img src={ImagemYoutube} alt="Ícone Youtube" />
                    </Link>
                    <Link to='/'>
                        <img src={ImagemInstagram} alt="Ícone Instagram" />
                    </Link>
                </ArticleDivStyled>
            </ArticleFooter>

            <AsideContainer>
                <NavLinks>
                    <TituloNav>Sobre nós</TituloNav>
                    <FooterLink
                    texto='História'
                    link='/'
                    />
                    <FooterLink
                    texto='Objetivos'
                    link='/'
                    />
                    <FooterLink
                    texto='Missão, Visão e Valores'
                    link='/'
                    />
                </NavLinks>

                <NavLinks>
                    <TituloNav>Serviços</TituloNav>
                    <FooterLink
                    texto='Diferenciais'
                    link='/'
                    />
                    <FooterLink
                    texto='Transporte'
                    link='/'
                    />
                    <FooterLink
                    texto='Plano Fidelidade'
                    link='/'
                    />

                </NavLinks>

                <NavLinks>
                    <TituloNav>FAQ</TituloNav>

                    <FooterLink
                    texto='Fale Conosco'
                    link='/'
                    />
                    <FooterLink
                    texto='Dúvidas Frequentes'
                    link='/'
                    />

                </NavLinks>
            </AsideContainer>
        </FooterStyled>
    );
}

export default Footer;
