import { Link } from "react-router-dom";
import styled from "styled-components";

export const LinksStyledFooter = styled(Link)`
    font-family: "Montserrat", serif;
    font-optical-sizing: auto;
    font-weight: '500';
    font-size: '16px';
    text-decoration: none;
    color: #FEF2EC;

    &:hover {
        color:rgb(196, 232, 134); /* Altere para a cor desejada */
    }
`;

interface FooterLinkProps {
    texto: string;
    link: string;
}

function FooterLink({ texto, link}: FooterLinkProps) {
    return (
        <LinksStyledFooter to={link}>{texto}</LinksStyledFooter>
    );
}

export default FooterLink;