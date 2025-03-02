import styled from 'styled-components';
import imagemHome from '../../../assets/imgChameHop.png';
import ListaDetalhes from './ListaBusca';
import ListaDetalhesSec from './ListaBuscaSec';
import ListaUsuario from './ListaUsuario';
import Footer from '../../reutilizaveis/Footer';
import SectionComoFunciona from './SectionComoFunciona';

const SectionBack = styled.img`
    width: 100%;
`

function SectionBackGroundChame() {
    return (
        <section>
            <SectionBack src={imagemHome} alt='Imagem Background' />

            <ListaDetalhes />
            <ListaDetalhesSec />
            <ListaUsuario />

            <SectionComoFunciona />

            <Footer />

        </section>
    )
}

export default SectionBackGroundChame;