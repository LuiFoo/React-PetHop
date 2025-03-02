import styled from 'styled-components';
import imagemUsu1 from '../../../../assets/usuarios/user1.png'
import imagemUsu2 from '../../../../assets/usuarios/user2.png'
import imagemUsu3 from '../../../../assets/usuarios/user3.png'
import imagemUsu4 from '../../../../assets/usuarios/user4.png'
import imagemUsu5 from '../../../../assets/usuarios/user5.png'
import imagemUsu6 from '../../../../assets/usuarios/user6.png'
import imagemUsu7 from '../../../../assets/usuarios/user7.png'
import imagemUsu8 from '../../../../assets/usuarios/user8.png'

interface Usuario {
    nome: string;
    endereco: string;
    detalhes: string;
    valor: number;
    src: string;
}

const usuarios: Usuario[] = [
    { nome: 'Roberta, 5.0 ☆', endereco: '5km - Jardim Botânico, Ribeirão Preto', detalhes: 'Veterinária de animais silvestres', valor: 60, src: imagemUsu1 },
    { nome: 'Roberta, 5.0 ☆', endereco: '5km - Jardim Botânico, Ribeirão Preto', detalhes: 'Veterinária de animais silvestres', valor: 60, src: imagemUsu2 },
    { nome: 'Roberta, 5.0 ☆', endereco: '5km - Jardim Botânico, Ribeirão Preto', detalhes: 'Veterinária de animais silvestres', valor: 60, src: imagemUsu3 },
    { nome: 'Roberta, 5.0 ☆', endereco: '5km - Jardim Botânico, Ribeirão Preto', detalhes: 'Veterinária de animais silvestres', valor: 60, src: imagemUsu4 },
    { nome: 'Roberta, 5.0 ☆', endereco: '5km - Jardim Botânico, Ribeirão Preto', detalhes: 'Veterinária de animais silvestres', valor: 60, src: imagemUsu5 },
    { nome: 'Roberta, 5.0 ☆', endereco: '5km - Jardim Botânico, Ribeirão Preto', detalhes: 'Veterinária de animais silvestres', valor: 60, src: imagemUsu6 },
    { nome: 'Roberta, 5.0 ☆', endereco: '5km - Jardim Botânico, Ribeirão Preto', detalhes: 'Veterinária de animais silvestres', valor: 60, src: imagemUsu7 },
    { nome: 'Roberta, 5.0 ☆', endereco: '5km - Jardim Botânico, Ribeirão Preto', detalhes: 'Veterinária de animais silvestres', valor: 60, src: imagemUsu8 },
];

const ListaUsuarios = styled.ul`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 4rem 5.5rem 2rem 5.5rem;
    gap: 1.5rem;
`

const ItemUsuario = styled.article`
    display: flex;
    align-items: center;
    gap: 1.5rem;
`

const SectionContainer = styled.section`
    display: flex;
    flex-direction: column;
    border-radius: 0.5rem;
    height: 100%;
    background-color:rgb(208, 207, 207);
    padding: 3rem 0 2rem 3rem;
    width: 100%;
`

const TituloLista = styled.h3`
    padding-bottom: 0.6rem;
    font-family: "Montserrat", sans-serif;
    font-weight: 700;
    font-size: 1.5rem;
    color: #2B7799;
`

const ParagrafoLista = styled.p`
    padding-bottom: 0.6rem;
    font-family: "Montserrat", sans-serif;
    font-weight: 500;
    font-size: 20px;
    color: #828282;
`

const ValorLista = styled.p`
    padding-top: 0.5rem;
    font-family: "Montserrat", sans-serif;
    font-weight: 800;
    font-size: 48px;
    color: #F64B4B;
`

function ItemsListaUsuarios() {
    return (
        <ListaUsuarios>
            {usuarios.map((item, index) => (
                <li key={index} >
                    <ItemUsuario>
                        <figure>
                            <img src={item.src} alt={`Imagem de ${item.nome}`} />
                        </figure>
                        <SectionContainer>
                            <TituloLista>{item.nome}</TituloLista>
                            <ParagrafoLista>{item.endereco}</ParagrafoLista>
                            <ParagrafoLista>{item.detalhes}</ParagrafoLista>
                            <ValorLista><strong>R${item.valor}</strong></ValorLista>
                        </SectionContainer>
                    </ItemUsuario>
                </li>
            ))}
        </ListaUsuarios>
    );
}

export default ItemsListaUsuarios;