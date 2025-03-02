import styled from 'styled-components';
import imagemHome from '../../../assets/imgHome.png';

const SectionBack = styled.img`
    width: 100%;
`

function SectionBackGround() {
    return (
        <section>
            <SectionBack src={imagemHome} alt='Imagem Background' />
        </section>
    )
}

export default SectionBackGround;